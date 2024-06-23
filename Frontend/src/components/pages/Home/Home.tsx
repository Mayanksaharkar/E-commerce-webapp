import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/Product/ProductContextProvider";
import FeaturedProductCard from "./FeaturedProductCard";
import { Product } from "../../../Models/Product";
import { ClipLoader } from "react-spinners";

function Home() {
  const { featuredProd, fetchFeaturedProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchFeaturedProducts();
    console.log(featuredProd);
  }, []);

  return (
    <>
      <div>
        <div className='w-full my-3  bg-black relative rounded-xl'>
          <img
            src='HomePageImg.jpeg'
            className='rounded-xl opacity-65 max-h-[40rem] w-full object-cover'
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
            <p className='lg:text-4xl text-2xl font-bold'>GADA ELECTRONICS</p>
            <p className='lg:text-2xl text-lg'>Kaun Hain Bey !</p>
          </div>
        </div>

        <div className='flex-col w-full justify-center text-center py-10 text-secondary-content font-serif bg-base-200 rounded-lg my-2'>
          <div>
            <p className='lg:text-4xl text-lg '>Featured Products</p>
            <p className='lg:text-lg text-sm'>
              Discover the latest and greatest electronic devices in our
              featured collection.
            </p>
          </div>
        </div>
        {featuredProd !== undefined ? (
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-rows-4 lg:gap-10 p-4 h-min'>
            {featuredProd.map((prod, index) => (
              <FeaturedProductCard product={prod} />
            ))}
          </div>
        ) : (
          <ClipLoader color='#000000' />
        )}
      </div>
    </>
  );
}

export default Home;
