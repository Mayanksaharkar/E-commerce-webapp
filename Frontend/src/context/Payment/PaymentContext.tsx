import { createContext, useContext } from "react";
import { AuthContext } from "../Auth/AuthContextProvider.tsx";
import url from "../url";
import {
  PaymentContextProviderProps,
  PaymentContextType,
} from "./typeInterfaces";
import { CartContext } from "../Cart/CartContext.tsx"; 


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
  const { currUser, getUserData } = useContext(AuthContext);
  const { items } = useContext(CartContext); // Get cart items
  


  const handlePayment = async (
    removeAllItems: (uid: string) => void,
    amount: number,
    shippingCost : number = 0 
  ) => {
   
    await getUserData(); // Refresh user data
    if (!currUser.address || currUser.address === "" || currUser.address === "undefined" || currUser.address === null) {
      console.error("User address is not set");
      alert("Please set your address before proceeding to payment.");
      return;
    }

    const currentCartItems = [...items];
    const uid = localStorage.getItem("uid");

    const res = await fetch(`${url}/payment/createOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        amount: amount,
        uid: uid,
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
      handler: async function (response: {
        razorpay_payment_id: string;
        [key: string]: any;
      }) {
        alert("Payment Successful");
        console.log("Payment response:", response);
        await AddPaymentData(response.razorpay_payment_id, "success", amount);

        const orderRes = await fetch(`${url}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            products: currentCartItems.map((item: any) => ({
              product_id: item.product._id,
              qty: item.qty,
            })),            customer_id: uid,
            total_price: amount,
            address: currUser?.address || "Default Address",
            transaction_id: response.razorpay_payment_id,
            delivery_status: "Pending",
            payment_status: "Paid",
            shipping_cost: shippingCost,
          }),
        });
        const orderData = await orderRes.json();
        console.log("Order created:", orderData);
        alert("Order placed successfully");

        removeAllItems(uid || "");
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

  const AddPaymentData = async (
    payment_id: string,
    payment_status: string,
    amount: number
  ) => {
    try {
      const res = await fetch(`${url}/payment/addPaymentData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },        body: JSON.stringify({
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
