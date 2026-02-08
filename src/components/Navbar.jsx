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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none "
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded">
                <FiSearch />
              </button>
            </div>
          </div>

         
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-blue-500">
              <FiUser size={20} />
              <span>Login</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
              <FiHeart size={20} />
              <span>Wishlist</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500 relative">
              <FiShoppingCart size={20} />
              <span>My cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

       
        <div className="border-t border-gray-200">
          <ul className="flex items-center justify-center gap-8 py-3 text-sm font-medium">
            <li className="hover:text-blue-500 cursor-pointer">WOMEN'S FASHION</li>
            <li className="hover:text-blue-500 cursor-pointer">MEN'S FASHION</li>
            <li className="hover:text-blue-500 cursor-pointer">KID'S FASHION</li>
            <li className="hover:text-blue-500 cursor-pointer">HOME & LIFESTYLE</li>
            <li className="hover:text-blue-500 cursor-pointer">ARTS & CRAFTS</li>
            <li className="hover:text-blue-500 cursor-pointer">COMPUTER & ELECTRONICS</li>
            <li className="hover:text-blue-500 cursor-pointer">FOOD & GROCERY</li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;