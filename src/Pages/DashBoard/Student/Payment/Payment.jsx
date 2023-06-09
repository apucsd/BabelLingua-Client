import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();

  const amount = location?.state;
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  const options = {
    mode: "payment",
    amount: amount,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
      theme: "stripe",
    },
  };

  return (
    <div className="p-10">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={amount} />
      </Elements>
    </div>
  );
};

export default Payment;
