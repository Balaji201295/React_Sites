import React, { useState, useEffect } from "react";
import { Button } from "../components";
import { navItems } from "../constants";
import { useLocation, NavLink, Link } from "react-router-dom";
import { Logo, ColorLogo } from "../assets";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles";
import AuthModal from "../modalPages/AuthModal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrollTop(window.scrollY);
      setScrolling(window.scrollY > scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  const getNavStyles = () => {
    const isHomePage = currentPath === "/" || currentPath === "/about-us";

    const menuItems = [
      { text: "Home", path: "/" },
      { text: "About Us", path: "/about-us" },
      // Add more menu items as needed
    ];

    const getMenuStyles = (path) => {
      return isHomePage && currentPath === path ? "active" : "";
    };

    const navStyles = {
      backgroundColor: isHomePage ? "#064BB4" : "#F9F9FB",
      logo: isHomePage ? Logo : ColorLogo,
      menuColor: isHomePage
        ? "text-white/[.56] hover:text-white"
        : "text-[#8E8E93] hover:text-primary",
      iconColor: isHomePage ? "text-white" : "text-primary",
      // responsive navbar
      toggleColor: isHomePage ? "text-white" : "text-[#064BB4]",
      currentPage: currentPath,
      menuItems: menuItems.map((item) => ({
        text: item.text,
        path: item.path,
        style: getMenuStyles(item.path),
      })),
    };

    return navStyles;
  };

  const navStyles = getNavStyles();

  const getButtonStyles = () => {
    const isHomePage = currentPath === "/" || currentPath === "/about-us";
    return {
      textColor: isHomePage
        ? "text-white hover:text-mainColor hover:bg-white"
        : "text-primary hover:bg-[#1c1c1e] hover:text-white",
      borderColor: isHomePage ? "border-white" : "border-[#1c1c1e]",
      bgColor: isHomePage
        ? "bg-[#BCFF5E] hover:bg-[#1c1c1e] hover:text-[#BCFF5E]"
        : "bg-[#BCFF5E] hover:bg-[#1c1c1e] hover:text-[#BCFF5E]",
    };
  };

  const buttonStyles = getButtonStyles();

  return (
    <nav
      className={`${
        styles.paddingX
      } flex justify-between items-center py-5 transition-all duration-300 fixed top-0 z-50 w-full ${
        scrolling ? "bg-white shadow-md" : ""
      }`}
      style={{ backgroundColor: navStyles.backgroundColor }}
    >
      <Link to="/">
        <img src={navStyles.logo} alt="Logo" className="w-[123px] h-[40px]" />
      </Link>
      <ul className="flex-1 md:flex hidden justify-center items-center lg:gap-10 md:gap-8 capitalize">
        {navItems.map((item) => (
          <li key={item.id} className={`${navStyles.menuColor}`}>
            <NavLink to={item.id}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
      <div className="md:flex hidden justify-end items-center gap-9">
        <div className="relative">
          <FiShoppingCart className={`w-8 h-8 ${navStyles.iconColor}`} />
          <div className="bg-[#FF4747] rounded-full w-3 h-3 absolute top-0 -right-1 flex justify-center items-center">
            <span className="text-[8px] text-white">2</span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <AuthModal />
        </div>
      </div>
      {/* responsive navbar */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <RiCloseLine
            className={`cursor-pointer w-8 h-8 ${navStyles.toggleColor}`}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line
            width={28}
            height={28}
            className={`cursor-pointer w-8 h-8 ${navStyles.toggleColor}`}
            onClick={() => setToggle(true)}
          />
        )}

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col p-6 absolute top-20 sm:right-[6vw] right-[2vw] mx-4 my-2 min-w-[140px] rounded-xl bg-[#064BB4] sidebar z-20 shadow-2xl`}
        >
          <ul className="md:hidden flex flex-col list-none justify-end items-end capitalize">
            {navItems.map((item, index) => (
              <li
                key={item.id}
                className={`text-white/[.56] ${
                  index !== navItems.length - 1 ? "mb-4" : "mb-0"
                }`}
              >
                <NavLink to={item.id} onClick={() => setToggle(false)}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex flex-col justify-end items-center gap-9">
            <div
              className="flex justify-end items-center gap-4 mt-8"
              onClick={() => setToggle(false)}
            >
              <AuthModal />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
