import React from "react";
import banner1 from "../../../image/homes-1.jpg";
import banner2 from "../../../image/homes-2.jpg";
import banner3 from "../../../image/homes-3.jpg";
import "../../Style/Style.css";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={banner1} className="w-full" alt="" />
          </div>

          <div className="absolute transform -translate-y-1/2 left-24 top-2/4">
            <p className="lg:text-2xl font-bold text-white capitalize">
              welcome to
            </p>
            <h1 className="lg:text-6xl text-2xl font-bold uppercase text-[#F7C02D] lg:mb-3">
              machinaries <br /> shop
            </h1>
            <p className="text-white lg:text-xl my-4">
              The Most Reusable machine you buy inexpensive. <br />
              so do not time west. let`s buy your unexpected product
            </p>
            <div className=" flex">
              <button className="btn sm:pb-3 bg-[#F7C02D] hover:btn-outline hover:text-[#F7C02D] mr-4  ">
                Reade More
              </button>
              <button className="btn bg-white text-black hover:text-white">
                buy Products
              </button>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={banner3} className="w-full" alt="" />
          </div>
          <div className="absolute transform -translate-y-1/2 left-24 top-2/4">
            <p className="lg:text-2xl font-bold text-white capitalize">
              welcome to
            </p>
            <h1 className="lg:text-6xl text-2xl font-bold uppercase text-[#F7C02D] lg:mb-3">
              machinaries <br /> shop
            </h1>
            <p className="text-white lg:text-xl my-4">
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="carousel-img">
            <img src={banner1} alt="" className="w-full" />
          </div>
          <div className="absolute transform -translate-y-1/2 left-24 top-2/4">
            <p className="lg:text-2xl font-bold text-white capitalize">
              welcome to
            </p>
            <h1 className="lg:text-6xl text-2xl font-bold uppercase text-[#F7C02D] lg:mb-3">
              machinaries <br /> shop
            </h1>
            <p className="text-white lg:text-xl my-4">
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
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
