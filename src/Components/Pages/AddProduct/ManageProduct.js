import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UserContext } from "../../AuthProvider/AuthProvider";
import DisplaySellingData from "./DisplaySellingData";

const ManageProduct = () => {
  const { user } = useContext(UserContext);

  const {
    data: sellerData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["AllMachine"],
    queryFn: async () => {
      const res = await fetch(
        ` http://localhost:5000/AllMachine`
      );
      const data = await res.json();
      return data;
    },
  });
  const sellerDataByEmail = sellerData?.filter(
    (singleData) => singleData?.sellerInfo?.sellerMail === user?.email
  );
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want delete");
    if (proceed) {
      fetch(` http://localhost:5000/AllMachine/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            refetch();
          }
        });
    }
  };



    const handleAdvertise = (id) => {
      // const isAva = {
      //     type: 'publish'
      // }
      // fetch(`http://localhost:5000/AllMachine/publish/${id}`, {
      //     method: 'PUT',
      //     headers: {
      //         'content-type': 'application/json'
      //     },
      //     body: JSON.stringify(isAva)
      // }).then(rs => {
      //     refetch()
      //     toast.loading("comming soon")
      // })
      //     .catch(err => console.log(err))

      toast.success("coming  soon ")
  }


  return (
    <div className="">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h1 className="lg:text-2xl font-bold font-serif my-2">
              Selling Products
            </h1>

            <table className="table w-full">
              <thead>
                <tr>
                  <th>Avater</th>
                  <th>product</th>
                  <th>Status</th>
                  <th>Resale price</th>
                  <th>Delete </th>
                </tr>
              </thead>
              <tbody>
                {sellerDataByEmail.map((sellingData) => (
                  <DisplaySellingData
                    key={sellingData?._id}
                    sellingData={sellingData}
                    handleDelete={handleDelete}
                    handleAdvertise={handleAdvertise}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageProduct;
