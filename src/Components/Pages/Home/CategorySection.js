import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../Style/Style.css'


const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(" https://machinaries-shop-server.vercel.app/machine_category")
      .then((res) => res.json())
      .then((data) => {
        console.log("category data ", data);
        setCategories(data);
      });
  }, []);

  return (
    <div className="   ">
      <div className="my-10 text-center">
        <h1 className="md:text-4xl uppercase text-2xl   font-bold">
          Categories
        </h1>
        <hr className="border border-orange-400 w-64 my-2 mx-auto" />
      </div>
      <div className="md:flex md:justify-between">
        {categories?.map((category) => (
          <>
            <div className="border my-6 md:my-0 " key={category?.category_id}>
              <Link to={`/machine_category/${category?.category_id}`}>
                <div className="  my-element bg-base-100 shadow-xl" >
                  <figure>
                    <img
                      src={category.img}
                      className="w-96 h-96"
                      alt="category"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{category?.name}</h2>
                    <div className="card-actions justify-end">
                      <button
                      className="btn  hover:border-orange-300 border border-orange-300 btn-outline hover:bg-orange-300"
                      >Details</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
