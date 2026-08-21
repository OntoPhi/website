import Link from "next/link";
import Container from "@/components/ui/Container";

interface CenteredHeroProps {
  badge: string;
  title: string;
  description: string;
  topics?: string[];
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export default function CenteredHero({
  badge,
  title,
  description,
  topics = [],
  primaryAction,
  secondaryAction,
}: CenteredHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-28 transition-colors duration-300 dark:bg-gray-950 sm:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gray-100 opacity-80 blur-3xl dark:bg-gray-800/50" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 transition-colors duration-300 dark:text-gray-400">
            {badge}
          </p>

          {/* Uniform Hero Heading */}
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 transition-colors duration-300 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 transition-colors duration-300 dark:text-gray-400 sm:text-lg sm:leading-8">
            {description}
          </p>

          {/* Topics */}
          {topics.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-gray-500 dark:text-gray-500">
              {topics.map((topic, index) => (
                <span key={topic} className="flex items-center gap-5">
                  {index > 0 && <span aria-hidden="true">•</span>}
                  <span>{topic}</span>
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              {primaryAction && (
                <HeroLink
                  href={primaryAction.href}
                  label={primaryAction.label}
                />
              )}

              {secondaryAction && (
                <HeroLink
                  href={secondaryAction.href}
                  label={secondaryAction.label}
                />
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function HeroLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 rounded-full border border-gray-400 px-8 py-2 text-sm font-semibold text-black transition-colors duration-200 hover:text-gray-600 dark:border-gray-700 dark:text-gray-200 dark:hover:text-white"
    >
      <span>{label}</span>

      <svg
        className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
}
