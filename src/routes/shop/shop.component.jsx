import React, { useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/productsContext";
import { ProductContainer } from "./shop.styles";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ProductContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductContainer>
  );
};
