import React from 'react'
import Image from 'next/image'
import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaSearchPlus } from "react-icons/fa";

const page = () => {

const shoplist = [
    {
        imageSrc: "/shop/Rectangle 32.png",
        title: "Accumsan tincidunt",
    },
    {
        imageSrc: "/shop/Rectangle 32 (1).png",
        title: "In nulla",
    },
    {
        imageSrc: "/shop/Rectangle 32 (2).png",
        title: "Vel sem",
    },
    {
        imageSrc: "/shop/Rectangle 32 (3).png",
        title: "Porttitor cum",
    },
    {
        imageSrc: "/shop/Rectangle 32 (4).png",
        title: "Nunc in",
    },
    {
        imageSrc: "/shop/Rectangle 32 (5).png",
        title: "Vitae facilisis",
    },
    {
        imageSrc: "/shop/Rectangle 32 (6).png",
        title: "Curabitur lectus",
    },
]
  return (
    <div>
    {/* top section from shop page */}
    <div className='w-full h-[286px] bg-[#F6F5FF] flex items-center'>
    {/* top section outer div */}
    <div className='w-[202px] h-[62px] wrapper'>
    <h2 className='font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold'>Shop List</h2>
    <ul className='flex gap-1'>
        <li className='font-lato text-[16px] text-black font-medium'>Home .</li>
        <li className='font-lato text-[16px] text-black font-medium'>Pages</li>
        <li className='font-lato text-[16px] text-[#FB2E86] font-medium'>. Shop List</li>
    </ul>
    </div>
    </div>
<div className="flex flex-col items-center justify-center mt-28">
  <div className="w-[1171px] h-[44px] flex items-center justify-between below-1200:flex-col below-1200:w-auto below-1200:h-auto below-1200:gap-4">
    {/* Left section */}
    <div className="flex flex-col gap-1 below-1200:items-center below-1200:text-center">
      <h2 className="font-josefin text-[#151875] text-[22px] font-bold">
        Ecommerce Acceories & Fashion item
      </h2>
      <p className="font-lato font-normal text-[#8A8FB9] text-[12px]">
        About 9,620 results (0.62 seconds)
      </p>
    </div>

    {/* Right section */}
    <div className="flex gap-6 below-1200:flex-col below-1200:items-center below-1200:gap-4">
      {/* Per Page */}
      <div className="flex gap-2 items-center">
        <label htmlFor="per-page-input" className="text-[16px] font-lato font-normal text-[#3F509E]">
          Per Page:
        </label>
        <input
          type="text"
          id="per-page-input"
          className="w-[55px] h-[25px] border-[1px] border-[#E7E6EF] focus:outline-none rounded-[2px]"
        />
      </div>

      {/* Sort By */}
      <div className="flex gap-2 items-center">
        <span className="text-[16px] font-lato font-normal text-[#3F509E]">Sort By:</span>
        <div className="w-[96px] h-[28px] border-[1px] border-[#E7E6EF] rounded-[2px] flex items-center justify-between px-2">
          <p className="font-lato font-normal text-[#8A8FB9] text-[12px]">Best Match</p>
          <Image
            src="/shop/akar-icons_chevron-down.png"
            alt="dropdown"
            width={12}
            height={12}
            className="relative"
          />
        </div>
      </div>

      {/* View */}
      <div className="flex gap-2 items-center">
        <label htmlFor="per-view-input" className="text-[16px] font-lato font-normal text-[#3F509E]">
          View:
        </label>
        <IoGrid className="w-[12px] h-[12px] text-[#151875]" />
        <FaList className="w-[12px] h-[12px] text-[#151875]" />
        <input
          type="text"
          id="per-view-input"
          className="w-[162px] h-[30px] border-[1px] border-[#E7E6EF] focus:outline-none rounded-[2px]"
        />
      </div>
    </div>
  </div>

  {/* Parent div for multiple carts */}
  <div className="flex flex-col items-center justify-center gap-10 mt-20 below-1200:gap-6">
    {shoplist.map((shop, index) => (
      <div
        key={index}
        className="flex gap-6 w-[1141px] h-[251px] items-center below-1200:flex-col below-1200:gap-6 below-1200:w-full below-1200:h-auto below-1200:text-center"
      >
        <Image
          src={shop.imageSrc}
          alt="shopitem"
          width={313.63}
          height={217.56}
          className="below-1200:w-[90%] below-1200:h-auto"
        />
        <div className="flex flex-col gap-3 below-1200:items-center">
          <div className="flex gap-8 below-1200:text-center">
            <h2 className="text-[19.88px] font-josefin text-[#111C85] font-bold">{shop.title}</h2>
            <div className="flex gap-2 below-1200:justify-center mt-2">
              <span className="w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full"></span>
              <span className="w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full"></span>
              <span className="w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full"></span>
            </div>
          </div>
          <div>
            <span className="text-[#111C85] text-[15.46px] flex gap-2 below-1200:justify-center font-josefin">
              $26.00
              <span className="text-[#FF2AAA] text-[15.46px] line-through font-josefin">
                $52.00
              </span>
            </span>
          </div>
          <p className="font-lato font-normal text-[17.67px] text-[#9295AA] leading-[30.92px] w-[560px] below-1200:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
            phasellus non in justo.
          </p>
          <div className="flex gap-10 below-1200:justify-center">
            <BsCart2 className="text-[#535399] w-[20.98px] h-[20.98px]" />
            <IoMdHeartEmpty className="text-[#535399] w-[19.88px] h-[19.88px]" />
            <FaSearchPlus className="text-[#535399] w-[17.67px] h-[17.67px]" />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    {/* company logo */}
    <div className='flex items-center justify-center mt-36 mb-36 below-600:mt-14 below-600:mb-0 below-1200:mt-[300px]'>
    <Image src="/Topcategory/image 1174.png" alt="companylogo" width={1000} height={1000} className='w-[904px] h-[93px] below-500:w-[280px] below-500:h-[50px]'></Image>
    </div>
    </div>
  )
}

export default page;
