import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Shop from "./components/Shop";

const RouterSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
