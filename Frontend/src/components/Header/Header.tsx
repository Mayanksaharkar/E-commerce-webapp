import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Link } from "react-router-dom";
import { Rotate as Hamburger } from "hamburger-react";
import NavElements from "./NavElements";
import Svg from "./Svg";
function Header() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar backdrop-blur-3xl h-min font-sans sticky m-0 p-0 mt-2  rounded w-full md:w-[70%]'>
      <div className='flex-1 lg:gap-6 gap-0 lg:p-4 p-0'>
        <div className='btn btn-ghost rounded '>
          <Svg />
        </div>

        <input
          type='text'
          className='input w-full bg-base-200 rounded lg:mr-4 '
          placeholder='Search for product'
        />
      </div>
      <div className='hidden md:flex gap-4 mx-3 text-xl'>
        <NavElements />
      </div>
      <div className='flex md:hidden '>
        <Hamburger
          toggled={isMenuOpen}
          toggle={toggleMenu}
          size={20}
          distance='lg'
          color='#291334'
        />
        {isMenuOpen && (
          <div className='transition-all duration-700 absolute top-16 left-0 right-0 backdrop-blur-3xl  shadow-xl rounded'>
            <div className='flex flex-col items-center py-2'>
              <NavElements />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
