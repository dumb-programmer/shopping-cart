import "../styles/ShopItem.css";

const ShopItem = ({
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
    const newItem = { ...item };
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
      newCart[cartIndex].qty += item.qty;
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    setCartCount((prevCount) => prevCount + item.qty);
  };

  const onInputChange = (e) => {
    const newItems = [...items];
    const newQty = +e.target.value ? +e.target.value : 1;
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
      <button className="add-to-cart-btn" onClick={onAddCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ShopItem;
