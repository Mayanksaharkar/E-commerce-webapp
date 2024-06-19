import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className='lg:px-40 md:px-4 sm:px-2 bg-white'>
        {/* <Fade bottom> */}
        <div
          className='sticky top-0 z-20 lg:mt-1
           lg:rounded-3xl border  border-base-300 bg-white/90'
        >
          <Header />
        </div>
        <div className='min-h-[70vh] flex justify-center items-center '>
          <Outlet />
        </div>
        <div className='drop-'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
