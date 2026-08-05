import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";

import { platforms } from "@/content/engineering";

export default function Platforms() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeader
          badge="Platforms"
          title="Target Platforms"
          description="Engineering solutions across edge, embedded, cloud, and accelerated computing."
        />

        <Grid>
          {platforms.map((platform) => (
            <FeatureCard
              key={platform.title}
              title={platform.title}
              description={platform.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
