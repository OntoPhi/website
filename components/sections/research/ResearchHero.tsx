import CenteredHero from "@/components/ui/CenteredHero";

export default function ResearchHero() {
  return (
    <CenteredHero
      badge="Research"
      title="Exploring the Foundations of Computation and Cognition"
      description="OntoPhi explores fundamental questions across cognition, computation, and emerging computing systems—connecting scientific understanding with new possibilities in engineering."
      topics={[
        "Computational Neuroscience",
        "Cognitive Neuroscience",
        "Neuro engineering ",
        "Cognitive Systems ",
      ]}
      primaryAction={{
        label: "Explore Research",
        href: "/insights",
      }}
      secondaryAction={{
        label: "Explore Open Source",
        href: "/opensource",
      }}
    />
  );
}
