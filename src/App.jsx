import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <CartProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={600}
      />
      <Header />

      <Products />
    </CartProvider>
  );
}

export default App;
