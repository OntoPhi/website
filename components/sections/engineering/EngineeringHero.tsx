import CenteredHero from "@/components/ui/CenteredHero";

export default function EngineeringHero() {
  return (
    <CenteredHero
      badge="Engineering"
      title="Engineering Future Computing"
      description="OntoPhi transforms research and ideas into efficient software, systems, and technologies across compilers, runtimes, AI infrastructure, embedded computing, and high-performance systems."
      topics={[
        "Systems Software",
        "Compilers & Runtimes",
        "AI Infrastructure",
        "Edge Computing",
      ]}
      primaryAction={{
        label: "Explore Research",
        href: "/research",
      }}
      secondaryAction={{
        label: "Explore Open Engineering",
        href: "/opensource",
      }}
    />
  );
}
