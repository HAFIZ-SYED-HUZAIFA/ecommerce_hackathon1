import React from 'react';
import Link from 'next/link';
import { HiOutlineMail } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="w-full bg-[#7E33E0] h-auto py-2">
      {/* Main div Navbar */}
      <div className="flex flex-wrap justify-between items-center wrapper">
        {/* Left Side */}
        <div className="flex flex-wrap gap-4 md:gap-3 justify-center items-center w-full md:w-auto">
          <span className="text-[#F1F1F1] font-josefin font-semibold text-[14px] leading-4 flex items-center gap-2">
            <HiOutlineMail className="text-white" />
            mhhasanul@gmail.com
          </span>
          <span className="text-[#F1F1F1] font-josefin font-semibold text-[14px] leading-4 flex items-center gap-2">
            <TbPhoneCall className="text-white" />
            (12345)67890
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap gap-3 md:gap-2 justify-center items-center w-full md:w-auto mt-2 md:mt-0">
          <span className="flex text-[#F1F1F1] font-josefin font-semibold text-[14px] leading-4 items-center">
            English<RiArrowDropDownLine />
          </span>
          <span className="flex text-[#F1F1F1] font-josefin font-semibold text-[14px] leading-4 items-center">
            USD<RiArrowDropDownLine />
          </span>
         <Link href="/login"><span className="flex text-[#F1F1F1] font-josefin font-semibold text-[14px] leading-4 items-center">
            Login<LuUser className="ml-[3px]" />
          </span></Link>
          <span className="flex text-[#F1F1F1] font-josefin font-semibold text-[14px] leading-4 items-center">
            Wishlist<IoMdHeartEmpty className="ml-[3px]" />
          </span>
          <BsCart2 className="text-[#F1F1F1] text-[18px] mt-[-6px]" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;


