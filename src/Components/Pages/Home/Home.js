import React from "react";
import AboutProducts from "./AboutProducts";
import AdvertiseItem from "./AdvertiseItem";
import Banner from "./Banner";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <SideBar></SideBar>
       <div>
          <AdvertiseItem></AdvertiseItem>
          <Banner className="ml-10"></Banner>
          <AboutProducts></AboutProducts>

        </div>
      </div>
    </div>
  );
};

export default Home;
