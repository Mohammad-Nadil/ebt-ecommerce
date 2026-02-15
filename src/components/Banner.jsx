import React, { useState } from "react";
import Container from "./Container";
import img1 from "/Images/1.png";
import img2 from "/Images/2.png";
import img3 from "/Images/3.png";
import Slider from "react-slick";
import { NavLink } from "react-router";

const Banner = () => {
  const [active, setActive] = useState(0);
  const item = [1, 1, 1, 1, 1, 1, 1];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <div
        className="  "
        style={{
          position: "absolute",
          zIndex: 1,
          bottom: "10px",
          left: "50%",
          transform: "translate(-50% , -50%)",
        }}
      >
        <ul
          className="flex  sm:gap-3 md:gap-5  absolute bottom-full xs:-translate-y-full left-1/2 -translate-x-1/2 "
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` w-4 sm:w-7 aspect-2/1  rounded-full ${active === i ? " bg-primary/60 " : " bg-primary/20"} `}
      ></div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };
  return (
    <section id="banner">
      <Container
        className={`  rounded-2xl   grid grid-cols-1 lg:grid-cols-3 xl:grid-rows-2 gap-x-4 gap-y-2`}
      >
        <div className=" aspect-36/20 sm:aspect-video rounded-xl lg:col-span-2 lg:row-span-2">
          <Slider {...settings}>
            {item.map(() => (
              <div className=" relative rounded-xl  card">
                <img
                  className="  w-full h-full object-cover"
                  src={img1}
                  alt=""
                />
              <div className="text w-3/5 xl:w-1/2 absolute  inset-0 left-0 translate-x-1/12 lg:translate-x-0 lg:left-1/12 flex flex-col sm:gap-y-6 xl:gap-y-10 gap-y-4 pt-5 sm:pt-0 sm:justify-center  ">
                  <h2 className="text-lg sm:text-3xl lg:text-4xl text-primary font-montserrat font-bold ">
                    Explore Men’s Winter Collection
                  </h2>
                  <p className="text-xs sm:text-base lg:text-xl font-poppins">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam, vel?
                  </p>
                  <div className="btn hidden sm:block">
                    <NavLink to={`/product`} className="py-2.5 px-4 text-white bg-primary rounded-md font-poppins font-semibold hover:bg-primary/80 hover:cursor-pointer duration-300 text-xs sm:text-base ">
                      Shop Now
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="relative overflow-clip rounded-xl hidden lg:block col-start-3">
          <img className=" top-0 left-0" src={img2} alt="" />
          <p className="text-xl font-semibold font-montserrat text-nowrap text-primary py-4 px-6 rounded-md bg-white/70 absolute bottom-0 left-1/2 -translate-1/2">
            Groceries collection
          </p>
        </div>
        <div className="relative overflow-clip rounded-xl hidden lg:block col-start-3 row-start-2">
          <img src={img3} alt="" />
          <p className="xl:text-xl font-semibold font-montserrat text-nowrap text-primary py-3 xl:py-4 px-5 xl:px-6 rounded-md bg-white/70 absolute bottom-0 left-1/2 -translate-1/2">
            Health & Beauty collection
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
