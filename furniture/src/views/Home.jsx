import Range from "../components/Range";
import Products from "../components/Products";
import ImageSlider from "../components/Rooms";
import bedroom from "../assets/bedroom.png";
import slider from "../assets/slider.png";
import dining from "../assets/dining.jpg";
import living from "../assets/living.jpg";
import Button from "../components/Button";
import bg from "../assets/bg.jpg"
const images = [slider, dining, bedroom, living];
const descriptions = ["Inner Peace", "Audacity", "Outer Space", "Chilli sauce"];

function Home() {
  return (
    <>
        <div className="banner">
            <img src={bg} alt="Cozy environment" />
            <div className="ticket">
                <p>New Arrival</p>
                <h1>Discover Our New Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laboriosam officiis velit asperiores et earum.</p>
                <a href='checkout'><Button>Buy Now</Button></a>
            </div>
        </div>
      <Range />
      <Products headtext={"Our Products"} />
      <ImageSlider images={images} descriptions={descriptions} />
    </>
  );
}

export default Home;
