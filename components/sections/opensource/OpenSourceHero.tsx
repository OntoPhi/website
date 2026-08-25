import CenteredHero from "@/components/ui/CenteredHero";

export default function CareersHero() {
  return (
    <CenteredHero
      badge="Open Source"
      title="Open Paradigms for Intelligent Computing"
      description="We believe innovation grows through transparency, collaboration, and community-driven engineering."
      topics={[
        "Research",
        "Engineering",
        "Systems",
      ]}
     primaryAction={{
        label: "Explore Research",
        href: "/insights",
      }}
    />
  );
}
