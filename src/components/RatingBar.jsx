import React from "react";
import Flex from "./Flex";

const RatingBar = ({ stars, percent }) => {
  return (
    <Flex className="flex-col sm:flex-row sm:items-center gap-2 sm:gap-x-4 w-full">
      {/* star label */}
      <span className="text-sm w-full sm:w-[60px] shrink-0">
        {stars} Stars
      </span>

      {/* progress bar */}
      <div className="w-full sm:w-[200px] h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-starColor rounded transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* percentage */}
      <span className="text-sm w-full sm:w-[40px] text-right sm:text-left shrink-0">
        {percent}%
      </span>
    </Flex>
  );
};

export default RatingBar;
