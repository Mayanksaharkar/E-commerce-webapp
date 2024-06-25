import { Key, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/Product/ProductContextProvider";
import ProductCard from "./Product/ProductCard";
import { Product, Products } from "../../Models/Product";
import { ClipLoader } from "react-spinners";

function CategoryPage() {
  const { catProds, getByCategory } = useContext(ProductContext);
  const [prods, setProds] = useState<Products>([]);
  const { category } = useParams();

  useEffect(() => {
    getByCategory(category);
  }, []);

  return (
    <>
      <div>
        {!catProds ? (
          <div>
            <ClipLoader color='#333C4D' />
          </div>
        ) : (
          <div>
            {catProds
              .filter((prod: Product) => prod.category === category)
              .map((prod: Product, index: Key) => (
                <div key={index}>
                  <ProductCard product={prod} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryPage;
