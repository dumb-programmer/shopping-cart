import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import "../styles/Shop.css";

const Shop = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      name: "Item 1",
      price: 10,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: 1,
      name: "Item 2",
      price: 15,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: 2,
      name: "Item 3",
      price: 25,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: 3,
      name: "Item 4",
      price: 50,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: 4,
      name: "Item 5",
      price: 30,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
  ]);

  const [cart, setCart, cartCount, setCartCount] = useOutletContext();

  const onAddCart = (event) => {
    const index = +event.target.parentNode.getAttribute("data-index");
    const item = items[index];
    let present = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === item.id) {
        present = true;
        break;
      }
    }
    if (present) {
      let cartIndex = 0;
      while (cart[cartIndex].id !== items[index].id) {
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
    <div className="card-container">
      {items.map((item, index) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          index={index}
          image={item.image}
          onBtnClick={onAddCart}
        />
      ))}
    </div>
  );
};

export default Shop;
