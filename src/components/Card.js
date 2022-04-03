import "../styles/Card.css";

const Card = ({ name, price, index, onBtnClick }) => {
  return (
    <div className="card" data-index={index}>
      <img src="https://via.placeholder.com/225x160" alt="placeholder" />
      <h1>{name}</h1>
      <p>{price}</p>
      <button onClick={onBtnClick}>Add to cart</button>
    </div>
  );
};

export default Card;