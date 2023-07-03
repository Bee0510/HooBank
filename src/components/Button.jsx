import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-6 px-6 font-poppins font-medium text-[18px] text-[#00040f] bg-blue-gradient rounded-[10px] outline-none `}
    >
      Get Started
    </button>
  );
};

export default Button;
