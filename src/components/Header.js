import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ cartCount }) => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="shop">Shop</Link>
      </li>
      <li>
        <Link to="cart">
          Cart
        </Link>
        <sup>
          <span className="cart-length">{cartCount || ""}</span>
        </sup>
      </li>
    </nav>
  );
};

export default Header;
