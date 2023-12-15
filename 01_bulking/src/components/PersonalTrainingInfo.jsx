import React from "react";
import { personalTrainingSpecs } from "../constants";
const PersonalTrainingInfo = () => (
  <>
    {personalTrainingSpecs.map((item, index) => (
      <div key={index} className="flex items-center gap-2 p-3">
        <img src={item.icon} alt="Icon" className="w-12 h-12" />
        <div>
          <p className="font-sans text-[#AEAEB2] text-sm font-medium tracking-[.07px]">
            {item.value < 10 ? `0${item.value}` : item.value}
          </p>

          <h3 className="font-sans text-mainColor text-sm font-bold tracking-[.07px]">
            {item.title}
          </h3>
        </div>
      </div>
    ))}
  </>
);
export default PersonalTrainingInfo;
