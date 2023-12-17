import React, { useState } from "react";
import { PageHeading, Button, FAQs } from "../components";
import { FaqsData } from "../constants";
import styles from "../styles";

const Faq = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      message: "",
    });
  };

  const renderFaqs = () => {
    return FaqsData.map((item, index) => {
      const { question, answer } = item;
      return (
        <FAQs key={index} item={item} question={question} answer={answer} />
      );
    });
  };

  return (
    <main className={`${styles.padding} max-w-4xl mx-auto`}>
      <PageHeading
        title="FAQs"
        content="Cras tellus ac dui at sed. Suspendisse feugiat scelerisque et, viverra urna imperdiet non malesuada."
        align="text-center"
        margin="mx-auto"
      />
      <div>
        <h5 className="text-primary font-sans text-xl sm:text-2xl font-semibold tracking-[.12px]">
          Maybe your question has been answered, check this out!
        </h5>
        <div className={`flex flex-col ${styles.paddingY}`}>{renderFaqs()}</div>
      </div>
      <div className={styles.paddingY}>
        <PageHeading
          title="How can we"
          titleSpan="help you?"
          content="Fill up the form and our team will get back to you with in 24 hours."
          align="text-center"
          margin="mx-auto"
          maxWidth="max-w-sm"
        />
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {["name", "email", "message"].map((field) => (
            <div key={field} className="flex flex-col gap-4">
              <label
                htmlFor={field}
                className="font-sans text-sm font-medium capitalize text-primary tracking-[.07px]"
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
                  type={field === "email" ? "email" : "text"}
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
              text="Submit Question"
              width="w-[150px] sm:w-[207px]"
              height="h-[56px]"
              bgColor="bg-[#BCFF5E]"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Faq;
