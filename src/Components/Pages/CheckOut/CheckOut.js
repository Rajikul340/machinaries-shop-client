import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOut = ({ singleData }) => {
  // console.log("checkout page theke data", singleData);
  const { email, buyer, resalePrice, title, _id } = singleData;
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [procces, setProcces] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcces(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      const err = error.message;
      setCardError(err);
    } else {
      setCardError("");
    }
    const { paymentIntent, error: confirmEror } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyer,
            email: email,
          },
        },
      });
    if (confirmEror) {
      setCardError(confirmEror.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
    }
    setProcces(false);
    const payment = {
      resalePrice,
      email,
      transactionId: paymentIntent.id,
      bookingId: _id,
    };

    fetch(" http://localhost:5000/payment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("paymetn data is", data);
        if (data.insertedId) {
          setSuccess("Congrates ! payment succesfull");
          setTransactionId(paymentIntent.id);
        }
      });
  };

  useEffect(() => {
    fetch(" http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("clinetsecret tak ", data.clientSecret);
        setClientSecret(data?.clientSecret);
      });
  }, [resalePrice]);

  return (
    <div>
      <h1 className="mb-2">payment for {title}</h1>
      <form onSubmit={handleSubmit}>
        <CardElement
          className=""
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm btn-outline bg-orange-400 mt-5"
          // disabled={!stripe || !clientSecret || procces }
        >
          Pay
        </button>
        <p className="text-red-400">{cardError}</p>
        {success && (
          <div>
            <p className="text-green-400">{success}</p>
            <p className="text-orange-400">transaction id:{transactionId}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckOut;



//pk_test_51M5vrACD94rrdGa3tyD1d2jSyLuuQSdLwtzvi17T3VaWbKLjsx41yRoA2ggrCPxuwi803Cj86KatR6qZvBXeke1V00bpQiG17l

//sk_test_51M5vrACD94rrdGa3Y9TF8e9ZVVLsKDDiO5B1rEyPSwWn6MS6MMWcgPNcWo2atVfPNfXTceh9aV9oNKcVK0LU6tNY00hKjFkWl1



