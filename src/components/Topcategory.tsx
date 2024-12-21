import React from 'react'
import Image from 'next/image'

const Topcategory = () => {

const productData = [
  {
    imageSrc: "/Topcategory/chair1.png",
    title: "Mini LCW Chair",
    price: "$56.00",
    width: 178, 
    height: 178, 
  },
  {
    imageSrc: "/Topcategory/chair2.png",
    title: "Mini LCW Chair",
    price: "$56.00",
    width: 158, 
    height: 157, 
  },
  {
    imageSrc: "/Topcategory/chair3.png",
    title: "Mini LCW Chair",
    price: "$56.00",
    width: 149, 
    height: 149, 
  },
  {
    imageSrc: "/Topcategory/chair4.png",
    title: "Mini LCW Chair",
    price: "$56.00",
    width: 178, 
    height: 178, 
  },
]
  return (
    <div>
      {/* Main div */}
      <div className='mt-28'>
      <h2 className='text-[42px] font-josefin text-[#151875] font-bold flex items-center justify-center below-500:text-[25px]'>Top Categories</h2>
      {/* parent div for 4 cart */}
      <div className='flex items-center justify-center gap-6 mt-8 below-1200:flex-col'>
      {productData.map((product, index) => (
        <div key={index} className='w-[269px] h-[345px] flex flex-col items-center justify-center'>
          {/* top section */}
          <div className='w-[269px] h-[269px] bg-[#F6F7FB] rounded-full flex items-center justify-center shadow-[0px_8px_40px_0px_#31208A0D]'>
          <Image src={product.imageSrc} alt="chair" width={product.width} height={product.height} className='absolute'></Image>
          <button className='w-[94px] h-[29px] text-center bg-[#08D15F] text-[#FFFFFF] text-[12px] font-josefin mt-52 opacity-0 hover:opacity-100'>View Shop</button>
          </div>
          {/* bottom section */}
          <div className='w-[150px] h-[49px] flex flex-col items-center justify-center mt-4 gap-1'>
            <p className='font-josefin text-[#151875] text-[20px] font-normal'>{product.title}</p>
            <span className='font-josefin text-[#151875] text-[16px] font-normal'>{product.price}</span>
          </div>
        </div>
      ))}
      </div>
      </div>
      {/* banner section */}
      <div className='flex items-center justify-center mt-28 below-600:mt-14'>
        <Image src="/Topcategory/Rectangle 102.png" alt="banner" width={1000} height={1000} className='w-full below-1200:h-auto below-500:h-36'></Image>
        <div className='flex flex-col items-center justify-center] absolute gap-6 mt-8 below-1200:gap-1'>
        <p className='w-[574px] tracking-[1.5%] text-[35px] text-[#151875] font-bold text-center flex items-center justify-center below-1200:w-[350px] below-1200:text-[25px] below-600:text-[18px] below-600:w-[280px]'>Get Leatest Update By Subscribe
        0ur Newslater</p>
        <button className='w-[173px] h-[49px] bg-[#FB2E86] text-center text-[#FFFFFF] text-[17px] font-josefin tracking-[2%] below-1200:mb-5 below-600:w-[100px] below-600:h-[30px] below-600:text-[12px] below-600:mb-5'> Shop Now</button>
        </div>
      </div>

      {/* company logo */}
      <div className='flex items-center justify-center mt-5'>
      <Image src="/Topcategory/image 1174.png" alt="companylogo" width={1000} height={1000} className='w-[904px] h-[93px] below-500:w-[280px] below-500:h-[50px]'></Image>
      </div>
    </div>
  )
}

export default Topcategory;
