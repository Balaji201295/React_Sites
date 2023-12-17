import React from "react";
import styles from "../styles";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.padding} bg-secondary flex sm:flex-row flex-col justify-between items-center gap-12`}
  >
    <div>
      <h3 className="font-sans font-medium text-4xl sm:text-[48px] sm:leading-[56px] tracking-tighter text-white mb-4">
        Discover Your Potential
      </h3>
      <p className={`${styles.paragraph} text-white/[.64] max-w-lg`}>
        Workout was started by James and Mount in 2012. It’s our mission to help
        people in Denver get fit, stay healthy, and live life on their terms
        without fitness being an obstacle.
      </p>
    </div>
    <Button
      text="Get Started"
      width="w-[170px]"
      height="h-[56px]"
      bgColor="bg-primary"
    />
  </section>
);

export default CTA;
