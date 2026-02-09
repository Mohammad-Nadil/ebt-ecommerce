import React from "react";
import Container from "./Container";
import { FaStar } from "react-icons/fa";
import Flex from "./Flex";

const ProductReview = () => {
  return (
    <>
      <Container>
        <Flex className="p-12 gap-x-10">
          {/* average review start */}
          <div className="leading-8">
            <div className="font-poppins font-medium text-[20px]">Customer Reviews</div>
            <Flex className="gap-x-2">
              <Flex className="gap-x-1">
                <FaStar className="text-starColor" />
                <FaStar className="text-starColor " />
                <FaStar className="text-starColor " />
                <FaStar className="text-starColor " />
                <FaStar className="text-starColor " />
              </Flex>
              <div className="font-poppins text-[16px]"><p>4.6 out of 5</p></div>
            </Flex>
          </div>
          {/* average review end  */}


          {/* rating details start */}
          <div className="">
            <Flex className="gap-x-2">
              {/* rating number  */}
              <div className=""><p>5 Stars</p></div>
              {/* rating number  */}

              {/* rating visualization  */}
              <div className="w-[200px] h-2 bg-starColor"></div>
              {/* rating visualization  */}

              {/* rating percentage */}
              <div className=""><p>79%</p></div>
              {/* rating percentage */}
            </Flex>

             <Flex className="gap-x-2">
              {/* rating number  */}
              <div className=""><p>4 Stars</p></div>
              {/* rating number  */}

              {/* rating visualization  */}
              <div className="w-[200px] h-2 bg-starColor"></div>
              {/* rating visualization  */}

              {/* rating percentage */}
              <div className=""><p>79%</p></div>
              {/* rating percentage */}
            </Flex>
             <Flex className="gap-x-2">
              {/* rating number  */}
              <div className=""><p>3 Stars</p></div>
              {/* rating number  */}

              {/* rating visualization  */}
              <div className="w-[200px] h-2 bg-starColor"></div>
              {/* rating visualization  */}

              {/* rating percentage */}
              <div className=""><p>79%</p></div>
              {/* rating percentage */}
            </Flex>
             <Flex className="gap-x-2">
              {/* rating number  */}
              <div className=""><p>2 Stars</p></div>
              {/* rating number  */}

              {/* rating visualization  */}
              <div className="w-[200px] h-2 bg-starColor"></div>
              {/* rating visualization  */}

              {/* rating percentage */}
              <div className=""><p>79%</p></div>
              {/* rating percentage */}
            </Flex>
             <Flex className="gap-x-2">
              {/* rating number  */}
              <div className=""><p>1 Stars</p></div>
              {/* rating number  */}

              {/* rating visualization  */}
              <div className="w-[200px] h-2 bg-starColor"></div>
              {/* rating visualization  */}

              {/* rating percentage */}
              <div className=""><p>79%</p></div>
              {/* rating percentage */}
            </Flex>
            

          </div>
          {/* rating details end */}


          <div className=""><p>3</p></div>

        </Flex>

      </Container>


    </>
  )
}

export default ProductReview;
