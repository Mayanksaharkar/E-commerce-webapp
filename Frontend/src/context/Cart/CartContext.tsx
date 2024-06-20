import { createContext } from "react";

export const CartContext = createContext(0);

function CartContextProvider({ children }) {
  const add_to_cart = async (userID: string, prodId: string, qty: number) => {
    try {
      const response = await fetch("http://localhost:3000/cart/", {
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
      const res = await response.json;
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider value={{ add_to_cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
