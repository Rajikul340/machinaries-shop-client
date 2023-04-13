import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import AdminMenu from "../AdminMenu/AdminMenu";
import BuyerMenu from "../BuyerMenu/BuyerMenu";
import SellerMenu from "../SellerMenu/SellerMenu";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserContext } from "../../AuthProvider/AuthProvider";

const DashobarSideBar = ({ role, loading }) => {
  const { user } = useContext(UserContext)
  console.log("loading", loading);
  console.log("role", role);
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  
  return (
    // <div className="border border-red-700">
    //   {/* Small Screen Navbar */}
    //   <div className=" text-gray-800 flex justify-between md:hidden">
    //     <div>
    //       <div className="block cursor-pointer p-4 font-bold font-serif">
    //         <Link to="/">Machinaries Shop</Link>
    //       </div>
    //     </div>

    //     <button
    //       onClick={handleToggle}
    //       className="mobile-menu-button  p-4 focus:outline-none "
    //     >
    //       <Bars3Icon className="h-5 w-5" />
    //     </button>
    //   </div>

    //   <div
    //     className={`z-10 md:fixed flex flex-col justify-between overflow-y-hidden w-64 bg-base-200 space-y-6 px-2 py-4 absolute inset-y-0 lg:right-0 transform ${
    //       isActive && "-translate-x-full"
    //     }  md:translate-x-0  transition duration-200 ease-in-out`}
    //   >
    //     <div>
    //       <div>
    //         <div className="flex flex-col items-center mt-6 -mx-2"></div>
    //       </div>

    //       <div className="flex flex-col justify-between flex-1 mt-6">
    //         <nav>
    //           {role === "admin" && <AdminMenu role={role} />}
    //           {role === "buyer" && <BuyerMenu role={role} />}
    //           {role === "seller" && <SellerMenu role={role} />}
    //         </nav>
    //       </div>
    //     </div>

    //     <div>
    //       <hr />
    //       <div>
    //         <Link to="/">Back To Home</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
    {/* Small Screen Navbar */}
    <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
      <div>
        <div className='block cursor-pointer p-4 font-bold'>
          <Link to='/'>Machinaries Shop</Link>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
      >
        <Bars3Icon className='h-5 w-5' />
      </button>
    </div>
    {/* Sidebar */}
    <div
      className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
        isActive && '-translate-x-full'
      }  md:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        {/* Branding & Profile Info */}
        <div>
          <h2 className='text-3xl cursor-pointer font-semibold text-center text-gray-800 '>
          <Link to='/'>Machinaries Shop</Link>
          </h2>
          <div className='flex flex-col items-center mt-6 -mx-2'>
            <Link to='/dashboard'>
              <img
                className='object-cover w-24 h-24 mx-2 rounded-full'
                src={user?.photoURL}
                alt='avatar'
                referrerPolicy='no-referrer'
              />
            </Link>
            <Link to='/dashboard'>
              <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                {user?.displayName}
              </h4>
            </Link>
            <Link to='/dashboard'>
              <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                {user?.email}
              </p>
            </Link>
          </div>
        </div>

        {/* Nav Items */}
        <div className='flex flex-col justify-between flex-1 mt-6'>
        <nav>
               {role === "admin" && <AdminMenu role={role} />}
              {role === "buyer" && <BuyerMenu role={role} />}
             {role === "seller" && <SellerMenu role={role} />}
            </nav>
        </div>
      </div>

      <div>
        <hr />
     
      </div>
    </div>
  </>
  );
};

export default DashobarSideBar;
