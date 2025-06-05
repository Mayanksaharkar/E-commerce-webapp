import { useContext } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import { PaymentContext } from "../../../context/Payment/PaymentContext";
import url from "../../../context/url";
function CheckOut(props: { amount: number }) {
  const { items, removeAllItems } = useContext(CartContext);

  
  const {  handlePayment } = useContext(PaymentContext);

  

  return (
    <button
      className="bg-secondary-content font-semibold btn hover:text-secondary-content rounded-lg py-3 text-sm text-white uppercase w-full"
      disabled={items.length === 0}
      onClick={async (e) => {
        e.preventDefault();
        await handlePayment(removeAllItems,props.amount);
      }}
    >
      Checkout
    </button>
  );
}

export default CheckOut;
