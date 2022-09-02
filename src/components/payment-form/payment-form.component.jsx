import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentContainer, FormContainer } from "./payment-form.styles";
import { selectCurrentUser } from "../../store/user/user-select";
import { selectCartTotal } from "../../store/cart/cart-select";
import { useSelector } from "react-redux";

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser : "Guest",
        },
      },
    });

    setIsProcessing(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };

  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          isLoading={isProcessing}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentContainer>
  );
};
