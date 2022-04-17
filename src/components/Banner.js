import inspired from "../assests/images/Inspired.jpg";
import shoeDog from "../assests/images/Shoe_Dog.jpg";
import theSunAndHerFlowers from "../assests/images/the_sun_and_her_flowers.jpg";
import wanderingFalcon from "../assests/images/the_wandering_falcon.jpg";
import uniqid from "uniqid";
import "../styles/Banner.css";

const Banner = () => {
  const newArrivals = [
    { id: uniqid(), title: "Inspired", img: inspired },
    { id: uniqid(), title: "Shoe Dog", img: shoeDog },
    {
      id: uniqid(),
      title: "the sun and her flowers",
      img: theSunAndHerFlowers,
    },
    { id: uniqid(), title: "Wandering falcon", img: wanderingFalcon },
  ];
  return (
    <div className="banner">
      <div className="books">
        <h1>New Arrivals</h1>
        {newArrivals.map(({ id, title, img }) => (
          <img src={img} key={id} alt={"cover of " + title} className="thumbnail"/>
        ))}
      </div>
      <div className="banner-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          ullam!
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
