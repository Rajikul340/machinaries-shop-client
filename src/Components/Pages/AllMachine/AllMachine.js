import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState, useContext } from "react";
import ProductPage from "../ProductPage/ProductPage";
import SingleCard from "../singleCard/SingleCard";
import { UserContext } from "../../AuthProvider/AuthProvider";

const AllMachine = () => {
  const { loading } = useContext(UserContext);

  const allMachineData = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
      {loading ? (
        <p>loading...</p>
      ) : (
        allMachineData.map((machinData) => (
          <SingleCard
            key={machinData?._id}
            machinData={machinData}
          ></SingleCard>
        ))
      )}
      <div></div>
    </div>
  );
};

export default AllMachine;
