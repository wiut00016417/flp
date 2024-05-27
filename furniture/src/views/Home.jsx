import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import Slide from "../sections/Slide";
import Range from "../components/Range";
import Products from "../components/Products";
import Button from "../components/Button";
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <div className="homepage">
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
      <div className="image-slider">
        <div className="swiper-description">
          <h1>50+ Beautiful Rooms inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototypes that might
            inspire you
          </p>
          <Button>EXPLORE MORE</Button>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={80}
          centeredSlides={true}
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper"
        >
          <SwiperSlide>
            <Slide image={slider1} description={"Inner Peace"}></Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={slider2} description={"Outer Space"}></Slide>
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={slider3} description={"Lorem Ipsum"}></Slide>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
