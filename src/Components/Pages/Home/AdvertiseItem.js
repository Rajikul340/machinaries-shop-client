// import { useQuery } from "@tanstack/react-query";
// import React, { useContext } from "react";
// import { UserContext } from "../../AuthProvider/AuthProvider";
// import AdverticeCard from "./AdverticeCard";
// import { useParams } from "react-router-dom";

// const AdvertiseItem = () => {
//   const { user } = useContext(UserContext);
//   const {id} = useParams();
//   console.log('id', id);

//   const {
//     data: sellerData = [],
//     refetch,
//     isLoading,
//   } = useQuery({
//     queryKey: ["AllMachine"],
//     queryFn: async () => {
//       const res = await fetch(` http://localhost:5000/AllMachine`);
//       const data = await res.json();
//       return data;
//     },
//   });
//   const AdvertiseData = sellerData.filter(
//     (adverData) => adverData?.sellerInfo?.sellerMail === user?.email
//   );

//   const url = `http://localhost:5000/advertises?available=available&&type=publish`;

//   const { data: adsData = [] } = useQuery({
//       queryKey: ['ad'],
//       queryFn: async () => {
//           fetch(url)
//           const res = await fetch(url)
//           const data = await res.json();
//           return data.data
//       }
//   })
//   return (
//     <div className="mt-10">
//     <div className="my-10 text-center">
//         <h1 className="md:text-4xl uppercase text-2xl   font-bold">
//           advertisement items
//         </h1>
//         <hr className="border border-orange-400 w-80 my-2 mx-auto" />
//       </div>
//       <div className="grid lg:grid-cols-3 gap-3 ">
//     {AdvertiseData?.map((singleData) => (
//         <AdverticeCard
//           key={singleData._id}
//           singleData={singleData}
//         ></AdverticeCard>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default AdvertiseItem;
