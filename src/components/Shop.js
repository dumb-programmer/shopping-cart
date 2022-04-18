import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import uniqid from "uniqid";
import inspired from "../assests/images/Inspired.jpg";
import shoeDog from "../assests/images/Shoe_Dog.jpg";
import theSunAndHerFlowers from "../assests/images/the_sun_and_her_flowers.jpg";
import theWanderingFalcon from "../assests/images/the_wandering_falcon.jpg";
import youngMungo from "../assests/images/young_mungo.jpg";
import fourTreasuresOfTheSky from "../assests/images/four_treasures_of_the_sky.jpg";
import nobodyGetsOutAlive from "../assests/images/nobody_gets_out_alive.jpg";
import anArrowToTheMoon from "../assests/images/an_arrow_to_the_moon.jpg";
import timeIsAMother from "../assests/images/time_is_a_mother.jpg";
import houseOfEarthAndBlood from "../assests/images/house_of_earth_and_blood.jpg";
import seaOfTranquility from "../assests/images/sea_of_tranquility.jpg";
import milkAndHoney from "../assests/images/milk_and_honey.jpg";
import "../styles/Shop.css";

const Shop = () => {
  const items = [
    {
      id: uniqid(),
      name: "Inspired",
      price: 10,
      qty: 1,
      image: inspired,
    },
    {
      id: uniqid(),
      name: "Shoe Dog",
      price: 15,
      qty: 1,
      image: shoeDog,
    },
    {
      id: uniqid(),
      name: "the sun and her flowers",
      price: 25,
      qty: 1,
      image: theSunAndHerFlowers,
    },
    {
      id: uniqid(),
      name: "The Wandering Falcon",
      price: 50,
      qty: 1,
      image: theWanderingFalcon,
    },
    {
      id: uniqid(),
      name: "Young Mungo",
      price: 30,
      qty: 1,
      image: youngMungo,
    },
    {
      id: uniqid(),
      name: "Four Treasures of the Sky",
      price: 30,
      qty: 1,
      image: fourTreasuresOfTheSky,
    },
    {
      id: uniqid(),
      name: "Nobody gets out alive",
      price: 30,
      qty: 1,
      image: nobodyGetsOutAlive,
    },
    {
      id: uniqid(),
      name: "An arrow to the Moon",
      price: 30,
      qty: 1,
      image: anArrowToTheMoon,
    },
    {
      id: uniqid(),
      name: "Time is a Mother",
      price: 30,
      qty: 1,
      image: timeIsAMother,
    },
    {
      id: uniqid(),
      name: "House of Earth and Blood",
      price: 30,
      qty: 1,
      image: houseOfEarthAndBlood,
    },
    {
      id: uniqid(),
      name: "Sea of Tranquility",
      price: 30,
      qty: 1,
      image: seaOfTranquility,
    },
    {
      id: uniqid(),
      name: "Milk and Honey",
      price: 30,
      qty: 1,
      image: milkAndHoney,
    },
  ];

  const [cart, setCart, cartCount, setCartCount] = useOutletContext();

  return (
    <div className="card-container">
      {items.map((item, index) => (
        <Card
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          index={index}
          items={items}
          cart={cart}
          setCart={setCart}
          setCartCount={setCartCount}
        />
      ))}
    </div>
  );
};

export default Shop;
