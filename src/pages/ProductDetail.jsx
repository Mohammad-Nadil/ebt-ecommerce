import React from "react";
import Container from "../components/Container";
import ProductInfo from "../components/ProductInfo";
import ProductDescription from "../components/ProductDescription";
import ProductReview from "../components/ProductReview";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  return (
    <div>
      <Container>
        <section className="product-info">
          <ProductInfo />
        </section>
        <section className="product-description">
          <ProductDescription />
        </section>
        <section className="product-review">
          <ProductReview />
        </section>

        <ProductCard />
      </Container>
    </div>
  );
};

export default ProductDetail;
