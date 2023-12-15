import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeading, Reviews, SectionHeading, Button } from "../components";
import { Minus, Plus, ArrowRight } from "../assets";
import { programs, Faqs } from "../constants";
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

  const renderPrograms = () =>
    programs.map(({ icon, title, content }, index) => {
      const isEven = index % 2 === 1;
      const columnClasses = `flex-1 flex flex-col min-w-[291px] sm:max-w-[291px] p-6 gap-6 ${
        isEven ? "bg-primary" : "bg-transparent"
      }`;

      return (
        <div key={index} className={columnClasses}>
          <Link
            to={
              title === "Personal Training" ? "/program-details" : "/programs"
            }
            className={
              title === "Personal Training"
                ? "cursor-pointer"
                : "cursor-default"
            }
          >
            <img src={icon} alt={title} className="w-12 h-12" />
            <div className="flex flex-col gap-3">
              <h3 className="font-sans text-primary text-xl font-semibold tracking-[.01px]">
                {title}
              </h3>
              <p className={styles.paragraph}>{content}</p>
            </div>
          </Link>
          <div className="flex items-center font-sans text-primary text-sm font-semibold tracking-[.01px]">
            <a href="#" className="flex">
              Learn More&nbsp;
              <img src={ArrowRight} alt="Learn More" />
            </a>
          </div>
        </div>
      );
    });

  return (
    <main
      className={`${styles.padding} flex flex-col justify-center items-center`}
    >
      <SectionHeading
        heading="Programs"
        title="Browse Our Available Programs"
        maxWidth="max-w-[426px]"
      />
      <div className="flex flex-wrap">{renderPrograms()}</div>
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
