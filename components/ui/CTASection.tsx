import React from "react";
import Link from "next/link"; 

// Update TypeScript definitions to support optional secondary action buttons
interface CTASectionProps {
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string; // The '?' marks this prop as optional
  secondaryHref?: string; // The '?' marks this prop as optional
}

export default function CTASection({ 
  title, 
  description, 
  primaryText, 
  primaryHref,
  secondaryText,
  secondaryHref 
}: CTASectionProps) {
  return (
    <div className="w-full py-6 px-4 bg-white">
      {/* 
        MINIMIZED BOX CARD CONTAINER:
        If a secondary button exists, we expand width slightly to 'max-w-2xl' 
        to ensure both buttons sit comfortably side-by-side.
      */}
      <section className={`mx-auto bg-gray-900 text-white rounded-xl p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-md ${
        secondaryText ? "max-w-2xl" : "max-w-xl"
      }`}>
        
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-balance">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mb-6 leading-relaxed text-balance">
          {description}
        </p>
        
        {/* BUTTON ACTION GROUP WRAPPER */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          {/* Fixed Primary Button (e.g., "Back to Home" or "Contact Us") */}
          <Link 
            href={primaryHref}
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-white transition-all duration-200 ease-in-out shadow-sm hover:bg-gray-100"
            style={{ color: '#111827' }} 
          >
            {primaryText}
          </Link>

          {/* Conditional Secondary Button (e.g., "View Open Roles") */}
          {secondaryText && secondaryHref && (
            <Link 
              href={secondaryHref}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-transparent text-white border border-gray-700 transition-all duration-200 ease-in-out shadow-sm hover:bg-gray-800 hover:border-gray-600"
            >
              {secondaryText}
            </Link>
          )}
        </div>
        
      </section>
    </div>
  );
}

