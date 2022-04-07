import { Link } from "react-router-dom";
import cartIcon from "../assests/icons/shopping-cart.svg";
import bookIcon from "../assests/icons/book-open.svg";
import "../styles/Header.css";

const Header = ({ cartCount }) => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={bookIcon} alt="logo" />
          <span>The Book Shop</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">
            <img src={cartIcon} alt="cart icon" />
          </Link>
          {cartCount ? (
            <sup>
              <span className="cart-length">{cartCount}</span>
            </sup>
          ) : (
            ""
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
