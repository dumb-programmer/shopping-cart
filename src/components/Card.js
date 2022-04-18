import "../styles/Card.css";

const Card = ({
  name,
  image,
  price,
  index,
  items,
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
      newCart[cartIndex].qty++;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
    setCartCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="card">
      <img src={image} alt="placeholder" className="thumbnail" />
      <p>
        <b>{name}</b>
      </p>
      <p>{price}$</p>
      <button onClick={onAddCart}>Add to cart</button>
    </div>
  );
};

export default Card;
