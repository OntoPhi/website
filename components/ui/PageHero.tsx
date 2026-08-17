import React from "react";

interface PageHeroProps {
  badge: string;
  title: string; // Change back to string for standard parsing
  description: string;
}

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4 w-full max-w-5xl mx-auto">
      {/* Badge Element */}
      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600 bg-gray-100 rounded-full mb-4">
        {badge}
      </span>
      
      {/* 
        The 'max-w-2xl sm:max-w-none' ensures the container doesn't choke the text wide-span width.
        The 'whitespace-normal' ensures the browser automatically fits layout based on viewports.
      */}
      <h1 className="w-full max-w-2xl sm:max-w-none text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 whitespace-normal">
        {title}
      </h1>
      
      {/* Subtext Description */}
      <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
        {description}
      </p>
    </section>
  );
}

