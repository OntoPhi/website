import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";

import { engineeringDomains } from "@/content/engineering";

export default function EngineeringDomains() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          badge="Domains"
          title="Engineering Domains"
          description="Our engineering capabilities span the complete intelligent computing stack."
        />

        <Grid>
          {engineeringDomains.map((domain) => (
            <FeatureCard
              key={domain.title}
              title={domain.title}
              description={domain.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
