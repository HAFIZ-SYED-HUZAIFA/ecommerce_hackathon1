import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="wrappeer mt-14">
      {/* footer top section */}
      <div className="min-h-[479px]  bg-[#EEEFFB] flex gap-10 items-center justify-center below-1200:flex-col below-1200:items-start below-1200:min-h-auto">
        {/* col 1 */}
        <div className="flex flex-col gap-2 mt-[-90px] below-1200:mt-0 below-1200:ml-3">
          <h2 className="text-[38px] font-josefin font-bold text-[#000000] mb-4 below-1200:mb-0 below-1200:mt-2">
            Hekto
          </h2>
          <div className="w-[377px] h-[44px] bg-[#FFFFFF] flex items-center mb-4 below-1200:mb-0 below-1200:w-[280px]">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="flex text-center ml-3 focus:outline-none"
            />
            <button className="w-[135px] h-[39px] bg-[#FB2E86] rounded-[3px] ml-[63px] font-lato text-[#EEEFFB] text-[16px] font-medium below-1200:ml-0">
              Sign Up
            </button>
          </div>
          <p className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Contact Info
          </p>
          <p className="font-lato text-[16px] font-normal text-[#8A8FB9] below-1200:w-[280px]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        {/* col 2 */}
        <ul className="flex flex-col gap-4 below-1200:ml-3 below-1200:gap-2">
          <li className="font-josefin text-[#000000] text-[22px] font-medium mt-[-43px] below-1200:mt-[-20px]">
            Categories
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Laptops & Computers
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Cameras & Photography
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Smart Phones & Tablets
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Video Games & Consoles
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Waterproof Headphones
          </li>
        </ul>
        {/* col 3 */}
        <ul className="flex flex-col gap-4 below-1200:ml-3 below-1200:gap-2">
          <li className="font-josefin text-[#000000] text-[22px] font-medium mt-[-43px] below-1200:mt-[-20px]">
            Customer Care
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            My Account
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Discount
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Returns
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Orders History
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Order Tracking
          </li>
        </ul>
        {/* col 4 */}
        <ul className="flex flex-col gap-4 below-1200:ml-3 below-1200:gap-2 below-1200:mb-4">
          <li className="font-josefin text-[#000000] text-[22px] font-medium below-1200:mt-[-17px]">
            Pages
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Blog
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Browse the Shop
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Category
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Pre-Built Pages
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            Visual Composer Elements
          </li>
          <li className="font-lato text-[16px] font-normal text-[#8A8FB9]">
            WooCommerce Pages
          </li>
        </ul>
      </div>
      {/* footer bottom section */} 
      
      <div className='h-[53px] bg-[#E7E4F8] flex flex-col items-center justify-center lg:flex-row lg:gap-[650px]'>
      <span className='text-[16px] font-lato text-[#9DA0AE] font-semibold'>© Webecy - All Rights Reserved</span>
      <span className='flex gap-2 mt-1 mb-1'>
      <span className='w-[19px] h-[19px] bg-[#151875] rounded-full flex items-center justify-center'><TiSocialFacebook className='text-white w-[12.43px] h-[12.43px]'/></span>
      <span className='w-[19px] h-[19px] bg-[#151875] rounded-full flex items-center justify-center'><IoLogoInstagram  className='text-white w-[12.43px] h-[12.43px]'/></span>
      <span className='w-[19px] h-[19px] bg-[#151875] rounded-full flex items-center justify-center'><FaTwitter className='text-white w-[12.43px] h-[12.43px]'/></span>
      </span>
      </div>
    </div>
  );
};

export default Footer;
