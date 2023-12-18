import React from "react";
import { useState, useRef, useEffect } from "react";
import { PageHeading, Button, PersonalTrainingInfo } from "../components";
import { Reviews } from "../containers";
import styles from "../styles";
import { programDetails } from "../constants";
import { Workout } from "../assets";
const ProgramDetails = () => {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoElement);
    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <main className={styles.padding}>
      <PageHeading
        title="Personal"
        titleSpan="Training"
        content="It’s a long established fact that a reader will be distracted by the readable content"
      />
      <div className={`flex md:flex-row flex-col-reverse sm:gap-10 lg:gap-20`}>
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-wrap gap-6">
            <PersonalTrainingInfo />
          </div>
          <div className="relative">
            <video
              src={Workout}
              ref={videoRef}
              type="video/mp4"
              className="rounded-3xl overflow-hidden"
              loop
              controls={false}
              muted
            />
            <div className="flex justify-center items-center rounded-3xl absolute inset-0 bg-black/[.5]">
              <div
                className="w-[80px] h-[80px] rounded-full cursor-pointer flex justify-center items-center border border-solid border-[#BCFF5E]"
                style={{ display: "none" }} // Hide play/pause button (since we're controlling video with scroll)
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-primary text-2xl font-semibold tracking-[.12px] ">
              What is this class about?
            </h3>
            <p className={`${styles.paragraph} pb-4`}>
              Pretium sed tempor vestibulum sit urna. Potenti purus sodales in
              enim nunc. In et auctor fusce sit donec condimentum. Diam ultrices
              enim nunc ornare id aliquet sed arcu commodo. Aliquam morbi
              fermentum amet dui ullamcorper praesent elit. Viverra nam massa
              cursus leo blandit eget eu. Tempor enim neque metus nunc sodales
              at eros. Malesuada placerat vestibulum amet sit tempor mi
              dignissim. Feugiat nullam urna gravida vulputate mi eleifend
              laoreet.
            </p>
            <h3 className="font-sans text-primary text-2xl font-semibold tracking-[.12px] ">
              Is this the right fitness class for me?
            </h3>
            <p className={`${styles.paragraph}`}>
              Viverra urna imperdiet non malesuada. In massa id tellus natoque
              augue in et, et. Suspendisse feugiat scelerisque et, viverra urna
              imperdiet.Vitae interdum quis lacus ut viverra.
            </p>
            <ol className={`${styles.paragraph} list-decimal list-inside`}>
              <li>
                Enim eu turpis egestas pretium aenean pharetra magna ac
                placerat.
              </li>
              <li>Nunc semper velit netus donec commodo.</li>
              <li>
                Lacus hendrerit aliquam habitant eget faucibus venenatis turpis
              </li>
            </ol>
            <h3 className="font-sans text-primary text-2xl font-semibold tracking-[.12px] ">
              How can I take a trial class?
            </h3>
            <p className={`${styles.paragraph} pb-4`}>
              Diam ultrices enim nunc ornare id aliquet sed arcu commodo.
              Aliquam morbi fermentum amet dui ullamcorper praesent elit.
              Viverra nam massa cursus leo blandit eget eu. Tempor enim neque
              metus nunc sodales at eros. Malesuada placerat vestibulum amet sit
              tempor mi dignissim. Feugiat nullam urna gravida vulputate mi
              eleifend laoreet.
            </p>
          </div>
        </div>
        <div className="flex-[.5]">
          <div className="bg-white rounded-[20px] p-6">
            <h3 className="font-sans text-primary text-lg font-semibold tracking-[.09px] pb-2">
              Details Program
            </h3>
            <div className="flex flex-col gap-6">
              <p className={`${styles.paragraph}`}>
                It’s a long estabilished fact that a reader will be distracted
                by the readable content
              </p>
              <div className="flex flex-col gap-5">
                {programDetails.map((item, index) => {
                  const IconImg = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex justify-start items-center"
                    >
                      <div className="w-9 h-9 flex justify-center items-center rounded-[20px] border border-solid border-[#E9EBED] mr-3">
                        <IconImg className="text-mainColor w-6 h-6" />
                      </div>
                      <p className="font-sans text-[#8E8E93] font-medium text-sm sm:text-base tracking-[.08px] pr-1">
                        {item.label}
                      </p>
                      <p className="font-sans text-primary font-medium text-sm sm:text-base tracking-[.08px]">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
                <div className="flex flex-col justify-center items-center gap-6">
                  <Button
                    type="button"
                    text="Book a Class"
                    width="w-full"
                    height="h-[56px]"
                    bgColor="bg-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </main>
  );
};
export default ProgramDetails;
