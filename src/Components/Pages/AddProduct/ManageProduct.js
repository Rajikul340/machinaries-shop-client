import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UserContext } from "../../AuthProvider/AuthProvider";
import DisplaySellingData from '../AddProduct/DisplaySellingData'

const ManageProduct = () => {
  const { user } = useContext(UserContext);

  const {
    data: sellerData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["AllMachine"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/AllMachine`);
      const data = await res.json();
      return data;
    },
  });
  const sellerDataByEmail = sellerData.filter(
    (singleData) => singleData?.sellerInfo?.sellerMail === user?.email
  );
  console.log("selelr mail data", sellerDataByEmail);

  console.log("sellerData,", sellerData);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            {
                sellerDataByEmail.map(sellingData=> <DisplaySellingData
                 key={sellingData?._id}
                 sellerData={sellingData}
                />)
            }
            </div>
        </>
      )}
    </div>
  );
};

export default ManageProduct;
