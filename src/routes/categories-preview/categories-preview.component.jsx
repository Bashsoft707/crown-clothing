import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";
import { selectCategory } from "../../store/category/category-select";

export const CategoriesPreview = () => {
  const categoryMap = useSelector(selectCategory);

  return (
    <Fragment>
      {categoryMap &&
        categoryMap.map((categories, idx) => {
          const products = categories.items;
          return (
            <CategoryPreview
              key={idx}
              title={categories.title}
              products={products}
            />
          );
        })}
    </Fragment>
  );
};
