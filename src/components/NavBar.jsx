import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  return (
    <nav className="w-full flex py-6 justify-between items-center flex-1 lg:ml-64">
      <img src={logo} alt="hoobank " className="w-[124px] h-[32px]" />
      <ul className=" list-none justify-center items-center sm:flex hidden">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins font-bold text-[16px] ${
              active == nav.title ? "text-blue-700" : "text-gray-400"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" w-7 h-8 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gradient-to-t from-gray-400 to-slate-800 absolute top-20 right-1 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none justify-center items-center flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-normal text-[16px] text-white ${
                  active == nav.title ? "text-blue-700" : "text-white"
                }  ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
