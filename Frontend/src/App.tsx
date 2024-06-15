import Layout from "./components/Layout";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home/Home";

import ProductPage from "./components/pages/Product/ProductPage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import AuthContextProvider from "./context/Auth/AuthContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./components/pages/UserProfile";
import About from "./components/pages/About";
import Categories from "./components/pages/Categories";
import ProductContextProvider from "./context/Product/ProductContextProvider";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/product/:productId",
          element: <ProductPage />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/user/profile",
          element: <UserProfile />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
