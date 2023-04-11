import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import SellerDetails from "../SellerDetails/SellerDetails";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { adminRequest, getAllSeller } from "../../Auth/Auth";

const AllSeller = () => {
  const [sellerData, setSellerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(" http://localhost:5000/users")
      .then((data) => {
        console.log(data);
        setSellerData(data.data);
        setLoading(false);
      });
  }, []);

  const AllsellerData = sellerData.filter(
    (singleData) => singleData?.role === "seller"
  );

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want delete");
    if (proceed) {
      fetch(` http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
          }
          setSellerData(" ");
        });
    }
  };

  const handleRequest = (user) => {
    adminRequest(user).then((data) => {
      console.log(data);
      getUsers();
    });
  };
  const getUsers = () => {
    setLoading(true);
    getAllSeller().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  };
  console.log("single seler", AllsellerData);
  return (
    <div className="lg:mr-48 lg:ml-6">
      {loading ? (
        <p>Loading ..</p>
      ) : (
        <div>
          <h1 className="lg:text-2xl font-bold font-serif my-2">
            Seller Details
          </h1>

          <table className="table w-full">
            <thead>
              <tr>
                <th>Avater</th>
                <th>Name</th>
                <th>Role</th>
                <th>Action </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {sellerData.map((singleData) => (
                <tr key={singleData._id}>
                  <th>
                    <img
                      src={singleData.img}
                      className="w-16 h-16 rounded-full"
                      alt=""
                    />
                  </th>
                  <td>{singleData.name}</td>
                  <td className="px-5 py-5 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {singleData?.role ? singleData.role : "seller"}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    {singleData?.role && singleData.role === "requested" && (
                      <span
                        onClick={() => handleRequest(sellerData)}
                        className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span aria-hidden="true" className="absolute "></span>
                        <span className="relative">
                          {loading ? " " : " Approve Request"}
                        </span>
                      </span>
                    )}
                  </td>
                  <td>
                    {singleData.role !== "admin" && (
                      <button
                        onClick={() => handleDelete(singleData._id)}
                        className="btn btn-xs btn-outline border-orange-300 text-white bg-orange-400"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

    //   <div className='container mx-auto px-4 sm:px-8'>
    //   <div className='py-8'>
    //     <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
    //       <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
    //         <table className='min-w-full leading-normal'>
    //           <thead>
    //             <tr>
    //               <th
    //                 scope='col'
    //                 className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
    //               >
    //                 Email
    //               </th>
    //               <th
    //                 scope='col'
    //                 className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
    //               >
    //                 Role
    //               </th>
    //               <th
    //                 scope='col'
    //                 className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
    //               >
    //                 Action
    //               </th>
    //             </tr>
    //           </thead>

    //           <tbody>
    //             {sellerData &&
    //               sellerData.map((user, i) => (
    //                 <tr key={i}>
    //                   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    //                     <p className='text-gray-900 whitespace-no-wrap'>
    //                       {user.email}
    //                     </p>
    //                   </td>

    //                   <td className='px-5 py-5 text-sm'>
    //                     <p className='text-gray-900 whitespace-no-wrap'>
    //                       {user?.role ? user.role : 'seller'}
    //                     </p>
    //                   </td>

    //                   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    //                     {user?.role && user.role === 'requested' && (
    //                       <span
    //                         onClick={() => handleRequest(sellerData)}
    //                         className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
    //                       >
    //                         <span
    //                           aria-hidden='true'
    //                           className='absolute '
    //                         ></span>
    //                         <span className='relative'>
    //                           {loading ? ' ' : ' Approve Request'}
    //                         </span>
    //                       </span>
    //                     )}
    //                   </td>
    //                 </tr>
    //               ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllSeller;
