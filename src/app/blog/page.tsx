import React from 'react'
import Image from 'next/image'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


const page = () => {

const blogData = [
  {
    imageSrc: "/blog/blog1.jpeg",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    imageSrc: "/blog/blog2.jpeg",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    imageSrc: "/blog/blog3.jpeg",
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
]

const recentpostData = [
  {
    imagesrc: "/blog/recentpost1.jpeg"
  },
  {
    imagesrc: "/blog/recentpost2.jpeg"
  },
  {
    imagesrc: "/blog/recentpost3.jpeg"
  },
  {
    imagesrc: "/blog/recentpost4.jpeg"
  },
]

const saleproductData = [
  {
    imagesrc: "/blog/saleproduct1.jpeg"
  },
  {
    imagesrc: "/blog/saleproduct2.jpeg"
  },
  {
    imagesrc: "/blog/saleproduct3.jpeg"
  },
]

  return (
    <div>
       {/* top section from blog page */}
       <div className='w-full h-[286px] bg-[#F6F5FF] flex items-center'>
      {/* top section outer div */}
      <div className='w-[202px] h-[62px] wrapper'>
      <h2 className='font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold'>Blog Page</h2>
      <ul className='flex gap-1'>
        <li className='font-lato text-[16px] text-black font-medium'>Home .</li>
        <li className='font-lato text-[16px] text-black font-medium'>Pages</li>
        <li className='font-lato text-[16px] text-[#FB2E86] font-medium'>. Blog Page</li>
      </ul>
      </div>
      </div>

      <div className='flex items-start justify-center gap-10 mt-28 below-1200:flex-col below-1200:items-center below-1200:justify-center'>
      <div className="flex flex-col items-center justify-center">
  {blogData.map((blog, index) => (
    <div
      key={index}
      className="flex gap-7 flex-col below-900:gap-5 below-900:items-center below-900:w-full"
    >
      <Image
        src={blog.imageSrc}
        alt="blog"
        width={870}
        height={453}
        className="rounded-[6px] below-900:w-[90%] below-900:h-auto"
      />
      <div className="flex gap-10 below-900:flex-col below-900:items-center below-900:gap-5">
        <div className="flex gap-2 below-900:items-center">
          <Image
            src="/blog/Vector (2).png"
            alt="icon"
            width={1000}
            height={1000}
            className="w-3 h-3 mt-[6px]"
          />
          <span className="w-[160px] h-[23px] bg-[#FFECE2] text-center font-normal font-josefin text-[14px] text-[#151875]">
            Surf Auxion
          </span>
        </div>
        <div className="flex gap-2 below-900:items-center">
          <Image
            src="/blog/uil_calendar-alt.png"
            alt="calendar icon"
            width={1000}
            height={1000}
            className="w-3 h-3 mt-[6px]"
          />
          <span className="w-[127px] h-[23px] bg-[#FFECE2] text-center font-lato text-[14px] font-semibold text-[#151875]">
            Aug 09 2020
          </span>
        </div>
      </div>
      <h2 className="text-[#151875] font-josefin text-[30px] leading-[35.16px] font-bold below-900:text-[24px] below-900:leading-[28px] below-900:text-center below-900:w-[290px]">
        {blog.title}
      </h2>
      <p className="w-[854px] h-[49px] text-[16px] font-lato font-normal leading-[25.6px] text-[#8A8FB9] below-900:w-[90%] below-900:h-auto below-900:text-center">
        {blog.paragraph}
      </p>
      <p className="flex gap-1 text-[#151875] font-lato font-semibold text-[18px] mb-10 below-900:justify-center">
        Read More
        <span className="w-[5px] h-[5px] bg-[#FB2E86] rounded-full mt-3"></span>
      </p>
    </div>
  ))}
</div>


      {/* parent div for Right section */}
      <div className='flex flex-col gap-12'>
      {/* search bar div */}
      <div className='w-[270px] h-[77px] flex flex-col gap-1'>
      <h2 className='text-[22px] text-[#151875] font-josefin font-semibold mt-[-5px]'>Search</h2>
      <div className='w-[270px] h-[40px] border-[1px] border-[#BDBDD8] rounded-[2px] flex justify-between'>
      <input type="text" placeholder='Search For Posts ' className='px-2 focus:outline-none' />
      <HiMagnifyingGlass className='relative top-3 text-[#CBCBE0] right-6' />
      </div>
      </div>

      {/* Categories div */}
      <div className='w-[254px] h-[161px] flex flex-col gap-7 mt-0'>
      <h2 className='font-josefin text-[#151875] text-[22px] font-semibold'>Categories</h2>
      <div className='flex gap-7'>
      <span className='text-[#3F509E] text-[14px] font-josefin'>Hobbies (14)</span>
      <span className='text-[#3F509E] text-[14px] font-josefin'>Women (21)</span>
      </div>
      <div className='flex gap-8'>
      <span className='text-[#3F509E] text-[14px] font-josefin'>Women (21)</span>
      <span className='text-[#3F509E] text-[14px] font-josefin'>Women (21)</span>
      </div>
      <div className='flex gap-8'>
      <span className='text-[#3F509E] text-[14px] font-josefin'>Women (21)</span>
      <span className='text-[#3F509E] text-[14px] font-josefin'>Women (21)</span>
      </div>
      </div>

      {/* Recent post div */}
      <div className=' flex gap-5 flex-col'>
      <h2 className='font-josefin text-[22px] font-semibold text-[#151875]'>Recent Post</h2>
      {recentpostData.map((recentpost, index) => (
      <div className='w-[250px] h-[51px] flex gap-2' key={index}>
      <Image src={recentpost.imagesrc} alt="recent posts" width={70} height={51}></Image>
      <p className='flex flex-col gap-0 text-[14px] font-josefin justify-center text-[#3F509E] font-normal'>It is a long established fact<span className='text-[#8A8FB9] text-[11px] font-lato font-semibold'>Aug 09 2020</span></p>
      </div>
    ))}
      </div>

      {/* Sale product div */}
      <div className=' flex gap-5 flex-col'>
      <h2 className='font-josefin text-[22px] font-semibold text-[#151875]'>Sale Product</h2>
      {saleproductData.map((saleproduct, index) => (
      <div className='w-[250px] h-[57px] flex gap-2' key={index}>
      <Image src={saleproduct.imagesrc} alt="sale items" width={70} height={57} className='rounded-[3px]'></Image>
      <p className='flex flex-col gap-0 text-[14px] font-josefin justify-center text-[#3F509E] font-normal'>It is a long established fact<span className='text-[#8A8FB9] text-[11px] font-lato font-semibold'>Aug 09 2020</span></p>
      </div>
    ))}
      </div>

      {/* Offer product div */}
      <div className='flex flex-col gap-5'>
      <h2 className='font-josefin text-[22px] font-semibold text-[#151875]'>Offer product</h2>
      <div className='w-[267px] h-[282px]'>
      {/* Top section */}
      <div className='flex gap-4'>
      <div className='w-[126px] h-[126px]'>
      <Image src="/blog/offerproduct1.png" alt="offer product" width={126} height={80}></Image>
      <p className='font-lato text-[#151875] text-[14px] font-semibold text-center mt-2'>Duis lectus est.</p>
      <span className='font-lato font-semibold text-[#8A8FB9] text-[12px] flex items-center justify-center mt-1'>$12.00 - $15.00</span>
      </div>
      <div className='w-[126px] h-[126px]'>
      <Image src="/blog/offerproduct2.png" alt="offer product" width={126} height={80}></Image>
      <p className='font-lato text-[#151875] text-[14px] font-semibold text-center mt-2'>Sed placerat.</p>
      <span className='font-lato font-semibold text-[#8A8FB9] text-[12px] flex items-center justify-center mt-1'>$12.00 - $15.00</span>
      </div>
      </div>
      {/* bottom section */}
      <div className='flex gap-4 mt-8'>
      <div className='w-[126px] h-[126px]'>
      <Image src="/blog/offerproduct1.png" alt="offer product" width={126} height={80}></Image>
      <p className='font-lato text-[#151875] text-[14px] font-semibold text-center mt-2'>Netus proin.</p>
      <span className='font-lato font-semibold text-[#8A8FB9] text-[12px] flex items-center justify-center mt-1'>$12.00 - $15.00</span>
      </div>
      <div className='w-[126px] h-[126px]'>
      <Image src="/blog/offerproduct2.png" alt="offer product" width={126} height={80}></Image>
      <p className='font-lato text-[#151875] text-[14px] font-semibold text-center mt-2'>Platea in.</p>
      <span className='font-lato font-semibold text-[#8A8FB9] text-[12px] flex items-center justify-center mt-1'>$12.00 - $15.00</span>
      </div>
      </div>

      </div>
      </div>

      {/* Follow section div */}
      <div className='w-[126px] h-[78px] flex flex-col gap-5'>
      <h2 className='font-josefin text-[22px] font-semibold text-[#151875]'>Follow</h2>
      <div>
      <span className='flex gap-[14px] items-center justify-center shadow-[0px_8px_40px_0px_#31208A0D] w-[126px] h-[41px]'>
      <span className='w-[25px] h-[25px] bg-[#5625DF] rounded-full flex items-center justify-center'><TiSocialFacebook className='text-white w-[16px] h-[16px]'/></span>
      <span className='w-[25px] h-[25px] bg-[#FF27B7] rounded-full flex items-center justify-center'><IoLogoInstagram  className='text-white w-[16px] h-[16px]'/></span>
      <span className='w-[25px] h-[25px] bg-[#37DAF3] rounded-full flex items-center justify-center'><FaTwitter className='text-white w-[16px] h-[16px]'/></span>
      </span>
      </div>
      </div>

      {/* Tags section div */}
      <div className='flex flex-col gap-5'>
      <h2 className='font-josefin text-[22px] font-semibold text-[#151875]'>Tags</h2>
      <div className='w-[228px] h-[64px] flex flex-col gap-3'>
      <ul className='flex gap-10'>
        <li className='underline font-normal font-lato text-[16px] text-[#151875] hover:text-[#FB2E86]'>General</li>
        <li className='underline font-normal font-lato text-[16px] text-[#151875] hover:text-[#FB2E86]'>Atsanil</li>
        <li className='underline font-normal font-lato text-[16px] text-[#151875] hover:text-[#FB2E86]'>Insas.</li>
      </ul>
      <ul className='flex gap-10'>
        <li className='underline font-normal font-lato text-[16px] text-[#151875] hover:text-[#FB2E86]'>Bibsaas</li>
        <li className='underline font-normal font-lato text-[16px] text-[#151875] hover:text-[#FB2E86]'>Nulla.</li>
      </ul>
      </div>
      </div>

      </div>
      </div>
            {/* company logo */}
            <div className='flex items-center justify-center mt-28 mb-20 below-600:mt-14 below-600:mb-0'>
            <Image src="/Topcategory/image 1174.png" alt="companylogo" width={1000} height={1000} className='w-[904px] h-[93px] below-500:w-[280px] below-500:h-[50px]'></Image>
            </div>
    </div>
  )
}

export default page;
