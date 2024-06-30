/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, useState, useEffect } from "react";
import { CartItem } from "../../Models/Cart";
import { CartContextProviderProps, CartContextType } from "./typeInterfaces";
import url from "../url";

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const [totalCost, setTotalCost] = useState(0);
  const [itemCost, setItemCost] = useState(0);

  const [currCartId, setCurrCartId] = useState("");

  useEffect(() => {
    fetchAllItems().then();
  }, []);

  useEffect(() => {
    let cost = 0;
    for (let i = 0; i < items.length; i++) {
      cost = cost + items[i].product.price * items[i].qty;
    }
    setItemCost(cost);
  }, [items]);

  const add_to_cart = async (userID: string, prodId: string, qty: number) => {
    try {
      const response = await fetch(`${url}/cart`, {
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

      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllItems = async () => {
    try {
      const response = await fetch(
        `${url}/cart/${localStorage.getItem("uid")}`,
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
      setCurrCartId(res._id);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      const response = await fetch(`${url}/cart/${itemId}`, {
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
      if (response.status === 200) {
        await fetchAllItems();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateQty = async (qty: number, id: string) => {
    try {
      console.log(qty, id, localStorage.getItem("uid"));

      const response = await fetch(`${url}/cart/${id}`, {
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
      if (response.status === 200) {
        await fetchAllItems();
        return response.status;
      }
    } catch (error) {
      console.log(error);
      return 500;
    }
  };

  const removeAllItems = async (userId: string) => {
    try {
      console.log(userId);
      const response = fetch("http://localhost:3000/cart/removeItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          userId: userId,
        }),
      });
      const res = (await response).json();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  const cartContextValue: CartContextType = {
    items: items,
    totalCost: totalCost,
    setTotalCost: setTotalCost,
    itemCost: itemCost,
    setItemCost: setItemCost,
    currCartId: currCartId,
    setCurrCartId: setCurrCartId,
    fetchAllItems: fetchAllItems,
    add_to_cart,
    removeAllItems: removeAllItems,
    removeItem,
    updateQty,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
