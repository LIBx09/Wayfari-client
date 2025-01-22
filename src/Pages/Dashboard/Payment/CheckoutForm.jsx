import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { useLocation } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  //   const axiosSecure = useAxiosSecure();
  //   const [bookings] = useBookingDB();
  //   console.log(bookings);
  //getting the booking id price into checkout form
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingPrice = queryParams.get("bookingPrice");
  // const [booking, setBooking] = useState([]);
  console.log("asdf", bookingPrice);

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.status);
    } else {
      console.log("paymentMethod", paymentMethod);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="btn btn-primary mt-5" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckoutForm;
