import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Discount = () => {
  return (
    <div>
      {/* Main div  */}
      <div className='flex flex-col items-center justify-center mt-28 below-500:mt-16'>
        {/* Main heading */}
        <h2 className='flex items-center justify-center text-[42px] text-[#151875] font-bold font-josefin below-500:text-[25px]'>Discount Item</h2>
        {/* list categories */}
        <ul className='flex gap-7 items-center justify-center mt-6 below-500:flex-col below-500:gap-3'>
        <li className='font-lato text-[18px] text-[#151875] font-normal hover:text-[#FB2E86] hover:underline'>Wood Chair</li>
        <li className='font-lato text-[18px] text-[#151875] font-normal hover:text-[#FB2E86] hover:underline'>Plastic Chair</li>
        <li className='font-lato text-[18px] text-[#151875] font-normal hover:text-[#FB2E86] hover:underline'>Sofa Collection</li>
        </ul>
        {/* Parent div for right and left section */}
        <div className='flex items-center justify-between gap-5 mt-20 below-1200:flex-col'>
        {/* Left section */}
        <div className='flex flex-col gap-5 justify-center'>
        <h2 className='text-[35px] font-bold font-josefin tracking-[1.5%] text-[#151875] below-600:text-[25px] below-600:text-center'>20% Discount Of All Products</h2>
        <p className='tracking-[1.5] text-[#FB2E86] text-[21px] font-josefin below-600:text-center'>Eams Sofa Compact</p>
        <p className='font-lato font-normal text-[#B7BACB] tracking-[2%] text-[17px] w-[523px] leading-[30px] below-600:w-full below-600:px-3 below-600:text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
        <div>
        <div className='flex gap-8 below-600:flex-col below-600:gap-2 below-600:items-center'>
        <span className='flex gap-[2px] font-lato font-normal text-[16px] tracking-[2%] leading-[30px] text-[#B8B8DC]'><Image src="/discount/check.png" alt="check icon" width={1000} height={1000} className='w-4 h-[11px] mt-2'></Image>Material expose like metals</span>
        <span className='flex gap-[2px] font-lato font-normal text-[16px] tracking-[2%] leading-[30px] text-[#B8B8DC]'><Image src="/discount/check.png" alt="check icon" width={1000} height={1000} className='w-4 h-[11px] mt-2'></Image>Clear lines and geometric figures</span>
        </div>
        <div className='flex gap-8 below-600:flex-col below-600:gap-2 below-600:items-center'>
        <span className='flex gap-[2px] font-lato font-normal text-[16px] tracking-[2%] leading-[30px] text-[#B8B8DC]'><Image src="/discount/check.png" alt="check icon" width={1000} height={1000} className='w-4 h-[11px] mt-2'></Image>Simple neutral colours</span>
        <span className='flex gap-[2px] font-lato font-normal text-[16px] tracking-[2%] leading-[30px] text-[#B8B8DC] ml-7 below-600:ml-0'><Image src="/discount/check.png" alt="check icon" width={1000} height={1000} className='w-4 h-[11px] mt-2'></Image>Material expose like metals</span>
        </div>
        </div>
        <div className='below-600:flex below-600:items-center below-600:justify-center'>
        <Link href="/shops/grid"><button className="bg-[#FB2E86] text-white tracking-[2%] font-josefin text-[17px] w-[200px] h-[57px] rounded-[2px] hover:bg-[#E02D8D] focus:outline-none">Shop Now</button></Link>
        </div>
        </div>
        {/* Right section */}
        <div className='flex items-center justify-center below-500:mt-6'>
        <span className='w-[400px] h-[400px] bg-[#F5E1FC] rounded-full below-500:w-[280px] below-500:h-[280px]'></span>
        <Image src="/discount/discount-img1.png" alt="discount sofa" width={1000} height={1000} className='w-[699px] h-[520px] absolute below-500:w-[400px] below-500:h-[320px] '></Image>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Discount;

