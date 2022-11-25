import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../AuthProvider/AuthProvider";
import AdminMenu from "../AdminMenu/AdminMenu";
import BuyerMenu from "../BuyerMenu/BuyerMenu";
import SellerMenu from "../SellerMenu/SellerMenu";

const DashobarSideBar = ({ role }) => {
  console.log(role);
  const { user, logout } = useContext(UserContext);
  const [isActive, setActive] = useState("false");

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="">
      {/* Small Screen Navbar */}
      <div className=" text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold font-serif">
            <Link to="/">Machinaries Shop</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button  p-4 focus:outline-none focus:bg-gray-700"
        >
          {/* <Bars3Icon className='h-5 w-5' /> */}
          do
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  bg-orange-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 lg:right-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <nav>
                {role && role !== "requested" ? (
                  <>{role === "admin" ?  <>
                  <h3 className="text-2xl font-bold font-serif ">
                    Admin DashBoard
                  </h3>
                  <hr />
                </> :   <>
                <h3 className="text-2xl font-bold font-serif ">
                  Buyer DashBoard
                </h3>
                <hr />
              </>}</>
                ) : (
                    <>
                    <h3 className="text-2xl font-bold font-serif ">
                      Seller DashBoard
                    </h3>
                    <hr />
                  </>
                )}
              </nav>
            
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {role && role !== "requested" ? (
                <>{role === "admin" ? <AdminMenu /> : <BuyerMenu />}</>
              ) : (
                <SellerMenu />
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <div>
            <Link to="/">Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashobarSideBar;
