import React, { useState } from "react";
import {
  PageHeading,
  Reviews,
  SectionHeading,
  Button,
  ProgramItems,
} from "../components";
import { Minus, Plus } from "../assets";
import { Faqs } from "../constants";
import styles from "../styles";

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const renderFaqs = () =>
    Faqs.slice(0, 5).map((item, index) => (
      <div
        key={index}
        className={`faq-item sm:mb-2 ${activeIndex === index ? "active" : ""}`}
        onClick={() => handleClick(index)}
      >
        <div className="flex justify-between items-start cursor-pointer">
          <h4 className="font-sans text-xs sm:text-lg tracking-[.1px] text-primary font-semibold pb-4 pr-4 sm:pr-0">
            {item.question}
          </h4>
          <img
            src={activeIndex === index ? Minus : Plus}
            alt="Icon"
            className="sm:w-[24px] w-[16px]"
          />
        </div>
        {activeIndex === index && (
          <p className={`${styles.paragraph} text-xs sm:text-sm max-w-xl`}>
            {item.answer}
          </p>
        )}
      </div>
    ));

  return (
    <main
      className={`${styles.padding} flex flex-col justify-center items-center`}
    >
      <SectionHeading
        heading="Programs"
        title="Browse Our Available Programs"
        maxWidth="max-w-[426px]"
      />
      <div className="flex flex-wrap">
        <ProgramItems />
      </div>
      <div className="w-full flex flex-col sm:flex-row pt-20 sm:pt-32">
        <div className="flex-[0.75] mb-12 sm:mb-0">
          <PageHeading
            title="FAQ"
            titleSpan="s"
            content="Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada."
          />
          <Button
            text="Book a Class"
            width="w-[150px] sm:w-[176px]"
            height="h-[56px]"
            bgColor="bg-[#BCFF5E]"
          />
        </div>
        <div className="flex-1">
          <h5 className="text-primary font-sans text-xl sm:text-2xl font-semibold tracking-[.12px] max-w-lg">
            Maybe your question has been answered, check this out!
          </h5>
          <div className={`flex flex-col py-8`}>{renderFaqs()}</div>
        </div>
      </div>
      <Reviews />
    </main>
  );
};

export default Programs;
