import { CATEGORY_ACTION } from "./category-action";

const INITIAL_STATE = {
  categoryMap: [],
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION.SET_CATEGORY_MAP:
      return {
        ...state,
        categoryMap: payload,
      };
    default:
      return state;
  }
};
