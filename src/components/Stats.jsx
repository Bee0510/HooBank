import React from "react";
import { stats } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Stats = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      className="flex justify-between items-center flex-row flex-wrap sm:mb-20 mb-6 lg:ml-44 sm:-ml-16"
      data-aos="fade-up"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-row m-3 statbar"
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] xs:leading-[53px] leading-[43] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
