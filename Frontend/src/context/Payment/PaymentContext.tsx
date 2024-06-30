import { createContext, useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { AuthContext } from "../../context/Auth/AuthContextProvider";
import url from "../url";
import {
  PaymentContextProviderProps,
  PaymentContextType,
} from "./typeInterfaces";

export const PaymentContext = createContext<PaymentContextType>(
  {} as PaymentContextType
);
function PaymentContextProvider({ children }: PaymentContextProviderProps) {
  const { totalCost } = useContext(CartContext);
  const { currUser } = useContext(AuthContext);

  const makePayment = async () => {
    const response = await fetch(`${url}/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        amt: totalCost,
        phone: currUser.mobile_no,
        email: currUser.email,
        name: currUser.name,
      }),
    });
    const res = await response.json();
    console.log(res);
    return res;
  };

  const AddPaymentData = async (payment_id: string, payment_status: string) => {
    try {
      const response = await fetch(`${url}/${payment_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          payment_id,
          payment_status,
          uid: localStorage.getItem("uid"),
        }),
      });
      const res = await response.json();

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const PaymentContextValue = {
    makePayment,
    AddPaymentData,
  };

  return (
    <PaymentContext.Provider value={PaymentContextValue}>
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContextProvider;
