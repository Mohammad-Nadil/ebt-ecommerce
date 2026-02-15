import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";

const AddReview = () => {
  const [rating, setRating] = useState(4);

  return (
    <div className="max-w-6xl mt-16 py-7 md:px-6 lg:px-0">
      <h2 className="text-xl font-semibold mb-2">
        Add Your Review
      </h2>

      <p className="text-gray-500 text-sm mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>

      {/* Form */}
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Review */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Review <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
          <span className="text-sm font-medium">Rating</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <IoMdStar
                key={star}
                size={20}
                className={`cursor-pointer ${
                  rating >= star
                    ? "text-starColor"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition w-full sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
