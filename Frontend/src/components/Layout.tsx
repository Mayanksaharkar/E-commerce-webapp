import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./ScrollToTop";
function Layout() {
  return (
    <>
      <ToastContainer
        position='top-left'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div className='lg:px-40 md:px-4 sm:px-2 bg-white'>
        
        <div className='sticky top-0 z-20  lg:rounded-xl border  border-base-300 bg-white/90'>
          <Header />
        </div>
        <div
          
          className='min-h-[70vh] flex justify-center items-center '
        >
          <ScrollToTop />
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
