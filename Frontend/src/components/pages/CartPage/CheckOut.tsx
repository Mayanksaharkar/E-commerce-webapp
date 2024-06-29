import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import { PaymentContext } from "../../../context/Payment/PaymentContext";

function CheckOut() {
  const { items, currCartId, totalCost, removeAllItems } =
    useContext(CartContext);

  const { makePayment } = useContext(PaymentContext);

  const handlePayment = async () => {
    try {
      const link = await makePayment();
      console.log(link);
      await removeAllItems(localStorage.getItem("uid"));
      await window.open(link, "_self");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className='bg-secondary-content font-semibold btn hover:text-secondary-content rounded-lg py-3 text-sm text-white uppercase w-full'
      disabled={items.length === 0}
      onClick={(e) => {
        e.preventDefault();
        handlePayment();
      }}
    >
      Checkout
    </button>
  );
}

export default CheckOut;
