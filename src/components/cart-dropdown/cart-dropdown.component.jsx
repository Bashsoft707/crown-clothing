import Button from "../button/button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartItems>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </CartItems>
      <Button>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
