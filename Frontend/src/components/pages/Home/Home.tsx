/* eslint-disable no-useless-escape */
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/Product/ProductContextProvider";
import FeaturedProductCard from "./FeaturedProductCard";
import FeaturedProductCardSkeleton from "./FeaturedProductCardSkeleton";
import { Product } from "../../../Models/Product";
import { IoIosLaptop } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiTelevisionSimple } from "react-icons/pi";

import { useNavigate } from "react-router-dom";

function Home() {
  const { featuredProd, fetchFeaturedProducts, fetchProducts, products } =
    useContext(ProductContext);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (featuredProd === undefined || featuredProd.length === 0) {
        await fetchFeaturedProducts();
      }
      if (products === undefined || products.length === 0) {
        await fetchProducts();
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="w-full my-3  bg-black relative rounded-xl">
          <img
            src="HomePageImg.jpeg"
            className="rounded-xl opacity-65 max-h-[40rem] h-[50vh] w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="lg:text-4xl text-2xl font-bold">GADA ELECTRONICS</p>
            <p className="lg:text-2xl text-lg">Kaun Hain Bey !</p>
          </div>
        </div>

        <div className="flex-col w-full justify-center text-center py-10 text-secondary font-serif bg-base-200 rounded-lg my-2">
          <div>
            <p className="lg:text-4xl text-lg ">Featured Products</p>
            <p className="lg:text-lg text-sm">
              Discover the latest and greatest electronic devices in our
              featured collection.
            </p>
          </div>
        </div>        <div>
          {featuredProd !== undefined && featuredProd.length > 0 ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 lg:gap-10 p-4 h-min">
              {featuredProd.map((prod: Product, index: React.Key) => (
                <FeaturedProductCard product={prod} key={index} />
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 lg:gap-10 p-4 h-min">
              {Array.from({ length: 4 }).map((_, index) => (
                <FeaturedProductCardSkeleton key={index} />
              ))}
            </div>
          )}
        </div>
        <div className="flex-col w-full justify-center text-center py-10 text-secondary font-serif bg-base-200 rounded-lg ">
          <div>
            <p className="lg:text-4xl text-lg ">Shop By Category</p>
            <p className="lg:text-lg text-sm ">
              Browse our wide selection of electronic categories to find the
              perfect device for your needs.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-base-200 mb-3">
          <div className="flex w-[60%]  justify-evenly items-center p-4 h-min text-slate-500">
            <IoIosLaptop
              size={80}
              className="cursor-pointer hover:text-secondary px-4 py-2 rounded-lg"
              onClick={() => {
                navigate("/categories/laptops");
              }}
            />
            <CiMobile3
              size={80}
              className="cursor-pointer hover:text-secondary px-4 py-2 rounded-lg"
              onClick={() => {
                navigate("/categories/mobiles");
              }}
            />
            <HiOutlineComputerDesktop
              size={80}
              className="cursor-pointer hover:text-secondary px-4 py-2 rounded-lg"
              onClick={() => {
                navigate("/categories/computerPeripherals");
              }}
            />
            <PiTelevisionSimple
              size={80}
              className="cursor-pointer hover:text-secondary px-4 py-2 rounded-lg"
              onClick={() => {
                navigate("/categories/homeAppliances");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
