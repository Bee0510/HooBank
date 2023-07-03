import React from "react";
import Button from "./Button";
import { features } from "../constants";

const Bussiness = () => {
  return (
    <section
      id="features"
      className="flex md:flex-row flex-col sm:py-16 py-6 sm:-ml-16 lg:ml-44"
    >
      <div className="flex-1 justify-center items-start flex-col">
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
    </section>
  );
};

const FeaturedCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-1 p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } featured-card`}
    >
      <div className=" w-[64px] h-[64px] rounded-full justify-center items-start bg-blue-400">
        <img
          src={icon}
          alt="stars"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
    </div>
  );
};

export default Bussiness;
