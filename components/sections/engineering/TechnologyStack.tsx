import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { technologies } from "@/content/technologies"; // FIXED: Correctly importing your renamed data module

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-900 transition-colors duration-300">
      <Container>
        <SectionHeader
          badge="Ecosystem Matrix"
          title="Our Technological Blueprint"
          description="The specialized systems, compiler paths, and neuro scientific tools engineered across our computational pipelines."
        />

        {/* FIXED LOOP: Changed from techStack.map to technologies.map */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category) => (
            <div 
              key={category.layer}
              className="p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-xl shadow-sm hover:border-gray-900 dark:hover:border-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-950 rounded border border-gray-300 dark:border-gray-800 inline-block mb-3 transition-colors duration-300">
                  {category.badge}
                </span>
                
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-snug transition-colors duration-300">
                  {category.layer}
                </h4>
                
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li 
                      key={tool}
                      className="text-xs text-gray-600 dark:text-gray-400 font-medium flex items-center gap-2 transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

