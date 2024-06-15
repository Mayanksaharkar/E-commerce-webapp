import { useState, useEffect } from "react";
import { Products } from "../../Models/Product";
import ProductContext from "./ProductContext";
function ProductContextProvider({ children }) {
  const [products, setProducts] = useState<Products>();
  const [categories, setCategories] = useState([]);

  const base_url = "http://localhost:3000/product/";

  useEffect(() => {
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
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Error getting Categories:", error);
      }
    };

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
