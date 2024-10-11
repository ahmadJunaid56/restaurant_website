"use client"
// components/Accordion.js
import { useState } from "react";

const Accordion = ({ items = [] }) => {
  // Default empty array
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 flex justify-between items-center text-lg font-medium focus:outline-none"
            >
              <span className="text-green-500">{item.title}</span>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="py-4">{item.content}</div>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Accordion;
