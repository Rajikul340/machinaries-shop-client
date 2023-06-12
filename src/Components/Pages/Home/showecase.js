import React from "react";

const ShowcaseInfo = [
  {
    id: "1",
    Img: "https://cdn.ironpla.net/i/hmpg/2017/used_construction_sale_buy.jpg",
    title: "Construction",
  },
  {
    id: "2",
    Img: "https://cdn.ironpla.net/i/hmpg/2017/used_trucks_sale_buy.jpg",
    title: "trucks",
  },
  {
    id: "3",
    Img: "https://cdn.ironpla.net/i/hmpg/2018/pickup_truck_v2.jpg",
    title: "Motors",
  },
  {
    id: "4",
    Img: "https://cdn.ironpla.net/i/hmpg/2017/used_oil_gas_sale_buy.jpg",
    title: "Oil gas",
  },
  {
    id: "5",
    Img: "https://cdn.ironpla.net/i/hmpg/2017/used_mining_sale_buy.jpg",
    title: "Mining ",
  },
  {
    id: "6",
    Img: "https://cdn.ironpla.net/i/hmpg/2017/used_forestry_sale_buy.jpg",
    title: "Forestry",
  },
];

const Showcase = () => {
  return (
    <section className="my-10">
    <div className="md:grid md:grid-cols-3 md:gap-8 ">
    {
        ShowcaseInfo.map((singleInfo)=>(
            <div key={singleInfo.id} className="card md:my-0 my-10 bg-base-100 shadow-xl">
        <figure>
          <img
            src={singleInfo.Img}
            className=""
            alt="Shoes"
          />
        </figure>
        <div className=" card-body bg-orange-400 text-white font-bold text-center uppercase md:text-2xl text-xl py-2">

           <h4>{singleInfo.title}</h4>               
   
        </div>
      </div>
        ))
      }
    </div>
    </section>
  );
};

export default Showcase;
