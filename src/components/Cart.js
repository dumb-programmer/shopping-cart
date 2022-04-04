import { useOutletContext } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].qty;
    }
    return total;
  }
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
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="product">
                  <img src={item.image} alt={item.name + " image"} />
                  <p>{item.name}</p>
                </td>
                <td>
                  <button>-</button>
                  <p>{item.qty}</p>
                  <button>+</button>
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
