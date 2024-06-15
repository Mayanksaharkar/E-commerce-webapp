import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home/Home";
import ProductCard from "./components/pages/Product/ProductCard";
import ProductPage from "./components/pages/Product/ProductPage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import AuthContextProvider from "./context/Auth/AuthContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
          path: "/product/:productId",
          element: <ProductPage />,
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
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
