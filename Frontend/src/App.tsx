import Header from "./components/Header/Header";
import AuthContextProvider from "./context/Auth/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <nav className='fixed w-screen flex justify-center'>
        <Header />
      </nav>
    </AuthContextProvider>
  );
}

export default App;
