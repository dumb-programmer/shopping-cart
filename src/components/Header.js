import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="shop">
        <li>Shop</li>
      </Link>
      <Link to="cart">
        <li>Cart</li>
      </Link>
    </nav>
  );
};

export default Header;
