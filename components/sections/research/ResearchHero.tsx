import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-white py-28 transition-colors duration-300 dark:bg-gray-950 sm:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gray-50 opacity-70 blur-3xl dark:bg-gray-900/40" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Research
          </p>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Exploring the Foundations of
            <br className="hidden md:inline" />
            Computation and Cognition
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            OntoPhi explores fundamental questions across cognition,
            computation, and emerging computing systems—connecting scientific
            understanding with new possibilities in engineering.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-gray-500 dark:text-gray-500">
            <span>Cognition</span>
            <span>•</span>
            <span>Computation</span>
            <span>•</span>
            <span>Deep Learning</span>
            <span>•</span>
            <span>Future Computing</span>
          </div>
           {/* Responsive Minimal Arrow Links */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              
              {/* Link 1 */}
              <Link
                href="/insights"
                className="rounded-full border border-gray-400 dark:border-gray-700 px-8 py-2 group flex items-center gap-2 text-sm font-semibold text-black dark:text-gray-200 transition-colors duration-200 hover:text-gray-600 dark:hover:text-white"
              >
                <span>Explore Research</span>
                {/* SVG Arrow moves on hover due to 'group-hover:translate-x-1' */}
                <svg 
                  className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            
              {/* Link 2 */}
              <Link
                href="/opensource"
                className="rounded-full border border-gray-400 dark:border-gray-700 px-8 py-2 group flex items-center gap-2 text-sm font-semibold text-black dark:text-gray-200 transition-colors duration-200 hover:text-gray-600 dark:hover:text-white"
              >
                <span>Explore Open Source</span>
                <svg 
                  className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
        </div>
      </Container>
    </section>
  );
}
