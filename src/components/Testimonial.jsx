import React, { useEffect } from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="clients"
      className="sm:py-16 py-6 justify-center items-center flex-col relative xl:ml-12 -ml-14"
      data-aos="flip-up"
      data-aos-duration="2000"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ml-24 gap-x-24">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] sm:max-w-md">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1] lg:-ml-12">
        {feedback.map((feeds) => (
          <FeedbackCard key={feeds.id} {...feeds} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
