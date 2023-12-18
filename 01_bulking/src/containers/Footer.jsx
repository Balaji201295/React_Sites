import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../components";
import styles from "../styles";
import { Logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <footer className={`bg-[#08172D] ${styles.paddingX} sm:pt-32 pt-16 pb-8`}>
    <div className="flex flex-col xs:flex-row flex-wrap gap-16 lg:gap-4 justify-between items-start">
      <div className="flex-1 flex flex-col min-w-[235px]">
        <img src={Logo} alt="Logo" className="w-[123px] h-[40px]" />
        <p className={`${styles.paragraph} text-[#AEAEB2] pt-4`}>
          Get fit, stay healthy, and live life on their terms without fitness
          being an obstacle.
        </p>
      </div>
      <ul className="flex-1 flex flex-wrap gap-6 sm:gap-x-10 sm:gap-y-5 sm:justify-center justify-start min-w-[235px]">
        {footerLinks.map((item) => (
          <li
            key={item.id}
            className={`${styles.paragraph} font-medium text-[#c5c5c5] capitalize`}
          >
            <NavLink to={item.id}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex-1  min-w-[235px]">
        <p className={`${styles.paragraph} font-medium text-[#8E8E93] mb-4`}>
          Newsletter
        </p>
        <form className="flex flex-col xs:flex-row gap-6">
          <input
            type="email"
            id="emailId"
            placeholder="Your email here"
            required
            className={`${styles.paragraph} w-full xs:max-w-[240px] text-[#CBCBCB] text-[14px] rounded-[32px] py-3 sm:py-4 px-4 sm:px-8 bg-white/[0.12] outline-none border-none`}
          />
          <Button
            type="submit"
            text="Send"
            width="w-[80px] sm:w-[103px]"
            height="h-[40px] sm:h-[56px]"
            rounded="rounded-[32px]"
            bgColor="bg-primary hover:bg-[#1c1c1e] hover:text-[#BCFF5E]"
            borderColor="border-[#BCFF5E]"
          />
        </form>
      </div>
    </div>
    <div className="bg-[#E9EBED]/[.16] w-full h-[2px] mt-20 mb-8 rounded-sm"></div>
    <div className="flex flex-col xs:flex-row flex-wrap justify-between items-center gap-6 sm:gap-0">
      <p className={`${styles.paragraph} text-[#AEAEB2]`}>
        &copy; 2023 Nguli<sup>&reg;</sup> Global Inc.
      </p>
      <div className="flex gap-[10px]">
        {socialMedia.map((item, index) => {
          const IconImg = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="w-10 h-10 flex justify-center items-center border border-solid border-white/[.12] rounded-[20px] text-white transition-all duration-300 ease-linear hover:bg-primary hover:text-[#08172D]"
            >
              <IconImg className="w-4 h-4" />
            </a>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-10 justify-center items-center">
        <Link to="/faq">
          <p className={`${styles.paragraph} font-medium text-[#c5c5c5]`}>
            FAQ
          </p>
        </Link>
        <Link to="/terms-of-service">
          <p className={`${styles.paragraph} font-medium text-[#c5c5c5]`}>
            Terms of Service
          </p>
        </Link>
        <Link to="/privacy-policy">
          <p className={`${styles.paragraph} font-medium text-[#c5c5c5]`}>
            Privacy Policy
          </p>
        </Link>
      </div>
    </div>
  </footer>
);
export default Footer;
