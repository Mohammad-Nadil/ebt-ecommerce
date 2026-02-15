import React from "react";
import Container from "./Container";
import img from "/Images/2.png";
import Slider from "react-slick";

const Banner = () => {
  const item = [1, 1, 1, 1, 1, 1, 1];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="banner">
      <Container
        className={`  rounded-2xl   grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-2`}
      >
        <div className=" aspect-video rounded-xl overflow-clip col-span-2 row-span-2">
          <Slider {...settings}>
            {item.map(() => (
              <div className="   card">
                <img className="w-full h-full object-cover" src={img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className=" overflow-clip rounded-xl  col-start-3">
          <img src={img} alt="" />
        </div>
        <div className=" overflow-clip rounded-xl  col-start-3 row-start-2">
          <img src={img} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
<div className="   card">
  <img className="w-full h-full object-cover" src={img} alt="" />
</div>;
