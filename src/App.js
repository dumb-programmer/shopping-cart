import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
