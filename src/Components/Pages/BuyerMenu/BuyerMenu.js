import React from 'react';
import { NavLink } from 'react-router-dom';
import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid'


const BuyerMenu = ({role}) => {
    return (
        <>
        <h1 className='lg:text-2xl font-serif font-bold'>{role} dashboard</h1>
        <NavLink
          to='/dashboard/myorder'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
         
  
          <span className='mx-4 font-medium'>My Orders</span>
        </NavLink>
  
        <NavLink
          to='/dashboard/whitelist'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
         
  
          <span className='mx-4 font-medium'>WhiteList</span>
        </NavLink>
      </>
    );
};

export default BuyerMenu;