import Container from "@/components/ui/Container";

const roadmap = [
  {
    phase: "01",
    title: "Foundation",
    description:
      "Establish research foundations across cognition, computation, machine learning, and systems.",
  },
  {
    phase: "02",
    title: "Exploration",
    description:
      "Develop hypotheses, models, prototypes, and experiments to investigate new ideas.",
  },
  {
    phase: "03",
    title: "Discovery",
    description:
      "Translate findings into new methods, algorithms, architectures, and computational approaches.",
  },
  {
    phase: "04",
    title: "Engineering",
    description:
      "Transform validated research into software, frameworks, tools, and practical technologies.",
  },
  {
    phase: "05",
    title: "Open Ecosystem",
    description:
      "Share knowledge through open source, publications, developer resources, and collaboration.",
  },
  {
    phase: "06",
    title: "New Frontiers",
    description:
      "Pursue emerging directions where cognition, computation, and engineering converge.",
  },
];

export default function ResearchRoadmap() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-gray-950 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Research Roadmap
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            From Questions to New Frontiers
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            Research evolves continuously—from fundamental questions and
            discovery to engineering, collaboration, and new directions.
          </p>

        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((item) => (
            <div
              key={item.phase}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white"
            >
              <span className="text-sm font-semibold tracking-widest text-gray-400 dark:text-gray-600">
                {item.phase}
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
