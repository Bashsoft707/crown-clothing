import { createAction } from "../../utils/create-action";

export const USER_ACTION = {
  SET_CURRENT_USER: "SET CURRENT USER",
};

export const setCurrentUser = (user) =>
  createAction(USER_ACTION.SET_CURRENT_USER, user);
