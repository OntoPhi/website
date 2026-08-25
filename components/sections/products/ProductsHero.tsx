import CenteredHero from "@/components/ui/CenteredHero";

export default function ProductsHero() {
  return (
    <CenteredHero
      badge="Products"
      title="Innovative Solutions for Intelligent Computing"
      description="Explore our cutting-edge products designed to push the boundaries of what's possible in intelligent computing."
    
      topics={[
        "Optimization",
        "Runtime Systems",
        "Compiler Technologies",
        "Edge Computing",
	"Future Computing",
      ]}
      primaryAction={{
        label: "Explore Research",
        href: "/insights",
      }}
      secondaryAction={{
        label: "Explore Engineering",
        href: "/engineering",
      }}
    />
  );
}
