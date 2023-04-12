import React from "react";

const EstablishedSection = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-600 to-red-600 h-[40vw] flex flex-col justify-center items-center">
      <h1 className="md:text-7xl text-3xl font-bold text-white mb-10 ">
        Established your <br />
        Business here
      </h1>
      <p className="md:text-xl text-lg text-white mb-10">
        sell your products around the world,
        <br /> everything you need to it{" "}
      </p>
      
      <button className="btn bg-[#F7C02D] rounded-full px-10 font-bold   text-black hover:bg-white hover:text-[#F7C02D] mr-4">
      start free trial
            </button>
    </div>
  );
};

export default EstablishedSection;
