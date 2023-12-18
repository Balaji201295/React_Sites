import React from "react";
import { Button, Brands } from "../components";
import { ProgramItems } from "../containers";
import styles from "../styles";
import { Banner } from "../assets";

const headerContainerStyles = `w-full flex justify-start flex-col items-start bg-secondary ${styles.paddingX} py-16`;
const titleStyles =
  "font-sans font-normal text-4xl sm:text-5xl md:text-6xl text-white sm:max-w-lg pb-4";
const subTitleStyles = `font-sans font-normal text-sm text-[#c7c7cc] max-w-sm pb-8 sm:pb-12`;
const trainingProgramTitleStyles =
  "font-sans font-normal text-xl sm:text-2xl md:text-4xl text-white pb-4";

const Header = () => (
  <header className={`${headerContainerStyles} relative overflow-hidden`}>
    <div className="relative z-10">
      {/* Header Content */}
      <div className="flex flex-col">
        <h1 className={titleStyles}>
          For Your <span className="font-semibold">Health</span> and
          <span className="font-semibold">Fitness Goals</span> in No Time
        </h1>
        <p className={subTitleStyles}>
          It doesn’t matter if your goal is to get stronger, burn fat, or to
          just stay fit our world class coaches will guide you every step of the
          way.
        </p>
        <Button
          text="Book a Class"
          width="w-[150px] sm:w-[176px]"
          height="h-[56px]"
          bgColor="bg-primary"
        />
      </div>
      <Brands />
      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* Other Header Content */}
        <div className="flex-1 flex flex-wrap flex-col sm:flex-row mx-auto sm:mx-0">
          {/* Program Items */}
          <ProgramItems />
        </div>
        <div className="flex-[.25] flex flex-col">
          <h3 className={trainingProgramTitleStyles}>
            Training Program For You
          </h3>
          <p className="font-sans font-normal text-sm text-[#c7c7cc]">
            Starting a fitness routine can be intimidating, but it helps to have
            an idea of what to expect before joining any class.
          </p>
        </div>
      </div>
    </div>
    <div className="hidden md:flex absolute right-6 bottom-20 z-5">
      {/* Absolute Image */}
      <img src={Banner} alt="Banner" />
    </div>
  </header>
);

export default Header;
