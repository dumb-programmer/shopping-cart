import "../styles/Card.css";

const Card = ({
  name,
  image,
  price,
  qty,
  index,
  items,
  setItems,
  cart,
  setCart,
  setCartCount,
}) => {
  const onAddCart = () => {
    const item = items[index];
    let present = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
        present = true;
        break;
      }
    }
    if (present) {
      let cartIndex = 0;
      while (cart[cartIndex].name !== items[index].name) {
        cartIndex++;
      }
      const newCart = [...cart];
      newCart[cartIndex].qty += items[index].qty;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
    setCartCount((prevCount) => prevCount + items[index].qty);
  };

  const onInputChange = (e) => {
    const newItems = [...items];
    const newQty = +e.target.value;
    newItems[index].qty = newQty;
    setItems(newItems);
  };

  return (
    <div className="card">
      <img src={image} alt="placeholder" className="thumbnail" />
      <p>
        <b>{name}</b>
      </p>
      <p>{price}$</p>
      <div className="item-qty">
        <input
          type="number"
          value={qty}
          min="1"
          onChange={onInputChange}
          style={{
            textAlign: "center",
            width: "70px",
            height: "27px",
          }}
        />
      </div>
      <button id="add-to-cart-btn" onClick={onAddCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Card;
