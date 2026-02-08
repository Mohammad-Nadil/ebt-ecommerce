import React from "react";
import Container from "./Container";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <div>
      <Container className="flex gap-24 py-6">
        <div className="product_images w-1/2 border "></div>
        <div className="product_info w-1/2 flex flex-col gap-8">
          <div className="top flex flex-col gap-2 ">
            <p className="text-2xl font-medium font-poppins">
              Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser
            </p>
            <div className="flex items-center gap-7">
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
                  <span className="font-semibold" >4,320</span> Sold
                </p>
              </div>
              <div className="btn"></div>
            </div>
          </div>
          <div className="price"></div>
          <div className="description"></div>
          <div className="size"></div>
          <div className="quantity_buttons"></div>
        </div>
      </Container>
    </div>
  );
};

export default ProductInfo;
