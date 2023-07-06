import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col sm:py-16 py-6 xl:ml-28 sm:-ml-16 xl:p-3"
      data-aos="fade-down-left"
      data-aos-duration="2000"
      data-aos-delay="120"
    >
      <div className="flex flex-1 flex-col justify-center items-start sm:ml-10 xl:ml-5">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Find a better card deal
          <br className=" sm:block hidden" />
          in few easy steps.{" "}
        </h2>
        <p className="max-w-[600px] mt-5 font-poppins font-normal text-[18px] text-dimWhite leading-[31px]">
          → Choose the billing type that suits your needs
          <br /> → Don’t double entry, interconnect to your accounting system{" "}
          <br />→ Speed up month-end closing with a rigorous invoicing process
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Button />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center md:ml-10 mr-28 mt-10 relative">
        <img
          src={card}
          alt="billing"
          className="w-[90%] h-[100%] relative z-[5] sm:w-[100%]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
    </section>
  );
};

export default CardDeal;
