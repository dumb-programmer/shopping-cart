import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Outlet context={[cart, setCart, cartCount, setCartCount]} />
      <Footer />
    </div>
  );
};

export default App;
