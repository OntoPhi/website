import Container from "@/components/ui/Container";

const methodology = [
  {
    step: "01",
    title: "Observe",
    description:
      "Study natural phenomena, computational systems, cognition, and real-world engineering challenges.",
  },
  {
    step: "02",
    title: "Question",
    description:
      "Challenge assumptions, identify fundamental problems, and ask questions that reveal new possibilities.",
  },
  {
    step: "03",
    title: "Understand",
    description:
      "Build deeper understanding through research, analysis, experimentation, and interdisciplinary inquiry.",
  },
  {
    step: "04",
    title: "Model",
    description:
      "Translate underlying principles into mathematical, computational, and system-level models that can be tested.",
  },
  {
    step: "05",
    title: "Experiment",
    description:
      "Test hypotheses through prototypes, simulations, experiments, benchmarks, and empirical evaluation.",
  },
  {
    step: "06",
    title: "Engineer",
    description:
      "Transform validated ideas into software, algorithms, systems, tools, and practical technologies.",
  },
  {
    step: "07",
    title: "Validate",
    description:
      "Measure performance, efficiency, scalability, reliability, and real-world usefulness.",
  },
  {
    step: "08",
    title: "Impact",
    description:
      "Translate outcomes into useful technologies, open knowledge, and lasting scientific progress.",
  },
];

export default function ResearchMethodology() {
  return (
    <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-900/40 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Research Methodology
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            From Curiosity to Impact
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            We move from observation and fundamental questions to scientific
            understanding, experimentation, engineering, and measurable impact.
          </p>

        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-4">
          {methodology.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-black hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-white sm:p-7 md:flex-row"
            >
              <div className="w-16 shrink-0">
                <span className="text-2xl font-bold tracking-tight text-gray-300 dark:text-gray-700">
                  {item.step}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
