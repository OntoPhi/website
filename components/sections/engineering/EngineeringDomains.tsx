import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";

import { engineeringDomains } from "@/content/engineering";

export default function EngineeringDomains() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-gray-950 sm:py-16">
      <Container>
        <SectionHeader
          badge="Engineering Domains"
          title="Where We Build"
          description="We build across the computing stack, from low-level systems software and acceleration to AI infrastructure and edge platforms."
        />

        <div className="mt-12">
          <Grid>
            {engineeringDomains.map((domain) => (
              <FeatureCard
                key={domain.title}
                title={domain.title}
                description={domain.description}
              />
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}
