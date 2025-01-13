import React from 'react';
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa6";
import { FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  params: { id: number }; // Ensure id is of type number
};

const productdetail = 
  [
    {
      id: 1,
      imageSrc: "/shop grid/shopgrid1.png",
      title: "Vel elit euismod",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 2,
      imageSrc: "/shop grid/shopgrid2.png",
      title: "Ultricies condimentum imperdiet",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 3,
      imageSrc: "/shop grid/shopgrid3.png",
      title: "Vitae suspendisse sed",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 4,
      imageSrc: "/shop grid/shopgrid4.png",
      title: "Sed at fermentum",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 5,
      imageSrc: "/shop grid/shopgrid5.png",
      title: "Fusce pellentesque at",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 6,
      imageSrc: "/shop grid/shopgrid6.png",
      title: "Vestibulum magna laoreet",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 7,
      imageSrc: "/shop grid/shopgrid7.png",
      title: "Sollicitudin amet orci",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 8,
      imageSrc: "/shop grid/shopgrid8.png",
      title: "Ultrices mauris sit",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 9,
      imageSrc: "/shop grid/shopgrid9.png",
      title: "Pellentesque condimentum ac",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 10,
      imageSrc: "/shop grid/shopgrid10.png",
      title: "Cras scelerisque velit",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 11,
      imageSrc: "/shop grid/shopgrid11.png",
      title: "Lectus vulputate faucibus",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 12,
      imageSrc: "/shop grid/shopgrid12.png",
      title: "Purus risus, ut",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 13,
      imageSrc: "/shop/Rectangle 32.png",
      title: "Accumsan tincidunt",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 14,
      imageSrc: "/shop/Rectangle 32 (1).png",
      title: "In nulla",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 15,
      imageSrc: "/shop/Rectangle 32 (2).png",
      title: "Vel sem",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 16,
      imageSrc: "/shop/Rectangle 32 (3).png",
      title: "Porttitor cum",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 17,
      imageSrc: "/shop/Rectangle 32 (4).png",
      title: "Nunc in",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 18,
      imageSrc: "/shop/Rectangle 32 (5).png",
      title: "Vitae facilisis",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 19,
      imageSrc: "/shop/Rectangle 32 (6).png",
      title: "Curabitur lectus",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 20,
      imageSrc: "/shop/shop11.jpeg",
      title: "Dictum morbi",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 21,
      imageSrc: "/shop/Rectangle 32 (7).png",
      title: "Sodales sit",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 22,
      imageSrc: "/shop/Rectangle 32 (8).png",
      title: "Nibh varius",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 23,
      imageSrc: "/shop/Rectangle 32 (9).png",
      title: "Mauris quis",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 24,
      imageSrc: "/shop/Rectangle 32 (10).png",
      title: "Morbi sagittis",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 25,
      imageSrc: "/shop/Rectangle 32 (11).png",
      title: "Ultricies venenatis",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 26,
      imageSrc: "/shop/Rectangle 32 (12).png",
      title: "Scelerisque dignissim",
      discount: "$52.00",
      price: "$26.00"
    },
    {
      id: 27,
      imageSrc: "/featureproduct/chair1.png",
      title: "Cantilever chair",
      discount: "$52.00",
      price: "$42.00"
    },
    {
      id: 28,
      imageSrc: "/featureproduct/chair2.png",
      title: "Cantilever chair",
      discount: "$52.00",
      price: "$42.00"
    },
    {
      id: 29,
      imageSrc: "/featureproduct/chair3.png",
      title: "Cantilever chair",
      discount: "$52.00",
      price: "$42.00"
    },
    {
      id: 30,
      imageSrc: "/featureproduct/chair4.png",
      title: "Cantilever chair",
      discount: "$52.00",
      price: "$42.00"
    },
    {
      id: 31,
      imageSrc: "/latestproduct/sofa1.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00"
    },
    {
      id: 32,
      imageSrc: "/latestproduct/sofa-2.0.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00"
    },
    {
      id: 33,
      imageSrc: "/latestproduct/sofa-3.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00"
    },
    {
      id: 34,
      imageSrc: "/latestproduct/sofa-4.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00"
    },
    {
      id: 35,
      imageSrc: "/latestproduct/sofa-5.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00"
    },
    {
      id: 36,
      imageSrc: "/latestproduct/sofa-6.png",
      title: "Comfort Handy Craft",
      discount: "$65.00",
      price: "$42.00"
    },
    {
      id: 37,
      imageSrc: "/trendingproducts/trendingproduct-1.png",
      title: "Cantilever chair",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 38,
      imageSrc: "/trendingproducts/trendingproduct-2.png",
      title: "Cantilever chair",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 39,
      imageSrc: "/trendingproducts/trendingproduct-3.png",
      title: "Cantilever chair",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 40,
      imageSrc: "/trendingproducts/trendingproduct-4.png",
      title: "Cantilever chair",
      discount: "$42.00",
      price: "$26.00"
    },
    {
      id: 41,
      imageSrc: "/Topcategory/chair1.png",
      title: "Mini LCW Chair",
      discount: "$42.00",
      price: "$56.00"
    },
    {
      id: 42,
      imageSrc: "/Topcategory/chair2.png",
      title: "Mini LCW Chair",
      discount: "$42.00",
      price: "$56.00"
    },
    {
      id: 43,
      imageSrc: "/Topcategory/chair3.png",
      title: "Mini LCW Chair",
      discount: "$42.00",
      price: "$56.00"
    },
    {
      id: 44,
      imageSrc: "/Topcategory/chair4.png",
      title: "Mini LCW Chair",
      discount: "$42.00",
      price: "$56.00"
    }
  ]


