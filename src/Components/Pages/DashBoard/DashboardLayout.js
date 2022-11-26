import React from "react";
import { UserContext } from "../../AuthProvider/AuthProvider";
import DashobarSideBar from "./DashobarSideBar";
import { useContext, useEffect, useState } from "react";
import { getRole } from "../../Auth/Auth";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const { user } = useContext(UserContext);
  console.log("daslyut user", user);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email)
    .then((data) => {
      console.log("role data", data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="">
     
        <>
       
          <DashobarSideBar role={role} />

          <div className="flex-1 m-5 ">
            <Outlet></Outlet>
          </div>
        </>
   
    </div>
  );
};

export default DashboardLayout;
