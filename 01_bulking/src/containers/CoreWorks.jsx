import React from "react";
import { workouts } from "../constants";

const CoreWorks = () => (
  <>
    <div className="text-center mx-auto pb-14">
      <h1 className="font-sans text-primary capitalize font-medium tracking-[.24px] text-3xl sm:text-4xl max-w-lg mx-auto pb-4">
        My Core Work Values
      </h1>
      <p className="max-w-xl">
        Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id
        pulvinar enim volutpat tellus.
      </p>
    </div>
    <div>
      {workouts.map((workout, index) => {
        const { icon, title, content, imgUrl } = workout;
        const isLastItem = index === workouts.length - 1;
        const flexClasses = `flex items-center gap-6 sm:gap-12 flex-col-reverse sm:flex-row ${
          !isLastItem ? "mb-12 sm:mb-24" : ""
        } even:flex-col-reverse sm:even:flex-row-reverse`;

        return (
          <div key={index} className={flexClasses}>
            <div className="flex-[.65] flex flex-col items-start p-6 sm:py-16 sm:px-10 bg-white rounded-[20px]">
              <img src={icon} alt="Icon" className="w-12 h-12" />
              <h3 className="font-sans text-primary capitalize font-medium tracking-[.16px] text-xl md:text-3xl pt-2 pb-4 md:pb-6">
                {title}
              </h3>
              <p className="font-sans text-primary text-sm sm:text-lg font-normal tracking-[.09px]">
                {content}
              </p>
            </div>
            <div className="flex-1">
              <img src={imgUrl} alt="Image" />
            </div>
          </div>
        );
      })}
    </div>
  </>
);

export default CoreWorks;
