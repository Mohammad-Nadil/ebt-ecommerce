import React, { useState } from "react";
import Container from "./Container";
import { IoMdStar } from "react-icons/io";
import {
  FaAngleDown,
  FaAngleUp,
  FaCheck,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
import product1 from "/Images/download1.jpg";
import product2 from "/Images/download2.jpg";
import product3 from "/Images/download3.jpg";
import product4 from "/Images/download4.jpg";
import { motion, AnimatePresence } from "framer-motion";

const ProductInfo = () => {
  const [size, setSize] = useState("S");
  const sizes = ["S", "M", "L", "XL"];

  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  let images = [product1, product2, product3, product4];
  const [active, setActive] = useState(0);
  return (
    <div>
      <Container className="flex flex-col lg:flex-row gap-5 2xl:gap-24 py-6">
        <div className="product_images lg:w-1/2  ">
          <div className="product_gallery flex gap-x-6">
            <div className="w-full aspect-square relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={images[active]}
                  alt="product"
                  className="h-full w-full object-contain absolute inset-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>

            <div className="w-1/6 flex flex-col gap-y-3 h-full">
              <button
                onClick={() =>
                  setActive((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  )
                }
                className="w-full aspect-video grid place-content-center text-4xl hover:scale-150 hover:cursor-pointer duration-300"
              >
                <FaAngleUp />
              </button>
              {images.map((image, index) => (
                <div
                  onClick={() => setActive(index)}
                  key={index}
                  className={`w-full aspect-square overflow-hidden cursor-pointer transition duration-300  ${active === index ? "ring-2 ring-primary scale-105" : "hover:scale-110"}`}
                >
                  <img className="h-full w-full object-contain" src={image} alt="product" />
                </div>
              ))}
              <button
                onClick={() => setActive((prev) => (prev + 1) % images.length)}
                className="w-full aspect-video grid place-content-center text-4xl hover:scale-150 hover:cursor-pointer duration-300 "
              >
                <FaAngleDown />
              </button>
            </div>
          </div>
          <div className="product_social"></div>
        </div>
        <div className="product_info l:w-1/2  flex flex-col gap-8">
          <div className="top flex flex-col gap-2 ">
            <p className="text-2xl font-medium font-poppins">
              Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:gap-7">
              <div className="rating flex items-center gap-1.5">
                <p className="text-lg font-poppins font-medium">4.0</p>
                <div className="flex gap-1 items-center text-[#ffb340] text-2xl">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar className="text-gray-400" />
                </div>
                <p className="total text-lg text-[#bababa]">(223)</p>
              </div>
              <div className="sold flex items-center gap-2.5">
                <FaCheck className="text-green-500" />
                <p className="text-lg ">
                  <span className="font-semibold">4,320</span> Sold
                </p>
              </div>
              <div className="btn flex items-center gap-2.5    group">
                <FaHeart className="text-xl text-gray-400 " />
                <button className="text-lg text-primary  font-poppins group-hover:font-bold group-hover:cursor-pointer duration-300  ">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="pricing flex flex-col gap-y-2.5">
            <div className="price flex items-center justify-between sm:justify-start xs:gap-4 font-poppins">
              <p className="text-4xl  font-semibold text-primary pr-1.5">
                $976.33
              </p>
              <del className="text-xl text-gray-400">$1,200.99</del>
              <p className="tag text-sm text-white py-1 px-2.5 bg-linear-to-tr from-[#ff7a00] to-[#ff8800] rounded-sm ">
                20%
              </p>
            </div>
            <div className="stock flex items-center gap-5">
              <p className="text-gray-600 leading-[1.5%]">
                <span className="text-black font-medium">SKU :</span>12341234134
              </p>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-green-500 text-xl" />
                <p className="text-gray-600">In Stock</p>
              </div>
            </div>
          </div>
          <div className="description flex flex-col gap-2.5">
            <p className="text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <ul className="list-disc pl-8 text-lg flex flex-col gap-1.5">
              <li> Direct Full Array</li>
              <li>Quantum Dot Technology</li>
              <li>Ambient Mode</li>
              <li>One Remote Control</li>
            </ul>
          </div>
          <div className="size flex items-center gap-5">
            <p className="text-lg font-medium font-poppins">Size</p>

            <div className="flex items-center gap-3">
              {sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`w-9 h-7 rounded-sm text-lg font-medium grid place-content-center transition duration-300
              ${size === item ? "bg-primary text-white " : " text-black "}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="quantity_buttons flex flex-col xl:flex-row xl:items-center gap-y-3 gap-x-9">
            <div className="quantity flex items-center gap-x-2">
              <p className="text-lg font-medium font-poppins">Quantity :</p>

              <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden ">
                <button
                  onClick={decrease}
                  className="w-9 h-9 grid place-content-center text-xl font-medium bg-gray-200"
                >
                  −
                </button>

                <span className="w-10 h-9 grid place-content-center border-x text-lg border-gray-300 font-medium">
                  {quantity}
                </span>

                <button
                  onClick={increase}
                  className="w-9 h-9 grid place-content-center text-xl font-medium bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            <button className="py-3 sm:max-w-3xs px-8 border border-primary text-primary text-xl font-medium hover:bg-primary hover:cursor-pointer hover:text-white duration-300 bg-primary/5 rounded-sm">
              Add to Cart
            </button>
            <button className="py-3 sm:max-w-3xs px-8 border border-primary text-primary text-xl font-medium hover:bg-primary hover:cursor-pointer hover:text-white duration-300 bg-primary/5 rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductInfo;
