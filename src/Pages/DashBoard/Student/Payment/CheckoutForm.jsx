import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useCustomAxios from "../../../../hooks/useCustomAxios";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ amount, classItem }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useCustomAxios();
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  useEffect(() => {
    if (amount > 0) {
      axiosSecure.post("/create-payment-intent", { amount }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [amount, axiosSecure]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    // create a card
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // create payment method
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error=", error);
      setErrorMessage(error.message);
    } else {
      setErrorMessage("");
    }
    setPaymentProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "Unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setPaymentProcessing(false);
    if (paymentIntent.status == "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        transactionId: paymentIntent.id,
        date: new Date(),
        email: user?.email,
        classItem,
      };
      axiosSecure
        .post(`/payments/${classItem.classId}`, payment)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Your payment has successful");
          }
        });
    }
    // console.log("payment intent", paymentIntent);
  };

  return (
    <div>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
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
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || paymentProcessing}
        >
          Pay
        </button>
      </form>
      <div>{errorMessage}</div>
      <div>
        {transactionId && (
          <p className="text-green-500">TransactionId: {transactionId}</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
