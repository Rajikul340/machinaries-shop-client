import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="bg-black text-white mx-8" >
      <div className="navbar flex justify-between px-8">
        <div className="">
          <Link to="/" className="uppercase lg:text-2xl font-bold font-serif">

            Machinaries Shop
          </Link>
        </div>

        <div>
          <div className="mr-7">
            <Link
              className="text-lg text-orange-400 font-semibold font-serif mr-4"
              to="/blogs"
            >
              Blogs{" "}
            </Link>
            {/* <Link className="text-lg text-orange-400 font-semibold font-serif" to='/dashboard/whitelist'>WhiteList </Link> */}
          </div>
          {user?.email ? (
            <>
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={user?.photoURL ? user?.photoURL : ""}
                        referrerPolicy="referrerPolicy"
                        alt=""
                      />
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
                      <button className="border-0" onClick={handleLogOut}>
                        signout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4">
                <Link
                  className="text-lg text-orange-400 font-semibold font-serif"
                  to="/register"
                >
                  Registration{" "}
                </Link>
                <Link
                  className="text-lg text-orange-400 font-semibold font-serif"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
