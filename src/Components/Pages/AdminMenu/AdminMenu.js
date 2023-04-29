import { FingerPrintIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (

   
    <div className="z-1">
    <NavLink
       to="/dashboard/allbuyers"
      className={({ isActive }) =>
        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        }`
      }
    >
   <UserPlusIcon className='w-5 h-5' />

      <span className="mx-4 font-medium">All Buyers</span>
    </NavLink>

    <NavLink
          to="/dashboard/allseller"
      className={({ isActive }) =>
        `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
        }`
      }
    >
      <UserPlusIcon className='w-5 h-5' />

      <span className="mx-4 font-medium">All Sellers</span>
    </NavLink>
  </div>
  );
};

export default AdminMenu;
