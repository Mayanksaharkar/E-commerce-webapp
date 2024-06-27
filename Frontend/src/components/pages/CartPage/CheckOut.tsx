import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import { AuthContext } from "../../../context/Auth/AuthContext";

function CheckOut() {
  const { items, currCartId, totalCost } = useContext(CartContext);

  const { currUser } = useContext(AuthContext);

  const handlePayment = async () => {
    try {
      console.log(currUser.name);
      console.log(currUser.mobile_no);
      console.log(totalCost);

      const response = fetch("http://localhost:3000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          orderId: currCartId,
          orderAmount: totalCost.toString(),
          orderNote: "dw",
          customerName: currUser.name,
          customerPhone: currUser.mobile_no.toString(),
          customerEmail: currUser.email,
        }),
      });
      const res = (await response).json();
      console.log(res);
      window.location.href = await res.paymentLink;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className='bg-secondary-content font-semibold btn hover:text-secondary-content rounded-lg py-3 text-sm text-white uppercase w-full'
      disabled={items.length === 0}
      onClick={handlePayment}
    >
      Checkout
    </button>
  );
}

export default CheckOut;
