import { useOutletContext } from "react-router-dom";
import skipIndex from "../utils/skipIndex";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  const calculateTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].qty;
    }
    return total;
  };

  const onPlus = (e) => {
    const index = +e.target.parentNode.parentNode.getAttribute("data-index");
    const newCart = [...cart];
    newCart[index].qty++;
    setCart(newCart);
  };

  const onMinus = (e) => {
    const index = +e.target.parentNode.parentNode.getAttribute("data-index");
    const newCart = [...cart];
    if (cart[index].qty > 1) {
      newCart[index].qty--;
      setCart(newCart);
    } else {
      const newCart = skipIndex(cart, index);
      setCart(newCart);
    }
  };

  return cart.length ? (
    <div className="cart-container">
      <div className="main-cart">
        <table>
          <thead>
            <th>Product</th>
            <th>Qty</th>
            <th>Total</th>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id} data-index={index}>
                <td className="product">
                  <img src={item.image} alt={item.name + " image"} />
                  <p>{item.name}</p>
                </td>
                <td className="qty-counter">
                  <button className="minus-btn" onClick={onMinus}></button>
                  <p>{item.qty}</p>
                  <button className="plus-btn" onClick={onPlus}></button>
                </td>
                <td>{item.qty * item.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="checkout">
        <h3>Total : {calculateTotal(cart)}$</h3>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Cart;
