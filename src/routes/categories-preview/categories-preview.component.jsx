import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
  selectCategory,
  selectIsCategoryLoading,
} from "../../store/category/category-select";

export const CategoriesPreview = () => {
  const categoryMap = useSelector(selectCategory);
  const isLoading = useSelector(selectIsCategoryLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        categoryMap &&
        categoryMap.map((categories, idx) => {
          const products = categories.items;
          return (
            <CategoryPreview
              key={idx}
              title={categories.title}
              products={products}
            />
          );
        })
      )}
    </Fragment>
  );
};
