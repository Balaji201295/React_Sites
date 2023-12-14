import React from "react";
import { useState } from "react";
import { CheckMark, Paypal, ApplePay, CreditCard } from "../assets";
import { Button } from "../components";
import styles from "../styles";
import { plans } from "../constants";
import { MdArrowDropDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option 1");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setSelectedDate(e);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleSaveCardChange = () => {
    setSaveCard((prev) => !prev);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your payment processing logic
    // For demonstration purposes, let's just log the entered details
    console.log("Payment Method:", paymentMethod);
    if (paymentMethod === "creditCard") {
      console.log("Cardholder Name:", cardholderName);
      console.log("Card Number:", cardNumber);
      console.log("Postal Code:", postalCode);
      console.log("Expiration:", selectedDate);
      console.log("CVV:", cvv);
      console.log("Save Card:", saveCard);
    }

    // Reset form fields after submission
    setPaymentMethod("creditCard");
    setCardNumber("");
    setSelectedDate("");
    setCvv("");
    setCardholderName("");
    setPostalCode("");
    setSaveCard(false);
  };

  return (
    <main className="bg-[#F9F9FB]">
      <div className={styles.padding}>
        <h2 className="font-sans text-[#09080D] text-2xl sm:text-3xl font-medium tracking-[.16px] mb-12">
          Get your package
        </h2>
        <div
          className={`flex md:flex-row flex-col-reverse sm:gap-10 lg:gap-20`}
        >
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 items-start">
                <label
                  htmlFor="payment method"
                  className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px] "
                >
                  Pay with
                </label>
                <div className=" flex gap-6 w-full py-1 px-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]">
                  <input
                    type="radio"
                    id="creditCard"
                    name="creditCard"
                    value="creditCard"
                    className="p-4 bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none"
                    checked={paymentMethod === "creditCard"}
                    onChange={handlePaymentMethodChange}
                  />
                  <img
                    src={CreditCard}
                    alt="CreditCard"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
                <div className=" flex gap-6 w-full p-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]">
                  <input
                    type="radio"
                    id="paypal"
                    name="paypal"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={handlePaymentMethodChange}
                  />
                  <img
                    src={Paypal}
                    alt="PayPal"
                    className="w-[83px] h-[24px] object-contain"
                  />
                </div>
                <div className=" flex gap-6 w-full p-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]">
                  <input
                    type="radio"
                    id="applePay"
                    name="applePay"
                    value="applePay"
                    checked={paymentMethod === "applePay"}
                    onChange={handlePaymentMethodChange}
                  />
                  <img
                    src={ApplePay}
                    alt="ApplePay"
                    className="w-[54px] h-[24px] object-contain"
                  />
                </div>
              </div>

              {paymentMethod === "creditCard" && (
                <>
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="cardholderName"
                      className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px]"
                    >
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardholderName"
                      name="cardholderName"
                      className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                      value={cardholderName}
                      onChange={handleCardholderNameChange}
                      placeholder="Enter cardholder's name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      htmlFor="cardNumber"
                      className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px]"
                    >
                      Card Number
                    </label>
                    <input
                      type="number"
                      id="cardNumber"
                      name="cardNumber"
                      className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="Enter card number"
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[25px]">
                    <div className="flex-1 flex flex-col gap-4">
                      <label
                        htmlFor="postalCode"
                        className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px] "
                      >
                        Postal Code
                      </label>
                      <input
                        type="number"
                        id="postalCode"
                        name="postalCode"
                        className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                        value={postalCode}
                        onChange={handlePostalCodeChange}
                        placeholder="Enter postal code"
                        required
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <label
                        htmlFor="expiration"
                        className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px] "
                      >
                        Expiration
                      </label>
                      <DatePicker
                        id="expiration"
                        name="expiration"
                        selected={selectedDate}
                        onChange={handleExpiryChange}
                        placeholderText="MM/YY"
                        dateFormat="MM/dd/yy" // Customize date format if needed
                        className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      <label
                        htmlFor="cvv"
                        className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px] "
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                        value={cvv}
                        onChange={handleCvvChange}
                        placeholder="CVV"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <input
                      type="radio"
                      id="saveCard"
                      name="saveCard"
                      checked={saveCard}
                      onChange={handleSaveCardChange}
                    />
                    <label
                      htmlFor="saveCard"
                      className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px] "
                    >
                      Save card for future payments
                    </label>
                  </div>
                </>
              )}
              <Button
                text="Confirm and pay"
                type="submit"
                width="w-[150px] sm:w-[204px]"
                height="h-[56px]"
                bgColor="bg-[#BCFF5E]"
              />
            </form>
          </div>
          <div className="flex-[.5] mb-12 md:mb-0">
            <div className="bg-white rounded-[20px] p-6">
              {plans.slice(1, 2).map((plan, index) => {
                return (
                  <div key={index} className="flex flex-col gap-8">
                    <h3 className="font-sans text-[#09080D] text-3xl sm:text-4xl font-semibold tracking-[.2px]">
                      ${plan.price}.00
                      <span className="text-[#8E8E93] text-sm">/Month</span>
                    </h3>
                    <div>
                      <h5 className="font-sans text-[#09080D] text-md font-bold tracking-[.09px] mb-2">
                        {plan.planType}
                      </h5>
                      <p className={`${styles.paragraph}`}>
                        Fill up the form and our team will get back to you with
                        in 24 hours.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p
                        className={`font-sans font-medium text-primary text-md tracking-[.08px]`}
                      >
                        What’s Includes:
                      </p>
                      {plan.points.map((point, index) => (
                        <div key={index} className="flex gap-3 items-center">
                          <img src={CheckMark} alt="Mark" />
                          <p
                            key={index}
                            className={`${styles.paragraph} text-primary`}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                    <form className="flex flex-col gap-4">
                      <label
                        htmlFor="dropdown"
                        className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px]"
                      >
                        Package Duration
                      </label>
                      <div className="custom-select relative">
                        <select
                          id="dropdown"
                          className="w-full p-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        >
                          <option value="option1">Weekly</option>
                          <option value="option2">Monthly</option>
                          <option value="option3">Yearly</option>
                        </select>
                        {/* Custom arrow */}
                        <MdArrowDropDown
                          fontSize={24}
                          id="arrowIcon"
                          className={`absolute top-4 right-4`}
                        />
                      </div>
                    </form>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Payment;
