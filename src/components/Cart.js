import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const [cart, setCart, cartCount, setCartCount] = useOutletContext();
  const [shippingCharge, setShippingCharge] = useState(5);

  const calculateTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].qty;
    }
    return total;
  };

  const onShippingChange = (e) => {
    const shipping = +e.target.value;
    setShippingCharge(shipping);
  };

  return cart.length ? (
    <div className="cart-container">
      <div className="main-cart">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th></th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                index={index}
                name={item.name}
                image={item.image}
                price={item.price}
                qty={item.qty}
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
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
        <h3 id="total-cost">
          Total : {calculateTotal(cart) + shippingCharge}$
        </h3>
        <button id="checkout-btn">Checkout</button>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Cart;
