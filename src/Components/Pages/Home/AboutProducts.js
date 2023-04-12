import React from "react";
import img from '../../../image/machine.avif'

const AboutProducts = () => {
  return (
    <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className="md:max-w-sm rounded-lg shadow-2xl" alt="machine" />
    <div>
    <p className="text-orange-400 text-lg">About</p>
    <h1 className="lg:text-5xl font-bold">Our Product</h1>
      <p className="py-6 md:text-lg">
      A machine is a device by which a small applied force can be multiplied to overcome a large resistive force or by which a gain of speed can be obtained. Some common applications of simple machines include lifting heavy loads by ack or pulley, riding a bicycle or cutting with a pair of scissors.
      Mechanical machines refer to machines that operate using mechanical processes, rather than electronic or electrical processes. These machines were commonly used in the past, before the advent of electronic and computerized machines.


        </p>
        <button 
      className="btn  hover:border-orange-300 border border-orange-300 btn-outline hover:bg-orange-300"
      >
          Getting Started
        </button>

    </div>
  </div>
</div>
  );
};

export default AboutProducts;


<div>
<div className="hero mt-3 border border-red-600">
  <div className="hero-content flex-col lg:flex-row">
   <div className="lg:w-1/2 ">
   <img
      src={img}
      className="max-w-sm rounded-lg shadow-2xl " alt=""
    />
   </div>

    <div className="lg:w-1/2  border border-green-900">
    
     
      <p className="py-6 text-lg text-justify ">
     
      </p>
    
    </div>
  </div>
</div>
</div>