import React from "react";

const Success = () => {
  return (
    <div className="my-10 ">
      <div className="">
        <h1 className="md:text-2xl text-lg capitalize font-bold ">
          read success stories
        </h1>
        <div className="flex my-5 justify-between">
          <p className="capitalize  md:text-lg">
            read how buyers and sellers have found success on machinaries
            platform
          </p>
          <p className="text-blue-500 hover:border-b-2 md:text-lg  ">see more </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 gap-5">
        <div className="  max-w-md bg-base-100 shadow-xl my-5">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body">
            <p className="text-lg ">
              Daniel and Jason, co-founders and band members, started their
              online business journey at the beginning of the dot-com boom. They
              created three websites in the guitar review niche, with Gearank.
              <span className="text-blue-500 hover:border-b-2 ">
                Read More..
              </span>
            </p>
          </div>
        </div>
        <div className=" my-5 max-w-md bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body">
            <p className="text-lg ">
              Uncovering Japan’s VPN Opportunity Gap: Selling Ramune for $310K
              on machinaries Marketplace
              <span className="text-blue-500 hover:border-b-2 mx-1">
                Read More..
              </span>
            </p>
          </div>
        </div>
        <div className=" my-5 max-w-md bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body">
            <p className="text-lg ">
              Turning Tragedy into Triumph: The Inspiring Story of Jill Tucker
              Selling Her Ecommerce Business for $533K on machinaries
              Marketplace 
              <span className="text-blue-500 hover:border-b-2 mx-1 ">
               Read more 
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
