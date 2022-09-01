import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from "./category.styles";
import { useSelector } from "react-redux";
import {
  selectCategory,
  selectIsCategoryLoading,
} from "../../store/category/category-select";
import { Spinner } from "../../components/spinner/spinner.component";

export const Category = () => {
  const { category } = useParams();
  const categoryMap = useSelector(selectCategory);
  const isLoading = useSelector(selectIsCategoryLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredCategory = categoryMap.filter(
      (categories) => categories.title.toLowerCase() === category
    );
    filteredCategory.map((category) => setProducts(category.items));
  }, [category, categoryMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};
