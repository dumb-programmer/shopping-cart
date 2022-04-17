import inspired from "../assests/images/Inspired.jpg";
import shoeDog from "../assests/images/Shoe_Dog.jpg";
import aShortHistory from "../assests/images/A_short_history_of_everything.jpg";
import stephenKing from "../assests/images/Stephen_King.jpg";
import uniqid from "uniqid";
import "../styles/Banner.css";

const Banner = () => {
  const newArrivals = [
    { id: uniqid(), title: "Inspired", img: inspired },
    { id: uniqid(), title: "Shoe Dog", img: shoeDog },
    {
      id: uniqid(),
      title: "A short history of nearly everying",
      img: aShortHistory,
    },
    { id: uniqid(), title: "On writing a memoir", img: stephenKing },
  ];
  return (
    <div className="banner">
      <div className="books">
        <h1>New Arrivals</h1>
        {newArrivals.map(({ id, title, img }) => (
          <img src={img} key={id} alt={"cover of " + title} />
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
