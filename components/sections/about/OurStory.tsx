import Container from "@/components/ui/Container";

export default function OurStory() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-4xl">

          {/* SECTION 1: The Narrative History */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            <p>
              Computing has transformed nearly every aspect of modern life.
              Yet today's intelligent systems remain fragmented across
              software, hardware, artificial intelligence, and human cognition.
            </p>
            <p>
              OntoPhi was founded with a long-term vision:
              to bridge these disciplines through rigorous research,
              engineering excellence,
              and open technologies.
            </p>
            <p>
              We believe the future of computing lies not in isolated
              innovations, but in integrating knowledge across systems,
              neuroscience, optimization,
              and intelligent engineering.
            </p>
          </div>

          {/* SECTION 2: Name Origin & Philosophical Architecture */}
          <div className="mt-20 grid gap-12 border-t border-gray-200 pt-16 lg:grid-cols-2 lg:gap-16">
            
            {/* Left Column: Theoretical Pillars */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                The Core of OntoPhi
              </h3>
              
              <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                <p className="font-bold text-black text-lg">
                  OntoPhi combines Ontology and Phi.
                </p>
                <p>
                  <strong className="text-gray-900 font-semibold">Ontology</strong> represents structured knowledge, existence, and absolute understanding.
                </p>
                <p>
                  <strong className="text-gray-900 font-semibold">Phi (φ)</strong> represents harmony, proportion, and the mathematical foundations of intelligent systems.
                </p>

                {/* Technical Domain Vector Fields */}
                <div className="text-sm border-l-2 border-gray-200 pl-4 text-gray-500 space-y-1">
                  <p className="font-semibold text-gray-700">Deep-Tech R&D Focus:</p>
                  <p>
                    AI Optimization &bull; Edge Computing &bull; Compiler Technologies &bull; 
                    Computational Neuroscience &bull; Neuro Engineering &bull; Intelligent Systems
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100 mt-6">
                  <p className="italic font-medium text-gray-900 text-base leading-relaxed">
                    “OntoPhi transforms structured knowledge into intelligent systems through mathematics, research, and continuous creation.”
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Golden-Ratio Geometric Blueprint */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col justify-center shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Logo Construction &bull; Golden-Ratio
              </h4>
              
              <ul className="mt-6 space-y-5 text-sm sm:text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <p>
                    <span className="font-bold text-black">The Circle</span> represents the wholeness of knowledge.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <p>
                    <span className="font-bold text-black">The Vertical Axis</span> represents absolute mathematical order.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <p>
                    <span className="font-bold text-black">The Three Nodes</span> represent the continuous expansion of intelligence.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <p>
                    <span className="font-bold text-black">The Spiral</span> represents creation, emergence, and continuous innovation.
                  </p>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

