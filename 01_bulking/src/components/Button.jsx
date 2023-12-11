import React from "react";

const Button = ({
  type,
  text,
  width,
  height,
  rounded,
  textColor,
  borderColor,
  bgColor,
}) => (
  <button
    type={type ? type : "button"}
    className={`font-sans text-[14px] font-medium border border-solid transition-all duration-300 ease-linear ${width} ${height} ${bgColor} ${
      bgColor && "hover:bg-[#1c1c1e] hover:text-[#BCFF5E]"
    }
    } ${textColor} ${borderColor} ${rounded ? rounded : "rounded-[20px]"}`}
  >
    {text}
  </button>
);

export default Button;
