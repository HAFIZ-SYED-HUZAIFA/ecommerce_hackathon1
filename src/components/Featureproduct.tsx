import React from 'react';
import Image from 'next/image';
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";

const Featureproduct = () => {
  // Array to hold dynamic chair data
  const productData = [
    {
      imageSrc: "/featureproduct/chair1.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      imageSrc: "/featureproduct/chair2.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      imageSrc: "/featureproduct/chair3.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
    {
      imageSrc: "/featureproduct/chair4.png",
      title: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
    },
  ];

  return (
    <div>
      <div className="wrapper mt-[138px]">
        {/* Heading */}
        <h2 className="flex items-center justify-center font-bold mb-14 font-josefin text-[42px] text-[#1A0B5B] below-500:text-[25px]">
          Featured Products
        </h2>

        {/* Cards Container */}
        <div className="flex flex-row gap-6 justify-center below-1200:flex-col below-1200:items-center below-1200:justify-center below-1200:gap-10">
          {productData.map((product, index) => (
            <div
              key={index}
              className="h-[361px] w-[270px] shadow-[0px_25px_25px_2px_rgba(0,0,0,0.1)] bg-white below-1200:w-[350px] below-500:w-[270px]"
            >
              {/* Top Section */}
              <div className="bg-[#F6F7FB] w-full h-[236px]">
                {/* Icons */}
                <div className="flex gap-2 relative top-[11px] left-[11px] opacity-0 hover:opacity-100">
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

                {/* Chair Image */}
                <div className="flex items-center justify-center">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    width={1000}
                    height={1000}
                    className="w-[178px] h-[178px]"
                  />
                </div>

                {/* View Details Button */}
                <div className="flex items-center justify-center opacity-0 hover:opacity-100 duration-200">
                  <button className="bg-[#08D15F] text-white text-[12px] font-josefin leading-3 px-3 py-2 mt-[-2px] rounded-[2px] hover:bg-[#028e4c] duration-200">
                    View Details
                  </button>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="group flex flex-col bg-white gap-2 h-[150px] items-center justify-center hover:bg-[#2F1AC4]">
                <p className="font-lato font-bold text-[#FB2E86] text-[18px] group-hover:text-white">
                  {product.title}
                </p>
                <Image
                  src="/featureproduct/Group 141.png"
                  alt="background design"
                  width={1000}
                  height={1000}
                  className="w-[52px] h-[4px]"
                />
                <p className="font-josefin text-[14px] text-[#151875] group-hover:text-white">
                  {product.code}
                </p>
                <p className="text-[#151875] text-[14px] font-lato font-normal group-hover:text-white">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featureproduct;
