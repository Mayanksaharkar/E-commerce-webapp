import { Key, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/Product/ProductContextProvider";
import ProductCard from "./Product/ProductCard";
import { Product, Products } from "../../Models/Product";
import { ClipLoader } from "react-spinners";
import { product } from "../../Models/Cart";
import PaginateItem from "./PaginateItem";
import Pagination from "./Pagination";

function CategoryPage() {
  const { catProds, getByCategory, getFormattedString } =
    useContext(ProductContext);
  const [prods, setProds] = useState<Products>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { category } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (catProds) setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  useEffect(() => {
    getByCategory(category);
  }, []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const itemsPerPage = 20;

  const currentProducts = catProds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className='w-full flex justify-center items-center'>
        {isLoading ? (
          <div>
            <ClipLoader color='#333C4D' />
          </div>
        ) : (
          <div>
            <div className='flex-col w-full justify-center text-center py-10 text-secondary font-serif bg-base-200 rounded-lg my-2'>
              <h3 className='lg:text-3xl text-xl'>
                Explore the Latest and Greatest in{" "}
                {getFormattedString(category)}
              </h3>
              <p className='lg:text-lg text-sm'>
                Discover Top Brands, Compare Prices, and Find the Perfect One
                for You
              </p>
            </div>
            <PaginateItem catProds={currentProducts} />

            <div className=''>
              <Pagination
                catProds={catProds}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryPage;
