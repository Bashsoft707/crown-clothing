import React, { useContext, Fragment } from "react";
import { CategoryContext } from "../../context/categoryContext";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoryContext);

  return (
    <Fragment>
      {categoryMap.map((categories, idx) => {
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
