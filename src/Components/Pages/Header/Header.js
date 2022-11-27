import React from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../../AuthProvider/AuthProvider";
import {useContext} from 'react'

const Header = () => {
  const{user, logOut} = useContext(UserContext);

  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch()
  }

  return (
<div className="bg-black text-white">
<div className="navbar flex justify-between px-8">
      <div className="">
        <Link to="/" className='uppercase lg:text-2xl font-bold font-serif'>
          {" "}
          Machinaries Shop
        </Link>
      </div>
     
    <div>
   
   <div className="mr-7">
   <Link className="text-lg text-orange-400 font-semibold font-serif mr-4" to='/blogs'>Blogs </Link>
   {/* <Link className="text-lg text-orange-400 font-semibold font-serif" to='/dashboard/whitelist'>WhiteList </Link> */}
   </div>
    {
      user?.email ?
      <>
       <div className="flex-none">
        
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL ?  user?.photoURL : ''}referrerPolicy='referrerPolicy' alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
          >
            <li>
              <Link to="/login" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
             <button className='border-0' onClick={handleLogOut}>signout</button>
            </li>
            
          </ul>
        </div>
      </div>
      </>
      :
       <>
      <div className="flex gap-4">
        
         
        <Link className="text-lg text-orange-400 font-semibold font-serif" to='/register'>Registration </Link>
        <Link className="text-lg text-orange-400 font-semibold font-serif" to='/login'>Login</Link>
      </div>
      </>
     }
      
    
    </div>
    </div>
</div>
  );
};

export default Header;
