import React, { useEffect } from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section className="flex justify-center items-center flex-col sm:py-16 py-6">
      <div
        className="flex justify-center items-start md:flex-row flex-col mb-8 w-[85%]"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.10px] object-contain"
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((foot) => (
            <div
              key={foot.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {foot.title}
              </h4>
              <ul className="list-none mt-4">
                {foot.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal  text-[16px] leading-[24px] text-dimWhite hover:text-[#00f6ff] cursor-pointer ${
                      index !== foot.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] w-[85%]"
        data-aos="slide-up"
        data-aos-delay="125"
        data-aos-duration="2000"
      >
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-6 mt-0 sm:my-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              onClick={() => window.open(social.link)}
              className={`w-[40px] h-[40px] object-contain cursor-pointer hover:scale-125 ${
                index !== social.length ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
