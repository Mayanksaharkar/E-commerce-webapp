import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/Product/ProductContextProvider";

import { ClipLoader } from "react-spinners";

import PaginateItem from "./PaginateItem";
import Pagination from "./Pagination";

function CategoryPage() {
  const { catProds, getByCategory, getFormattedString } =
    useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);

  const { category } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (catProds) setIsLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    getByCategory(category || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {getFormattedString(category || "")}
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
