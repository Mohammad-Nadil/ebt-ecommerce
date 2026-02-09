import React from "react";
import Container from "./Container";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import logo from '../../public/Images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <Container>
      
        <div className="flex items-center justify-between py-4">
        
          <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" />
          </div>

       
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="I'm looking for..."
                className="w-full text-[16px] font-poppins px-4 py-[13px] bg-[#F6F6F6] border-none border-gray-300 rounded-r-lg outline-none   "
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-[17px] rounded-lg ">
                <FiSearch />
              </button>
            </div>
          </div>

         
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-blue-500">
              <FiUser size={20} />
              <span className='text-[16px] font-poppins leading-[120%] text-[#29292E]'>Login</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
              <FiHeart size={20} />
              <span className='text-[16px] font-poppins leading-[120%] text-[#29292E]'>Wishlist</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500 relative">
              <FiShoppingCart size={20} />
              <span className='text-[16px] font-poppins leading-[120%] text-[#29292E]'>My cart</span>
              <span className="absolute top-1/2 left-full bg-red-500 translate-x-2 -translate-y-1/2 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </div>

       
        <div>
          <ul className="flex items-center justify-center gap-8 py-3 text-sm font-medium">
            <li className="hover:text-blue-500 cursor-pointer text-16px font-poppins text-[#333333]"><a href="WOMEN'S FASHION">WOMEN'S FASHION</a></li>
            <li className="hover:text-blue-500 cursor-pointer text-16px font-poppins text-[#333333]"><a href="MEN'S FASHION">MEN'S FASHION</a></li>
            <li className="hover:text-blue-500 cursor-pointer text-16px font-poppins text-[#333333]"><a href="KID'S FASHION">KID'S FASHION</a></li>
            <li className="hover:text-blue-500 cursor-pointer text-16px font-poppins text-[#333333]"><a href="HOME & LIFESTYLE">HOME & LIFESTYLE</a></li>
            <li className="hover:text-blue-500 cursor-pointer text-16px font-poppins text-[#333333]"><a href="ARTS & CRAFTS">ARTS & CRAFTS</a></li>
            <li className="hover:text-blue-500 cursor-pointer text-16px font-poppins text-[#333333]"><a href="COMPUTER & ELECTRONICS">COMPUTER & ELECTRONICS</a></li>
            <li className="hover:text-blue-500 cursor-pointer text-16px font-poppins text-[#333333]"><a href="FOOD & GROCERY">FOOD & GROCERY</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;