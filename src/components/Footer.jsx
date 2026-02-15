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
      <section className="border-b border-[#E5E5E5]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
            <div className="flex items-center gap-4">
              <FaTruck className="text-4xl text-primary shrink-0" />
              <div>
                <h4 className="font-poppins font-medium text-lg text-[#333]">
                  FREE SHIPPING
                </h4>
                <p className="text-sm text-[#757575]">Order via Campaign</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaStar className="text-4xl text-primary shrink-0" />
              <div>
                <h4 className="font-poppins font-medium text-lg text-[#333]">
                  BEST PRICE
                </h4>
                <p className="text-sm text-[#757575]">Quality products</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaClockRotateLeft className="text-4xl text-primary shrink-0" />
              <div>
                <h4 className="font-poppins font-medium text-lg text-[#333]">
                  FREE RETURN
                </h4>
                <p className="text-sm text-[#757575]">Within 7 days returns</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaCreditCard className="text-4xl text-primary shrink-0" />
              <div>
                <h4 className="font-poppins font-medium text-lg text-[#333]">
                  SECURE PAYMENT
                </h4>
                <p className="text-sm text-[#757575]">100% secure payment</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#E5E5E5]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
            {/* Logo + About */}
            <div>
              <img src={logo} alt="logo" className="mb-6" />
              <p className="text-sm text-[#555] leading-6 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="flex items-center gap-4 text-2xl text-primary">
                <FaFacebook />
                <AiFillTwitterCircle />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-medium text-lg mb-5">
                QUICK LINKS
              </h3>
              <ul className="space-y-3 text-sm text-[#555]">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>

            {/* Customer Area */}
            <div>
              <h3 className="font-poppins font-medium text-lg mb-5">
                CUSTOMER AREA
              </h3>
              <ul className="space-y-3 text-sm text-[#555]">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Shipping Info</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-poppins font-medium text-lg mb-5">CONTACT</h3>
              <p className="text-sm text-[#555] mb-6">Have any question?</p>
              <div className="flex items-center gap-4">
                <FaHeadset className="text-3xl text-primary" />
                <p className="text-xl font-semibold text-primary">
                  099 456 789
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-t border-gray-200">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-4 text-sm text-gray-600">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Projectnirvoya. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
