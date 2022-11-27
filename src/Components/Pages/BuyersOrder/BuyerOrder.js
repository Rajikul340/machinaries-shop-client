import React from "react";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import { toast } from "react-toastify";


const BuyerOrder = () => {
  const { user } = useContext(UserContext);

  const {
    data: buyerOrder = [],
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
  // console.log("query fun ", buyerOrder);

  const buyerData = buyerOrder.filter(
    (buyerDataByEmail) => buyerDataByEmail?.buyerEmail === user?.email
  );
  // console.log("buyer er orders ", buyerData);


  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want delete"
    );
    if (proceed) {
      fetch(`http://localhost:5000/AllMachine/${id}`, {
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
  }


  return (
    <div className="lg:mr-44 lg:ml-6">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="lg:text-2xl font-bold font-serif my-2">
            Order Details
          </h1>

          <table className="table w-full">
            <thead>
              <tr>
                <th>Avater</th>
                <th>Ttile</th>
                <th>Price</th>
                <th>Status </th>
                <th>Payment </th>
              </tr>
            </thead>
            <tbody>
              {buyerData?.map((singleData) => (
                <OrderDetails key={singleData?._id}
                handleDelete={handleDelete}
                singleData={singleData} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BuyerOrder;
