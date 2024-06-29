import React from "react";
import ProductCard from "./Product/ProductCard";
import { Product } from "../../Models/Product";
function PaginateItem({ catProds }) {
  return (
    <div className='flex flex-row h-full flex-wrap justify-around gap-3'>
      {catProds.map((prod: Product, index: Key) => (
        <div key={index}>
          <ProductCard product={prod} />
        </div>
      ))}
    </div>
  );
}

export default PaginateItem;
