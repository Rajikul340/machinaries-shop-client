import React from "react";
import { UserContext } from "../../AuthProvider/AuthProvider";
import DashobarSideBar from "./DashobarSideBar";
import { useContext, useEffect, useState } from "react";
import { getRole } from "../../Auth/Auth";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { user } = useContext(UserContext);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className="">
      {loading ? (
        ""
      ) : (
        <>
          <DashobarSideBar role={role} />
          <div className="flex-1  md:ml-64">
            <div className="">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
