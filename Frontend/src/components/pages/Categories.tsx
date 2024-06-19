import { useContext, useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { ProductContext } from "../../context/Product/ProductContextProvider";
import ProductCard from "./Product/ProductCard";
import { Product } from "../../Models/Product";

function Categories() {
  const { fetchProducts, getCategories, products, categories } =
    useContext(ProductContext);

  useEffect(() => {
    if (products === undefined) {
      fetchProducts();
      getCategories();
    }
  }, []);

  return (
    <div className='w-full mt-4'>
      {categories === undefined || products === undefined ? (
        <div className='w-full flex justify-center'>
          <ClipLoader color='#000000' />
        </div>
      ) : (
        <div className='flex flex-col w-full justify-start gap-4'>
          {categories.map((category: string, index) => (
            <div className='w-full flex-col justify-start' key={index}>
              <h3>{category}</h3>
              <div
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "transparent",
                  scrollSnapType: " x mandatory",
                }}
                className='w-full flex gap-1 max-w-full  overflow-y-hidden border rounded-md border-red px-2 py-2 snap-y snap-mandatory overflow-x-auto no-scrollbar'
              >
                {products
                  .filter((prod: Product) => prod.category === category)
                  .map((filteredProd: Product, prodIndex: React.Key) => (
                    <div key={prodIndex} style={{ scrollSnapAlign: "start" }}>
                      <ProductCard data={filteredProd} />
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
