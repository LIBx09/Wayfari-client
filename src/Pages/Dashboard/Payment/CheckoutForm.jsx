/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const [bookingData, SetBookingData] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get("booking");

  const bookingPrice = parseInt(bookingData?.packagePrice);

  useEffect(() => {
    if (bookingId) {
      axiosSecure
        .get(`/bookings/${bookingId}`)
        .then((response) => {
          SetBookingData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [axiosSecure, bookingId]);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axiosSecure.post("/create-payment-intent", {
          price: bookingPrice,
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        setError("Failed to initialize payment. Please try again.");
      }
    };

    if (bookingPrice) {
      createPaymentIntent();
    }
  }, [axiosSecure, bookingPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setProcessing(true);

    if (!stripe || !elements) {
      setError("Stripe is not properly initialized.");
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Payment card details are required.");
      setProcessing(false);
      return;
    }

    try {
      const { error: methodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (methodError) {
        throw new Error(methodError.message);
      }

      const { error: confirmError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });
      if (confirmError) {
        throw new Error(confirmError.message);
      } else {
        setSuccess(`Payment successful! Transaction ID: ${paymentIntent.id}`);
        const payment = {
          transactionId: paymentIntent.id,
          price: bookingPrice,
          email: user?.email,
          date: new Date().toLocaleString(),
        };
        const res = await axiosSecure.put(`/bookings/${bookingId}`, payment);
        console.log(res.data);
      }

      toast.success("Payment successful! Redirecting to dashboard...");
    } catch (err) {
      setError(err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-4 shadow-md rounded bg-white"
    >
      <h2 className="text-xl font-semibold text-center mb-4">
        Complete Your Payment
      </h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              fontFamily: "'Roboto', sans-serif",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="border border-gray-300 rounded p-2"
      />
      <button
        className={`btn btn-primary mt-5 w-full ${
          processing ? "btn-disabled" : ""
        }`}
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        {processing ? "Processing..." : "Pay"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </form>
  );
};

export default CheckoutForm;
