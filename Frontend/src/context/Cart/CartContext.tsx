import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(0);

function CartContextProvider({ children }) {
  const baseUrl = "http://localhost:3000/cart/";

  const [items, setItems] = useState([]);

  

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

  const fetchAllItems = async (uid) => {
    try {
      const response = await fetch(`http://localhost:3000/cart/${uid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const res = await response.json();
      setItems(res); // No need for `await` here
    } catch (error) {
      console.log(error);
    }

    // Logging items should be done within a useEffect or callback to ensure the state is updated.
    console.log(items);
  };

  return (
    <CartContext.Provider value={{ add_to_cart, items, fetchAllItems }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
