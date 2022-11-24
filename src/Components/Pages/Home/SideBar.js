import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/machine_category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className=" w-2/3  ">
      <h1 className="text-xl font-bold font-serif my-2">Categories</h1>
      <hr />
      {categories.map((category) => (
        <p key={category?.categoroy_id}>
          <Link to={`/AllMachine/${category?.category_id}`}>
            <p className="capitalize"> {category?.name}</p>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default SideBar;
