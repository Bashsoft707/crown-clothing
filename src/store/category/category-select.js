import { createSelector } from "reselect";

const selectCategoryMap = (state) => state.category;

export const selectCategory = createSelector(
  [selectCategoryMap],
  (category) => category.categoryMap
);
