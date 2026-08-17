"use client"; // Required for interactivity in Next.js App Router namespaces

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqs } from "@/content/contact";

export default function FAQ() {
  // Tracks the array index of the currently expanded accordion item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50/50">
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
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 hover:bg-gray-50/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold tracking-tight">
                    {item.question}
                  </span>
                  
                  {/* Clean Black & White SVG Vector Chevron */}
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ease-in-out ${
                      isOpen ? "rotate-180 text-gray-900" : ""
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

                {/* Collapsible Panel Content */}
                <div 
                  className={`transition-all duration-200 ease-in-out ${
                    isOpen 
                      ? "max-h-[500px] opacity-100 border-t border-gray-100 p-5 bg-gray-50/30" 
                      : "max-h-0 opacity-0 pointer-events-none"
                  } overflow-hidden text-gray-600 text-sm leading-relaxed`}
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

