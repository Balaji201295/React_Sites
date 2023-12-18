import React from "react";
import { PageHeading, SectionHeading, Button } from "../components";
import { Reviews, ProgramItems, FAQs } from "../containers";
import { FaqsData } from "../constants";
import styles from "../styles";

const Programs = () => {
  const renderFaqs = () => {
    return FaqsData.slice(0, 5).map((item, index) => {
      const { question, answer } = item;
      return (
        <FAQs key={index} item={item} question={question} answer={answer} />
      );
    });
  };
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
