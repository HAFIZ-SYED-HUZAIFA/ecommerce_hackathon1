import React from 'react' 
import Image from 'next/image'
import Link from 'next/link'

const Trendingproduct = () => {

const productData1 = [
    {
        imageSrc: "/trendingproducts/trendingproduct-1.png",
        title: "Cantilever chair",
        discount: "$42.00",
        price: "$26.00 ",
        width: "171px",
        height: "160px",
    },
    {
        imageSrc: "/trendingproducts/trendingproduct-2.png",
        title: "Cantilever chair",
        discount: "$42.00",
        price: "$26.00 ",
        width: "187px",
        height: "187px",
    },
    {
        imageSrc: "/trendingproducts/trendingproduct-3.png",
        title: "Cantilever chair",
        discount: "$42.00",
        price: "$26.00 ",
        width: "270px",
        height: "200px",
    },
    {
        imageSrc: "/trendingproducts/trendingproduct-4.png",
        title: "Cantilever chair",
        discount: "$42.00",
        price: "$26.00 ",
        width: "253px",
        height: "211px",
    },
]
  return (
    <div>
      {/* Main div */}
      <div>
        <h2 className='font-josefin text-[42px] text-[#151875] mt-28 mb-7 font-bold flex items-center justify-center below-500:text-[25px]'>Trending Products</h2>
        {/* Top section */}
        <div className='flex flex-col items-center justify-center'>
        {/* 4 carts parent div */}
        <div className='grid grid-cols-4 gap-14 items-center justify-center below-1200:grid-cols-1'>
            {/* map function */}
            {productData1.map((product, index) => (
            <div key={index} className='max-w-[270px] h-[350px] shadow-[0px_8px_40px_0px_#F5F6F8] transform transition-transform duration-300 hover:scale-105'>
            {/* Top section for image */}
            <div className='bg-[#F5F6F8] w-[247px] h-[244px] flex items-center justify-center flex-col'>
                <Image src={product.imageSrc} alt="trendingchair"  width={parseInt(product.width)} 
                  height={parseInt(product.height)}></Image>
            </div>
            <div className="flex items-center justify-center opacity-0 hover:opacity-100 duration-200 mt-[-30px]">
                 <Link href="/shops/grid"><button className="bg-[#08D15F] text-white text-[12px] font-josefin leading-3 px-3 py-2 mt-[-2px] rounded-[2px] hover:bg-[#028e4c] duration-200">
                    View Shop
                  </button></Link>
                </div>
            {/* bottom section */}
            <div className=' flex flex-col items-center justify-center gap-2 mt-4'>
             <p className='font-lato font-bold text-[16px] text-[#151875]'>{product.title}</p>
             <span className='flex gap-4 font-josefin font-normal text-[14px] text-[#151875]'>{product.price}<p className='line-through text-[12px] text-[#1518754D]'>{product.discount}</p></span>
            </div>
            </div>
            ))}
            
        </div>
        {/* bottom main section */}
        <div className='mt-9'>
            {/* 3 cart */}
            <div className='flex gap-7 below-1200:flex-col below-1200:items-center below-1200:justify-center'>
            {/* Image 1 div */}
            <div className='bg-[#FFF6FB] w-[420px] h-[270px] below-500:w-[260px]'>
            <div className='relative top-6 left-6'>
            <span className='font-josefin font-semibold text-[26px] text-[#151875] below-500:text-[20px]'>23% off in all products<Link href="/shops/grid"><p className='font-semibold text-[#FB2E86] text-[16px] font-lato underline'>Shop Now</p></Link></span>
            </div>
            <div className='flex items-end justify-end'>
            <Image src="/trendingproducts/trendingproduct-5.png" alt="trendingproduct" width={1000} height={1000} className='w-[217px] h-[207px]'></Image>
            </div>
            </div>
            {/* Image 2 div */}
            <div className='bg-[#FFF6FB] w-[420px] h-[270px] below-500:w-[260px]'>
            <div className='relative top-6 left-6'>
            <span className='font-josefin font-semibold text-[26px] text-[#151875] below-500:text-[20px]'>23% off in all products<p className='font-semibold text-[#FB2E86] text-[16px] font-lato underline'>View Collection</p></span>
            </div>
            <div className='flex items-end justify-end'>
            <Image src="/trendingproducts/trendingproduct-6.png" alt="trendingproduct" width={1000} height={1000} className='w-[217px] h-[207px]'></Image>
            </div>
            </div>
            {/* image 3 div */}
            <div className='flex flex-col gap-6 below-500:w-[260px]'>
                {/* sub image 1 */}
                <div className='flex gap-3'>
                <div className='bg-[#F5F6F8] w-[107px] h-[74px] flex items-center justify-center'>
                <Image src="/trendingproducts/trendingproduct-7.png" alt="trendingproduct" width={1000} height={1000} className='w-[64px] h-[71px]'></Image>
                </div>
                <p className='flex flex-col text-[16px] font-josefin text-[#151875] font-bold justify-center'>Executive Seat chair<span className='font-normal text-[12px] font-josefin line-through'>$32.00</span></p>
                </div>
                 {/* sub image 2 */}
                 <div className='flex gap-3'>
                <div className='bg-[#F5F6F8] w-[107px] h-[74px] flex items-center justify-center'>
                <Image src="/trendingproducts/trendingproduct-8.png" alt="trendingproduct" width={1000} height={1000} className='w-[67px] h-[67px]'></Image>
                </div>
                <p className='flex flex-col text-[16px] font-josefin text-[#151875] font-bold justify-center'>Executive Seat chair<span className='font-normal text-[12px] font-josefin line-through'>$32.00</span></p>
                </div>
                  {/* sub image 3 */}
                  <div className='flex gap-3'>
                <div className='bg-[#F5F6F8] w-[107px] h-[74px] flex items-center justify-center'>
                <Image src="/trendingproducts/trendingproduct-9.png" alt="trendingproduct" width={1000} height={1000} className='w-[67px] h-[67px]'></Image>
                </div>
                <p className='flex flex-col text-[16px] font-josefin text-[#151875] font-bold justify-center'>Executive Seat chair<span className='font-normal text-[12px] font-josefin line-through'>$32.00</span></p>
                </div>

            </div>
            </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Trendingproduct;
