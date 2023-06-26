import { createAction } from "../../utils/create-action";

export const CART_ACTIONS = {
  SET_CART_ITEMS: "cart/SET CART ITEMS",
  TOGGLE_CART_OPEN: "cart/TOGGLE CART OPEN",
};

// <-- Helper functions -->
const addItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem._id === productToAdd._id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === productToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

// <-- functions to dispatch -->
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeItem(cartItems, productToRemove);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearItem(cartItems, productToClear);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTIONS.TOGGLE_CART_OPEN, bool);
