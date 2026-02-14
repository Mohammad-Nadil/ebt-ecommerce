import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";
import Container from "./Container";
import ProductCard from "./ProductCard";
import { FaAngleDown } from "react-icons/fa";

const FeatureProducts = ({ items , quantity }) => {
  const [number , setNumber] = useState(quantity);
  return (
    <section id="feature-deals" className="py-20">
      <Container className={`flex flex-col gap-y-10`}>
        <div className="heading flex items-center justify-between">
          <h2 className="text-2xl font-medium font-poppins">
            Feature Products
          </h2>
          <NavLink
            to="/product"
            className="font-medium text-neutral-500 flex items-center gap-x-4"
          >
            <p>View more</p> <FaArrowRightLong />{" "}
          </NavLink>
        </div>
        <div className="main grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
          {new Array(number).fill(items).map((item, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <div  className="btn flex justify-center ">
          <button onClick={() => setNumber(prev => prev + 4)} className="text-white flex items-center gap-x-2 bg-primary py-2 px-4 rounded-full" >
            <p>Show more</p>
            <FaAngleDown />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FeatureProducts;
