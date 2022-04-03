import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Header cartLength={cart.length} />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </div>
  );
};

export default App;
