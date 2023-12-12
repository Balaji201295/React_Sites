import React from "react";
import styles from "../styles";
import { trainers } from "../constants";
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
          const { imgUrl, trainerName, position, links } = trainer;
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
      <div className={styles.padding}>
        <SectionIntro
          title="My Core Work Values"
          content="Consectetur adipiscing elit. Odio amet egestasolm dignissim eu nunc. Id pulvinar enim volutpat tellus. "
          maxWidth="max-w-[512px]"
        />
      </div>
    </div>
    <CTA />
  </main>
);
export default Trainers;
