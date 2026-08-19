import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: React.ReactNode; // Retained: Safely supports text strings or complex JSX components
}

export default function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
      
      {/* 1. Dynamic Section Badge Tracker - Synced color variables */}
      {badge && (
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-full mb-3 transition-colors duration-300">
          {badge}
        </span>
      )}

      {/* 2. Main Section Title - Added dark:text-white toggle */}
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl mb-4 transition-colors duration-300">
        {title}
      </h2>

      {/* 3. Sub-text Description Container Container */}
      {description && (
        /* Retained: Rendered in a clean <div> block layer to prevent runtime console errors */
        <div className="text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed transition-colors duration-300">
          {description}
        </div>
      )}
      
    </div>
  );
}

