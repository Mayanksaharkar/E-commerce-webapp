import { CartItems } from "../../Models/Cart";
import { ReactNode } from "react";

export interface CartContextProviderProps {
  children: ReactNode;
}

export interface CartContextType {
  items: CartItems;

  totalCost: number;
  setTotalCost: React.Dispatch<React.SetStateAction<number>>;
  itemCost: number;
  setItemCost: React.Dispatch<React.SetStateAction<number>>;
  currCartId: string;
  setCurrCartId: React.Dispatch<React.SetStateAction<string>>;
  add_to_cart: (
    userID: string,
    prodId: string,
    qty: number
  ) => Promise<number | undefined>;
  removeItem: (itemId: string) => void;
  updateQty: (qty: number, id: string) => Promise<number | undefined>;
  removeAllItems: (userId: string) => void;
  fetchAllItems: () => void;
}
