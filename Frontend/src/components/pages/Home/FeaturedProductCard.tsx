import { useContext } from "react";
import { CartContext } from "../../../context/Cart/CartContext";
import { toast } from "react-toastify";
import { Product } from "../../../Models/Product";
import { useNavigate } from "react-router-dom";

function FeaturedProductCard(props: { product: Product }) {
  const { product } = props;
  const { add_to_cart, fetchAllItems } = useContext(CartContext);
  const nav = useNavigate();
  return (
    <div className='pt-3 col-span-1 flex-row justify-center items-center text-center rounded-2xl bg-base-100'>
      <div className='w-full max-h-56 justify-center flex px-4'>
        <img
          src={product?.cover_img}
          alt='Product Image'
          className='object-contain h-52 mix-blend-multiply'
        />
      </div>
      <div className='font-semibold font-sans  flex-row px-4 py-2'>
        <p className='line-clamp-1 text-lg my-3  overflow-hidden cursor-pointer' onClick={(e)=>{
          e.preventDefault();
          nav(`/product/${product?._id}`);
        }}>
          {product?.title}
        </p>
        <p className='py-1 lg:text-3xl text-xl'>
          ₹ {product?.price?.toLocaleString()}
        </p>
      </div>
      <div>
        <button
          className='btn w-full rounded-t-none text-lg'
          onClick={async (e) => {
            e.preventDefault();

            const res = await add_to_cart(
              localStorage.getItem("uid") || "",
              product?._id,
              1
            );
            if (res === 200) {
              toast.success("Item has been added to Cart!");
            }else if(res === 401){
              toast.info("Please Login to First!");
            } else {
              toast.error("Somthing Went Wrong");
            }
            await fetchAllItems();
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
