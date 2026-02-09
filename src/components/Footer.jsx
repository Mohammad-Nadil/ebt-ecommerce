import logo from "/Images/footer/footer-logo.png";
import pay from "/Images/footer/pay-with.png";

import Container from "./Container";
import {
  FaCreditCard,
  FaFacebook,
  FaHeadset,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaTruck,
} from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  // console.log()
  return (
    <footer className="bg-[#FFFFFF]">
      <section className=" footer-top border-b border-[#E5E5E5]">
        <div className=" pl-5 sm:pl-8 flex-col gap-6 md:gap-2 lg:justify-between 2xl:gap-[99px] md:mx-auto md:pl-3 lg:pl-0 flex lg:flex-row w-325.75 mx-auto pt-13.25 pb-12.25 ">
          <div className="">
            <div className="flex gap-4 sm:gap-8 md:gap-2 lg:gap-4.5 items-center">
              <FaTruck className="text-6xl text-primary" />
              <div>
                <h4 className="pb-[1.89px] font-poppins font-medium text-[20px] text-[#333333] tracking-[0%]">
                  FREE SHIPPING
                </h4>
                <p className="pb-[1.89px] font-poppins font-regular text-[16px] text-[#757575] tracking-[0%]">
                  Order via Campaign{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-3.5 sm:gap-8  md:gap-2 lg:gap-4.5  items-center">
              <FaStar className="text-6xl text-primary" />
              <div>
                <h4 className="pb-[1.89px] font-poppins font-medium text-[20px] text-[#333333] tracking-[0%]">
                  BEST PRICE
                </h4>
                <p className="pb-[1.89px] font-poppins font-regular text-[16px] text-[#757575] tracking-[0%]">
                  Quality products
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-3.5 sm:gap-8  md:gap-2 lg:gap-4.5  items-center">
              <FaClockRotateLeft className="text-6xl text-primary" />
              <div>
                <h4 className="pb-[1.89px] font-poppins font-medium text-[20px] text-[#333333] tracking-[0%]">
                  FREE RETURN
                </h4>
                <p className="pb-[1.89px] font-poppins font-regular text-[16px] text-[#757575] tracking-[0%]">
                  Within 7 days returns
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-3.5 sm:gap-8  md:gap-2 lg:gap-4.5  items-center">
              <FaCreditCard className="text-6xl text-primary" />
              <div>
                <h4 className="pb-[1.89px] font-poppins font-medium text-[20px] text-[#333333] tracking-[0%]">
                  SECURE PAYMENT
                </h4>
                <p className="pb-[1.89px] font-poppins font-regular text-[16px] text-[#757575] tracking-[0%]">
                  100% secure payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom ">
        <div className="border-b border-[#E5E5E5] ">
          <Container>
            <div className="  md:flex md:flex-wrap lg:flex-nowrap pt-15 pb-15.5">
              <div className="w-98.5 md:mr-10 lg:mr-24.25">
                <img src={logo} alt="footer-image" className="mb-[35.78px]" />
                <p className="pb-6.5 font-lato font-regular text-[18px] text-[rgba(51,51,51,0.8)] tracking-[0%] leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex  items-center gap-5 text-[40px]">
                  <FaFacebook className="text-primary" />
                  <AiFillTwitterCircle className="text-primary" />
                  <div className="text-2xl w-10 aspect-square grid place-content-center rounded-full text-white bg-[#0077b5]">
                    <FaLinkedinIn />
                  </div>
                  <div className="text-2xl w-10 aspect-square grid place-content-center rounded-full text-white bg-linear-to-tr from-[#FA8F21] to-[#D82D7E]">
                    <FaInstagram />
                  </div>
                </div>
              </div>
              <div className="w-32 mr-35">
                <h3 className="pb-6.25 w-32.5 font-poppins font-medium text-[20px] text-[#333333] tracking-[0%] ">
                  QUICK LINKS
                </h3>
                <div className="f-menu">
                  <ul>
                    <li>
                      <a href="" className="">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="">Contact us</a>
                    </li>
                    <li>
                      <a href="">Products</a>
                    </li>
                    <li>
                      <a href="">Login</a>
                    </li>
                    <li>
                      <a href="">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-42 mr-35">
                <h3 className="pb-6.25 w-43.5 font-poppins font-medium text-[20px] text-[#333333] tracking-[0%] ">
                  CUSTOMER AREA
                </h3>
                <div className="f-menu">
                  <ul>
                    <li>
                      <a href="" className="">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="">Orders</a>
                    </li>
                    <li>
                      <a href="">Terms</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Shipping Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-85">
                <h3 className="pb-6.25 w-43.5 font-poppins font-medium text-[20px] text-[#333333] tracking-[0%] ">
                  CONTACT
                </h3>
                <p className="pb-7.75 font-poppins font-regular text-[16px] text-[rgba(51,51,51,0.8)] tracking-[0%] leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </p>
                <div className="lg:flex gap-6.75 items-center">
                  <FaHeadset className="text-5xl text-[#8d8d8d]" />
                  <div>
                    <p className=" pb-1.5 font-poppins font-normal  lg:text-[18px] leading-6 text-[#333333]">
                      Have any question?
                    </p>
                    <p className=" pb-1.5 font-poppins font-semibold text-[28px] leading-6 text-[#0198E9]">
                      099 456 789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="flex justify-between  items-center pt-5 pb-4.25">
            <div>
              <p className="font-poppins font-regular text-[16px]  text-[#757575]">
                Projectnirvoya - © 2021 All Rights Reserved
              </p>
            </div>
            <div className="flex items-center">
              <p className="pr-0.75 text-[#0198E9] font-poppins text-[18px]">
                Pay With
              </p>
              <img src={pay} alt="" />
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
