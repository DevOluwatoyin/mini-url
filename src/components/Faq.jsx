"use client";
import { useState } from "react";
import { faqs } from "./variables/faqs.jsx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  return (
    <section
      id="faq"
      className="max-w-2xl mx-auto bg-color-bg_primary-500 rounded-lg space-y-12 p-6 md:px-16 md:rounded-3xl lg:max-w-4xl"
    >
      <h3 className="font-bold text-center text-xl md:text-3xl">FAQS</h3>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="accordion-item">
            <div
              className="accordion-title flex justify-between cursor-pointer font-medium text-xs sm:text-base md:text-xl"
              onClick={() => handleClick(index)}
            >
              {faq.question}
              {activeIndex === index ? (
                <span className="pl-4">
                  <AiOutlineMinus className="h-6 w-6" />
                </span>
              ) : (
                <span className="pl-4">
                  <AiOutlinePlus className="h-6 w-6" />
                </span>
              )}
            </div>
            {activeIndex === index && (
              <div className="accordion-content pt-2 text-xs sm:text-base md:pt-4 md:text-2xl">
                {faq.answer}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;
