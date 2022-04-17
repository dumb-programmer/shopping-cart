import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import uniqid from "uniqid";
import "../styles/Shop.css";

const Shop = () => {
  const items = [
    {
      id: uniqid(),
      name: "Item 1",
      price: 10,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: uniqid(),
      name: "Item 2",
      price: 15,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: uniqid(),
      name: "Item 3",
      price: 25,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: uniqid(),
      name: "Item 4",
      price: 50,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
    {
      id: uniqid(),
      name: "Item 5",
      price: 30,
      qty: 1,
      image: "https://via.placeholder.com/225x160",
    },
  ];

  const [cart, setCart, cartCount, setCartCount] = useOutletContext();

  const onAddCart = (event) => {
    const index = +event.target.parentNode.getAttribute("data-index");
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
