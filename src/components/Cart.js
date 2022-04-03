import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].qty;
    }
    return total;
  }
  return (
    <div className="cart-container">
      <ul>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} - {item.price}$ - {item.qty}
          </p>
        ))}
      </ul>
      <h3>Total : {calculateTotal(cart)}$</h3>
    </div>
  );
};

export default Cart;
