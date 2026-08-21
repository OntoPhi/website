import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";

import { platforms } from "@/content/engineering";

export default function Platforms() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-gray-950 sm:py-24">
      <Container>
        <SectionHeader
          badge="Platforms"
          title="Where Systems Run"
          description="We engineer for diverse computing environments, from embedded and edge devices to accelerated and cloud systems."
        />

        <div className="mt-12">
          <Grid>
            {platforms.map((platform) => (
              <FeatureCard
                key={platform.title}
                title={platform.title}
                description={platform.description}
              />
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}
