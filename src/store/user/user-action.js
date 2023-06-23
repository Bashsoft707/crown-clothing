import { baseUrl } from "../../constant";
import { createAction } from "../../utils/create-action";
import axios from "axios";

export const USER_ACTION = {
  SIGN_UP_START: "user/SIGN UP START",
  SIGN_IN_START: "user/SIGN IN START",
  SIGN_OUT_START: "user/SIGN OUT START",
  SIGN_UP_SUCCESS: "user/SIGN UP SUCCESS",
  SIGN_IN_SUCCESS: "user/SIGN IN SUCCESS",
  SIGN_OUT_SUCCESS: "user/SIGN OUT SUCCESS",
  SIGN_UP_FAILED: "user/SIGN UP FAILED",
  SIGN_IN_FAILED: "user/SIGN IN FAILED",
  SIGN_OUT_FAILED: "user/SIGN OUT FAILED",
};

export const setCurrentUser = (user) =>
  createAction(USER_ACTION.SET_CURRENT_USER, user);

export const fetchSignInStart = () => createAction(USER_ACTION.SIGN_IN_START);

export const fetchSignInSuccess = (user) =>
  createAction(USER_ACTION.SIGN_IN_SUCCESS, user);

export const fetchSignInFailed = (error) =>
  createAction(USER_ACTION.SIGN_IN_FAILED, error);

export const fetchSignUpStart = () => createAction(USER_ACTION.SIGN_UP_START);

export const fetchSignUpSuccess = (user) =>
  createAction(USER_ACTION.SIGN_UP_SUCCESS, user);

export const fetchSignUpFailed = (error) =>
  createAction(USER_ACTION.SIGN_UP_FAILED, error);

export const fetchSignOutStart = () => createAction(USER_ACTION.SIGN_OUT_START);

export const fetchSignOutSuccess = () =>
  createAction(USER_ACTION.SIGN_OUT_SUCCESS, null);

export const fetchSignOutFailed = (error) =>
  createAction(USER_ACTION.SIGN_OUT_FAILED, error);

export const fetchSignInAsync = (email, password) => {
  const formFields = { email, password };

  return async (dispatch) => {
    dispatch(fetchSignInStart());
    try {
      const res = await axios.post(`${baseUrl}/api/v1/auth/login`, formFields);
      await dispatch(fetchSignInSuccess(res.data));
    } catch (err) {
      dispatch(fetchSignInFailed(err));
    }
  };
};

export const fetchSignUpAsync = (name, email, password) => {
  const formFields = {
    name,
    email,
    password,
  };

  return async (dispatch) => {
    dispatch(fetchSignUpStart());
    try {
      const res = await axios.post(
        `${baseUrl}/api/v1/auth/register`,
        formFields
      );
      await dispatch(fetchSignUpSuccess(res.data));
    } catch (err) {
      dispatch(fetchSignUpFailed(err));
    }
  };
};

export const fetchSignOutAsync = () => {
  return async (dispatch) => {
    dispatch(fetchSignOutStart());
    try {
      await axios.get(`${baseUrl}/api/v1/auth/logout`);
      await dispatch(fetchSignOutSuccess(null));
    } catch (err) {
      dispatch(fetchSignOutFailed(err));
    }
  };
};
