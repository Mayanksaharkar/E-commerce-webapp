import { Product } from "../../Models/Product";
import ProductContext from "./ProductContext";
function ProductContextProvider({ children }) {
  const fetchAll = () => {
    const response = fetch("http://localhost:3000/product/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <ProductContext.Provider value={{ fetchAll }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
