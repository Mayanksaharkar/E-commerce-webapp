import { createContext, useState, useEffect } from "react";
import { CartItems } from "../../Models/Cart";

export const CartContext = createContext(0);

function CartContextProvider({ children }) {
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
      console.log(res.cartItems);
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

  useEffect(() => {
    console.log(items);
  }, [items]);

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

        setTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
