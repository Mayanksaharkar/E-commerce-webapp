import { createContext, useContext } from "react";
import { AuthContext } from "../Auth/AuthContextProvider.tsx";
import url from "../url";
import {
  PaymentContextProviderProps,
  PaymentContextType,
} from "./typeInterfaces";

// Add Razorpay type declaration to the Window interface
declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentContext = createContext<PaymentContextType>(
  {} as PaymentContextType
);
function PaymentContextProvider({ children }: PaymentContextProviderProps) {
  const { currUser } = useContext(AuthContext);

  const handlePayment = async (
    removeAllItems: (uid: string) => void,
    amount: number
  ) => {
    const res = await fetch(`${url}/payment/createOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        amount: amount,
        uid: localStorage.getItem("uid"),
      }),
    });
    const order = await res.json();
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "Your Company",
      description: "Test Transaction",
      order_id: order.id,
      handler: function (response: { razorpay_payment_id: string; [key: string]: any }) {
        alert("Payment Successful");
        removeAllItems(localStorage.getItem("uid") || "");
        AddPaymentData(response.razorpay_payment_id, "success", amount);
        // console.log(response);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Test Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const AddPaymentData = async (payment_id: string, payment_status: string ,amount : number) => {
    // console.log(currUser); 
    try {
      const res = await fetch(`${url}/payment/addPaymentData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          payment_id,
          payment_status,
          amount: amount,
          user: currUser,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add payment data");
      }

      const data = await res.json();
      console.log("Payment data added successfully:", data);
    } catch (error) {
      console.error("Error adding payment data:", error);
    }
  };

  

  const PaymentContextValue = {
    AddPaymentData,
    handlePayment,
  };

  return (
    <PaymentContext.Provider value={PaymentContextValue}>
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContextProvider;
