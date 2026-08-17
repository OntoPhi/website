import React from "react";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-5 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-200 ease-in-out cursor-pointer hover:border-gray-900 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between min-w-0 h-full">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">
          {title}
        </h3>
        
        {/* FIX: Keep this container as a <div> tag to allow mailto anchors and text elements safely */}
        <div className="text-gray-600 leading-relaxed text-sm">
          {description}
        </div>
      </div>
    </div>
  );
}

