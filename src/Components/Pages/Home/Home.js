import React from "react";
import AboutProducts from "./AboutProducts";
import AdvertiseItem from "./AdvertiseItem";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import HelpSection from "./HelpSection";
import EstublishSection from "./EstablishedSection";
import Achievement from "./Achievement";
import FaqSection from "./FaqSection";
import Success from "./Success";
import ReviewSlider from "./ReviewSection";
import Showcase from "./showecase";
import SellEquipment from "./SellEquipment";


const Home = () => {
  return (
    <div>
      {/* <SideBar></SideBar> */}
      <div>
        <Banner></Banner>
        <CategorySection />
        <Showcase/>
        {/* <AdvertiseItem></AdvertiseItem> */}
        <AboutProducts></AboutProducts>
        <SellEquipment/>
        <Achievement/>
        <HelpSection/>
        <EstublishSection/>
        <Success/>
        <ReviewSlider/>
        <FaqSection/>
      
      </div>
    </div>
  );
};

export default Home;
