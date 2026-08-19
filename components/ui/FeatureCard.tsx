import React from "react";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    /* 
      FIXED SYSTEM: Automatically shifts background from clean white 
      to rich slate-black and handles thin structural gray border swaps.
    */
    <div className="p-6 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-900 rounded-xl shadow-sm transition-all duration-200 hover:border-gray-900 dark:hover:border-white hover:shadow-md">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {description}
      </div>
    </div>
  );
}

