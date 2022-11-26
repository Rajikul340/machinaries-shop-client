import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import SellerDetails from "../SellerDetails/SellerDetails";
import { toast } from "react-toastify";
import {useNavigate}  from 'react-router-dom'

const AllSeller = () => {
  const [sellerData, setSellerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/users").then((data) => {
      console.log(data);
      setSellerData(data.data);
      setLoading(false);
    });
  }, []);

  const AllsellerData = sellerData.filter(
    (singleData) => singleData?.role === "seller"
  );

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want delete"
    );
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
          
            toast.success("Deleted successfully");
          
          
          }
        setSellerData(" ")
      });
    }
  };

  console.log("single seler", AllsellerData);
  return (
    <div className="lg:mr-44 lg:ml-6">
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
                <th>Email</th>
                <th>Role </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {AllsellerData?.map((sellerInfo) => (
                <SellerDetails
                 key={sellerInfo._id} 
                 sellerInfo={sellerInfo} 
                 handleDelete ={handleDelete}
                 />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllSeller;
