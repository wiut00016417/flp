import Swiper from "swiper";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

import Range from "../components/Range";
import Products from "../components/Products";
import Button from "../components/Button";
import bg from "../assets/bg.jpg";

export default function Home() {
  const Slider = new Swiper(".slider", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: true,
    pagination: {
      el: '.slider-pagination'
    },
    navigation: {
      nextEl: '.slider-next-btn'
    },
    scrollbar: {
      el: '.slider-scrollbar'
    }
  });

  return (
    <>
      <div className="banner">
        <img src={bg} alt="Cozy environment" />
        <div className="ticket">
          <p>New Arrival</p>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            laboriosam officiis velit asperiores et earum.
          </p>
          <a href="checkout">
            <Button>Buy Now</Button>
          </a>
        </div>
      </div>
      <Range />
      <Products headtext={"Our Products"} />
      <div className="slider">
        <div className="slider-container">
          <div className="slide">
            <img src={slider1} alt="" />
          </div>
          <div className="slide">
            <img src={slider2} alt="" />
          </div>
          <div className="slide">
            <img src={slider3} alt="" />
          </div>
        </div>
        <div className="slider-pagination">
          <div className="slider-dots"></div>
          <div className="slider-dots"></div>
          <div className="slider-dots"></div>
          <div className="slider-dots"> </div>
        </div>
      </div>
    </>
  );
}
