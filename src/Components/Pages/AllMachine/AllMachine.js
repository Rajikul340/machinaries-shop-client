import React from "react";
import { useLoaderData } from "react-router-dom";
import { useState, useContext } from "react";
import ProductPage from "../ProductPage/ProductPage";
import SingleCard from "../singleCard/SingleCard";
import { UserContext } from "../../AuthProvider/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";

const AllMachine = () => {
  const { loader } = useContext(UserContext);
  const allMachineData = useLoaderData();
 const [bookingData, setBookingData] = useState([])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
      {loader ? (
        <p>loading...</p>
      ) : (
        allMachineData.map((machinData) => (
          <SingleCard
            key={machinData?._id}
            setBookingData={setBookingData}
            machinData={machinData}
          ></SingleCard>

        ))
      )}
      <div>
        {
          bookingData && (
            <BookingModal
            bookingData={bookingData}
             setBookingData={setBookingData}
            ></BookingModal>
          )
        }

      </div>
    </div>
  );
};

export default AllMachine;
