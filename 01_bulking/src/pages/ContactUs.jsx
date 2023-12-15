import React from "react";
import { useState } from "react";
import styles from "../styles";
import { contactDetails } from "../constants";
import { PageHeading, Button } from "../components";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main className={styles.padding}>
      <PageHeading
        title="Let's get"
        titleSpan="in touch!"
        content="Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada."
      />
      <div className={`flex md:flex-row flex-col-reverse sm:gap-10 lg:gap-20`}>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {["name", "email", "phone", "message"].map((field) => (
              <div key={field} className="flex flex-col gap-4">
                <label
                  htmlFor={field}
                  className="font-sans text-sm capitalize font-medium text-primary tracking-[.07px]"
                >
                  {field === "name" ? `full ${field}` : field}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    name={field}
                    className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none resize-none placeholder:text-[#AEAEB2]"
                    placeholder={`Write your ${field}...`}
                    value={formData[field]}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    id={field}
                    name={field}
                    className="w-full pl-4 py-4 font-sans text-sm tracking-[.08px] text-primary bg-white rounded-3xl border border-solid border-[#E9EBED] outline-none placeholder:text-[#AEAEB2]"
                    placeholder={`Write your ${field}...`}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            ))}
            <div className="flex justify-center sm:justify-end">
              <Button
                type="submit"
                text="Send Message"
                width="w-[150px] sm:w-[191px]"
                height="h-[56px]"
                bgColor="bg-[#BCFF5E]"
              />
            </div>
          </form>
        </div>
        <div className="flex-[.5] mb-12 md:mb-0">
          <div className="bg-white rounded-[20px] p-6">
            <h3 className="font-sans text-primary text-lg font-semibold tracking-[.09px] pb-2">
              Contact Details
            </h3>
            <p className={`${styles.paragraph} pb-8`}>
              Fill up the form and our team will get back to you with in 24
              hours.
            </p>
            <div className="flex flex-col gap-5">
              {contactDetails.map((item, index) => {
                const IconImg = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 justify-start items-center"
                  >
                    <div className="w-12 h-12 flex justify-center items-center border border-solid border-[#BDC7F4] rounded-[24px] text-black">
                      <IconImg className="w-4 h-4" />
                    </div>
                    <p className="font-sans text-[#09080D] font-medium text-sm sm:text-base tracking-[.08px]">
                      {item.content}
                    </p>
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

export default ContactUs;
