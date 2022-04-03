import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ cartLength }) => {
  return (
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="shop">
        <li>Shop</li>
      </Link>
      <Link to="cart">
        <li>
          Cart<span className="cart-length">{cartLength || ""}</span>
        </li>
      </Link>
    </nav>
  );
};

export default Header;
