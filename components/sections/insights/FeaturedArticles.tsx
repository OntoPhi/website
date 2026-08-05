import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

import { articles } from "@/content/insights";

export default function FeaturedArticles() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="Articles"
          title="Featured Articles"
          description="Perspectives on research, engineering, and intelligent computing."
        />

        <Grid>
          {articles.map((article) => (
            <FeatureCard
              key={article.title}
              title={article.title}
              description={article.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
