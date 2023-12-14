import React from "react";
import styles from "../styles";
import { trainers, coreWorks } from "../constants";
import { CTA, PageHeading, SectionIntro } from "../components";
const Trainers = () => (
  <main className="bg-[#F9F9FB]">
    <div className={`${styles.padding} max-w-[926px] mx-auto`}>
      <PageHeading
        title="Meet"
        titleSpan="the Team"
        content="Our Personal Trainers are experienced and highly qualified – and they’re all on their own inspiring journey too. Click our photos to read more."
        align="text-center"
        margin="mx-auto"
        maxWidth="max-w-[724px]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10 pt-8">
        {trainers.map((trainer, index) => {
          const { imgUrl, trainerName, position } = trainer;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 bg-white rounded-2xl p-3 max-w-[282px]"
            >
              <div className="bg-[#F9F9FB] rounded-lg">
                <img src={imgUrl} alt={trainerName} />
              </div>
              <h3 className="font-sans text-xl sm:text-2xl text-primary font-semibold tracking-[.12px]">
                {trainerName}
              </h3>
              <p className="font-sans text-sm text-secondary font-normal tracking-[.07px]">
                {position}
              </p>
              <div className="flex justify-center items-center gap-[10px]">
                {trainer.links.map((item, index) => {
                  const IconImg = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      className="w-10 h-10 flex justify-center items-center border border-solid border-[#E9EBED] rounded-[20px] text-primary transition-all duration-300 ease-linear hover:bg-primary"
                    >
                      <IconImg className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className={`${styles.padding} w-full max-w-6xl mx-auto`}>
      <SectionIntro
        title="My Core Work Values"
        content="Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id pulvinar enim volutpat tellus. "
        maxWidth="max-w-[512px]"
      />
      <div className="flex flex-wrap">
        {coreWorks.map((item, index) => {
          const { icon, title, content } = item;
          const isEven = index % 2 === 1;

          const isFirstColumn = index === 0;
          const isThirdColumn = index === 2;
          const borderRadiusClasses = `${
            isFirstColumn
              ? "md:rounded-tl-3xl md:rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl xs:rounded-none"
              : ""
          } ${
            isThirdColumn
              ? "md:rounded-tr-3xl md:rounded-br-3xl rounded-bl-3xl rounded-br-3xl xs:rounded-none"
              : ""
          }`;

          const columnClasses = `flex-1 min-w-[270px] p-6 sm:py-8 sm:px-10 ${borderRadiusClasses} ${
            isEven ? "bg-blue-500" : "bg-white"
          }`;
          const textClasses = `font-sans sm:text-2xl text-xl font-semibold tracking-[.12px] pt-3 pb-6 ${
            isEven ? "text-white" : "text-black"
          }`;
          // Define classes for border radius based on the column position

          return (
            <div key={index} className={columnClasses}>
              <img src={icon} alt={title} className="w-12 h-12" />
              <h3 className={textClasses}>{title}</h3>
              <p className={` ${isEven ? "text-[#D1D1D6]" : "text-secondary"}`}>
                {content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
    <CTA />
  </main>
);
export default Trainers;
