import React, { useEffect } from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="home"
      className={` flex md:flex-row flex-col sm:py-12 py-6 xl:ml-64 mt-3 xl:mt-24`}
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="120"
    >
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-0  px-6">
        <div className=" flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-gradient-to-r from-gray-800 to-gray-900">
          <img src={discount} alt="discount" className=" w-[32px] h-[32px]" />
          <p className=" font-poppins text-gray-400 text-[18px] leading-[30.8px] ml-2 overflow-clip">
            <span className="text-white">20%</span> Discount For
            <span className="text-white"> 2 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px]">
            The Next <br className=" sm:block hidden" />{" "}
            <span className="text-gradient">Generation </span> <br />
          </h1>
          <div className=" sm:flex hidden md:mr-16 lg:ml-16 mt-2">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p
          className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-12`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fee.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[10] xl:ml-96 object-contain"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className=" ss:hidden justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
