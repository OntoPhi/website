import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface InsightPostProps {
  params: any; // Flexible typing to handle version changes
}

export async function generateMetadata({ params }: InsightPostProps): Promise<Metadata> {
  // Safe resolution wrapper supporting both standard objects and async promises
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  try {
    const filePath = path.join(process.cwd(), "content/insights", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      title: `${data.title} | Insights`,
      description: data.description || "Technical research notes from OntoPhi Labs.",
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

export default async function InsightPostPage({ params }: InsightPostProps) {
  // Safe resolution wrapper supporting both standard objects and async promises
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) notFound();

  const targetDir = path.join(process.cwd(), "content/insights", `${slug}.md`);

  // Log exactly what path Next.js is looking for in your local terminal console to diagnose typos
  console.log("==> Next.js File Lookup Target Directory:", targetDir);

  if (!fs.existsSync(targetDir)) {
    // FIX: Standard log structure to prevent template string parsing breaks
    console.log("==> CRITICAL: File missing at path:", targetDir);
    notFound();
  }

  const rawText = fs.readFileSync(targetDir, "utf8");
  const { data, content } = matter(rawText);

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-white min-h-screen">
        <Container>
          <article className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600 bg-gray-100 rounded-full">
                {data.category || "Research"}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {data.title}
              </h1>
              <div className="text-xs font-medium text-gray-500 pt-1">
                <span>By {data.author || "OntoPhi Team"}</span>
                <span className="mx-2">•</span>
                <span>{data.date}</span>
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed text-base space-y-6 pt-6 border-t border-gray-100 whitespace-pre-line prose max-w-none">
              {content}
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
