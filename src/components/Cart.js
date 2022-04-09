import { useOutletContext } from "react-router-dom";
import skipIndex from "../utils/skipIndex";
import "../styles/Cart.css";
import { useState } from "react";

const Cart = () => {
  const [cart, setCart, cartCount, setCartCount] = useOutletContext();
  const [shipping, setShipping] = useState(5);

  const calculateTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].qty;
    }
    return total;
  };

  const onShippingChange = (e) => {
    const shipping = +e.target.value;
    setShipping(shipping);
  };

  const onPlus = (e) => {
    const index =
      +e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
    const newCart = [...cart];
    newCart[index].qty++;
    setCart(newCart);
    setCartCount((prevCount) => prevCount + 1);
  };

  const onMinus = (e) => {
    const index =
      +e.target.parentNode.parentNode.parentNode.getAttribute("data-index");
    const newCart = [...cart];
    if (cart[index].qty > 1) {
      newCart[index].qty--;
      setCart(newCart);
    } else {
      const newCart = skipIndex(cart, index);
      setCart(newCart);
    }
    setCartCount((prevCount) => prevCount - 1);
  };

  return cart.length ? (
    <div className="cart-container">
      <div className="main-cart">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id} data-index={index}>
                <td className="product">
                  <img src={item.image} alt={item.name + " image"} />
                  <div className="product-details">
                    <p>{item.name}</p>
                    <p>{item.price}$</p>
                  </div>
                </td>
                <td>
                  <div className="qty-counter">
                    <button className="minus-btn" onClick={onMinus}></button>
                    <p>{item.qty}</p>
                    <button className="plus-btn" onClick={onPlus}></button>
                  </div>
                </td>
                <td>{item.qty * item.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="checkout">
        <h1>Order Summary</h1>
        <p>
          Items {cart.length} {calculateTotal(cart)}$
        </p>
        <label htmlFor="shipping">
          Shipping <br />
        </label>
        <select name="shipping" id="shipping" onChange={onShippingChange}>
          <option value="5">Standard Delivery - $5.00</option>
          <option value="15">Fast Delivery - $15.00</option>
        </select>
        <h3 id="total-cost">Total : {calculateTotal(cart) + shipping}$</h3>
        <button id="checkout-btn">Checkout</button>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Cart;
