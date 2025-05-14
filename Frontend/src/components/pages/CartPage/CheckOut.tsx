import { useContext } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import { PaymentContext } from "../../../context/Payment/PaymentContext";

function CheckOut() {
  const { items, removeAllItems } = useContext(CartContext);

  const { makePayment } = useContext(PaymentContext);

  const handlePayment = async () => {
    try {
      const link = await makePayment();
      // console.log("link": makePayment());
      console.log("Link" ,link);

      const uid = localStorage.getItem("uid") || "";
      removeAllItems(uid);

      // window.open(link, "_self");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className='bg-secondary-content font-semibold btn hover:text-secondary-content rounded-lg py-3 text-sm text-white uppercase w-full'
      disabled={items.length === 0}
      onClick={async (e) => {
        e.preventDefault();
        await handlePayment();
      }}
    >
      Checkout
    </button>
  );
}

export default CheckOut;
