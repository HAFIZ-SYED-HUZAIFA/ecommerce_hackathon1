import React from 'react'
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";

const Latestproduct = () => {

  const productDetail = [
    {
      imageSrc: "/latestproduct/sofa1.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00",
    },
    {
      imageSrc: "/latestproduct/sofa-2.0.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00",
    },
    {
      imageSrc: "/latestproduct/sofa-3.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00",
    },
    {
      imageSrc: "/latestproduct/sofa-4.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00",
    },
    {
      imageSrc: "/latestproduct/sofa-5.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00",
    },
    {
      imageSrc: "/latestproduct/sofa-6.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      {/* Main div */}
      <div>
        {/* Heading */}
        <h2 className="text-center font-bold mb-3 mt-[138px] font-josefin text-[42px] text-[#1A0B5B] below-500:text-[25px]">
          Latest Products
        </h2>

        {/* Categories list */}
        <ul className="flex items-center justify-center gap-12 mb-10 below-600:flex-col below-600:gap-4">
          <li className="font-lato text-[18px] font-normal text-[#151875] hover:text-[#FB4997] hover:underline hover:cursor-pointer">New Arrival</li>
          <li className="font-lato text-[18px] font-normal text-[#151875] hover:text-[#FB4997] hover:underline hover:cursor-pointer">Best Seller</li>
          <li className="font-lato text-[18px] font-normal text-[#151875] hover:text-[#FB4997] hover:underline hover:cursor-pointer">Featured</li>
          <li className="font-lato text-[18px] font-normal text-[#151875] hover:text-[#FB4997] hover:underline hover:cursor-pointer">Special Offer</li>
        </ul>

        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-9 gap-y-28 justify-items-center items-center below-1200:grid-cols-1">
          {/* map function */}
          {productDetail.map((product, index) => (
            <div key={index} className="h-[306px] max-w-[360px] below-500:w-[280px]">
              {/* top section */}
              <div className='w-[360px] h-[269.96px] bg-[#F7F7F7] hover:bg-white below-500:max-w-[360px] below-500:w-[280px]'>
                {/* Sale img */}
                <div className='flex opacity-0 hover:opacity-100'>
                  <Image src="/latestproduct/Vector 1.png" alt="sale" width={1000} height={1000} className='w-[84.87px] h-[56.73px] mt-4 ml-4'></Image>
                  <span className='rotate-[-18.12deg] text-[14px] text-[#EEEFFB] font-josefin mt-[33px] ml-[-50px]'>sale</span>
                </div>
                {/* Icons */}
                <div className="flex flex-col gap-2 relative top-[60px] left-[13px] opacity-0 hover:opacity-100">
                  <div className="relative w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center hover:bg-[#EEEFFB] hover:duration-200">
                    <BsCart2 className="text-[#1389FF] hover:text-[#2F1AC4] hover:duration-200" />
                  </div>
                  <div className="relative w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center hover:bg-[#EEEFFB] hover:duration-200">
                    <FaRegHeart className="text-[#1389FF] hover:text-[#2F1AC4] hover:duration-200" />
                  </div>
                  <div className="relative w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center hover:bg-[#EEEFFB] hover:duration-200">
                    <FaSearchPlus className="text-[#1389FF] hover:text-[#2F1AC4] hover:duration-200" />
                  </div>
                </div>
                {/* sofa image */}
                <div className='flex items-center justify-center mt-[-150px]'>
                  <Image src={product.imageSrc} alt="sofa" width={1000} height={1000} className='w-[223px] h-[229px] below-500:max-w-[223px]' />
                </div>
              </div>
              {/* bottom section */}
              <div className='flex justify-between mt-4'>
                <p className='border-b-2 border-[#EEEFFB] text-[#151875] text-[16px] font-josefin'>{product.title}</p>
                <p className='flex gap-3 font-josefin text-[14px] text-[#151875]'>
                  {product.price}
                  <span className='font-josefin line-through text-[#FB2448] text-[12px]'>{product.discount}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Latestproduct;

