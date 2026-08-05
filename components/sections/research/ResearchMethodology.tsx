import Container from "@/components/ui/Container";

const methodology = [
  {
    step: "01",
    title: "Observe",
    description:
      "Study natural intelligence, computing systems, and real-world engineering challenges.",
  },
  {
    step: "02",
    title: "Understand",
    description:
      "Develop a scientific understanding through research, experimentation, and analysis.",
  },
  {
    step: "03",
    title: "Model",
    description:
      "Create mathematical, computational, and engineering models that capture the underlying principles.",
  },
  {
    step: "04",
    title: "Engineer",
    description:
      "Transform research into practical software, systems, tools, and intelligent platforms.",
  },
  {
    step: "05",
    title: "Validate",
    description:
      "Evaluate solutions through experiments, benchmarks, and real-world testing.",
  },
  {
    step: "06",
    title: "Optimize",
    description:
      "Improve performance, efficiency, scalability, and reliability across the computing stack.",
  },
  {
    step: "07",
    title: "Open Innovation",
    description:
      "Share knowledge through publications, open-source projects, and collaboration.",
  },
  {
    step: "08",
    title: "Real-World Impact",
    description:
      "Apply research to solve meaningful engineering and scientific problems.",
  },
];

export default function ResearchMethodology() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Research Methodology
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From Scientific Discovery to Engineering Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every research initiative follows a structured methodology that
            connects scientific understanding with practical engineering.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-5xl space-y-8">
          {methodology.map((item) => (
            <div
              key={item.step}
              className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 transition hover:shadow-lg md:flex-row"
            >
              <div className="w-20 shrink-0">
                <span className="text-3xl font-bold">{item.step}</span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-8 text-gray-600">
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
