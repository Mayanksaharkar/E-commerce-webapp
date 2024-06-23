import React, { useContext, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import NavElements from "./NavElements";
import Svg from "./Svg";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/Product/ProductContextProvider";
function Header() {
  const { searchInput, setSearchInput, handleSearch } =
    useContext(ProductContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
    navigate("/search");
  };

  return (
    <div className='navbar   h-min font-sans sticky p-0   rounded  flex justify-between w-full '>
      <div className='flex-1 lg:gap-6 gap-0 lg:p-4 p-0'>
        <div
          className='btn btn-ghost rounded'
          onClick={() => {
            navigate("/");
          }}
        >
          <Svg />
        </div>
        <form onSubmit={handleSubmit} className='w-full'>
          <input
            type='text'
            className='input w-full bg-base-200 rounded lg:mr-4'
            placeholder='Search for product'
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </form>
      </div>
      <div className='hidden md:flex gap-4 mx-3 text-xl'>
        <NavElements />
      </div>
      <div className='flex md:hidden'>
        <Hamburger
          toggled={isMenuOpen}
          toggle={toggleMenu}
          size={20}
          distance='lg'
          color='#291334'
        />
        {isMenuOpen && (
          <div className='transition-all duration-700 absolute top-16 left-0 right-0  shadow-xl rounded bg-white/90 rounded-b-3xl'>
            <div className='flex flex-col items-center   w-full'>
              <NavElements />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
