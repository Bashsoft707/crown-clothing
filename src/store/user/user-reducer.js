import { USER_ACTION } from "./user-action";

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION.SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case USER_ACTION.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case USER_ACTION.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    case USER_ACTION.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
