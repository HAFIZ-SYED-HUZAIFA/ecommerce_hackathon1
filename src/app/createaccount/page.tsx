import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
     {/* top section from create account page */}
     <div className='w-full h-[286px] bg-[#F6F5FF] flex items-center'>
     {/* top section outer div */}
      <div className='w-[202px] h-[62px] wrapper'>
      <h2 className='font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold'>My Account</h2>
      <ul className='flex gap-1'>
        <li className='font-lato text-[16px] text-black font-medium'>Home .</li>
        <li className='font-lato text-[16px] text-black font-medium'>Pages</li>
        <li className='font-lato text-[16px] text-[#FB2E86] font-medium'>. My Account</li>
      </ul>
      </div>
      </div>
      {/* Main container from create account section */}
      <div className='w-[544px] h-[600px]  flex flex-col items-center justify-center shadow-[0px_0px_25px_10px_#F8F8FB] mt-28 below-600:w-[280px]'>
      {/* child main div */}
      <div className='w-[433px] h-[580px] bg-[white] flex flex-col gap-1 justify-center below-600:w-[200px]'>
  <h2 className='flex items-center justify-center font-josefin text-[32px] leading-[37.5px] font-bold text-black below-600:text-[20px]'>
    Create Your Account
  </h2>
  <p className='flex items-center justify-center text-[#9096B2] text-[17px] font-lato font-normal leading-[20.4px] below-600:text-[14px] below-600:text-center'>
    Fill in the details below to register.
  </p>
  <label className='text-[17px] text-[#9096B2] font-lato font-normal'>
    Name:
    <input
      type='text'
      required
      className='w-[432px] h-[52px] border-[1px] rounded-sm border-[#C2C5E1] focus:outline-none px-1 mb-4 mt-2 below-600:w-[190px]'
    />
  </label>
  <label className='text-[17px] text-[#9096B2] font-lato font-normal'>
    Email or Phone:
    <input
      type='text'
      required
      className='w-[432px] h-[52px] border-[1px] rounded-sm border-[#C2C5E1] focus:outline-none px-1 mb-4 mt-2 below-600:w-[190px]'
    />
  </label>
  <label className='text-[17px] text-[#9096B2] font-lato font-normal'>
    Password:
    <input
      type='password'
      required
      className='w-[432px] h-[52px] border-[1px] rounded-sm border-[#C2C5E1] focus:outline-none px-1 mb-4 mt-2 below-600:w-[190px]'
    />
  </label>
  <label className='text-[17px] text-[#9096B2] font-lato font-normal'>
    Confirm Password:
    <input
      type='password'
      required
      className='w-[432px] h-[52px] border-[1px] rounded-sm border-[#C2C5E1] focus:outline-none px-1 mb-4 mt-2 below-600:w-[190px]'
    />
  </label>
  <button className='w-[432px] rounded-[3px] h-[47px] bg-[#FB2E86] text-[#FFFFFF] below-600:w-[190px]'>Create Account</button>
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
