import { createAction } from "../../utils/create-action";

export const CATEGORY_ACTION = {
  SET_CATEGORY_MAP: "SET CATEGORY MAP",
};

export const setCategoryMap = (category) =>
  createAction(CATEGORY_ACTION.SET_CATEGORY_MAP, category);
