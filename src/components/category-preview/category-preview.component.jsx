import React from "react";
import { ProductCard } from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title.toLowerCase()}>
        <span>{title}</span>
      </Title>
      <Preview>
        {products
          ?.filter((_, idx) => idx < 4)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
