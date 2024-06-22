import { useState } from "react";
function DescAccordian({ Description }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-lg mx-auto my-2'>
      {Description.map((desc, index) => (
        <div
          key={index}
          className='accordion-item bg-white border border-gray-200 rounded-lg mb-1'
        >
          <h2 className='accordion-header mb-0'>
            <button
              className='accordion-button flex items-center justify-between w-full p-4 text-left text-gray-800 font-medium text-lg bg-white border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-content'
              onClick={() => handleClick(index)}
            >
              {desc.title}
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                ></path>
              </svg>
            </button>
          </h2>
          <div
            className={`accordion-content  px-2  transition-max-height duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className='text-gray-600'>{desc.discription}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DescAccordian;
