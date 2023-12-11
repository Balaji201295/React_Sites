import React, { useState } from "react";
import { reviews } from "../constants";
import { SectionHeading } from "../components";
import { Quote } from "../assets";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "../styles";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    const length = reviews.length;
    return (number + length) % length;
  };

  const changeIndex = (increment) => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + increment;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    changeIndex(-1);
  };

  const nextPerson = () => {
    changeIndex(1);
  };

  const { reviewer, content, profileImg, profileName, designation } =
    reviews[index];

  return (
    <section
      className={`${styles.padding} flex flex-col items-center justify-center`}
    >
      <SectionHeading heading="Review" title="What Our Happy Clients Say" />
      <div className="flex gap-4 items-start mx-auto ">
        <div className="flex-[.10] flex justify-start items-start">
          <img src={Quote} alt="Quote" />
        </div>
        <div className="flex-1 flex flex-col max-w-xl">
          <h4 className="font-sans text-xs sm:text-sm font-medium tracking-tighter text-[#AEAEB2] pb-4">
            {reviewer}&nbsp;review
          </h4>
          <p className="font-sans sm:text-xl text-base font-normal text-black tracking-wide min-h-[150px] pb-8">
            {content}
          </p>
          <div className="flex gap-3 justify-start items-center">
            <img
              src={profileImg}
              alt={profileName}
              className="w-[56px] h-[56px]"
            />
            <div className="flex flex-col">
              <h3 className="font-sans text-sm sm:text-base font-semibold text-black tracking-wide">
                {profileName}
              </h3>
              <p className="font-sans text-xs sm:text-sm font-normal text-black tracking-wide">
                {designation}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <BsArrowLeft
          className="w-6 h-6 cursor-pointer hover:text-mainColor transition-all duration-300 ease-linear"
          onClick={prevPerson}
        />
        <div className="flex gap-1 mx-4 review-indicator w-16">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 bg-[#E9EBED] rounded-full transition-all duration-500 ${
                idx === index ? "active" : ""
              }`}
              onClick={() => setIndex(idx)}
            ></span>
          ))}
        </div>
        <BsArrowRight
          className="w-6 h-6 cursor-pointer hover:text-mainColor transition-all duration-300 ease-linear"
          onClick={nextPerson}
        />
      </div>
    </section>
  );
};

export default Reviews;
