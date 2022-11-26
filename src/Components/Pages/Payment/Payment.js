import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../CheckOut/CheckOut";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const buyerOrder = useLoaderData();

  return (
    <div className="border w-96 p-4 ">
             <h1 className="mb-2">payment for {buyerOrder?.title}</h1>
      <div className="">
        <Elements stripe={stripePromise}>
          {
            <CheckOut 
            singleData={buyerOrder} />
            }
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
