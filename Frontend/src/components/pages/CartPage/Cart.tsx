import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { disabled } from "@material-tailwind/react/types/components/accordion";

function Cart() {
  const {
    fetchAllItems,
    items,
    itemCost,
    totalCost,
    removeItem,
    setTotalCost,
  } = useContext(CartContext);

  useEffect(() => {
    fetchAllItems();
    setTotalCost(shippingCost + itemCost);
  }, [fetchAllItems]);

  const [currItemId, setCurrItemId] = useState(null);
  const [currItemQty, setCurrItemQty] = useState(null);
  const [shippingCost, setShippingCost] = useState(199);

  const navigate = useNavigate();

  const handleModalOpen = async (itemId, itemQty) => {
    await setCurrItemId((prevItemId) => itemId);
    await setCurrItemQty((prevItemQty) => itemQty);
    document.getElementById("my_modal_3").showModal();
  };

  const handleShippingChange = (e) => {
    setShippingCost(parseInt(e.target.value));
  };

  return (
    <>
      {currItemId && currItemQty !== null && (
        <Modal
          currItemQty={currItemQty}
          currItemId={currItemId}
          setCurrItemQty={setCurrItemQty}
        />
      )}

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row shadow-md my-10'>
          <div className='w-full lg:w-3/4 bg-white px-6 sm:px-10 py-6 sm:py-10'>
            <div className='flex justify-between border-b pb-8'>
              <h1 className='font-semibold text-xl sm:text-2xl'>
                Shopping Cart
              </h1>
              <h2 className='font-semibold text-xl sm:text-2xl'>
                Items: {items.length}
              </h2>
            </div>
            <div className='hidden sm:flex mt-10 mb-5'>
              <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
                Product Details
              </h3>
              <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
                Quantity
              </h3>
              <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
                Price
              </h3>
              <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5'>
                Total
              </h3>
            </div>
            {items.map((item, index) => (
              <div
                key={index}
                className='flex flex-col sm:flex-row items-center hover:bg-gray-100 -mx-4 sm:-mx-8 px-4 sm:px-6 py-5'
              >
                <div className='flex w-full sm:w-2/5'>
                  <div className='min-w-20'>
                    <img
                      className='h-20 object-contain'
                      src={item.product?.cover_img}
                      alt='Product Image'
                    />
                  </div>
                  <div className='flex flex-col justify-between ml-4 flex-grow'>
                    <span
                      className='font-bold text-sm line-clamp-3 cursor-pointer hover:underline'
                      onClick={() => {
                        navigate(`/product/${item.product._id}`);
                      }}
                    >
                      {item.product?.title}
                    </span>
                    <button
                      onClick={() => removeItem(item._id)}
                      className='font-semibold hover:text-red-500 text-gray-500 text-xs'
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className='flex justify-center items-center w-full sm:w-1/5 mt-4 sm:mt-0'>
                  <span className='text-center w-8'>{item.qty}</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 50 50'
                    width='16px'
                    height='16px'
                    className='cursor-pointer'
                    onClick={() => handleModalOpen(item._id, item.qty)}
                  >
                    <path d='M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z' />
                  </svg>
                </div>
                <span className='text-center w-full sm:w-1/5 font-semibold text-sm mt-2 sm:mt-0'>
                  ₹ {item.product?.price}
                </span>
                <span className='text-center w-full sm:w-1/5 font-semibold text-sm mt-2 sm:mt-0'>
                  ₹ {item.product.price * item.qty}
                </span>
              </div>
            ))}
            <Link
              to='/'
              className='flex font-semibold text-indigo-600 text-sm mt-10'
            >
              <svg
                className='fill-current mr-2 text-indigo-600 w-4'
                viewBox='0 0 448 512'
              >
                <path d='M134.059 296H48c-26.51 0-48-21.49-48-48s21.49-48 48-48h86.059C142.228 129.469 216.616 64 304 64c78.08 0 144 65.92 144 144s-65.92 144-144 144c-87.384 0-161.772-65.469-169.941-144z' />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div
            id='summary'
            className='w-full lg:w-1/4 px-6 sm:px-8 py-6 sm:py-10'
          >
            <h1 className='font-semibold text-xl sm:text-2xl border-b pb-8'>
              Order Summary
            </h1>
            <div className='flex justify-between mt-10 mb-5'>
              <span className='font-semibold text-sm uppercase'>
                Items {items.length}
              </span>
              <span className='font-semibold text-sm'>₹ {itemCost}</span>
            </div>
            <div>
              <label className='font-medium inline-block mb-3 text-sm uppercase'>
                Shipping
              </label>
              <select
                className='block p-2 text-gray-600 w-full text-sm'
                onChange={handleShippingChange}
              >
                <option value={199}>Standard shipping - ₹199</option>
                <option value={299}>Express shipping - ₹299.00</option>
              </select>
            </div>

            <div className='border-t mt-8'>
              <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                <span>Total cost</span>
                <span>₹ {totalCost}</span>
              </div>
              <button
                className='bg-secondary-content font-semibold btn hover:text-secondary-content rounded-lg py-3 text-sm text-white uppercase w-full'
                disabled={items.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
