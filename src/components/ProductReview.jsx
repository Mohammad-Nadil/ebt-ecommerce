import React from "react";
import Container from "./Container";
import { FaStar } from "react-icons/fa";
import Flex from "./Flex";
import RatingBar from "./RatingBar";
import { IoMdStar } from "react-icons/io";
import AddReview from "./AddReview";

const ProductReview = () => {
  const ratingData = [
    { stars: 5, percent: 79 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 4 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ];

  const reviews = [
    {
      name: "Vanille",
      rating: 5,
      time: "1 Month Ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Maduin",
      rating: 5,
      time: "1 Month Ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Samantha",
      rating: 5,
      time: "1 Month Ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      name: "Roveria",
      rating: 5,
      time: "1 Month Ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://i.pravatar.cc/40?img=4",
    },
  ];

  return (
    <Container className="px-4 sm:px-8 lg:px-12">
      {/* review top section */}
      <Flex className="py-7 flex-col lg:flex-row gap-8 lg:gap-x-20">
        {/* average review */}
        <div className="leading-8">
          <h3 className="font-poppins font-medium text-lg sm:text-[20px]">
            Customer Reviews
          </h3>

          <Flex className="gap-x-2 items-center">
            <Flex className="gap-x-1 text-starColor">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Flex>

            <p className="font-poppins text-sm sm:text-[16px]">
              4.6 out of 5
            </p>
          </Flex>
        </div>

        {/* rating breakdown */}
        <div className="space-y-3 w-full lg:w-auto">
          {ratingData.map((item) => (
            <RatingBar
              key={item.stars}
              stars={item.stars}
              percent={item.percent}
            />
          ))}
        </div>

        {/* write review button */}
        <div className="flex items-center w-full lg:w-auto">
          <button className="bg-blue-500 text-white w-full lg:w-auto px-6 sm:px-12 py-3 hover:bg-blue-600 transition">
            <p className="font-poppins font-medium text-sm">
              Write a Review
            </p>
          </button>
        </div>
      </Flex>

      {/* detailed reviews */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-6">Reviews (4)</h3>
        <p className="border-t mb-5"></p>

        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-10 h-10 rounded-full"
            />

            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h4 className="font-medium">{review.name}</h4>

                <span className="text-sm text-gray-400">
                  {review.rating}.0
                </span>

                <div className="flex text-starColor">
                  {[...Array(review.rating)].map((_, i) => (
                    <IoMdStar key={i} size={14} />
                  ))}
                </div>

                <span className="text-sm text-gray-400">
                  {review.time}
                </span>
              </div>

              <p className="text-gray-600 mt-2 text-sm leading-6">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* add review form */}
      <AddReview />
    </Container>
  );
};

export default ProductReview;
