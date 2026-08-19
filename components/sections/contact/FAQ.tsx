"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/content/contact";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50/50 dark:bg-transparent border-t border-gray-300 dark:border-gray-900 transition-colors duration-300">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions."
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              /* Upgraded item boundaries to border-gray-300 */
              <div 
                key={index} 
                className="border border-gray-300 dark:border-gray-900 rounded-lg bg-white dark:bg-gray-950 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50/70 dark:hover:bg-gray-900/50 transition-colors duration-200 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold tracking-tight">
                    {item.question}
                  </span>
                  
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ease-in-out ${
                      isOpen ? "rotate-180 text-gray-900 dark:text-white" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Inner panel details divider updated to border-gray-300 */}
                <div 
                  className={`transition-all duration-200 ease-in-out ${
                    isOpen 
                      ? "max-h-[500px] opacity-100 border-t border-gray-300 dark:border-gray-900 p-5 bg-gray-50/30 dark:bg-gray-900/20" 
                      : "max-h-0 opacity-0 pointer-events-none"
                  } overflow-hidden text-gray-600 dark:text-gray-400 text-sm leading-relaxed`}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

