function FeaturedProductCardSkeleton() {
  return (
    <div className="pt-3 col-span-1 flex-row justify-center items-center text-center rounded-2xl bg-base-100 animate-pulse">
      <div className="w-full max-h-56 justify-center flex px-4">
        <div className="bg-gray-300 h-52 w-full rounded-lg"></div>
      </div>
      
      <div className="font-semibold font-sans flex-row px-4 py-2">
        <div className="my-3">
          <div className="bg-gray-300 h-6 w-3/4 mx-auto rounded"></div>
        </div>
        
        <div className="py-1">
          <div className="bg-gray-300 h-8 w-1/2 mx-auto rounded"></div>
        </div>
      </div>
      
      <div>
        <div className="bg-gray-300 h-12 w-full rounded-t-none rounded-b-2xl"></div>
      </div>
    </div>
  );
}

export default FeaturedProductCardSkeleton;
