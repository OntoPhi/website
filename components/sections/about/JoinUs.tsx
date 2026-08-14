import Link from "next/link";
import Container from "@/components/ui/Container";

export default function JoinUs() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Join the Journey
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Advancing Intelligent Computing Together
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            We believe the future of computing will emerge from the
            convergence of artificial intelligence, systems software,
            neuroscience, and engineering. Join us in building that future.
          </p>

	    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              {/* Link 1 */}
              <Link
                href="/research"
                className="rounded-full border border-gray-400 px-8 py-2 group flex items-center gap-2 text-sm font-semibold !text-black transition-colors duration-200 hover:text-gray-600"
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
                href="/contact"
                className="rounded-full border border-gray-400 px-8 py-2 group flex items-center gap-2 text-sm font-semibold !text-black transition-colors duration-200 hover:text-gray-600"
              >
                <span>Contact Us</span>
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
