import React from "react";
import Container from "./Container";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "/Images/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow py-3">
      <Container>
        <div className="flex items-center justify-between lg:gap-x-14 xl:gap-x-0 ">
          <NavLink to={`/`} className="flex items-center gap-4 ">
            <img src={logo} alt="Logo" />
          </NavLink>

          <div className="flex-1 max-w-2xl hidden lg:block">
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

          <div className="flex items-center gap-3
           sm:gap-6 ">
            <button className="flex items-center gap-2 hover:text-blue-500">
              <FiUser size={20} />
              <span className="text-[16px] font-poppins leading-[120%] text-[#29292E] hidden sm:block">
                Login
              </span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
              <FiHeart size={20} />
              <span className="text-[16px] font-poppins leading-[120%] text-[#29292E] hidden sm:block">
                Wishlist
              </span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500 relative ">
              <FiShoppingCart size={20} />
              <span className="text-[16px] font-poppins leading-[120%] text-[#29292E] hidden sm:block">
                My cart{" "}
              </span>
              <span className="absolute top-0 right-full bg-red-500 translate-x-2 -translate-y-1/2 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </div>
        <div className="w-full ">
          <ul className="flex items-center xl:justify-center gap-8 py-3 text-sm font-medium w-full overflow-x-scroll overflow-y-clip xl:overflow-visible text-nowrap">
            {/* WOMEN'S FASHION */}
            <li className="relative group">
              <span className="hover:text-blue-500 cursor-pointer text-[16px] font-poppins text-[#333333]">
                WOMEN'S FASHION
              </span>

              <div className="absolute left-0 top-full z-50 hidden xl:group-hover:block transition-all duration-300">
                <div className="w-[1100px] bg-white shadow-lg border border-gray-200">
                  <div className="grid grid-cols-5 gap-10 p-8 text-sm text-[#555]">
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Saree
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Cotton
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Silk
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Katan
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Muslin
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Georgette
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Nokshi Kantha
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Linen
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Khadi
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Tangail Taant
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Manipuri
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Dhakai Benaroshi
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Clothes
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          T-shirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Shorts
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Shirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Tracksuit
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Jeans
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Georgette
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Waistcoat
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sweater
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Coats
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Suit
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sweatshirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Uniform
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Cosmetic
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Perfume
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Eye make-up
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Skin care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Hair care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Make-up
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Oral Care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Body Care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Shower Gels & Creams
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Hair Removal Products
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Lipstick
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Suntan cream
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Sports & Outdoor
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sweatshirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          T-shirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Bra
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Leggings
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Tracksuit
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Running Shoes
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Bag
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Equipment
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Outdoor Shoes
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Snow Boot
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Outdoor Equipment
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Accessories
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Personal Care
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Perfume
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sexual Health
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          After Shave Products
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Razor blade
                        </li>
                      </ul>
                      <h4 className="font-semibold mb-3 mt-6 text-[#29292E]">
                        Shoes
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Heeled Heels
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sneakers
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Casual Shoes
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Ballet
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sandals
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Slipper
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* MEN'S FASHION */}
            <li className="relative group">
              <span className="hover:text-blue-500 cursor-pointer text-[16px] font-poppins text-[#333333]">
                MEN'S FASHION
              </span>

              <div className="absolute left-0 top-full z-50 hidden xl:group-hover:block transition-all duration-300">
                <div className="w-[1100px] bg-white shadow-lg border border-gray-200">
                  <div className="grid grid-cols-5 gap-10 p-8 text-sm text-[#555]">
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Saree
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Cotton
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Silk
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Katan
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Muslin
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Georgette
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Nokshi Kantha
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Linen
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Khadi
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Tangail Taant
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Manipuri
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Dhakai Benaroshi
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Clothes
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          T-shirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Shorts
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Shirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Tracksuit
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Jeans
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Georgette
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Waistcoat
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sweater
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Coats
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Suit
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sweatshirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Uniform
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Cosmetic
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Perfume
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Eye make-up
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Skin care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Hair care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Make-up
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Oral Care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Body Care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Shower Gels & Creams
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Hair Removal Products
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Lipstick
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Suntan cream
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Sports & Outdoor
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sweatshirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          T-shirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Bra
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Leggings
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Tracksuit
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Running Shoes
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Bag
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Equipment
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Outdoor Shoes
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Snow Boot
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Outdoor Equipment
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sports Accessories
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Personal Care
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Perfume
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sexual Health
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          After Shave Products
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Razor blade
                        </li>
                      </ul>
                      <h4 className="font-semibold mb-3 mt-6 text-[#29292E]">
                        Shoes
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Heeled Heels
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sneakers
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Casual Shoes
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Ballet
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Sandals
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Slipper
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* KID'S FASHION */}
            <li className="relative group">
              <span className="hover:text-blue-500 cursor-pointer text-[16px] font-poppins text-[#333333]">
                KID'S FASHION
              </span>

              <div className="absolute left-0 top-full z-50 hidden xl:group-hover:block transition-all duration-300">
                <div className="w-[900px] bg-white shadow-lg border border-gray-200">
                  <div className="grid grid-cols-4 gap-10 p-8 text-sm text-[#555]">
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Kids Fashion
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Boy's T-shirt
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Girl's Dress
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Kids Shoes
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Kids Accessories
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Women
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Toys
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Games
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Puzzles
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Tools & Hardware
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Power Tools
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Hand Tools
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Pet Supplies
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Dog Food
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Cat Food
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* HOME & LIFESTYLE */}
            <li className="relative group">
              <span className="hover:text-blue-500 cursor-pointer text-[16px] font-poppins text-[#333333]">
                HOME & LIFESTYLE
              </span>

              <div className="absolute left-0 top-full z-50 hidden xl:group-hover:block transition-all duration-300">
                <div className="w-[900px] bg-white shadow-lg border border-gray-200">
                  <div className="grid grid-cols-4 gap-10 p-8 text-sm text-[#555]">
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Health & Household
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Health Care
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Household Supplies
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Home & Lifestyle
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Furniture
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Decor
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Kitchen
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Groceries
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Fresh Food
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Snacks
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Jewelleries
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Rings
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Necklaces
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* ARTS & CRAFTS */}
            <li className="relative group">
              <span className="hover:text-blue-500 cursor-pointer text-[16px] font-poppins text-[#333333]">
                ARTS & CRAFTS
              </span>

              <div className="absolute left-0 top-full z-50 hidden xl:group-hover:block transition-all duration-300">
                <div className="w-[700px] bg-white shadow-lg border border-gray-200">
                  <div className="grid grid-cols-3 gap-10 p-8 text-sm text-[#555]">
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Arts & Crafts
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Painting
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Drawing
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Craft Supplies
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Seasonal
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Christmas
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Halloween
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Watches
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Men's Watches
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Women's Watches
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* COMPUTER & ELECTRONICS */}
            <li className="relative group">
              <span className="hover:text-blue-500 cursor-pointer text-[16px] font-poppins text-[#333333]">
                COMPUTER & ELECTRONICS
              </span>

              <div className="absolute left-0 top-full z-50 hidden xl:group-hover:block transition-all duration-300">
                <div className="w-[700px] bg-white shadow-lg border border-gray-200">
                  <div className="grid grid-cols-3 gap-10 p-8 text-sm text-[#555]">
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Computers
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Laptops
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Desktops
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Accessories
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Electronics
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Phones
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Tablets
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Cameras
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* FOOD & GROCERY */}
            <li className="relative group">
              <span className="hover:text-blue-500 cursor-pointer text-[16px] font-poppins text-[#333333]">
                FOOD & GROCERY
              </span>

              <div className="absolute left-0 top-full z-50 hidden xl:group-hover:block transition-all duration-300">
                <div className="w-[500px] bg-white shadow-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-10 p-8 text-sm text-[#555]">
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Food
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Fresh Vegetables
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Fruits
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Meat
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Seafood
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-[#29292E]">
                        Grocery
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-blue-500 cursor-pointer">
                          Rice
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Oil
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Spices
                        </li>
                        <li className="hover:text-blue-500 cursor-pointer">
                          Beverages
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
