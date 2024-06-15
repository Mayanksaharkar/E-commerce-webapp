import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductPage from "./pages/Product/ProductPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
        <div>
          {/* <SignIn /> */}
          <SignUp />
        </div>
        <div className='drop-'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
