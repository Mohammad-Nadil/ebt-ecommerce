import React, { useState } from "react";
import placeholder from "/Images/Product/placeholder.png";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
const ProductCard = ({ id, name, price, image, star, off , className }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      key={id || 1}
      className={`bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group ${className || ""}`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden w-full aspect-square bg-gray-50">
        <img
          src={image || placeholder}
          alt={name || "Product"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-[#0198E9] hover:text-white transition-colors "
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
        <p className={`absolute top-0 left-0 text-sm text-white bg-linear-to-r from-orange-400 to bg-yellow-400 py-1 px-3 ${!off && "hidden"}`}>
          - {off || 25}% off
        </p>
      </div>

      {/* Product Info */}
      <div className="p-2 sm:p-4 ">
        {/* Rating - 4 Orange + 1 Gray */}
        <div className="flex items-center gap-1 mb-2">
          {new Array(star || 5).fill(0).map((_, index) => (
            <FaStar key={index} className="text-starColor text-lg" />
          ))}
          <span className="text-sm text-gray-500 ml-1 font-poppins">(0)</span>
        </div>

        {/* Product Name */}
        <h3 className=" lg:text-2xl text-gray-700 sm:mb-3 line-clamp-2 min-h-10 font-poppins">
          {name || "Product Name"}
        </h3>

        {/* Price and Cart */}
        <div className="flex items-center justify-between">
          <span className="text-[#0198E9] font-bold text-lg font-poppins flex items-center">
            <TbCurrencyTaka className="text-2xl" />
            {price || 0}
          </span>
          <button className="bg-[#0198E9] text-white p-2 rounded-lg hover:bg-[#0177c1] transition-colors">
            <FiShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
