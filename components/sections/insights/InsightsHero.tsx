import CenteredHero from "@/components/ui/CenteredHero";

export default function InsightsHero() {
  return (
    <CenteredHero
      badge="Insights"
      title="Ideas, Research & Engineering"
      description="Articles, technical insights, and research exploring the future of intelligent computing."
      topics={[
        "Research",
        "Engineering",
        "Intelligent Computing",
        "Future Technologies",
      ]}
    />
  );
}
