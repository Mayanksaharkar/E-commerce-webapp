import { useContext, useEffect } from "react";
import { CartContext } from "../../context/Cart/CartContext";
import { CartItem, product } from "../../Models/Cart";
import { Link } from "react-router-dom";
function Cart() {
  const { fetchAllItems, items } = useContext(CartContext);
  useEffect(() => {
    fetchAllItems();
  }, []);

  return (
    <>
      <div className='container mx-auto '>
        <div className='flex shadow-md my-10'>
          <div className='w-3/4 bg-white px-10 py-10'>
            <div className='flex justify-between border-b pb-8'>
              <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
              <h2 className='font-semibold text-2xl'>Items : {items.length}</h2>
            </div>
            <div className='flex mt-10 mb-5'>
              <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
                Product Details
              </h3>
              <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
                Quantity
              </h3>
              <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
                Price
              </h3>
              <h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>
                Total
              </h3>
            </div>
            {items.map((item, index) => (
              <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
                <div className='flex '>
                  <div className='min-w-20'>
                    <img
                      className='h-20 max-w-48 object-cover'
                      src={item.product.cover_img}
                      alt='Product Image'
                    />
                  </div>
                  <div className='flex flex-col justify-between ml-4 flex-grow'>
                    <span className='font-bold text-sm line-clamp-3'>
                      {item.product.title}
                    </span>
                    <a
                      href='#'
                      className='font-semibold hover:text-red-500 text-gray-500 text-xs'
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className='flex justify-center w-1/5'>
                  <svg
                    className='fill-current text-gray-600 w-3'
                    viewBox='0 0 448 512'
                  >
                    <path d='M416 208H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32s-14.33-32-32-32z' />
                  </svg>
                  <input
                    className='mx-2 border text-center w-8'
                    type='text'
                    value='1'
                  />
                  <svg
                    className='fill-current text-gray-600 w-3'
                    viewBox='0 0 448 512'
                  >
                    <path d='M416 208H256V48c0-26.51-21.49-48-48-48s-48 21.49-48 48v160H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h128v160c0 26.51 21.49 48 48 48s48-21.49 48-48V272h160c17.67 0 32-14.33 32-32s-14.33-32-32-32z' />
                  </svg>
                </div>
                <span className='text-center w-1/5 font-semibold text-sm'>
                  {item.product.price}
                </span>
                <span className='text-center w-1/5 font-semibold text-sm'>
                  {item.product.price * item.qty}
                </span>
              </div>
            ))}

            <Link
              to={"/"}
              className='flex font-semibold text-indigo-600 text-sm mt-10'
            >
              <svg
                className='fill-current mr-2 text-indigo-600 w-4'
                viewBox='0 0 448 512'
              >
                <path d='M134.059 296H48c-26.51 0-48-21.49-48-48s21.49-48 48-48h86.059C142.228 129.469 216.616 64 304 64 382.08 64 448 129.92 448 208s-65.92 144-144 144c-87.384 0-161.772-65.469-169.941-144z' />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id='summary' className='w-1/4 px-8 py-10'>
            <h1 className='font-semibold text-2xl border-b pb-8'>
              Order Summary
            </h1>
            <div className='flex justify-between mt-10 mb-5'>
              <span className='font-semibold text-sm uppercase'>
                Items {items.length}
              </span>
              <span className='font-semibold text-sm'>{"total"}</span>
            </div>
            <div>
              <label className='font-medium inline-block mb-3 text-sm uppercase'>
                Shipping
              </label>
              <select className='block p-2 text-gray-600 w-full text-sm'>
                <option>Standard shipping - ₹199</option>
                <option>Express shipping - ₹299.00</option>
              </select>
            </div>

            <button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>
              Apply
            </button>
            <div className='border-t mt-8'>
              <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                <span>Total cost</span>
                <span>₹600</span>
              </div>
              <button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
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
