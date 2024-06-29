import { useContext, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { ProductContext } from "../../context/Product/ProductContextProvider";
import ProductCard from "./Product/ProductCard";
import { Product } from "../../Models/Product";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";

function Categories() {
  const {
    fetchProducts,
    getCategories,
    products,
    categories,
    getFormattedString,
  } = useContext(ProductContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-full mt-4 '>
      {categories === undefined || products === undefined ? (
        <div className='w-full flex justify-center'>
          <ClipLoader color='#000000' />
        </div>
      ) : (
        <div className='flex flex-col-reverse w-full justify-start gap-4'>
          {categories.map((category: string, index: React.Key) => (
            <div className='w-full flex-col justify-start' key={index}>
              <div className=' w-full flex justify-between mt-4'>
                <h3 className='text-3xl text-secondary'>
                  {getFormattedString(category)}
                </h3>
                <button
                  className='btn-ghost btn text-secondary '
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/categories/${category}`);
                  }}
                >
                  View All
                  <FaArrowRightLong />
                </button>
              </div>

              <div
                style={{
                  scrollbarWidth: "thin",

                  scrollSnapType: " x mandatory",
                }}
                className='w-full flex gap-5 max-w-full  overflow-y-hidden border rounded-md border-red px-2 py-2 snap-y snap-mandatory overflow-x no-scrollbar'
              >
                {products
                  .filter((prod: Product) => prod.category === category)
                  .map((filteredProd: Product, prodIndex: React.Key) => (
                    <div key={prodIndex} style={{ scrollSnapAlign: "start" }}>
                      <ProductCard product={filteredProd} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
