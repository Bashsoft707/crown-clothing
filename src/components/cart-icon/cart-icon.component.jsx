import React, { memo } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart-select";
import { setIsCartOpen } from "../../store/cart/cart-action";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useSelector, useDispatch } from "react-redux";

export const CartIcon = memo(() => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemCount = useSelector(selectCartCount);

  const dispatch = useDispatch();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
});
