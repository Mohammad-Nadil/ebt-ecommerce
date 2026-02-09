import React from "react";
import Flex from "./Flex";

const RatingBar = ({ stars, percent }) => {
  return (
    <Flex className="items-center gap-x-4">
      {/* star label */}
      <span className="text-sm w-[60px]">
        {stars} Stars
      </span>

      {/* progress bar */}
      <div className="w-[200px] h-2 bg-gray-200 rounded">
        <div
          className="h-full bg-starColor rounded transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      {/* percentage */}
      <span className="text-sm w-[40px]">
        {percent}%
      </span>
    </Flex>
  );
};

export default RatingBar;
