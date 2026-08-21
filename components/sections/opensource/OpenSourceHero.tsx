import CenteredHero from "@/components/ui/CenteredHero";

export default function CareersHero() {
  return (
    <CenteredHero
      badge="Careers"
      title="Build the Future With Us"
      description="Join OntoPhi to solve challenging problems in intelligent computing through research and engineering."
      topics={[
        "Research",
        "Engineering",
        "Systems",
        "Future Computing",
      ]}
      primaryAction={{
        label: "Get in Touch",
        href: "/contact",
      }}
    />
  );
}
