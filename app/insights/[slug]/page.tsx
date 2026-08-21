import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface InsightFrontmatter {
  title?: string;
  description?: string;
  category?: string;
  date?: string;
}

function getInsight(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "insights",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const frontmatter = data as InsightFrontmatter;

    return {
      title:
        typeof frontmatter.title === "string" &&
        frontmatter.title.trim()
          ? frontmatter.title.trim()
          : slug,

      description:
        typeof frontmatter.description === "string"
          ? frontmatter.description.trim()
          : "",

      category:
        typeof frontmatter.category === "string" &&
        frontmatter.category.trim()
          ? frontmatter.category.trim()
          : "Research",

      date:
        typeof frontmatter.date === "string"
          ? frontmatter.date.trim()
          : "",

      content,
    };
  } catch (error) {
    console.error(`Failed to load insight: ${slug}`, error);
    return null;
  }
}

export async function generateStaticParams() {
  const insightsDir = path.join(
    process.cwd(),
    "content",
    "insights"
  );

  if (!fs.existsSync(insightsDir)) {
    return [];
  }

  return fs
    .readdirSync(insightsDir)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="min-h-screen bg-white pt-24 pb-16 transition-colors duration-300 dark:bg-gray-950">
        <article className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
          {/* Article Header */}
          <header className="text-center">
            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-400">
              {insight.category}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 transition-colors duration-300 sm:text-4xl md:text-5xl dark:text-white">
              {insight.title}
            </h1>

            {insight.description && (
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 transition-colors duration-300 sm:text-lg dark:text-gray-400">
                {insight.description}
              </p>
            )}

            {insight.date && (
              <div className="mt-5 text-xs font-medium text-gray-500 dark:text-gray-500">
                {insight.date}
              </div>
            )}
          </header>

          {/* Markdown Content */}
          <div className="mt-10 border-t border-gray-100 pt-8 transition-colors duration-300 dark:border-gray-800">
            <div className="prose max-w-none whitespace-pre-line text-base leading-8 text-gray-700 transition-colors duration-300 dark:prose-invert dark:text-gray-300">
              {insight.content}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
