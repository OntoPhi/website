import Container from "@/components/ui/Container";

export default function ResearchPhilosophy() {
  return (
    <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-900/40 sm:py-24">
      <Container>
        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Research Philosophy
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Understand First. Engineer Better.
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">

            <p>
              We believe meaningful engineering begins with understanding.
              Research allows us to question assumptions, uncover underlying
              principles, and explore how complex systems work.
            </p>

            <p>
              OntoPhi connects computation, cognition, and systems engineering
              to study problems from multiple perspectives—linking fundamental
              understanding with practical possibilities.
            </p>

            <p>
              Our research is driven by curiosity and grounded in
              experimentation. We pursue ideas that expand knowledge, reveal
              new approaches, and create foundations for useful technologies.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}
