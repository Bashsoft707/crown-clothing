import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoryContext } from "../../context/categoryContext";
import { CategoryContainer, Title } from "./category.styles";

export const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoryContext);
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
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
