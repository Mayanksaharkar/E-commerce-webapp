import { useState } from "react";
import { Products } from "../../Models/Product";

import { createContext } from "react";
export const ProductContext = createContext(0);

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState<Products>();
  const [categories, setCategories] = useState([]);

  const base_url = "http://localhost:3000/product/";
  const fetchProducts = async () => {
    try {
      const response = await fetch(base_url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data);
      // setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const getCategories = async () => {
    try {
      const response = await fetch(`${base_url}categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setCategories(data);
      // setIsLoading(false);
    } catch (error) {
      console.error("Error getting Categories:", error);
    }
  };

  const getByCategory = async (category: string) => {
    const result = products?.filter((prod) => prod.category === category);
    return result;
  };

  return (
    <ProductContext.Provider
      value={{
        getByCategory,
        products,
        setProducts,
        categories,
        setCategories,
        fetchProducts,
        getCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
