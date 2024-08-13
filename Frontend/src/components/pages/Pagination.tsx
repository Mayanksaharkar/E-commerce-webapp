import { Product } from "../../Models/Product";
const Pagination = ({
  catProds,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setIsLoading,

}: {
  catProds: Product[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setIsLoading: (loading: boolean) => void;
 
}) => {
  const handleNextPage = () => {

    setIsLoading(true);
    if (currentPage < Math.ceil(catProds.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handlePreviousPage = () => {
    setIsLoading(true);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  };

  return (
    <div className='flex justify-center gap-4 items-center my-4'>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`btn-ghost btn bg-secondary text-white rounded ${
          currentPage === Math.ceil(catProds.length / itemsPerPage)
            ? "disabled "
            : ""
        }`}
      >
        Previous
      </button>
      <span className='text-lg'>
        Page {currentPage} of {Math.ceil(catProds.length / itemsPerPage)}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === Math.ceil(catProds.length / itemsPerPage)}
        className={`btn-ghost btn bg-secondary text-white rounded ${
          currentPage === Math.ceil(catProds.length / itemsPerPage)
            ? "disabled "
            : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
