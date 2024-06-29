import { createContext, useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { AuthContext } from "../Auth/AuthContext";
export const PaymentContext = createContext(0);
function PaymentContextProvider({ children }) {
  const { totalCost } = useContext(CartContext);
  const { currUser } = useContext(AuthContext);
  const makePayment = async () => {
    const response = await fetch("http://localhost:3000/payment", {
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
      const response = await fetch(
        `http://localhost:3000/payment/${payment_id}`,
        {
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
        }
      );
      const res = await response.json();

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PaymentContext.Provider value={{ makePayment, AddPaymentData }}>
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContextProvider;
