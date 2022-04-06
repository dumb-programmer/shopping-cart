import { useOutletContext } from "react-router-dom";
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
    cart[index].qty++;
    setCart((prevCart) => [...prevCart]);
    console.log(cart);
  };

  const onMinus = (e) => {
    const index = +e.target.parentNode.parentNode.getAttribute("data-index");
    if (cart[index].qty > 0) {
      cart[index].qty--;
    } else {
      cart.splice(index, 1);
    }
    setCart((prevCart) => [...prevCart]);
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
