import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart-select";
import { useSelector } from "react-redux";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { PaymentForm } from "../../components/payment-form/payment-form.component";
import { selectCurrentUser } from "../../store/user/user-select";
import { Navigate } from "react-router-dom";

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

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
      {cartItems.map((cartItem, index) => (
        <CheckoutItem key={index} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartItemTotal}</Total>\
      <PaymentForm />
    </CheckoutContainer>
  ) : (
    <Navigate to={{ pathname: "/auth" }} />
  );
};
