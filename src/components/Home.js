import Banner from "./Banner";
import youngMungo from "../assests/images/young_mungo.jpg";
import fourTreasuresOfTheSky from "../assests/images/four_treasures_of_the_sky.jpg";
import nobodyGetsOutAlive from "../assests/images/nobody_gets_out_alive.jpg";
import anArrowToTheMoon from "../assests/images/an_arrow_to_the_moon.jpg";
import timeIsAMother from "../assests/images/time_is_a_mother.jpg";
import houseOfEarthAndBlood from "../assests/images/house_of_earth_and_blood.jpg";
import seaOfTranquility from "../assests/images/sea_of_tranquility.jpg";
import milkAndHoney from "../assests/images/milk_and_honey.jpg";
import uniqid from "uniqid";
import "../styles/Home.css";

const Home = () => {
  const picksOfTheMonth = [
    {
      id: uniqid(),
      title: "Young Mungo",
      caption: "by Douglas Stuart",
      img: youngMungo,
    },
    {
      id: uniqid(),
      title: "Four Treasures of the Sky",
      caption: "by Jenny Tinghui Zhang",
      img: fourTreasuresOfTheSky,
    },
    {
      id: uniqid(),
      title: "Nobody Gets Out Alive",
      caption: "by Leigh Newman",
      img: nobodyGetsOutAlive,
    },
    {
      id: uniqid(),
      title: "An Arrow to the Moon",
      caption: "by Emily X.R. Pan",
      img: anArrowToTheMoon,
    },
  ];

  const bestSellers = [
    {
      id: uniqid(),
      title: "Time Is a Mother",
      caption: "by Ocean Vuong",
      img: timeIsAMother,
    },
    {
      id: uniqid(),
      title: "House of Earth and Blood",
      caption: "by Sarah J. Maas",
      img: houseOfEarthAndBlood,
    },
    {
      id: uniqid(),
      title: "Sea of Tranquility",
      caption: "by Emily St. John Mandel",
      img: seaOfTranquility,
    },
    {
      id: uniqid(),
      title: "milk and honey",
      caption: "by Rupi Kaur",
      img: milkAndHoney,
    },
  ];

  return (
    <div className="home-content">
      <Banner />
      <h1 className="section-heading">Picks of the Month</h1>
      <div className="flex-container">
        {picksOfTheMonth.map(({ id, title, caption, img }) => (
          <div className="book-item" key={id}>
            <img src={img} alt={"cover of " + title} />
            <p>
              <b>{title}</b>
            </p>
            <p>{caption}</p>
          </div>
        ))}
      </div>
      <h1 className="section-heading">Best Sellers</h1>
      <div className="flex-container">
        {bestSellers.map(({ id, title, caption, img }) => (
          <div className="book-item" key={id}>
            <img src={img} alt={"cover of " + title} />
            <p>
              <b>{title}</b>
            </p>
            <p>{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
