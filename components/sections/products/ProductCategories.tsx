import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

import { productCategories } from "@/content/products";

export default function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeader
          badge="Portfolio"
          title="Product Portfolio"
          description="Building the next generation of intelligent computing platforms."
        />

        <Grid>
          {productCategories.map((product) => (
            <FeatureCard
              key={product.title}
              title={product.title}
              description={product.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
