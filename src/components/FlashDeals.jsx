import Container from "./Container";
import React from "react";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";

const FlashDeals = () => {
  return (
    <section id="flash-deals">
      <Container className={`flex flex-col gap-y-10`}>
        <div className="heading flex items-center justify-between">
          <h2 className="text-2xl font-medium font-poppins">Flash Deals</h2>
          <NavLink to="/product" className="font-medium text-neutral-500 flex items-center gap-x-4">
            <p>View more</p> <FaArrowRightLong />{" "}
          </NavLink>
        </div>
        <div className="main grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          <ProductCard off={25}  />
          <ProductCard off={25} />
          <ProductCard off={25} />
          <ProductCard off={25} className={`sm:hidden xl:block`} />
        </div>
      </Container>
    </section>
  );
};

export default FlashDeals;
