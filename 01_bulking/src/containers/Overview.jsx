import React from "react";
import { overview } from "../constants";
import { CheckMark, CheckMarkColor, CloseMark, Info } from "../assets";
const Overview = () => (
  <section className="w-full flex flex-col justify-start">
    <h3 className="font-sans text-mainColor text-lg font-semibold tracking-[.09px] pb-4">
      Overview
    </h3>

    <table className="w-full">
      <tbody>
        {overview.map((item, index) => (
          <tr
            key={index}
            className={`flex w-full justify-start items-center py-3 pl-2 rounded ${
              index % 2 === 0 ? "bg-white" : ""
            }`}
          >
            <td className="flex-1 w-full gap-1 min-w-[120px]">
              <p className="font-sans text-primary text-xs sm:text-sm md:text-lg font-medium tracking-[0.09px]">
                {item.access}&nbsp;
                <img
                  src={Info}
                  alt="Information"
                  className="w-3 sm:w-4 h-3 sm:h-4 cursor-pointer inline"
                />
              </p>
            </td>
            <td className="flex-1 flex w-full justify-center">
              {item.free === CheckMarkColor || item.free === CloseMark ? (
                <img
                  src={item.free}
                  alt="Icon"
                  className=" w-6 sm:w-8 sm:h-8 h-6"
                />
              ) : (
                <p className="font-sans text-primary text-xs sm:text-sm md:text-lg font-medium tracking-[0.09px]">
                  1
                </p>
              )}
            </td>
            <td className="flex-1 flex w-full justify-center">
              {item.free === CheckMarkColor || item.free === CloseMark ? (
                <img
                  src={item.basics}
                  alt="Icon"
                  className=" w-6 sm:w-8 sm:h-8 h-6"
                />
              ) : (
                <p className="font-sans text-primary text-xs sm:text-sm md:text-lg font-medium tracking-[0.09px]">
                  8
                </p>
              )}
            </td>
            <td className="flex-1 flex w-full justify-center">
              {item.free === CheckMarkColor || item.free === CloseMark ? (
                <img
                  src={item.professional}
                  alt="Icon"
                  className=" w-6 sm:w-8 sm:h-8 h-6"
                />
              ) : (
                <p className="font-sans text-primary text-xs sm:text-sm md:text-lg font-medium tracking-[0.09px]">
                  20
                </p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
export default Overview;
