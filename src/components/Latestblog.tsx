import React from 'react'
import Image from 'next/image'

const Latestblog = () => {
  const productData = [
    {
      imageSrc: "/latestblog/blog1.png",
      name: "SaberAli",
      date: "21 August,2020",
      title: "Top essential trends in 2021",
      paragraph: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      readmore: "Read More"
    },
    {
      imageSrc: "/latestblog/blog2.png",
      name: "Surfauxion",
      date: "21 August,2020",
      title: "Top essential trends in 2021",
      paragraph: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      readmore: "Read More"
    },
    {
      imageSrc: "/latestblog/blog3.png",
      name: "SaberAli",
      date: "21 August,2020",
      title: "Top essential trends in 2021",
      paragraph: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      readmore: "Read More"
    },
  ]

  return (
    <div>
      {/* Main Container */}
      <div className='mt-10'>
        {/* Heading */}
        <h2 className='flex items-center justify-center mb-8 text-[42px] text-[#151875] font-bold font-josefin below-500:text-[25px]'>Leatest Blog</h2>
        {/* Blog Cards Container */}
        <div className='flex items-center justify-center gap-14 below-1200:flex-col below-500:gap-4'>
          {/* Map Function */}
          {productData.map((item, index) => (
            <div key={index} className='w-[370px] h-auto flex flex-col items-center justify-center shadow-[0px_8px_40px_0px_#F5F6F8] below-1300:w-[280px] below-500:w-[90%]'>
              <Image src={item.imageSrc} alt="blog1" width={370} height={255} className='rounded-[8px] below-1300:w-[280px] below-500:w-full'></Image>
              <div className='mt-4 flex flex-col gap-4 w-[90%]'>
                <div className='flex gap-7 ml-2 below-500:flex-col below-500:gap-2'>
                  <span className='flex gap-1 text-[#151875] text-[14px] font-josefin font-normal below-500:text-[12px]'><Image src="/latestblog/Vector (2).png" alt="icon" width={1000} height={1000} className='w-3 h-3 mt-1'></Image>{item.name}</span>
                  <span className='flex gap-1 font-josefin text-[14px] text-[#151875] font-normal below-500:text-[12px]'><Image src="/latestblog/uil_calendar-alt.png" alt="calendar" width={1000} height={1000} className='w-3 h-3 mt-1'></Image>{item.date}</span>
                </div>
                <h2 className='ml-4 font-josefin text-[18px] text-[#151875] font-bold hover:text-[#FB2E86] below-500:text-[16px]'>{item.title}</h2>
                <p className='ml-4 text-[16px] font-lato text-[#72718F] leading-[30px] below-500:text-[14px] below-500:leading-[24px]'>{item.paragraph}</p>
                <span className='ml-4 text-[16px] font-lato font-normal text-[#151875] underline hover:text-[#FB2E86] below-500:text-[14px]'>{item.readmore}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Latestblog;
