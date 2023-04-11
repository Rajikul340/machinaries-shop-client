import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { UserContext } from "../../AuthProvider/AuthProvider";
import AdverticeCard from "./AdverticeCard";

const AdvertiseItem = () => {
  const { user } = useContext(UserContext);

  const {
    data: sellerData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["AllMachine"],
    queryFn: async () => {
      const res = await fetch();
      // ` http://localhost:5000/AllMachine`
      const data = await res.json();
      return data;
    },
  });
  const AdvertiseData = sellerData.filter(
    (adverData) => adverData?.sellerInfo?.sellerMail === user?.email
  );

  return (
    <div className="grid lg:grid-cols-3 gap-3 mt-10">
      {AdvertiseData?.map((singleData) => (
        <AdverticeCard
          key={singleData._id}
          singleData={singleData}
        ></AdverticeCard>
      ))}
    </div>
  );
};

export default AdvertiseItem;
