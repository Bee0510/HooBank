import React, { useEffect } from "react";
import { apple, bill, google } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Billing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse sm:py-16 py-6 xl:ml-28 sm:-ml-16  "
      data-aos="fade-down-right"
      data-aos-duration="2000"
    >
      <div className="flex flex-1 justify-center items-center md:ml-10 mr-0 mt-10 relative">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className="flex flex-1 flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your
          <br className=" sm:block hidden" />
          billing & invoicing{" "}
        </h2>
        <p className="max-w-[600px] mt-5 font-poppins font-normal text-[18px] text-dimWhite leading-[31px]">
          How much money do you leave on the table each month? Too many
          businesses “forget” to bill all hours worked. With HooBank, you can
          keep track of any invoices, generate them more quickly and bill any
          type of pricing structure to meet clients’ needs. As a bonus, you can
          explore new pricing models and compare their viability. Stop the
          revenue leakage and scale your business at full speed!
        </p>
        <h2 className="max-w-[600px] mt-5 font-poppins font-normal text-[18px] text-dimWhite leading-[31px]">
          Cash is king, so get it in the bank sooner!
        </h2>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple"
            className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            className="w-[144px] h-[43px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
