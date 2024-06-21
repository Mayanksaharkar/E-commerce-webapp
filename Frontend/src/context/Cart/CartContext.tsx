import { createContext, useState, useEffect } from "react";
import { CartItems } from "../../Models/Cart";

export const CartContext = createContext(0);

function CartContextProvider({ children }) {
  const baseUrl = "http://localhost:3000/cart/";

  const [items, setItems] = useState<CartItems>([]);

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

  const removeItem = async () => {
    try {
      const res = fetch("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <CartContext.Provider value={{ add_to_cart, items, fetchAllItems }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
