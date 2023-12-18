import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "../components";
import Modal from "react-modal";
import { Apple_Login, Google_Login, Logo_Modal } from "../assets";
import { IoClose } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthModal = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [saveCard, setSaveCard] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSaveCardChange = () => {
    setSaveCard((prev) => !prev);
  };

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with form data here, like sending to a server, etc.
    console.log("email:", email);
    setEmail("");
    setPassword("");
  };

  const handleTermsOfServiceClick = (event) => {
    // Prevent the modal from closing
    event.stopPropagation();
    window.location.href = "/terms-of-service";
  };

  const handlePrivacyPolicyClick = (event) => {
    // Prevent the modal from closing
    event.stopPropagation();
    window.location.href = "/privacy-policy";
  };
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
    <div>
      <div className="flex gap-4">
        <Button
          type="button"
          text="Log In"
          width="w-[83px] "
          height="h-[46px]"
          textColor={buttonStyles.textColor}
          borderColor={buttonStyles.borderColor}
          openModal={openModal}
          modalType="logIn"
        />
        <Button
          type="button"
          text="Sign Up"
          width="w-[83px]"
          height="h-[46px]"
          bgColor={buttonStyles.bgColor}
          openModal={openModal}
          modalType="signUp"
        />
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        {modalType === "signUp" && (
          <>
            <div className="flex flex-col justify-center items-center gap-4">
              <div>
                <img src={Logo_Modal} alt="Logo" />
              </div>
              <h1 className="font-sans font-medium text-3xl text-primary tracking-[.16px]">
                Welcome to Workout
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-sm mx-auto my-8"
            >
              <div className="w-full flex justify-center items-center gap-6">
                <img src={Google_Login} alt="Google" />
                <img src={Apple_Login} alt="Apple" />
              </div>
              <div className=" w-full relative text-center">
                <div className="w-full absolute h-[1px] bg-[#E9EBED] bottom-[10px] -z-1"></div>
                <span className="relative z-20 font-sans font-normal text-sm text-[#8E8E93] px-3 bg-white">
                  Or Sign Up with
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                text="Continue"
                width="w-full"
                height="h-[56px]"
                bgColor="bg-[#BCFF5E]"
              />
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  id="saveCard"
                  name="saveCard"
                  checked={saveCard}
                  onChange={handleSaveCardChange}
                />
                <label
                  htmlFor="saveCard"
                  className="font-sans text-sm text-[#AEAEB2] tracking-[.07px] "
                >
                  I agree to Claraa&nbsp;
                  <Link
                    to="/terms-of-service"
                    className="text-mainColor font-medium"
                    onClick={handlePrivacyPolicyClick}
                  >
                    Terms of Use
                  </Link>
                  &nbsp;and&nbsp;
                  <Link
                    to="/privacy-policy"
                    className="text-mainColor font-medium"
                    onClick={handlePrivacyPolicyClick}
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </form>
            <p className="text-center font-sans font-normal text-sm text-[#AEAEB2]">
              Already have an account?&nbsp;
              <button
                onClick={() => setModalType("logIn")}
                className="text-mainColor font-medium cursor-pointer"
              >
                Log In
              </button>
            </p>
          </>
        )}

        {modalType === "logIn" && (
          <>
            <div className="flex flex-col justify-center items-center gap-4">
              <div>
                <img src={Logo_Modal} alt="Logo" />
              </div>
              <h1 className="font-sans font-medium text-3xl text-primary tracking-[.16px]">
                Hey there, Welcome Back!
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-sm mx-auto my-8"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? (
                    <FaEye className="text-primary w-[18px] h-[18px]" />
                  ) : (
                    <FaEyeSlash className="text-primary w-[18px] h-[18px]" />
                  )}
                </button>
              </div>
              <Button
                type="submit"
                text="Log In"
                width="w-full"
                height="h-[56px]"
                bgColor="bg-[#BCFF5E]"
              />
            </form>
            <div className="flex flex-col gap-6 justify-center items-center">
              <button
                onClick={() => setModalType("forgetPassword")}
                className="font-sans text-sm text-mainColor font-medium cursor-pointer"
              >
                Forget Password?
              </button>
              <p className="text-center font-sans font-normal text-sm text-[#AEAEB2]">
                Don't have an account?&nbsp;
                <button
                  onClick={() => setModalType("signUp")}
                  className="text-mainColor font-medium cursor-pointer"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </>
        )}

        {modalType === "forgetPassword" && (
          <>
            <div className="flex flex-col justify-center items-center gap-4">
              <div>
                <img src={Logo_Modal} alt="Logo" />
              </div>
              <h1 className="font-sans font-medium text-3xl text-primary tracking-[.16px]">
                Reset Password
              </h1>
              <p className="font-sans font-normal text-sm text-[#7D7C84]">
                Recover your account password
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-sm mx-auto my-8"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                text="Next"
                width="w-full"
                height="h-[56px]"
                bgColor="bg-[#BCFF5E]"
              />
            </form>
          </>
        )}

        <button
          onClick={closeModal}
          className="absolute -top-[5px] -right-[5px] bg-white rounded-full"
        >
          <IoClose className="w-6 h-6" />
        </button>
      </Modal>
    </div>
  );
};
export default AuthModal;
