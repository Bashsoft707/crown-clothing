import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { PaymentForm } from "../../components/payment-form/payment-form.component";
import { Navigate } from "react-router-dom";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { memo } from "react";
import { UserContext } from "../../context/userContext";

export const Checkout = memo(() => {
  const { cartItems, cartItemTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  return currentUser ? (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartItemTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  ) : (
    <Navigate to={{ pathname: "/auth" }} />
  );
});