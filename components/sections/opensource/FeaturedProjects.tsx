import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

import { projects } from "@/content/opensource";

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeader
          badge="Projects"
          title="Featured Projects"
          description="Open technologies driving intelligent computing."
        />

        <Grid>
          {projects.map((project) => (
            <FeatureCard
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
