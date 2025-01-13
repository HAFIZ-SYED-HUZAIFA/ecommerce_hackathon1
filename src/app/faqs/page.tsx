import React from "react";
import Image from "next/image";

const page = () => {

  
  return (
    <div>
      {/* top section from faq page */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center">
        {/* top section outer div */}
        <div className="w-[202px] h-[62px] wrapper">
          <h2 className="font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold">
            FAQ
          </h2>
          <ul className="flex gap-1">
            <li className="font-lato text-[16px] text-black font-medium">
              Home .
            </li>
            <li className="font-lato text-[16px] text-black font-medium">
              Pages
            </li>
            <li className="font-lato text-[16px] text-[#FB2E86] font-medium">
              . Faq
            </li>
          </ul>
        </div>
      </div>

      {/* bottom section parent div */}
      <div className="flex gap-5 items-center justify-center mt-24 below-1200:flex-col below-1200:gap-12">
        {/* left section */}
        <div className="flex flex-col gap-10">
          <h2 className="text-[36px] font-josefin text-[#1D3178] font-bold below-600:text-[25px]">Generel Information</h2>
          <div className="flex flex-col gap-3">
            <h3 className="text-[17px] font-josefin text-[#1D3178] font-bold below-600:w-[295px]"> Will I have to pay delivery charges?</h3>
            <p className="text-[#A1ABCC] text-[16px] font-josefin w-[499px] below-600:w-[295px]"> Delivery is free for orders above ₹500! For orders below that, a standard delivery charge of ₹50 applies.</p>
          </div>
          <div className="flex flex-col gap-3">
          <h3 className="text-[17px] font-josefin text-[#1D3178] font-bold below-600:w-[295px]">How can I check the status of my order?</h3>
          <p className="text-[#A1ABCC] text-[16px] font-josefin w-[499px] below-600:w-[295px]">You can check your order status by using the Track Order option. Simply enter your order ID and registered email.</p>
          </div>
          <div className="flex flex-col gap-3">
          <h3 className="text-[17px] font-josefin text-[#1D3178] font-bold below-600:w-[295px]">What is your return policy if I dont like the product?</h3>
          <p className="text-[#A1ABCC] text-[16px] font-josefin w-[499px] below-600:w-[295px]">You can return the product within 7 days if it is unused and in its original packaging. For a refund or exchange, please visit the Returns section.</p>
          </div>
          <div className="flex flex-col gap-3">
          <h3 className="text-[17px] font-josefin text-[#1D3178] font-bold">Can I cancel my order?</h3>
          <p className="text-[#A1ABCC] text-[16px] font-josefin w-[499px] below-600:w-[295px]">You can cancel your order before it is shipped. Please contact customer support immediately for cancellation.</p>
          </div>
        </div>
        {/* right section */}
        <div className="w-[566px] h-[738px] bg-[#F8F8FD] flex flex-col gap-20 items-center justify-center below-600:w-[310px] below-600:h-[600px] below-600:gap-10">
          
          <h2 className="text-[24px] text-[#1D3178] font-josefin font-bold relative right-32 below-600:right-5">Ask a Question</h2>
      
          <div className="flex flex-col gap-10">
            <input type="text" placeholder="Your Name*" className="w-[445px] h-[50px] rounded-[5px] border-[1px] border-[#CDCEDC] px-2 py-2 text-[#8990B1] font-lato font-medium outline-none below-600:w-[250px]"/>
            <input type="text" placeholder="Subject*" className="w-[445px] h-[50px] rounded-[5px] border-[1px] border-[#CDCEDC] px-2 py-2 text-[#8990B1] font-lato font-medium outline-none below-600:w-[250px]"/>
            <textarea name="text" placeholder="Type Your Message*" className="w-[445px] h-[197px] rounded-[5px] border-[1px] border-[#CDCEDC] px-2 py-2 text-[#8990B1] font-lato font-medium outline-none below-600:w-[250px]"></textarea>
            <button className="w-[148px] h-[56px] bg-[#FB2E86] rounded-[3px] text-[#FFFFFF] text-[16px] font-josefin">Send Mail</button>
          </div>
        </div>
      </div>
      {/* company logo */}
            <div className='flex items-center justify-center mt-28 mb-20 below-600:mt-14 below-600:mb-0'>
            <Image src="/Topcategory/image 1174.png" alt="companylogo" width={1000} height={1000} className='w-[904px] h-[93px] below-500:w-[280px] below-500:h-[50px]'></Image>
            </div>
    </div>
  );
};

export default page;
