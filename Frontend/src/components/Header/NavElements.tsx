import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import { toast } from "react-toastify";

function NavElements() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className='text-black'>
        <button
          className=' text-lg font-semibold rounded bg-transparent hover:bg-transparent hover:border-none cursor-pointer '
          onClick={() => {
            navigate("/categories");
          }}
        >
          Categories
        </button>
      </div>
      <div>
        <button
          className=' text-lg font-semibold rounded bg-transparent hover:bg-transparent hover:border-none cursor-pointer '
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </button>
      </div>
      <button
        onClick={() => {
          isLoggedIn
            ? navigate(`/cart/${localStorage.getItem("uid")}`)
            : navigate("/signin");
        }}
      >
        <CartIcon />
      </button>
      {isLoggedIn ? (
        <div className='dropdown dropdown-end r'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full'>
              <img
                src='./../../public/profile_pic.jpg'
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to={"/user/profile"}>Profile</Link>
            </li>
            {
              localStorage.getItem("uid") !== null || undefined ? (
            
             <li>
              <Link to={"/orders"}>My Orders</Link>
            </li>
            ):(
              <></>
            )}
           
            <li>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("token");
                  localStorage.removeItem("uid");
                  setIsLoggedIn(false);
                  toast.success("User Logged Out");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className='float-left'>
          <Link to={"/signin"} className=' btn rounded lg:p-4'>
            Sign In
          </Link>
        </div>
      )}
    </>
  );
}

export default NavElements;
