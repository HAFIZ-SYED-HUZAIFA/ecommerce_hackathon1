import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full bg-[#F2F0FF]'>
      
      {/* main div */}
      <div className='max-w-[1920px] h-auto flex flex-col md:flex-row justify-between 2xl:h-[764px]'>

        {/* bulb image */}
        <div className="flex justify-center items-center md:ml-[-50px] 2xl:mt-[-375px] 2xl:ml-[70px]">
  <Image 
    src="/hero/herobulb.png" 
    alt="bulb" 
    width={1000} 
    height={1000} 
    className="w-[387px] h-[387px]"
  />
</div>

        {/* Text section */}
        <div className='flex flex-col items-center justify-center md:relative md:left-[-85px] top-11 mb-16 2xl:w-[644px] 2xl:h-[248px] 2xl:items-start 2xl:gap-3 2xl:mt-[200px] 2xl:ml-[-130px]'>
          <p className='text-[#FB2E86] text-[16px] font-lato font-bold'>Best Furniture For Your Castle....</p>
          <p className='font-josefin text-black text-[33px] font-bold tracking-[1.5%] w-[320px] text-center 2xl:text-[53px] 2xl:w-[644px] 2xl:text-left'>New Furniture Collection
          Trends in 2020</p>
          <p className='font-lato text-[16px] font-bold text-[#8A8FB9] w-[300px] text-center 2xl:w-[620px] 2xl:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
          in phasellus non in justo.</p>
          <button className='bg-[#FB2E86] px-3 py-3 text-white rounded-[2px] w-[200px] mt-4'>Shop Now</button>
        </div>

        {/* Pink background */}
          <div className="relative flex justify-center items-center mt-[12%] mb-4 md:relative md:left-[-130px] md:top-[-50px] 2xl:mt-[150px]">
  {/* <!-- First Circle --> */}
  <div className="absolute w-64 h-64 bg-[rgba(236,210,250,0.35)] rounded-full z-10 2xl:w-[648px] 2xl:h-[648px]"></div>
  {/* <!-- Second Circle --> */}
  <div className="absolute w-64 h-64 bg-[rgba(236,210,250,0.35)] rounded-full mt-[-30px] z-10 2xl:w-[648px] 2xl:h-[648px] 2xl:mt-[-70px] 2xl:ml-[50px]"></div>
  {/* <!-- Image --> */}
  <Image
    src="/hero/herosofa.png"
    alt="sofa"
    width={1000}
    height={1000}
    className="w-[250px] z-20 2xl:w-[629px] 2xl:h-[629px]"
  />
  {/* voucher img */}
  <Image 
  src="/hero/voucher.png" 
  alt="voucher" 
  width={1000} 
  height={1000} 
  className=' w-11 h-12 z-30 mt-[-200px] ml-[-40px] 2xl:w-[136.56px] 2xl:h-[138.49px] 2xl:mt-[-500px] 2xl:ml-[-90px]'/>

</div>


      </div>

    </div>
  )
}

export default Hero;
