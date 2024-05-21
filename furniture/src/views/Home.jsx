import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

import Range from "../components/Range";
import Products from "../components/Products";
import Button from "../components/Button";
import bg from "../assets/bg.jpg";

export default function Home() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
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
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src={slider1} alt="" />
          </div>
          <div class="swiper-slide">
            <img src={slider2} alt="" />
          </div>
          <div class="swiper-slide">
            <img src={slider3} alt="" />
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </>
  );
}
