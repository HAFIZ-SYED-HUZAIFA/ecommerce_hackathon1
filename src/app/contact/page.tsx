import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
    {/* top section from contact page */}
    <div className='w-full h-[286px] bg-[#F6F5FF] flex items-center'>
    {/* top section outer div */}
    <div className='w-[202px] h-[62px] wrapper'>
    <h2 className='font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold'>Contact Us</h2>
    <ul className='flex gap-1'>
        <li className='font-lato text-[16px] text-black font-medium'>Home .</li>
        <li className='font-lato text-[16px] text-black font-medium'>Pages</li>
        <li className='font-lato text-[16px] text-[#FB2E86] font-medium'>. Contact us</li>
    </ul>
    </div>
    </div>

    {/* Parent div for top and bottom section */}
    <div className='flex flex-col items-center justify-center gap-32 mt-28 mb-[220px]'>

    {/* top section */}
    <div className='flex items-center justify-center gap-[144px] mr-2 below-1400:flex-col below-1400:mr-0'>

    {/* left section */}
    <div className='flex flex-col gap-1 justify-center below-900:items-center'>
    <h2 className='text-[36px] text-[#151875] font-josefin font-bold below-900:w-full below-600:text-[25px]'>Information About us</h2>
    <p className='font-lato font-semibold text-[#8A8FB9] text-[16px] leading-[25.6px] w-[600px] below-900:w-[250px] below-600:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
    <div className='flex gap-2 mt-8'>
    <span className='w-[25px] h-[25px] bg-[#5625DF] rounded-full'></span>
    <span className='w-[25px] h-[25px] bg-[#FF27B7] rounded-full'></span>
    <span className='w-[25px] h-[25px] bg-[#37DAF3] rounded-full'></span>
    </div>
    </div>

<div className='flex flex-col gap-3 justify-center'>
  <h2 className='text-[36px] text-[#151875] font-josefin font-bold below-900:text-[25px] below-900:relative below-900:top-[-100px] below-900:flex below-900:items-center below-900:justify-center'>Contact Way</h2>
  {/* parent div for 4 contact */}
  <div className='flex gap-3 w-[489px] h-[155px] items-center justify-center below-900:flex-col below-900:w-full below-900:gap-6'>
    {/* parent div for left section */}
    <div className='flex flex-col gap-14 below-900:gap-6'>
      {/* left section 1st div */}
      <div className='flex gap-3'>
        <span className='w-[45px] h-[45px] rounded-full bg-[#5726DF]'></span>
        <div>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold below-900:text-[14px]'>Tel: 877-67-88-99</p>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold below-900:text-[14px]'>E-Mail: shop@store.com</p>
        </div>
      </div>

      {/* left section 2nd div */}
      <div className='flex gap-3'>
        <span className='w-[45px] h-[45px] rounded-full bg-[#FFB265]'></span>
        <div>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold w-[200px] below-900:text-[14px] below-900:w-[90%]'>
            20 Margaret st, London
          </p>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold below-900:text-[14px]'>Great britain, 3NM98-LK</p>
        </div>
      </div>
    </div>
    {/* parent div for right section */}
    <div className='flex flex-col gap-14 below-900:gap-6'>
      {/* right section 1st div */}
      <div className='flex gap-3'>
        <span className='w-[45px] h-[45px] rounded-full bg-[#FB2E86]'></span>
        <div>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold below-900:text-[14px]'>Support Forum</p>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold below-900:text-[14px]'>For over 24hr</p>
        </div>
      </div>

      {/* right section 2nd div */}
      <div className='flex gap-3'>
        <span className='w-[45px] h-[45px] rounded-full bg-[#1BE982]'></span>
        <div>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold w-[200px] below-900:text-[14px] below-900:w-[90%]'>
            Free standard shipping
          </p>
          <p className='font-lato text-[16px] text-[#8A8FB9] font-semibold below-900:text-[14px]'>on all orders.</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>

    {/* bottom section */}
    <div className='flex gap-0 ml-10 below-1400:flex-col below-1400:ml-0 items-center justify-center'>

    {/* left section */}
    <div className='flex flex-col gap-5 below-1400:items-center justify-center'>
    <h2 className='text-[36px] font-josefin text-[#151875] font-bold'>Get In Touch</h2>
    <p className='font-lato text-[16px] font-semibold text-[#8A8FB9] w-[600px] leading-[25.6px] below-1400:w-[400px] below-900:w-[280px] below-900:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
    <div className='w-[534px] h-[414px] flex flex-col gap-8 below-900:w-[270px] below-900:h-auto'>
    <div className='flex gap-3 below-900:flex-col below-900:items-center below-900:justify-center below-900:relative below-900:left-[-12px]'>
    <input type="text" placeholder='Your Name*' className='w-[255px] h-[45px] px-2 text-[#8A8FB9] font-lato tracking-[1%] text-[16px] font-normal border-[1px] border-[#A4B6C8B2] rounded-[3px] focus:outline-none below-900:text-[12px] below-900:w-[240px]'/>
    <input type="text" placeholder='Your E-mail' className='w-[255px] h-[45px] px-2 text-[#8A8FB9] font-lato tracking-[1%] text-[16px] font-normal border-[1px] border-[#A4B6C8B2] rounded-[3px] focus:outline-none below-900:text-[12px] below-900:w-[240px]'/>
    </div>
    <input type="text" placeholder='Subject*' className='w-[534px] h-[45px] px-2 text-[#8A8FB9] font-lato tracking-[1%] text-[16px] font-normal border-[1px] border-[#A4B6C8B2] rounded-[3px] focus:outline-none below-900:w-[240px] below-900:text-[12px]'/>
    <input type="text" placeholder='Type Your Messege*' className='w-[534px] h-[166px] px-2 text-[#8A8FB9] font-lato tracking-[1%] text-[16px] font-normal border-[1px] border-[#A4B6C8B2] rounded-[3px] focus:outline-none below-900:w-[240px] below-900:text-[12px] below-900:h-[166px]'/>
    <button className='w-[157px] h-[44px] rounded-[3px] text-[#FFFFFF] text-[16px] font-josefin bg-[#FB2E86]'>Send Mail</button>
    </div>
    </div>

    {/* right section */}
    <div className='flex items-center justify-center below-900:mt-10'>
    <Image src="/contact/Group 124.png" alt="logo" width={723} height={692} className='below-900:w-[300px] below-900:h-[280px]'></Image>
    </div>

    </div>

    </div>
    </div>
  )
}

export default page

