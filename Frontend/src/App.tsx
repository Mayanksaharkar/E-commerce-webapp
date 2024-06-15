import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout";
import ProductCard from "./components/pages/Product/ProductCard";
import ProductPage from "./components/pages/Product/ProductPage";
import AuthContextProvider from "./context/Auth/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
}

export default App;
