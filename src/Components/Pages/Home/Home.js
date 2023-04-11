import React from "react";
import AboutProducts from "./AboutProducts";
import AdvertiseItem from "./AdvertiseItem";
import Banner from "./Banner";
import CategorySection from "./CategorySection";

const Home = () => {
  return (
    <div>
      {/* <SideBar></SideBar> */}
      <div>
        <Banner></Banner>
        <CategorySection />
        <AdvertiseItem></AdvertiseItem>
        <AboutProducts></AboutProducts>
      </div>
    </div>
  );
};

export default Home;
