import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { technologies } from "@/content/technologies";

export default function TechnologyStack() {
  return (
    <section className="border-t border-gray-100 bg-white py-20 dark:border-gray-900 dark:bg-gray-950 sm:py-24">
      <Container>
        <SectionHeader
          badge="Technology"
          title="Engineering Foundations"
          description="A layered technology ecosystem spanning cognition, AI systems, compilers, runtimes, and heterogeneous computing."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((category) => (
            <article
              key={category.layer}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-900 hover:bg-white dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white dark:hover:bg-gray-950"
            >
              <span className="inline-flex rounded-md border border-gray-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400">
                {category.badge}
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
                {category.layer}
              </h3>

              <ul className="mt-5 space-y-2.5">
                {category.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-start gap-2.5 text-sm leading-6 text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
