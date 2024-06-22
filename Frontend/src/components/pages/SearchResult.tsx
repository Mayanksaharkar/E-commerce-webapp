import { useContext } from "react";
import { ProductContext } from "../../context/Product/ProductContextProvider";
import { Product } from "../../Models/Product";

function SearchResult() {
  const { searchInput, resultEle, setResultEle } = useContext(ProductContext);

  return (
    <div>
      {searchInput && (
        <div>
          {resultEle?.map((product: Product, index) => (
            <div key={index} className='my-2'>
              <ResultProdCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;

const ResultProdCard = ({ product }) => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center bg-background rounded-lg shadow-lg overflow-hidden'>
        <div className='relative w-full h-[200px] md:w-[250px] md:h-[200px] hidden md:block'>
          <img
            src={product.cover_img}
            alt='Product Image'
            width='150'
            height='200'
            className='object-contain w-full h-full '
            loading='lazy'
            // style='aspect-ratio: 250 / 200; object-fit: cover;'
          />
        </div>
        <div className='flex-1 p-4 md:p-6'>
          <div className='flex items-center justify-between mb-2'>
            <h3 className='text-lg font-semibold line-clamp-2'>
              {product.title}
            </h3>
            <span className='text-secondary-content font-bold text-lg'>
              ₹ {product.price}
            </span>
          </div>
          <div className='flex items-center text-muted-foreground text-sm mb-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4 mr-2'
            >
              <path d='M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z'></path>
              <circle cx='7.5' cy='7.5' r='.5' fill='currentColor'></circle>
            </svg>
            <span>{product.brand}</span>
          </div>
        </div>
      </div>
    </>
  );
};
