import React from "react";

const Achievement = () => {
  return (
   <div className="bg-black   mt-10">
      <div className="md:h-[50vh] md:flex items-center text-white  ">
      <div className="card  ">
        <div className="card-body">
          <h2 className="card-title md:text-4xl text-2xl">10, 000 +</h2>
          <strong className="text-slate-200">seller</strong>
          <p>
            more than 40 k successful seller have used our eCommerce platform to
            host and deliver their products to millions of customers all over
            the world
          </p>
        </div>
      </div>
      <div className="card  ">
        <div className="card-body">
          <h2 className="card-title md:text-4xl text-2xl">5, 000 +</h2>
          <strong className="text-slate-200">buyer</strong>
          <p>
            Our seller have earned more than $200M+ in buyer using our platform
            to sell merch, subscriptions as well as digital and physical
            products to fans.
          </p>
        </div>
      </div>
      <div className="card  ">
        <div className="card-body">
          <h2 className="card-title md:text-4xl text-2xl">15, 000 +</h2>
          <strong className="text-slate-200">Products</strong>
          <p>
            machinaries shop creatores have sold over $1k+ products to a global
            audience from their onlinve stories and so van you open yours today
            and start making money.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Achievement;
