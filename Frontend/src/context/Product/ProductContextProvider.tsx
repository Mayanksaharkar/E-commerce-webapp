import { useEffect, useState } from "react";
import { createContext } from "react";
export const ProductContext = createContext(0);

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState();
  const [featuredProd, setFeaturedProd] = useState();

  const [catProds, setCatProds] = useState([]);

  const [categories, setCategories] = useState([]);
  const [currProduct, setCurrProduct] = useState();

  const [searchInput, setSearchInput] = useState("");
  const [resultEle, setResultEle] = useState([]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const handleSearch = async () => {
    if (searchInput.trim() === "") {
      setResultEle([]);
    }

    const filteredProducts = products?.filter(
      (product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.category.toLowerCase().includes(searchInput.toLowerCase())
    );

    setResultEle(filteredProducts);
  };

  const base_url = "http://localhost:3000/product/";
  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/product/featuredproduct",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      setFeaturedProd(data);
      // setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
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
    } catch (error) {
      console.error("Error getting Categories:", error);
    }
  };

  const getProdById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();

      setCurrProduct(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getByCategory = async (category: string) => {
    // const result = products?.filter((prod) => prod.category === category);
    // return result;
    try {
      const response = await fetch(
        `http://localhost:3000/product/category/${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const res = await response.json();
        setCatProds(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function getFormattedString(str: string) {
    const parts = str.split(/(?=[A-Z])/);
    const capitalizedParts = parts.map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    );
    const result = capitalizedParts.join(" ");
    return result;
  }

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
        getProdById,
        currProduct,
        searchInput,
        setSearchInput,
        handleSearch,
        resultEle,
        setResultEle,
        featuredProd,
        fetchFeaturedProducts,
        catProds,
        setCatProds,
        getFormattedString,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
