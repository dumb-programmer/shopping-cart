import emptyCart from "../assests/images/undraw_empty_cart_co35.svg";

const EmptyCart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={emptyCart} alt="Empty cart" height="300px" width="300px" />
      <h1>Looks like your cart is empty</h1>
    </div>
  );
};

export default EmptyCart;
