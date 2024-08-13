import { ReactNode } from "react";
import { Product } from "../../Models/Product";

export interface ProductContextProviderProps {
  children: ReactNode;
}

export interface ProductContextType {

  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  featuredProd: Product[];
  setFeaturedProd: React.Dispatch<React.SetStateAction<Product[]>>;
  catProds: Product[];
  setCatProds: React.Dispatch<React.SetStateAction<Product[]>>;
  currProduct: Product;
  setCurrProduct: React.Dispatch<React.SetStateAction<Product>>;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  resultEle: Product[];
  setResultEle: React.Dispatch<React.SetStateAction<Product[]>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;

  handleSearch: () => Promise<void>;
  getFormattedString: (str: string) => string;
  getByCategory: (category: string) => void;
  getProdById: (id: string) => void;
  getCategories: () => Promise<void>;
  fetchProducts: () => Promise<void>;
  fetchFeaturedProducts: () => Promise<void>;
}
