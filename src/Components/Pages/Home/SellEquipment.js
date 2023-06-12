import React from "react";

const SellEquipment = () => {

    const backgroundImage = 'url("https://cdn.pixabay.com/photo/2018/05/18/22/33/construction-machine-3412240_640.jpg")';
    const gradient = ' linear-gradient(to right,  #151515 0%,rgba(21, 21, 21, 0) 100%)';

  return (
    <div
      style={{
        background: `${gradient}, ${backgroundImage}`,
         
          backgroundPosition:"center",
          backgroundSize:"cover",
    
        }}
    >
       <div className="md:w-6/12 mx-auto py-10">
       <h1 className="text-orange-400 md:text-3xl text-2xl capitalize font-bold  ">need to sell your second hand equipment ?</h1>
      <p className="md:text-xl text-lg py-3 text-white" >
        We have multiple selling solutions tailored to fit your needs. We will
        work with you to determine the best way to sell your equipment and
        market it to our 1.8+ million users.
      </p>

       </div>
    </div>
  );
};

export default SellEquipment;
