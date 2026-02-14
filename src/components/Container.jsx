import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` max-w-350 mx-auto relative px-1.5 sm:px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
