import { createContext, useState, useEffect, useContext } from "react";
import { CartItems } from "../../Models/Cart";
import { AuthContext } from "../Auth/AuthContext";
export const CartContext = createContext(0);

function CartContextProvider({ children }) {
  const { currUser } = useContext(AuthContext);

  const [orderId, setOrderId] = useState("");

  const getSessionId = async () => {
    try {
      const res = await fetch("http://localhost:3000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          amount: totalCost,
          uid: localStorage.getItem("uid"),
          uname: currUser.name,
          umobile: String(currUser.mobile_no),
          uemail: currUser.email,
        }),
      });

      if (res.data && res.data.payment_session_id) {
        console.log(res.data);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
        console.log(res.data.payment_session_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async () => {
    try {
      console.log(orderId);
      const res = await fetch("http://localhost:3000/payment/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          orderId: orderId,
        }),
      });

      if (res && res.data) {
        alert("payment verified");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // *************************

  const baseUrl = "http://localhost:3000/cart/";

  const [items, setItems] = useState<CartItems>([]);

  const [totalCost, setTotalCost] = useState(0);
  const [itemCost, setItemCost] = useState(0);

  useEffect(() => {
    let cost = 0;
    for (let i = 0; i < items.length; i++) {
      cost = cost + items[i].product.price * items[i].qty;
    }
    setItemCost(cost);
  }, [items]);

  const add_to_cart = async (userID: string, prodId: string, qty: number) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          user: {
            _id: userID,
          },
          productId: prodId,
          qty: qty,
        }),
      });
      const res = response.json;
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllItems = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/cart/${localStorage.getItem("uid")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const res = await response.json();
      setItems(res.cartItems || []);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          user: {
            _id: localStorage.getItem("uid"),
          },
        }),
      });
      const res = response.json();
      if (response.status === 200) {
        fetchAllItems();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateQty = async (qty: number, id: string) => {
    try {
      console.log(qty, id, localStorage.getItem("uid"));

      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          qty: qty,
          user: {
            _id: localStorage.getItem("uid"),
          },
        }),
      });
      const res = await response.json();
      if (response.status === 200) {
        await fetchAllItems();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        add_to_cart,
        items,
        fetchAllItems,
        totalCost,
        updateQty,
        removeItem,
        itemCost,
        setItemCost,
        verifyPayment,
        setTotalCost,
        getSessionId,
        orderId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
