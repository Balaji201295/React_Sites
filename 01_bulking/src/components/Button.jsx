import React from "react";

const Button = ({
  type = "button",
  text,
  width,
  height,
  rounded = "rounded-[20px]",
  textColor,
  borderColor,
  bgColor,
}) => (
  <button
    type={type}
    className={`font-sans text-[14px] font-medium border border-solid transition-all duration-300 ease-linear ${width} ${height} ${bgColor} ${
      bgColor && "hover:bg-[#1c1c1e] hover:text-[#BCFF5E]"
    } ${textColor} ${borderColor} ${rounded}`}
  >
    {text}
  </button>
);

export default Button;
