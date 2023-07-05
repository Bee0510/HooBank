import React from "react";
import Button from "./Button";
import { features } from "../constants";

const Bussiness = () => {
  return (
    <section
      id="features"
      className="flex md:flex-row flex-col sm:py-16 py-6 sm:-ml-16 xl:ml-44 "
    >
      <div className="flex flex-1 justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-white xs:leading-[76px] leading-[66px] w-full">
          You do the business,
          <br className="sm:block hidden" />
          we’ll handle the money.
        </h2>
        <p className="font-poppins font-normal text-white text-[18px] leading-[30px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className="flex justify-center items-start  md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col xl:mr-16 sm:items-center">
        {features.map((fetch, index) => (
          <FeaturedCard key={fetch.id} {...fetch} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeaturedCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } featured-card space-x-3 w-[80%] hover:-translate-x-2 hover:scale-110`}
    >
      <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue sidebar">
        <img src={icon} alt="stars" className="w-[50%] h-[50%] object-cover" />
      </div>
      <div className="flex-1 flex flex-col mt-3 busybar">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] overflow-clip">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Bussiness;
