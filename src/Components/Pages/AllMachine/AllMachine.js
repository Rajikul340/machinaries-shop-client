// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { useState, useContext } from "react";
// import SingleCard from "../singleCard/SingleCard";
// import { UserContext } from "../../AuthProvider/AuthProvider";
// import BookingModal from "../BookingModal/BookingModal";

// const AllMachine = () => {
//   const { loading } = useContext(UserContext);
//   const [bookingData, setBookingData] = useState([])

//   const {
//     data: allMechineData = [],
//     refetch,
//     isLoading,
//   } = useQuery({
//     queryKey: [`AllMachine/:id`],
//     queryFn: async ({params}) => {
//       const res = await fetch(` https://machinaries-shop-server.vercel.app/AllMachine/${params.id}`);
//       const data = await res.json();
//       return data;
//     },
//   });

// console.log('allmachine dta',allMechineData);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
//       {loading ? (
//         <p>loading...</p>
//       ) :

//          allMechineData &&

//          allMechineData.map(machineData=><SingleCard
//           machineData={machineData}
//          ></SingleCard>)
//       }
//       <div>
//         {
//           bookingData && (
//             <BookingModal
//             bookingData={bookingData}
//              setBookingData={setBookingData}
//             ></BookingModal>
//           )
//         }

//       </div>
//     </div>
//   );
// };

// export default AllMachine;
