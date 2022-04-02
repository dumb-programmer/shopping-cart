import { useState } from "react";
import "../styles/Shop.css";
import Card from "./Card";

const Shop = () => {
  const [items, setItems] = useState([
    { id: 0, name: "Item 1", price: "10$", qty: 1 },
    { id: 1, name: "Item 2", price: "15$", qty: 1 },
    { id: 2, name: "Item 3", price: "25$", qty: 1 },
    { id: 3, name: "Item 4", price: "50$", qty: 1 },
    { id: 4, name: "Item 5", price: "30$", qty: 1 },
  ]);
  return (
    <div className="card-container">
      {items.map((item) => (
        <Card key={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default Shop;
