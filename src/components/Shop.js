import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import "../styles/Shop.css";

const Shop = () => {
  const [items, setItems] = useState([
    { id: 0, name: "Item 1", price: "10$", qty: 1 },
    { id: 1, name: "Item 2", price: "15$", qty: 1 },
    { id: 2, name: "Item 3", price: "25$", qty: 1 },
    { id: 3, name: "Item 4", price: "50$", qty: 1 },
    { id: 4, name: "Item 5", price: "30$", qty: 1 },
  ]);

  const [cart, setCart] = useOutletContext();

  const onAddCart = (event) => {
    setCart((prevState) => [
      ...prevState,
      items[+event.target.parentNode.getAttribute("data-index")],
    ]);
  };

  return (
    <div className="card-container">
      {items.map((item, index) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          index={index}
          onBtnClick={onAddCart}
        />
      ))}
    </div>
  );
};

export default Shop;
