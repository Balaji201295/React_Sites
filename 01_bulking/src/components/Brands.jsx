import React from "react";
import { brands } from "../constants";
const Brands = () => (
  <div className="py-12 sm:py-20">
    <p className="font-sans font-medium text-sm tracking-[.07px] text-white pb-6">
      Supported by:
    </p>
    <div className="flex flex-wrap gap-8 justify-start">
      {brands.map((item, index) => (
        <div key={index}>
          <img src={item.imgUrl} alt="Icon" className="w-[100%] h-[100%]" />
        </div>
      ))}
    </div>
  </div>
);
export default Brands;
