import React from "react";
import Banner from "./Banner";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <SideBar></SideBar>
        <Banner className="ml-10"></Banner>
      </div>
    </div>
  );
};

export default Home;
