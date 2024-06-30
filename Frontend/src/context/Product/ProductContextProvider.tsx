import { useEffect, useState } from "react";
import { createContext } from "react";
import url from "../url";

import {
  ProductContextProviderProps,
  ProductContextType,
} from "./typeInterfaces";
import { Product } from "../../Models/Product";

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

function ProductContextProvider({ children }: ProductContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  const [featuredProd, setFeaturedProd] = useState([] as Product[]);

  const [catProds, setCatProds] = useState([] as Product[]);

  const [categories, setCategories] = useState([] as string[]);
  const [currProduct, setCurrProduct] = useState<Product>({} as Product);

  const [searchInput, setSearchInput] = useState("");
  const [resultEle, setResultEle] = useState([] as Product[]);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const handleSearch = async () => {
    if (searchInput.trim() === "") {
      setResultEle([]);
    }

    const filteredProducts = products
      ? products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.category.toLowerCase().includes(searchInput.toLowerCase())
        )
      : [];

    setResultEle(filteredProducts);
  };

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch(`${url}/product/featuredproduct`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setFeaturedProd(data);
      // setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${url}/product`, {
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
      const response = await fetch(`${url}/categories`, {
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

  const getProdById = async (id: string) => {
    try {
      const response = await fetch(`${url}/product/${id}`, {
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
      const response = await fetch(`${url}/product/category/${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  const ProductContextValue: ProductContextType = {
    products: [],
    setProducts: setProducts,
    categories,
    setCategories,
    fetchProducts,
    getCategories,
    featuredProd,
    fetchFeaturedProducts,
    catProds,
    setCatProds,
    getFormattedString,
    getProdById,
    currProduct,
    searchInput,
    setSearchInput,
    handleSearch,
    resultEle,
    setFeaturedProd,
    setCurrProduct,
    setResultEle,
    getByCategory,
  };

  return (
    <ProductContext.Provider value={ProductContextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
