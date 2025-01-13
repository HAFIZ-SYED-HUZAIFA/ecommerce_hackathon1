import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const offerData = [
    {
      imageSrc: "/offer/offer 1.png",
      title: "Free Delivery",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      imageSrc: "/offer/offer 2.png",
      title: "100% Cash Back",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      imageSrc: "/offer/offer 3.png",
      title: "Quality Product",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      imageSrc: "/offer/offer 4.png",
      title: "24/7 Support",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];
  return (
    <div>
      {/* top section from shop page */}
      <div className="w-full h-[286px] bg-[#F6F5FF] flex items-center">
        {/* top section outer div */}
        <div className="w-[202px] h-[62px] wrapper">
          <h2 className="font-josefin text-[36px] leading-[42.19px] text-[#101750] font-bold">
            About Us
          </h2>
          <ul className="flex gap-1">
            <li className="font-lato text-[16px] text-black font-medium">
              Home .
            </li>
            <li className="font-lato text-[16px] text-black font-medium">
              Pages
            </li>
            <li className="font-lato text-[16px] text-[#FB2E86] font-medium">
              . About Us
            </li>
          </ul>
        </div>
      </div>

      {/* parent div for 2 section */}
      <div className="flex flex-col items-center justify-center mt-20">
        {/* first section */}
        <div className="flex gap-7 below-1400:flex-col">
          {/* left */}
          <div className="below-600:flex below-600:items-center below-600:justify-center">
          <div className="w-[570px] h-[409px] relative below-600:w-[300px] below-600:h-[230px]">
            <div className="w-[552px] h-[409px] bg-[#2B3CAB] rounded-[6px] relative below-600:w-[280px] below-600:h-[230px]"></div>
            <Image
              src="/aboutus/Rectangle 56.png"
              alt="company owner"
              width={555}
              height={390}
              className="rounded-[6px] absolute top-0 left-3 below-600:w-[275px] below-600:h-[210px]"
            ></Image>
          </div>
          </div>
          {/* right */}
          <div className="flex justify-center flex-col gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[36px] text-[#151875] font-josefin w-[540px] below-600:w-full below-600:px-[30px] below-600:text-[20px] below-600:text-center">
                Know About Our Ecomerce Business, History
              </h1>
              <p className="font-lato font-semibold text-[16px] w-[590px] text-[#8A8FB9] below-600:w-full below-600:px-[30px] below-600:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
            </div>
            <div className="below-600:flex below-600:items-center below-600:justify-center">
            <Link href="/contact"><button className="w-[145px] h-[44px] rounded-[3px] bg-[#FB2E86] font-lato text-[18px] text-[#FFFFFF]">
              Contact us
            </button></Link>
            </div>
          </div>
        </div>

        {/* second section */}
        <div>
          {/* main div */}
          <div className="mt-32">
            {/* heading */}
            <h2 className="text-[42px] text-black font-bold flex items-center justify-center below-500:text-[25px]">
              Our Features
            </h2>
            {/* cart images */}
            <div className="flex items-center justify-center gap-5 below-1200:flex-col mt-14">
              {offerData.map((product, index) => (
                <div
                  key={index}
                  className="w-[270px] h-[320px] flex gap-4 flex-col items-center justify-center shadow-[0px_8px_40px_rgba(49,32,138,0.05)]"
                >
                  <Image
                    src={product.imageSrc}
                    alt="offer"
                    width={1000}
                    height={1000}
                    className="w-[65px] h-[65px]"
                  ></Image>
                  <h2 className="text-[22px] font-josefin text-[#151875] font-bold">
                    {product.title}
                  </h2>
                  <p className="w-[217px] text-[16px] font-lato font-bold text-[#1A0B5B4D]">
                    {product.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="flex flex-col items-center mt-32 mb-[250px]">
          <h2 className="text-[42px] text-black font-bold font-josefin mb-14 below-500:text-[25px]">
            Our Client Say!
          </h2>
          <div className="flex flex-col items-center justify-center">
            <div className="w-[191px] h-[64px] flex gap-3 justify-center">
            <Image src="/aboutus/Mask Group (3).png" alt="client1" width={55} height={55} className="relative top-2"></Image>
            <Image src="/aboutus/Mask Group (4).png" alt="client2" width={55} height={59}></Image>
            <Image src="/aboutus/Mask Group (5).png" alt="client3" width={55} height={55} className="relative top-2"></Image>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center mt-10">
                <h3 className="text-[22px] font-lato font-semibold text-[#151875]">Selina Gomez</h3>
                <span className="font-lato text-[10px] font-semibold text-[#8A8FB9]">Ceo At Webecy Digital</span>
              </div>
              <p className="w-[775px] text-center text-[16px] font-lato font-bold text-[#8A8FB9] below-900:w-full below-900:px-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
