import { useContext, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { ProductContext } from "../../context/Product/ProductContextProvider";

import { useNavigate } from "react-router-dom";

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
    console.log(products);
    if (products === undefined || products.length ===0) { 
       fetchProducts(); }
    
    if (categories === undefined || categories.length === 0) { 

      getCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full mt-4 ">
      {categories === undefined || products === undefined ? (
        <div className="w-full flex justify-center">
          <ClipLoader color="#000000" />
        </div>
      ) : (
        <div className="flex flex-col-reverse w-full justify-start gap-4">
          {categories.map((category: string, index: React.Key) => (
            <div
              className="w-full flex-col justify-start cursor-pointer"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/categories/${category}`);
              }}
            >
              <div className=" w-full flex justify-between mt-4">
                <h3 className="text-3xl text-secondary">
                  {getFormattedString(category)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
