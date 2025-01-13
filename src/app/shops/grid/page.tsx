import React from "react";
import Image from "next/image";
import { FaList, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";


const page = () => {


  const shopgrid = [
    {
      id: 1,
      imageSrc: "/shop grid/shopgrid1.png",
      title: "Vel elit euismod",
      width: 201,
      height: 201,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 2,
      imageSrc: "/shop grid/shopgrid2.png",
      title: "Ultricies condimentum imperdiet",
      width: 169,
      height: 169,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 3,
      imageSrc: "/shop grid/shopgrid3.png",
      title: "Vitae suspendisse sed",
      width: 201,
      height: 201,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 4,
      imageSrc: "/shop grid/shopgrid4.png",
      title: "Sed at fermentum",
      width: 188,
      height: 188,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 5,
      imageSrc: "/shop grid/shopgrid5.png",
      title: "Fusce pellentesque at",
      width: 128,
      height: 139,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 6,
      imageSrc: "/shop grid/shopgrid6.png",
      title: "Vestibulum magna laoreet",
      width: 154,
      height: 158,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 7,
      imageSrc: "/shop grid/shopgrid7.png",
      title: "Sollicitudin amet orci",
      width: 114,
      height: 144,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 8,
      imageSrc: "/shop grid/shopgrid8.png",
      title: "Ultrices mauris sit",
      width: 167,
      height: 167,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 9,
      imageSrc: "/shop grid/shopgrid9.png",
      title: "Pellentesque condimentum ac",
      width: 170,
      height: 151,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 10,
      imageSrc: "/shop grid/shopgrid10.png",
      title: "Cras scelerisque velit",
      width: 169,
      height: 158,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 11,
      imageSrc: "/shop grid/shopgrid11.png",
      title: "Lectus vulputate faucibus",
      width: 176,
      height: 176,
      discount: "$42.00",
      price: "$26.00",
    },
    {
      id: 12,
      imageSrc: "/shop grid/shopgrid12.png",
      title: "Purus risus, ut",
      width: 188,
      height: 188,
      discount: "$42.00",
      price: "$26.00",
    },
    {   id:13,
      imageSrc: "/shop/Rectangle 32.png",
      title: "Accumsan tincidunt",
      width: 188,
      height: 188,
      discount: "$52.00",
      price: "$26.00",
  },
  {   id:14,
      imageSrc: "/shop/Rectangle 32 (1).png",
      title: "In nulla",
      width: 188,
      height: 188,
      discount: "$52.00",
      price: "$26.00",
  },
  {   id:15,
      imageSrc: "/shop/Rectangle 32 (2).png",
      title: "Vel sem",
      width: 188,
      height: 188,
      discount: "$52.00",
      price: "$26.00",
  },
  {   id:16,
      imageSrc: "/shop/Rectangle 32 (3).png",
      title: "Porttitor cum",
      width: 188,
      height: 188,
      discount: "$52.00",
      price: "$26.00",
  },
  {   id:17,
      imageSrc: "/shop/Rectangle 32 (4).png",
      title: "Nunc in",
      width: 188,
      height: 188,
      discount: "$52.00",
      price: "$26.00",
  },
  {   id:18,
      imageSrc: "/shop/Rectangle 32 (5).png",
      title: "Vitae facilisis",
      width: 188,
      height: 188,
      discount: "$52.00",
      price: "$26.00",
  },
  {   id:19,
      imageSrc: "/shop/Rectangle 32 (6).png",
      title: "Curabitur lectus",
      width: 188,
      height: 188,
      discount: "$52.00",
      price: "$26.00",
  },
  {  id:20,
    imageSrc: "/shop/shop11.jpeg",
    title: "Dictum morbi",
    width: 188,
    height: 188,
    discount: "$52.00",
    price: "$26.00",
},
{  id:21,
  imageSrc: "/shop/Rectangle 32 (7).png",
  title: "Sodales sit",
  width: 188,
  height: 188,
  discount: "$52.00",
  price: "$26.00",
},
{  id:22,
  imageSrc: "/shop/Rectangle 32 (8).png",
  title: "Nibh varius",
  width: 188,
  height: 188,
  discount: "$52.00",
  price: "$26.00",
},
{  id:23,
  imageSrc: "/shop/Rectangle 32 (9).png",
  title: "Mauris quis",
  width: 188,
  height: 188,
  discount: "$52.00",
  price: "$26.00",
},
{  id:24,
  imageSrc: "/shop/Rectangle 32 (10).png",
  title: "Morbi sagittis",
  width: 188,
  height: 188,
  discount: "$52.00",
  price: "$26.00",
},
{  id:25,
  imageSrc: "/shop/Rectangle 32 (11).png",
  title: "Ultricies venenatis",
  width: 188,
  height: 188,
  discount: "$52.00",
  price: "$26.00",
},
{  id:26,
  imageSrc: "/shop/Rectangle 32 (12).png",
  title: "Scelerisque dignissim",
  width: 188,
  height: 188,
  discount: "$52.00",
  price: "$26.00",
},
{ id:27,
  imageSrc: "/featureproduct/chair1.png",
  title: "Cantilever chair",
  width: 188,
  height: 188,
  price: "$42.00",
  discount: "$52.00",
},
{ id:28,
  imageSrc: "/featureproduct/chair2.png",
  title: "Cantilever chair",
  width: 188,
  height: 188,
  price: "$42.00",
  discount: "$52.00",
},
{ id:29,
  imageSrc: "/featureproduct/chair3.png",
  title: "Cantilever chair",
  width: 188,
  height: 188,
  price: "$42.00",
  discount: "$52.00",
},
{ id:30,
  imageSrc: "/featureproduct/chair4.png",
  title: "Cantilever chair",
  width: 188,
  height: 188,
  price: "$42.00",
  discount: "$52.00",
},
{ id:31,
  imageSrc: "/latestproduct/sofa1.png",
  title: "Comfort Handy Craft",
  width: 188,
  height: 188,
  discount: "$65.00",
  price: "$42.00",
},
{ id:32,
  imageSrc: "/latestproduct/sofa-2.0.png",
  title: "Comfort Handy Craft",
  width: 188,
  height: 188,
  discount: "$65.00",
  price: "$42.00",
},
{ id:33,
  imageSrc: "/latestproduct/sofa-3.png",
  title: "Comfort Handy Craft",
  width: 188,
  height: 188,
  discount: "$65.00",
  price: "$42.00",
},
{ id:34,
  imageSrc: "/latestproduct/sofa-4.png",
  title: "Comfort Handy Craft",
  width: 188,
  height: 188,
  discount: "$65.00",
  price: "$42.00",
},
{ id:35,
  imageSrc: "/latestproduct/sofa-5.png",
  title: "Comfort Handy Craft", 
  width: 188,
  height: 188,
  discount: "$65.00",
  price: "$42.00",
},
{ id:36,
  imageSrc: "/latestproduct/sofa-6.png",
  title: "Comfort Handy Craft",
  width: 188,
  height: 188,
  discount: "$65.00",
  price: "$42.00",
},
{ id:37,
  imageSrc: "/trendingproducts/trendingproduct-1.png",
  title: "Cantilever chair",
  discount: "$42.00",
  price: "$26.00 ",
  width: 171,
  height: 160,
},
{ id:38,
  imageSrc: "/trendingproducts/trendingproduct-2.png",
  title: "Cantilever chair",
  discount: "$42.00",
  price: "$26.00 ",
  width:187,
  height:187,
},
{ id:39,
  imageSrc: "/trendingproducts/trendingproduct-3.png",
  title: "Cantilever chair",
  discount: "$42.00",
  price: "$26.00 ",
  width:270,
  height:200,
},
{ id:40,
  imageSrc: "/trendingproducts/trendingproduct-4.png",
  title: "Cantilever chair",
  discount: "$42.00",
  price: "$26.00 ",
  width:253,
  height:211,
},
{ id:41,
  imageSrc: "/Topcategory/chair1.png",
  title: "Mini LCW Chair",
  discount: "$42.00",
  price: "$56.00",
  width: 178, 
  height: 178, 
},
{ id:42,
  imageSrc: "/Topcategory/chair2.png",
  title: "Mini LCW Chair",
  discount: "$42.00",
  price: "$56.00",
  width: 158, 
  height: 157, 
},
{  id:43,
  imageSrc: "/Topcategory/chair3.png",
  title: "Mini LCW Chair",
  discount: "$42.00",
  price: "$56.00",
  width: 149, 
  height: 149, 
},
{  id:44,
  imageSrc: "/Topcategory/chair4.png",
  title: "Mini LCW Chair",
  discount: "$42.00",
  price: "$56.00",
  width: 178, 
  height: 178, 
},
  ];
  return (
    <div>
      <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center">
        {/* top section outer div */}
        <div className="w-[314px] h-[64px] wrapper">
          <h2 className="font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold">
            Shop Grid Default
          </h2>
          <ul className="flex gap-1">
            <li className="font-lato text-[16px] text-black font-medium">
              Home .
            </li>
            <li className="font-lato text-[16px] text-black font-medium">
              Pages
            </li>
            <li className="font-lato text-[16px] text-[#FB2E86] font-medium">
              . Shop Grid Default
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="w-[1171px] h-[44px] flex items-center justify-between below-1200:flex-col below-1200:w-auto below-1200:h-auto below-1200:gap-4 mt-20">
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
              <label
                htmlFor="per-page-input"
                className="text-[16px] font-lato font-normal text-[#3F509E]"
              >
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
              <span className="text-[16px] font-lato font-normal text-[#3F509E]">
                Sort By:
              </span>
              <div className="w-[96px] h-[28px] border-[1px] border-[#E7E6EF] rounded-[2px] flex items-center justify-between px-2">
                <p className="font-lato font-normal text-[#8A8FB9] text-[12px]">
                  Best Match
                </p>
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
              <label
                htmlFor="per-view-input"
                className="text-[16px] font-lato font-normal text-[#3F509E]"
              >
                View:
              </label>
             <span className="flex items-center gap-2 justify-center text-[#151875]"><Link href="/shops/grid"><IoGrid className="w-[12px] h-[12px] text-[#151875]" /></Link>Grid</span>
             <Link href="/shops/list" className="flex items-center gap-2 justify-center text-[#151875]"><FaList className="w-[12px] h-[12px] text-[#151875]" />List</Link>
              
            </div>
          </div>
        </div>

        
{/* Parent div for multiple products */}
<div className="grid grid-cols-4 gap-14 mt-[120px] below-1400:grid-cols-2 below-600:grid-cols-1">
  {shopgrid.map((item, index) => (
    <div
      key={index}
      className="w-[290px] h-[363px] animate-fadeIn"
    >
      {/* Top section */}
      <div className="w-[290px] h-[280px] bg-[#F6F7FB] relative group">
        {/* Image Centered */}
        <div className="flex items-center justify-center w-full h-full animate-imageSlideIn">
          <Image
            src={item.imageSrc}
            alt={item.title}
            width={item.width}
            height={item.height}
            className="object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Icons Positioned to the Left */}
        <div className="flex flex-col gap-2 absolute top-[150px] left-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-slideInLeft">
          <div className="relative w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-all duration-200">
            <BsCart2 className="text-[#1389FF] hover:text-[#2F1AC4]" />
          </div>
          <div className="relative w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-all duration-200">
            <FaRegHeart className="text-[#1389FF] hover:text-[#2F1AC4]" />
          </div>
          <div className="relative w-[30px] h-[30px] bg-transparent rounded-full flex items-center justify-center hover:bg-[#EEEFFB] transition-all duration-200">
            <Link href={`/productdetail/${item.id}`}><FaSearchPlus className="text-[#1389FF] hover:text-[#2F1AC4]" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center justify-center gap-3 animate-fadeUp">
        <h1 className="text-[18px] font-josefin text-[#111C85] font-bold mt-4">
          {item.title}
        </h1>
        <div className="flex gap-2 below-1200:justify-center mt-[-8px]">
          <span className="w-[12.15px] h-[12.15px] bg-[#DE9034] rounded-full"></span>
          <span className="w-[12.15px] h-[12.15px] bg-[#E60584] rounded-full"></span>
          <span className="w-[12.15px] h-[12.15px] bg-[#5E37FF] rounded-full"></span>
        </div>
        <div className="flex gap-3">
          <span className="text-[#111C85] text-[15.46px] flex gap-2 font-josefin">{item.price}</span>
          <span className="text-[#FF2AAA] text-[15.46px] line-through font-josefin">{item.discount}</span>
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
  );
};

export default page;