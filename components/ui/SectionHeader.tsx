import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: React.ReactNode; // Change from string to support JSX structures safely
}

export default function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
      {badge && (
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600 bg-gray-100 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-4">
        {title}
      </h2>
      {description && (
        /* FIX: Render description in a <div> block to avoid nested <p> tag crashes */
        <div className="text-base text-gray-500 max-w-2xl leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}

