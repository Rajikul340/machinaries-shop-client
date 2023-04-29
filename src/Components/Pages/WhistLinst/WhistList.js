import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { UserContext } from "../../AuthProvider/AuthProvider";
import WhiteListCard from "./WhiteListCard";
import WhiteListModal from "./WhiteListModal";
import { toast } from "react-toastify";

const WhistList = () => {
  const { user } = useContext(UserContext);
  const [bookingData, setBookingData] = useState({});

  const {
    data: whiteListData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["whitelist"],
    queryFn: async () => {
      const res = await fetch(` https://machinaries-shop-server.vercel.app/whitelist`);
      const data = await res.json();
      return data;
    },
  });

  console.log("whitelist data", whiteListData);

  const handleDelete = (data) => {
    console.log("id", data);
    const proceed = window.confirm("Are you sure, you want delete");
    if (proceed) {
      fetch(` https://machinaries-shop-server.vercel.app/whitelist/${data?._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            // refetch();
          }
        });
    }
  };

  return (
    <div className="lg:mr-48 lg:ml-6">
      <h1 className="lg:text-3xl font-serif font-bold py-2">White List</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.isArray(whiteListData) && whiteListData?.length > 0 ? (
          whiteListData
            ?.filter((sData) => sData?.buyerEmail === user?.email)
            .map((singleData) => (
              <WhiteListCard
                handleDelete={handleDelete}
                key={singleData?._id}
                singleData={singleData}
                setBookingData={setBookingData}
              ></WhiteListCard>
            ))
        ) : (
          <p className="text-center mt-80">empty </p>
        )}
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
