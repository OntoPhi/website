import React from "react";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="flex w-full max-w-5xl flex-col items-center px-4 py-16 text-center">
      {/* Badge */}
      <span className="mb-4 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-400">
        {badge}
      </span>

      {/* Hero Title */}
      <h1 className="mb-6 w-full max-w-2xl whitespace-normal text-4xl font-extrabold leading-tight tracking-tight text-gray-900 transition-colors duration-300 dark:text-white sm:max-w-none sm:text-5xl md:text-6xl">
        {title}
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-base leading-relaxed text-gray-500 transition-colors duration-300 dark:text-gray-400 sm:text-lg">
        {description}
      </p>
    </section>
  );
}
