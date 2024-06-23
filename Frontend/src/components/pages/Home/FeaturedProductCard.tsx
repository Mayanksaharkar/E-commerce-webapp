function FeaturedProductCard({ product }) {
  return (
    <div className=' col-span-1 flex-row justify-center items-center text-center rounded-2xl bg-base-100'>
      <div className='w-full max-h-56 justify-center flex px-4'>
        <img
          src={product?.cover_img}
          alt='Product Image'
          className='object-cover max-h-52 mix-blend-multiply'
        />
      </div>
      <div className='font-semibold font-sans  flex-row px-4 py-2'>
        <p className='text-2xl py-1'>{product?.category}</p>
        <p className='line-clamp-1 text-lg my-3  overflow-hidden'>
          {product?.title}
        </p>
        <p className='py-1 text-3xl'>₹ {product?.price?.toLocaleString()}</p>
      </div>
      <div>
        <button className='btn w-full rounded-t-none text-lg'>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
