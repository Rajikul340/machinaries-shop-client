import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BuyerDetails from "../BuyerDetails/BuyerDetails";
import { toast } from "react-toastify";

const AllBuyers = () => {
  const {
    data: buyerData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        ` http://localhost:5000/users`
      );
      const data = await res.json();
      return data;
    },
  });
  const BuyersData = buyerData.filter(
    (SingleBuyer) => SingleBuyer.role === "buyer"
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
        });
    }
  };

  return (
    <div className="lg:mr-44 lg:ml-6">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h1 className="lg:text-2xl font-bold font-serif my-2">
              Buyer Details
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
                {BuyersData.map((buyerDetails) => (
                  <BuyerDetails
                    key={buyerDetails._id}
                    buyerDetails={buyerDetails}
                    handleDelete={handleDelete}
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

export default AllBuyers;
