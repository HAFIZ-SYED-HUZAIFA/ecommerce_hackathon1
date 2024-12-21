import React from 'react'
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <div>
      {/* Main div */}
      <div className='flex wrapper justify-between py-5 flex-wrap'>

        {/* Heading Or logo */}
        <h2 className='w-[98px] h-[34px] text-[34px] leading-[34px] font-bold text-[#0D0E43] font-josefin'>Hekto</h2>

        {/* Navigation Links */}
        <ul className='hidden lg:flex px-10 gap-6 mt-2'>
          <Link href="/"><li className='flex font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86]'>Home<RiArrowDropDownLine className='ml-1 mt-[4px] w-3 h-3'/></li></Link>
          <li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86]'>Pages</li>
          <Link href="/product"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86]'>Products</li></Link>
          <Link href="/blog"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86]'>Blog</li></Link>
          <Link href="/shop"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86]'>Shop</li></Link>
          <Link href="contact"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86]'>Contact</li></Link>
        </ul>

        {/* Search bar */}
        <div className='w-[317px] h-[40px] hidden lg:block'>
          <div className='w-[317px] h-[40px] border-2 border-[#E7E6EF] bg-white mt-[1px]'>
            <div className='w-[51px] h-[40px] bg-[#FB2E86] relative left-[263.5px] top-[-2px]'>
              <HiMagnifyingGlass className='text-white w-5 h-5 font-semibold relative top-[10px] left-[14px]' />
            </div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger><MenuIcon /></SheetTrigger>
            <SheetContent>
              <ul className='flex flex-col items-center gap-5 mt-5'>
              <Link href="/"><li className='flex font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86] items-center ml-[10px]'>Home<RiArrowDropDownLine className='ml-1 mt-[4px] w-3 h-3' /></li></Link>
                <li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86] items-center'>Pages</li>
                <Link href="/product"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86] items-center'>Products</li></Link>
                <Link href="/blog"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86] items-center'>Blog</li></Link>
                <Link href="/shop"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86] items-center'>Shop</li></Link>
                <Link href="contact"><li className='font-lato text-[16px] leading-5 text-[#0D0E43] font-normal hover:text-[#FB2E86] items-center'>Contact</li></Link>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default Header;


