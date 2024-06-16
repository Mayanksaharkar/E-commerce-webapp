import { ReactNode } from "react";

import { useState, useEffect } from "react";
import { Products } from "../../Models/Product";
import ProductContext from "./ProductContext";

interface ComponentProps {
  children: ReactNode;
  // add other props here if needed
}

function ProductContextProvider({ children }: ComponentProps) {
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
      await setProducts(data);
      console.log(products);
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

      await setCategories(data);
    } catch (error) {
      console.error("Error getting Categories:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
    getCategories();
  }, []);

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
