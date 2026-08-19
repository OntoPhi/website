import { researchPillars } from "@/content/research";


export default function ResearchAreas() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-8">

        {/* Section Header */}

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          RESEARCH FOCUS
        </p>

        <h2 className="mt-4 text-5xl font-semibold tracking-tight">
          Advancing the Foundations of Intelligent Computing.
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-600">
          Our research spans neuroscience, artificial intelligence, and
          systems engineering to understand, build, and accelerate
          intelligent computing across software and hardware platforms.
        </p>

        {/* Research Cards */}

      </div>
    </section>
  );
}

