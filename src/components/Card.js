import "../styles/Card.css";

const Card = ({ name }) => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/215x160" alt="placeholder" />
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
