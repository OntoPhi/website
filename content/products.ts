import { ProductCategory, RoadmapItem } from "@/types/products";

export const productCategories: ProductCategory[] = [
  {
    title: "AI Compiler",
    description:
      "Compiler technologies for efficient AI model optimization and deployment.",
  },
  {
    title: "AI Runtime",
    description:
      "High-performance runtime systems for intelligent computing workloads.",
  },
  {
    title: "AI Infrastructure",
    description:
      "Scalable infrastructure for model serving, deployment, and orchestration.",
  },
  {
    title: "Research Platform",
    description:
      "Tools and platforms supporting scientific research and experimentation.",
  },
];

export const roadmap: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Research Foundation",
    description: "Core research and technology validation.",
  },
  {
    phase: "Phase 2",
    title: "Engineering Platform",
    description: "Build reusable engineering components and infrastructure.",
  },
  {
    phase: "Phase 3",
    title: "Product Ecosystem",
    description: "Launch integrated products for intelligent computing.",
  },
];
