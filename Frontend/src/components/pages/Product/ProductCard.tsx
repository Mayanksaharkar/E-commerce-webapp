function ProductCard({ data }) {
  return (
    <>
      <div className='cursor-pointer mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white  shadow-2xl duration-300 hover:scale-105 hover:shadow-lg'>
        <img
          className='h-48 w-full object-contain rounded-md object-center'
          src={data.cover_img}
          alt='Product Image'
          loading='lazy'
        />
        <div className='p-4'>
          <h2 className='mb-2 text-lg font-medium  text-primary-content line-clamp-2'>
            {data.title}
          </h2>

          <div className='flex items-center'>
            <p className='mr-2 text-lg font-semibold text-primary-content '>
              {data.price}
            </p>

            <button className='  ml-auto text-base font-medium text-primary-content'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
