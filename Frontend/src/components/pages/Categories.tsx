import { Product } from "../../Models/Product";
import ProductContext from "../../context/Product/ProductContext";
import { useContext } from "react";
import ProductCard from "./Product/ProductCard";
function Categories() {
  const { products: Products, categories } = useContext(ProductContext);

  return (
    <div className='bg-white'>
      {categories.map((category: string) => (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            {category}
          </h2>

          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products
              .filter((product) => product.category === category)
              .map((product, index) => (
                <div className='relative' key={index}>
                  <ProductCard data={product} />
                </div>
              ))}

            {/* {<!-- More products... -->} */}
          </div>
        </div>
      ))}
    </div>

    // <button>Click me</button>
  );
}

export default Categories;
