import { CATEGORY_ACTION } from "./category-action";

const INITIAL_STATE = {
  categoryMap: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true
      };
      case CATEGORY_ACTION.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoryMap: payload,
        isLoading: false
      };
      case CATEGORY_ACTION.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    default:
      return state;
  }
};
