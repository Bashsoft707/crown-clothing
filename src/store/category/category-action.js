import axios from "axios";
import { createAction } from "../../utils/create-action";

export const CATEGORY_ACTION = {
  FETCH_CATEGORIES_START: "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS: "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILURE: "category/FETCH_CATEGORIES_FAILURE",
};

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORY_ACTION.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORY_ACTION.FETCH_CATEGORIES_FAILURE, error);

export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const response = await axios.get(
        "https://crown-clothing-backend.onrender.com/api/v1/categories"
      );
      await dispatch(fetchCategoriesSuccess(response.data.data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
