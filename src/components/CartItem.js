import skipIndex from "../utils/skipIndex";

const CartItem = ({
  index,
  name,
  image,
  price,
  qty,
  cart,
  setCart,
  setCartCount,
}) => {
  const onPlus = () => {
    const newCart = [...cart];
    newCart[index].qty++;
    setCart(newCart);
    setCartCount((prevCount) => prevCount + 1);
  };

  const onMinus = () => {
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

  const onRemove = () => {
    const newCart = [...cart];
    setCartCount((prevCount) => prevCount - cart[index].qty);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <>
      <tr>
        <td className="product">
          <img src={image} alt={name + " image"} className="thumbnail" />
        </td>
        <td>
          <div className="product-details">
            <p>{name}</p>
            <p>{price}$</p>
          </div>
        </td>
        <td>
          <div className="qty-counter">
            <button
              className="minus-btn"
              aria-label="minus button"
              onClick={onMinus}
            ></button>
            <p data-testid={`item${index}-qty`}>{qty}</p>
            <button
              className="plus-btn"
              aria-label="plus button"
              onClick={onPlus}
            ></button>
          </div>
        </td>
        <td>{qty * price}$</td>
        <td>
          <button
            className="remove-btn"
            aria-label="remove button"
            onClick={onRemove}
          ></button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
