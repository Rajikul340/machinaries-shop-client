import React from "react";
import banner1 from "../../../image/home2.jpg";
import banner2 from "../../../image/home3.jpg";
import banner3 from "../../../image/home4.jpg";
import "../../Style/Style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          className="slider-img relative"
          style={{
            background: `url(${banner1})`, 
            opacity:'50',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute ">
            <p className="lg:text-2xl">welcome to</p>
            <h1 className="lg:text-6xl text-[#F7C02D] uppercase font-extrabold
            ">machinaries shop</h1>
            <p></p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner2} className="w-full h-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={banner3} className="w-full h-full" alt="" />
            <div className="">
              <h1>machinaries shp</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
