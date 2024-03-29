import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../CheckOut/CheckOut";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../../AuthProvider/AuthProvider";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
  const { user } = useContext(UserContext);
  const buyerOrder = useLoaderData();
  const orderData = buyerOrder.filter(
    (singleData) => singleData?.buyerEmail === user?.email
  );
  //   console.log('patment page but tanstan query data order', orderData);

  return (
    <div className="border mx-auto mt-40 w-96 p-4 ">
     
      <div className="">
        <Elements stripe={stripePromise}>
          {orderData?.map((singleData) => (
            <CheckOut key={singleData?._id} singleData={singleData} />
          ))}
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
