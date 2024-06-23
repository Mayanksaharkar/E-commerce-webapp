import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className='min-w-64'>
      <div className='cursor-pointer mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white  shadow-2xl duration-300 hover:scale-105 hover:shadow-lg'>
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

          <div className='flex items-center'>
            <p className='mr-2 text-lg font-semibold text-primary-content '>
              ₹ {product.price?.toLocaleString()}
            </p>

            <Link
              to={`/product/${product._id}`}
              className='  ml-auto text-base font-medium text-primary-content'
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
