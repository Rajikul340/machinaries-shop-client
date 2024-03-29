import React, { useContext, useEffect, useState } from "react";
import { getRole } from "../../Auth/Auth";
import { UserContext } from "../../AuthProvider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(UserContext);
  console.log(user.email);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      // console.log('dashobr role', data);
      setLoading(false);
    });
  }, [user]);
  // console.log('role',role)

  return (
    <div className="h-screen text-gray-700 flex flex-col justify-center items-center pb-16">
      <div className="">
        <h1 className="lg:text-6xl capitalize font-serif font-bold text-orange-400">
          welcome to
        </h1>
        {/* <p className='lg:text-2xl  font-bold font-serif text-center'>Your DashBoard</p> */}
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        {role === "admin" && (
          <p className="text-3xl font-medium">Admin Dashboard</p>
        )}
        {role === "buyer" && (
          <p className="text-3xl font-medium">Buyer Dashboard</p>
        )}
        {role === "seller" && (
          <p className="text-3xl font-medium">Seller Dashboard</p>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
