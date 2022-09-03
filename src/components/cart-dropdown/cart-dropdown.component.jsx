import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart-select";
import { Button } from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-select";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const goToCheckoutPage = () =>
    currentUser ? navigate("/checkout") : navigate("/auth");

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem, idx) => (
            <CartItem key={idx} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
