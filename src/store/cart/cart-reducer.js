import { CART_ACTIONS } from "./cart-action";

const INITIAL_CART_STATES = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_CART_STATES, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
