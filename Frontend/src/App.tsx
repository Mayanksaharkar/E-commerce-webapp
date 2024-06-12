import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AuthContextProvider from "./context/Auth/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <nav className='fixed w-screen flex justify-center'>
        <Header />
      </nav>
      <div className='flex flex-col h-screen'>
        <div className='flex-grow'>{/* Your main content here */}</div>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
