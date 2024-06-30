import { Link } from "react-router-dom";
import { Product } from "../../../Models/Product";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className='lg:min-w-64 md:min-w-52 min-w-44 ml-2'>
      <div className='cursor-pointer mx-auto mt-11 lg:w-64 md:w-52 w-44 transform overflow-hidden rounded-lg bg-white  shadow-2xl duration-300 hover:scale-105 hover:shadow-lg'>
        <img
          className='h-48 w-full object-contain rounded-md object-center'
          src={product.cover_img}
          alt='Product Image'
          loading='lazy'
        />
        <div className='p-4'>
          <h2 className='mb-2 text-lg font-medium  text-primary-content line-clamp-2 min-h-[56px]'>
            {product.title}
          </h2>

          <div className='flex items-center lg:flex-row md:flex-row flex-col lg:justify-between justify-center'>
            <p className='mr-2 text-lg font-semibold text-primary-content '>
              ₹ {product.price?.toLocaleString()}
            </p>

            <Link
              to={`/product/${product._id}`}
              className='text-base font-medium text-center text-primary-content'
            >
              view more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
