import React from "react";
import Container from "@/components/ui/Container";

// Keep your exact existing matrix routing array completely intact
const routingMatrix = [
  { dept: "General Inquiries", email: "hello@ontophi.com", desc: "General operations, press, and brand inquiries." },
  { dept: "Research", email: "research@ontophi.com", desc: "Collaborations in compilation layers and neuromorphic systems." },
  { dept: "Engineering", email: "engineering@ontophi.com", desc: "Infrastructure partnerships, runtimes, and core system layers." },
  { dept: "Careers", email: "careers@ontophi.com", desc: "Inquiries regarding rolling applications and student tracks." },
];

export default function ContactInfo() {
  return (
    <section className="pb-16 border-b border-gray-300 dark:border-gray-900 bg-transparent transition-colors duration-300">
      <Container>
        
        {/* 
           FIXED LAYOUT WRAPPER:
           Centered text stack that layers "Get in Touch" right above "Contact Information".
        */}
        <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center justify-center">
          
          {/* 1) ADDED BLOCK: "Get in Touch" styled cleanly as a sub-badge */}
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-full mb-3 inline-block transition-colors duration-300">
            Get in Touch
          </span>

          {/* 2) Main Section Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">
            Contact Information
          </h2>

          {/* 3) Section Subdescription */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 transition-colors duration-300">
            Reach the right team for your inquiry.
          </p>
        </div>

        {/* 4-Column Grid Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {routingMatrix.map((item) => (
            <div 
              key={item.email}
              className="p-5 rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm transition-all duration-200 hover:border-gray-900 dark:hover:border-white"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {item.dept}
              </h3>
              <a 
                href={`mailto:${item.email}`}
                className="text-sm font-bold text-gray-900 dark:text-white block hover:underline tracking-tight mb-3 transition-colors duration-300"
              >
                {item.email}
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

