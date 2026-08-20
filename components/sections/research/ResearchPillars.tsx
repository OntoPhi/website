import Container from "@/components/ui/Container";

const pillars = [
  {
    title: "Cognition & Brain Sciences",
    description:
      "Exploring cognition, computational neuroscience, neuro engineering, perception, learning, and biological mechanisms to understand how complex systems process and adapt to information.",
  },
  {
    title: "Computational Systems",
    description:
      "Investigating operating systems, kernels, compilers, runtimes, device drivers, architectures, and high-performance computing to understand and improve the foundations of computation.",
  },
  {
    title: "Deep Learning",
    description:
      "Researching learning algorithms, deep learning, generative models, representation learning, optimization, and efficient learning systems.",
  },
  {
    title: "Emerging Computing",
    description:
      "Exploring new approaches across hardware, software, distributed systems, robotics, computer vision, and computing infrastructure to discover possibilities for future systems.",
  },
];

export default function ResearchPillars() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-gray-950 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Research Areas
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Where We Explore
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            Four interconnected areas guide our exploration across biological,
            computational, and emerging systems.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-white"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {pillar.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
