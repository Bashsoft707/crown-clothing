import { createContext, useReducer } from "react";
import { createActions } from "../utils/create-actions";
import { SHOP_DATA } from "../shop-data";

const CATEGORY_ACTIONS = {
  SET_CATEGORY_MAP: "SET CATEGORY MAP",
};

const categoryReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTIONS.SET_CATEGORY_MAP:
      return {
        ...state,
        categoryMap: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in category reducer`);
  }
};

const INITIAL_STATE = {
  categoryMap: SHOP_DATA,
};

export const CategoryContext = createContext({
  categoryMap: [],
});

export const CategoryProvider = ({ children }) => {
  const [{ categoryMap }, dispatch] = useReducer(
    categoryReducer,
    INITIAL_STATE
  );

  const setCategoryMap = (category) =>
    dispatch(createActions(CATEGORY_ACTIONS.SET_CATEGORY_MAP, category));

  const value = { categoryMap, setCategoryMap };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
