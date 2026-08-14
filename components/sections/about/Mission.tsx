import Container from "@/components/ui/Container";

export default function Mission() {
  return (
    <section className="bg-white py-20 sm:py-24 border-b border-gray-100">
      <Container>
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          
          {/* Section Indicator */}
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 leading-none">
            Mission
          </p>

          {/* Section Heading */}
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl leading-tight">
            Our Mission in Action
          </h2>

          {/* Core Manufactured Mission Statement */}
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            To bridge the fragmentation between computing systems and human cognition by 
            unifying advanced software engineering, mathematics, and neuroscience into 
            highly optimized, open intelligence platforms.
          </p>

          {/* The Operational Cadence (Manufactured from Tagline & Pillars) */}
          <div className="mt-14 grid gap-8 w-full text-left sm:grid-cols-3 sm:gap-6 border-t border-gray-100 pt-10">
            
            {/* Pillar 1 */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Step 01</span>
              <h3 className="mt-1.5 text-sm font-bold text-black uppercase tracking-wider">Understand</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                Decoding brain efficiency through computational and cognitive neuroscience.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Step 02</span>
              <h3 className="mt-1.5 text-sm font-bold text-black uppercase tracking-wider">Discover</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                Finding new, unisolated software architectures and distributed network systems.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Step 03</span>
              <h3 className="mt-1.5 text-sm font-bold text-black uppercase tracking-wider">Engineer</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                Building optimized compiler infrastructures and runtime edge intelligence platforms.
              </p>
            </div>

          </div>
          
        </div>
      </Container>
    </section>
  );
}


