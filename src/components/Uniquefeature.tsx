import React from 'react' 
import Image from 'next/image'
import Link from 'next/link';

const Uniquefeature = () => {
  return (
    <div className='w-full bg-[#F1F0FF] '>
      {/* main div */}
      <div className='max-w-[1920px] h-auto mt-24 flex items-center justify-center'>
      {/* outer main div */}
      <div className='max-w-[1050px] 2xl:h-[550px] flex items-center justify-center below-1200:flex-col'>
      {/* Left section */}
      <div className='flex items-center'>
        <Image src="/uniquefeature/Group 153.png" alt="backgroundpink" width={1000} height={1000} className='w-[481px] h-[449.62px] below-600:w-[280px] below-600:h-[300px]'></Image>
        <Image src="/uniquefeature/bannersofa.png" alt="sofa" width={1000} height={1000} className='w-[509px] h-[550px] ml-[-430px] mt-12 below-600:w-[300px] below-600:h-[320px] below-600:ml-[-270px]'></Image>
      </div>
      {/* Right section */}
      <div className='flex flex-col gap-5 below-1200:mb-10'>
        <h2 className='w-[507px] text-[35px] tracking-[1.5%] leading-[46.2px] text-[#151875] font-bold font-josefin mb-7 below-600:text-[22px] below-600:w-[280px] below-600:text-center'>Unique Features Of leatest &
        Trending Poducts</h2>
        <div className='flex gap-2'>
          <span className='w-[11px] h-[11px] bg-[#F52B70] rounded-full mt-1'></span>
          <p className='w-[427px] h-[21px] font-lato font-medium text-[#ACABC3] tracking-[1.5%] text-[16px] leading-[21.12px] below-600:w-[270px] below-600:mb-3'>All frames constructed with hardwood solids and laminates</p>
        </div>
        <div className='flex gap-2'>
          <span className='w-[11px] h-[11px] bg-[#2B2BF5] rounded-full mt-1'></span>
          <p className='w-[461px] h-[56px] font-lato font-medium text-[#ACABC3] tracking-[1.5%] text-[16px] leading-[28px] below-600:w-[270px] below-600:leading-[21px]'>Reinforced with double wood dowels, glue, screw - nails corner 
          blocks and machine nails</p>
        </div>
        <div className='flex gap-2'>
          <span className='w-[11px] h-[11px] bg-[#2BF5CC] rounded-full mt-1'></span>
          <p className='w-[352px] h-[21px] font-lato font-medium text-[#ACABC3] tracking-[1.5%] text-[16px] leading-[21.12px] below-600:w-[290px]'>Arms, backs and seats are structurally reinforced</p>
        </div>
        <div className='flex gap-5 mt-7 below-600:flex-col'>
        <Link href="/shops/grid"><button className='bg-[#FB2E86] rounded-[2px] px-10 py-3 text-[#FFFFFF] text-[17px] font-josefin tracking-[2%] below-600:text-center'>Shop Now</button></Link>
        <p className='flex flex-col below-600:text-center font-josefin text-[#151875] tracking-[2%] text-[14px] font-bold'>B&B Italian Sofa <span className='text-[14px] text-[#151875] font-normal'>$32.00</span></p>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Uniquefeature;
