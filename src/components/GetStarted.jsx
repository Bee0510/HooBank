import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px] mb-10 hover:scale-125 ">
      <div className="flex justify-center items-center flex-col bg-[#00040f] w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className=" font-poppins font-medium text-[20px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className=" w-[23] h-[23] object-contain"
          />
        </div>
        <p className=" font-poppins font-medium text-[20px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
