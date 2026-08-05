import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

import { topics } from "@/content/insights";

export default function Topics() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeader
          badge="Topics"
          title="Areas of Interest"
          description="Topics that shape our research and engineering."
        />

        <Grid>
          {topics.map((topic) => (
            <FeatureCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
