import React from "react";
import img from '../../../image/homes-2.jpg'

const AboutProducts = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
         <div className="lg:w-1/2 ">
         <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl " alt=""
          />
         </div>

          <div className="lg:w-1/2">
            <p className="text-orange-300">About</p>
            <h1 className="lg:text-5xl font-bold">Our Product</h1>
            <p className="py-6 text-lg text-justify">
            A machine is a device by which a small applied force can be multiplied to overcome a large resistive force or by which a gain of speed can be obtained. Some common applications of simple machines include lifting heavy loads by ack or pulley, riding a bicycle or cutting with a pair of scissors.
            </p>
            <button className="btn border-0 bg-[#F7C02D] hover:btn-outline hover:text-[#F7C02D] mr-4 mt-5 ">
                Getting Started
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProducts;
