import React from 'react';
import { NavLink } from 'react-router-dom';


const SellerMenu = ({role}) => {
    return (
        <>
        <h1 className='lg:text-2xl font-serif font-bold' >{role} Dahsobard</h1>
        <NavLink
          to='/dashboard/AddProduct'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
   
  
          <span className='mx-4 font-medium'>Add Product</span>
        </NavLink>
  
        <NavLink
          to='/dashboard/adminRequest'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
    
  
          <span className='mx-4 font-medium'>Admin Request</span>
        </NavLink>

        <NavLink
          to='/dashboard/manageProduct'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
      
  
          <span className='mx-4 font-medium'>Manage Product</span>
        </NavLink>
      </>
    );
};

export default SellerMenu;