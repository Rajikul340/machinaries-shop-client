import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaBlogger, FaHandsHelping } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";

const cadInfo = [
  {
    id: "1",
    title: "blog",
    body: "  Get all the marketing and business strategy tips you to help you run an online business",
    icon: <FaBlogger size={60} />,
    btnInfo: "discuss",
  },
  {
    id: "2",
    title: "help center",
    body: "  find answers with a dedicated helpdesk resource full of articles and videos form our support team",
    icon: <FaHandsHelping size={60}/>,
    btnInfo: "get help",
  },
  {
    id: "3",
    title: "Community",
    body: "  Connect with a community fo brands, partners, and follow merchants who expart online business",
    icon: <RiCommunityLine size={60} />,
    btnInfo: "read",
  },
];

const HelpSection = () => {
  return (
    <div className=" mt-10 bg-black text-white">
      <div className=" ">
        <h5 className="md:text-2xl text-xl font-bold uppercase text-orange-400 text-center pt-20 pb-5 ">
          support team
        </h5>
        <h1 className="md:text-7xl text-3xl font-bold text-white text-center md:pb-40">
          The help you neeed,
          <br /> contact with our team
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 gap-5 mx-4 pb-20">
        {cadInfo?.map((card) => (
          <div className="card md:my-0 my-8 " key={card.id} style={{border:"0.4px solid white"}}>
            <div className=" h-16  rounded-lg ml-7 mt-4 w-16  bg-gradient-to-t from-yellow-600 to-red-600">
              <p className="">{card?.icon}</p>
            </div>
            <div className="card-body">
              <h2 className="card-title md:text-5xl font-bold text-lg ">
                {card.title}
              </h2>
              <p className="md:text-xl">{card.body}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm rounded-xl ">
                  {card.btnInfo}
                  <span className="arrow">
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
