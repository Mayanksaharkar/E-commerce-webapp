import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import CartIcon from "./CartIcon";
function NavElements() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <div className=' text-lg font-semibold rounded bg-transparent hover:bg-transparent hover:border-none cursor-pointer'>
        Categories
      </div>
      <div className=' text-lg font-semibold rounded bg-transparent hover:bg-transparent hover:border-none cursor-pointer '>
        About
      </div>
      <CartIcon />
      {isLoggedIn ? (
        <div className='dropdown dropdown-end r'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img
                alt='Tailwind CSS Navbar component'
                src='https://d30ny7ijak9wq4.cloudfront.net/s3fs-public/images/story/2012/06/21/taara.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className='float-left'>
          <button className=' btn rounded lg:p-4'>Login</button>
        </div>
      )}
    </>
  );
}

export default NavElements;
