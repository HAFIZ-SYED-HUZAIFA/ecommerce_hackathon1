import React from 'react'
import Image from 'next/image'

const Offer = () => {

const offerData =[
    {
        imageSrc: "/offer/offer 1.png",
        title: "24/7 Support",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
        imageSrc: "/offer/offer 2.png",
        title: "24/7 Support",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
        imageSrc: "/offer/offer 3.png",
        title: "24/7 Support",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
        imageSrc: "/offer/offer 4.png",
        title: "24/7 Support",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
]
  return (
    <div>
      {/* main div */}
      <div className='mt-16'>
        {/* heading */}
        <h2 className='text-[42px] text-[#151875] font-bold flex items-center justify-center below-500:text-[25px]'>What Shopex Offer!</h2>
        {/* cart images */}
        <div className='flex items-center justify-center gap-5 below-1200:flex-col mt-14'>
        {offerData.map((product, index) => (
        <div key={index} className='w-[270px] h-[320px] flex gap-4 flex-col items-center justify-center shadow-[0px_8px_40px_rgba(49,32,138,0.05)]'>
        <Image src={product.imageSrc} alt="offer" width={1000} height={1000} className='w-[65px] h-[65px]'></Image>
        <h2 className='text-[22px] font-josefin text-[#151875] font-bold'>{product.title}</h2>
        <p className='w-[217px] text-[16px] font-lato font-bold text-[#1A0B5B4D]'>{product.paragraph}</p>
        </div>

        ))}
        </div>
      </div>
    </div>
  )
}

export default Offer;
