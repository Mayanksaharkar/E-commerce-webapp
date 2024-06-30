// src/ImageSlider.js

import { useState } from "react";

const ImageSlider = (props: { images: string[] }) => {
  const { images } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative h-full  max-w-2xl mx-auto overflow-hidden bg-white rounded-lg'>
      <button
        className='absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none text-2xl p-2 rounded-full left-2 focus:outline-none'
        onClick={prevSlide}
      >
        ❮
      </button>
      <div className='flex items-center justify-center h-full w-full '>
        <img
          src={images[currentIndex]}
          alt='slider'
          className='w-full h-full rounded-lg object-contain'
          loading='lazy'
        />
      </div>
      <button
        className='absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none text-2xl p-2 rounded-full right-2 focus:outline-none'
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