const Page = ({ params }: Props) => {
 
  
  // Convert params.id to number (if not already a number)
  const product = productdetail.find((item) => item.id === Number(params.id));


  return (
    <div>
      {product ? (
        <div className='flex flex-col items-center justify-center'>
                <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center">
        {/* top section outer div */}
        <div className="w-[314px] h-[64px] wrapper">
          <h2 className="font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold">
          Product Details
          </h2>
          <ul className="flex gap-1">
            <li className="font-lato text-[16px] text-black font-medium">
              Home .
            </li>
            <li className="font-lato text-[16px] text-black font-medium">
              Page 
            </li>
            <li className="font-lato text-[16px] text-[#FB2E86] font-medium">
              . Product Details
            </li>
          </ul>
        </div>
      </div>

      <div className='w-[1170px] h-[509px] rounded-[2px] shadow-[0px_0px_25px_10px_#F6F4FD] flex items-center justify-center gap-10 below-1200:w-[700px] below-900:flex-col below-900:h-auto below-900:w-[300px] mt-20 mb-20'>
      <div className='flex gap-3 below-1200:gap-2 below-900:gap-1'>
        <div className='flex flex-col gap-2'>
          <div className='bg-purple-50 w-[151px] h-[155px] flex items-center justify-center below-1200:w-[100px] below-900:w-[50px] below-900:h-[70px]'>
          <Image src={product.imageSrc} alt={product.title} width={151} height={155} className='below-1200:w-[100px]'></Image>
          </div>
          <div className='bg-pink-50 w-[151px] h-[155px] flex items-center justify-center below-1200:w-[100px] below-900:w-[50px] below-900:h-[70px]'>
          <Image src={product.imageSrc} alt={product.title} width={151} height={155} className='below-1200:w-[100px]'></Image>
          </div>
          <div className='bg-blue-50 w-[151px] h-[155px] flex items-center justify-center below-1200:w-[100px] below-900:w-[50px] below-900:h-[70px]'>
          <Image src={product.imageSrc} alt={product.title} width={151} height={155} className='below-1200:w-[100px]'></Image>
          </div>
        </div>
        <div>
        <div className='bg-gray-100 w-[375px] h-[481px] flex items-center justify-center below-1200:w-[250px] below-900:h-[225px]'>
          <Image src={product.imageSrc} alt={product.title} width={300} height={400} className='below-900:h-[200px]'></Image>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5 below-900:items-center'>
        <h2 className='text-[36px] font-bold font-josefin text-[#0D134E] below-1200:text-[25px]'>{product.title}</h2>
        <span className='text-[#151875] text-[16px] font-josefin flex gap-2'>{product.price}<span className='font-josefin text-[16px] line-through text-[#FB2E86]'>{product.discount}</span></span>
        <p className='text-[#0D134E] text-[16px] font-josefin font-semibold'>Color</p>
        <p className='font-josefin text-[#A9ACC6] text-[16px] w-[549px] below-1200:w-[300px] below-900:w-full below-900:px-2 below-900:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
        <div className='flex gap-3 items-center'>
        <button className='font-josefin text-[20px] text-[#151875]'>Add To cart</button>
        <span><FaRegHeart className='text-[#151875]'/></span>
        </div>
        <h3 className='text-[16px] font-josefin text-[#151875] font-semibold'>Categories:</h3>
        <h3 className='text-[16px] font-josefin text-[#151875] font-semibold'>Tags</h3>
        <div className='flex gap-4 items-center'>
          <h3 className='text-[16px] font-josefin text-[#151875] font-semibold'>Share</h3>
          <span className='flex gap-4 mt-1 mb-1'>
                <span className='w-[19px] h-[19px] bg-[#151875] rounded-full flex items-center justify-center'><TiSocialFacebook className='text-white w-[12.43px] h-[12.43px]'/></span>
                <span className='w-[19px] h-[19px] bg-[#FB2E86] rounded-full flex items-center justify-center'><IoLogoInstagram  className='text-white w-[12.43px] h-[12.43px]'/></span>
                <span className='w-[19px] h-[19px] bg-[#151875] rounded-full flex items-center justify-center'><FaTwitter className='text-white w-[12.43px] h-[12.43px]'/></span>
                </span>
        </div>
      </div>
      </div>
      <div className='bg-[#F9F8FE] w-full items-center justify-center'>
      <div className='flex items-center justify-center below-900:items-center'>
      <div className='h-[649px] flex flex-col gap-8 justify-center below-900:items-center below-900:h-full below-900:mt-4 below-900:mb-8'>
        
        <ul className='flex gap-10 below-900:gap-5'>
          <li className='text-[24px] text-[#151875] font-josefin font-medium hover:underline  below-900:text-[14px]'>Description</li>
          <li className='text-[24px] text-[#151875] font-josefin font-medium hover:underline below-900:text-[14px]'>Additional Info</li>
          <li className='text-[24px] text-[#151875] font-josefin font-medium hover:underline below-900:text-[14px]'>Reviews</li>
          <li className='text-[24px] text-[#151875] font-josefin font-medium hover:underline below-900:text-[14px]'>Video</li>
        </ul>
       
        <div className='flex flex-col gap-2 below-900:px-3'>
        <h2 className='text-[#151875] text-[22px] font-josefin font-semibold'>Varius tempor.</h2>
        <p className='w-[1153px] text-[16px] text-[#A9ACC6] font-josefin leading-[29px] below-1200:w-[700px] below-900:w-full'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
        
        <div className='flex flex-col gap-3 below-900:px-3'>
          <h2 className='text-[#151875] text-[22px] font-josefin font-semibold'>More details</h2>
          <div className='flex flex-col gap-3'>
            <span className='flex gap-2'><FaArrowRight className='w-[24px] h-[24px] text-black hover:text-[#2F1AC4]'/><p className='text-[16px] font-josefin text-[#A9ACC6] below-1200:w-[700px]  below-900:w-full '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></span>
            <span className='flex gap-2'><FaArrowRight className='w-[24px] h-[24px] text-black hover:text-[#2F1AC4]'/><p className='text-[16px] font-josefin text-[#A9ACC6] below-1200:w-[700px]  below-900:w-full '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></span>
            <span className='flex gap-2'><FaArrowRight className='w-[24px] h-[24px] text-black hover:text-[#2F1AC4]'/><p className='text-[16px] font-josefin text-[#A9ACC6] below-1200:w-[700px]  below-900:w-full '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></span>
            <span className='flex gap-2'><FaArrowRight className='w-[24px] h-[24px] text-black hover:text-[#2F1AC4]'/><p className='text-[16px] font-josefin text-[#A9ACC6] below-1200:w-[700px]  below-900:w-full '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></span>
          </div>
        </div>
      </div>
      </div>
      </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Page;

