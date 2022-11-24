import React from "react";
import banner1 from "../../../image/home2.jpg";
import banner2 from "../../../image/home3.jpg";
import banner3 from "../../../image/home4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../../Style/Style.css";

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
        <SwiperSlide>
          <div className=" relative">
            <div className="carousel-img">
              <img src={banner1} className="w-full" alt="" />
            </div>
            <div className="absolute top-2 left-4 ">
              <p className="lg:text-2xl font-bold text-white capitalize">
                welcome to
              </p>
              <h1
                className="lg:text-6xl text-[#F7C02D] uppercase font-extrabold font-serif my-2
            "
              >
                machinaries <br /> shop
              </h1>
              <p className="lg:text-xl capitalize text-white my-4">
                The Most Reusable machine you buy inexpensive. <br />
                so do not time west. let`s buy your unexpected product
              </p>
              <button className="btn bg-[#F7C02D] hover:btn-outline hover:text-[#F7C02D] mr-4 mt-5 ">
                Reade More
              </button>
              <button className="btn bg-white text-black hover:text-white">
                buy Products
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" relative">
            <div className="carousel-img">
              <img src={banner2} className="w-full" alt="" />
            </div>
            <div className="absolute top-2 left-4 ">
              <p className="lg:text-2xl font-bold text-white capitalize">
                welcome to
              </p>
              <h1
                className="lg:text-6xl text-[#F7C02D] uppercase font-extrabold font-serif my-2
            "
              >
                machinaries <br /> shop
              </h1>
              <p className="lg:text-xl capitalize text-white my-4">
                The Most Reusable machine you buy inexpensive. <br />
                so do not time west. let`s buy your unexpected product
              </p>
              <button className="btn bg-[#F7C02D] hover:btn-outline hover:text-[#F7C02D] mr-4 mt-5 ">
                Reade More
              </button>
              <button className="btn bg-white text-black hover:text-white">
                buy Products
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative">
            <div className="carousel-img">
              <img src={banner3} className="w-full" alt="" />
            </div>
            <div className="absolute top-2 left-4 ">
              <p className="lg:text-2xl font-bold text-white capitalize">
                welcome to
              </p>
              <h1
                className="lg:text-6xl text-[#F7C02D] uppercase font-extrabold font-serif my-2
            "
              >
                machinaries <br /> shop
              </h1>
              <p className="lg:text-xl capitalize text-white my-4">
                The Most Reusable machine you buy inexpensive. <br />
                so do not time west. let`s buy your unexpected product
              </p>
              <button className="btn bg-[#F7C02D] hover:btn-outline hover:text-[#F7C02D] mr-4 mt-5 ">
                Reade More
              </button>
              <button className="btn bg-white text-black hover:text-white">
                buy Products
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
