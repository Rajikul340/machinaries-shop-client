import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { UserContext } from "../../AuthProvider/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import WhiteListCard from "./WhiteListCard";
import WhiteListModal from "./WhiteListModal";

const WhistList = () => {
  const { user } = useContext(UserContext);
  const [bookingData, setBookingData] = useState({});

  const {
    data: buyerOrder = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["AllMachine"],
    queryFn: async () => {
      const res = await fetch(
        ` https://machinaries-shop-server.vercel.app/AllMachine`
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log("query fun ", buyerOrder);

  const buyerData = buyerOrder.filter(
    (buyerDataByEmail) => buyerDataByEmail?.buyerEmail === user?.email
  );
  // console.log("buyer er orders ", buyerData);
  return (
    <div className="lg:mr-48 lg:ml-6">
      <h1 className="lg:text-3xl font-serif font-bold py-2">White List</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {buyerData?.map((singleData) => (
          <WhiteListCard
            key={singleData?._id}
            singleData={singleData}
            setBookingData={setBookingData}
          ></WhiteListCard>
        ))}
      </div>
      {
        <WhiteListModal
          bookingData={bookingData}
          setBookingData={setBookingData}
        ></WhiteListModal>
      }
    </div>
  );
};

export default WhistList;
