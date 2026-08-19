import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background Graphic Blur - Synced opacity bounds to stay subtle on pitch dark walls */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] sm:h-[720px] sm:w-[720px] -translate-x-1/2 rounded-full bg-gray-100 dark:bg-gray-900 opacity-60 dark:opacity-20 blur-3xl transition-colors duration-300" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Main Grid Layout: Stacks vertically on mobile, splits into 2-columns on lg screens */}
        <div className="grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">

          {/* LEFT COLUMN: Main Typography & Brand Core */}
          <div className="max-w-2xl flex flex-col order-2 lg:order-1">
            
            {/* Tagline: Bumped up slightly for crisp readability */}
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500 leading-none">
              UNDERSTAND • DISCOVER • ENGINEER
            </p>
            
            {/* Responsive Headline */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl xl:text-[52px] xl:leading-[1.15] transition-colors duration-300">
              Exploring the Foundations of Future Computing
            </h1>
            
            {/* Fluid Description Paragraph: Boosted to clean text-base */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300">
              OntoPhi explores the foundations of intelligence through computation, cognition, and engineering 
              —transforming curiosity into breakthrough technologies and impactful products.
            </p>

            {/* Responsive Minimal Arrow Links */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              
              {/* Link 1 */}
              <Link
                href="/research"
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
                href="/engineering"
                className="rounded-full border border-gray-400 dark:border-gray-700 px-8 py-2 group flex items-center gap-2 text-sm font-semibold text-black dark:text-gray-200 transition-colors duration-200 hover:text-gray-600 dark:hover:text-white"
              >
                <span>Explore Engineering</span>
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


            {/* Core Domains Grid: Upgraded column typography sizes */}
            <div className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white transition-colors duration-300">
                  Intelligent<br className="hidden sm:inline" /> Computing
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400 sm:text-sm transition-colors duration-300">
                  Optimization<br />
                  Runtime Systems<br />
                  Compiler Technologies<br />
                  Edge Computing<br />
                  Platforms
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white transition-colors duration-300">
                  Systems<br className="hidden sm:inline" /> Research
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400 sm:text-sm transition-colors duration-300">
                  Optimization &amp;<br />
                  Compiler Research<br />
                  Distributed Systems<br />
                  Performance Engineering
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white transition-colors duration-300">
                  Intelligence<br className="hidden sm:inline" /> Research
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400 sm:text-sm transition-colors duration-300">
                  Computational Neuroscience<br />
                  Cognitive Neuroscience<br />
                  Neuro engineering<br />
                  Cognitive Systems
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Fluid Interactive Brand Graphic Container */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 w-full max-w-[540px] mx-auto lg:max-w-none">
            {/* Responsive square frame container */}
            <div className="relative flex aspect-square w-full max-w-[420px] sm:max-w-[520px] items-center justify-center">

              {/* Central Abstract Ambient Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50 opacity-80 blur-3xl transition-colors duration-300" />

              {/* Decorative Concentric Rings */}
              <div className="absolute inset-0 rounded-full border border-gray-300 dark:border-gray-800 transition-colors duration-300" />
              <div className="absolute inset-[12.5%] rounded-full border border-gray-300 dark:border-gray-800 transition-colors duration-300" />
              <div className="absolute inset-[25%] rounded-full border border-gray-300 dark:border-gray-800 transition-colors duration-300" />

              {/* Central Adaptive Brand Identity Card */}
              <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sm:p-8 shadow-xl transition-colors duration-300">
                <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] relative">
                  <Image
                    src="/logo/website_print.png"
                    alt="OntoPhi"
                    fill
                    priority
                    className="object-contain dark:invert"
                  />
                </div>
              </div>

              {/* Floating Cards: Rebuilt with responsive font matching to prevent text clipping */}
              <div className="absolute left-[-4%] top-[10%] rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-2 sm:px-4 sm:py-2.5 shadow-md transition duration-300 hover:-translate-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Engineering</p>
                <p className="mt-1 text-xs font-bold text-black dark:text-white whitespace-nowrap">Advanced Computing</p>
              </div>

              <div className="absolute right-[-4%] top-[22%] rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-2 sm:px-4 sm:py-2.5 shadow-md transition duration-300 hover:-translate-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Research</p>
                <p className="mt-1 text-xs font-bold text-black dark:text-white whitespace-nowrap">Systems Research</p>
              </div>

              <div className="absolute bottom-[20%] left-[-2%] rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-2 sm:px-4 sm:py-2.5 shadow-md transition duration-300 hover:-translate-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Science</p>
                <p className="mt-1 text-xs font-bold text-black dark:text-white whitespace-nowrap">Intelligence Research</p>
              </div>

              <div className="absolute bottom-[8%] right-[2%] rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-2 sm:px-4 sm:py-2.5 shadow-md transition duration-300 hover:-translate-y-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Knowledge</p>
                <p className="mt-1 text-xs font-bold text-black dark:text-white whitespace-nowrap">Open Source &amp; Insights</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

