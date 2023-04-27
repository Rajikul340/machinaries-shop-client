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


const Home = () => {
  return (
    <div>
      {/* <SideBar></SideBar> */}
      <div>
        <Banner></Banner>
        <CategorySection />
        <AdvertiseItem></AdvertiseItem>
        <AboutProducts></AboutProducts>
        <Achievement/>
        <HelpSection/>
        <EstublishSection/>
        <Success/>
        <FaqSection/>
      
      </div>
    </div>
  );
};

export default Home;
