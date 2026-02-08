import React, { useState } from "react";
import product1 from "/Images/Product/placeholder.png";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Product = () => {
  // States
  const [priceRange, setPriceRange] = useState([1000, 12500]);
  const [selectedRating, setSelectedRating] = useState(4);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);

  // Categories data
  const categories = [
    { name: "Men's Fashion", href: "#" },
    { name: "Men's Jacket", href: "#", active: true },
    { name: "Men's T-Shirts", href: "#" },
    { name: "Casual Shirts", href: "#" },
    { name: "Summer T-Shirts", href: "#" },
  ];

  // Products data
  const products = [
    {
      id: 1,
      image: product1,
      name: "Headrest Executive Mesh Office Chair set",
      price: 5000,
      rating: 0,
    },
    {
      id: 2,
      image: product1,
      name: "Women black dress and red hat collections",
      price: 1000,
      rating: 0,
    },
    {
      id: 3,
      image: product1,
      name: "Women fashion dress set",
      price: 1000,
      rating: 0,
    },
    {
      id: 4,
      image: product1,
      name: "Women fashion dress set",
      price: 1000,
      rating: 0,
    },
    {
      id: 5,
      image: product1,
      name: "Headrest Executive Mesh Office Chair set",
      price: 5000,
      rating: 0,
    },
    {
      id: 6,
      image: product1,
      name: "Women black dress and red hat collections",
      price: 1000,
      rating: 0,
    },
    {
      id: 7,
      image: product1,
      name: "Headrest Executive Mesh Office Chair set",
      price: 5000,
      rating: 0,
    },
    {
      id: 8,
      image: product1,
      name: "Women black dress and red hat collections",
      price: 1000,
      rating: 0,
    },
    {
      id: 9,
      image: product1,
      name: "Women fashion dress set",
      price: 1000,
      rating: 0,
    },
    {
      id: 10,
      image: product1,
      name: "Women fashion dress set",
      price: 1000,
      rating: 0,
    },
    {
      id: 11,
      image: product1,
      name: "Headrest Executive Mesh Office Chair set",
      price: 5000,
      rating: 0,
    },
    {
      id: 12,
      image: product1,
      name: "Women black dress and red hat collections",
      price: 1000,
      rating: 0,
    },
  ];

  // Rating options
  const ratingOptions = [1, 2, 3, 4, 5];

  // Handle price range change
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([priceRange[0], value]);
  };

  // Render stars - Filter section er jonno
  const renderStars = (count, filled = false, isSelected = false) => {
    const starColor = isSelected ? "text-[#0198E9]" : "text-[#FFB340]";
    return Array.from({ length: count }).map((_, index) =>
      filled ? (
        <IoMdStar key={index} className={starColor} />
      ) : (
        <IoMdStarOutline key={index} className={starColor} />
      ),
    );
  };

  // Product card stars - 4 Orange + 1 Gray
  const renderProductStars = () => {
    return (
      <>
        {/* First 4 stars - Orange filled */}
        {Array.from({ length: 4 }).map((_, index) => (
          <IoMdStar key={`filled-${index}`} className="text-[#FFB340]" />
        ))}
        {/* Last star - Gray outline */}
        <IoMdStarOutline className="text-[#D3D3D3]" />
      </>
    );
  };

  return (
    <section className="py-10 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - 30% */}
        <div className="w-full lg:w-[30%] bg-white rounded-lg shadow-sm p-6">
          {/* Related Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold font-poppins mb-4">
              Related Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className={`block font-poppins ${
                      category.active
                        ? "text-[#0198E9] font-medium"
                        : "text-gray-600 hover:text-[#0198E9]"
                    } transition-colors`}
                  >
                    {index === 0 && "• "}
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter by Price */}
          <div className="mb-8 border-t-2 border-[#F4F4F4] pt-6">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            >
              <h3 className="text-lg font-semibold font-poppins">
                Filter by Price
              </h3>
              <IoIosArrowDown
                className={`transition-transform ${isPriceOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isPriceOpen && (
              <div>
                {/* Custom Range Slider */}
                <div className="relative">
                  <input
                    type="range"
                    min="1000"
                    max="12500"
                    value={priceRange[1]}
                    onChange={handlePriceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #0198E9 0%, #0198E9 ${((priceRange[1] - 1000) / (12500 - 1000)) * 100}%, #E0E0E0 ${((priceRange[1] - 1000) / (12500 - 1000)) * 100}%, #E0E0E0 100%)`,
                    }}
                  />
                </div>
                <p className="mt-3 text-gray-600 font-poppins flex items-center">
                  Price:
                  <span className="font-medium text-gray-800 ml-1 flex items-center">
                    <TbCurrencyTaka className="text-lg" />
                    {priceRange[0]} - <TbCurrencyTaka className="text-lg" />
                    {priceRange[1]}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Filter by Rating */}
          <div className="border-t-2 border-[#F4F4F4] pt-6">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => setIsRatingOpen(!isRatingOpen)}
            >
              <h3 className="text-lg font-semibold font-poppins">
                Filter by Rating
              </h3>
              <IoIosArrowDown
                className={`transition-transform ${isRatingOpen ? "rotate-180" : ""}`}
              />
            </div>

            {isRatingOpen && (
              <div className="space-y-3">
                {ratingOptions.map((rating) => (
                  <label
                    key={rating}
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    {/* Custom Radio Button */}
                    <div className="relative">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedRating === rating
                            ? "bg-[#0198E9] border-[#0198E9]"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        {selectedRating === rating && (
                          <IoMdCheckmark className="text-white text-sm" />
                        )}
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex">
                      {renderStars(rating, true, selectedRating === rating)}
                      {renderStars(
                        5 - rating,
                        false,
                        selectedRating === rating,
                      )}
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Content - 70% */}
        <div className="w-full lg:w-[70%]">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 font-poppins">
              Showing <span className="font-semibold">20</span> of{" "}
              <span className="font-semibold">160</span> products
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-poppins">Sort by:</span>
              <select className="border rounded px-3 py-2 text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-[#0198E9]">
                <option>Newest Items</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-[#0198E9] hover:text-white transition-colors ">
                    <FaRegHeart />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Rating - 4 Orange + 1 Gray */}
                  <div className="flex items-center gap-1 mb-2">
                    {renderProductStars()}
                    <span className="text-sm text-gray-500 ml-1 font-poppins">
                      (0)
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-sm text-gray-700 mb-3 line-clamp-2 min-h-10 font-poppins">
                    {product.name}
                  </h3>

                  {/* Price and Cart */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#0198E9] font-bold text-lg font-poppins flex items-center">
                      <TbCurrencyTaka className="text-2xl" />
                      {product.price}
                    </span>
                    <button className="bg-[#0198E9] text-white p-2 rounded-lg hover:bg-[#0177c1] transition-colors">
                      <FiShoppingCart className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="px-4 py-2 border rounded font-poppins hover:bg-gray-50 cursor-pointer">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#0198E9] text-white rounded font-poppins cursor-pointer">
              1
            </button>
            <button className="px-4 py-2 border rounded font-poppins hover:bg-gray-50 cursor-pointer">
              2
            </button>
            <button className="px-4 py-2 border rounded font-poppins hover:bg-gray-50 cursor-pointer">
              3
            </button>
            <button className="px-4 py-2 border rounded font-poppins hover:bg-gray-50 cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
