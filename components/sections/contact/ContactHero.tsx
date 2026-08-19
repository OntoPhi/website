import React from "react";

export default function ContactHero() {
  return (
    <section className="w-full pt-24 pb-12 flex flex-col items-center justify-center text-center px-4 bg-transparent mx-auto">
      
      {/* 1) OPTIMIZATION: "CONTACT" structural tracking badge */}
      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500 mb-2 block">
        CONTACT
      </span>
      {/* Main Headline */}
      <h1 className="w-full text-center text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 transition-colors duration-300">
        Let's Build the Future Together
      </h1>
      
      {/* Centered Subtitle */}
      <p className="w-full text-center text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed transition-colors duration-300">
        Whether you are a researcher, engineer, partner, or student, we are driven to hear your voice.
      </p>
      
    </section>
  );
}

