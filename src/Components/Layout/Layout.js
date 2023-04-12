import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className="px-8 min-h-screen">
        <Outlet></Outlet>
      </div>
      <div className="mx-8 ">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
