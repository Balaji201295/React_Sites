import React from "react";
import styles from "../styles";
import { AboutMe } from "../assets";
const Hero = () => {
  return (
    <div
      className={`w-full sm:h-[800px] flex justify-start flex-col items-start bg-secondary ${styles.paddingX} py-16 relative overflow-hidden`}
    >
      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 sm:gap-0">
        <div className="flex-1">
          <h5 className="font-sans font-semibold text-[#BCFF5E] text-sm tracking-[.07px] py-2 px-4 rounded-[20px] border border-solid border-[##BCFF5E] inline-block mb-4">
            About Me
          </h5>
          <h1 className="font-sans font-normal text-4xl sm:text-5xl md:text-6xl text-white sm:max-w-lg pb-4">
            Hi, I'm&nbsp;
            <span className="font-semibold">Adison, your personal trainer</span>
          </h1>
        </div>

        <div className="flex-[.45] flex flex-col">
          <h3 className="font-sans text-white text-xl sm:text-2xl font-semibold pb-4">
            What's my story?
          </h3>
          <p className="font-sans font-normal text-sm text-[#D1D1D6]">
            Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc.
            Id pulvinar enim volutpat tellus. Cras tellus ac dui at sed.
            Suspendisse feugiat scelerisque et, viverra urna imperdiet non
            malesuada. Inol massa id tellus natoque augue in et.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex absolute bottom-0 left-1/4 z-5">
        {/* Absolute Image */}
        <img src={AboutMe} alt="Banner" />
      </div>
    </div>
  );
};

export default Hero;
