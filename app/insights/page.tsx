import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Insight {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

function getInsights(): Insight[] {
  const insightsDir = path.join(process.cwd(), "content", "insights");

  try {
    if (!fs.existsSync(insightsDir)) {
      return [];
    }

    return fs
      .readdirSync(insightsDir)
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(insightsDir, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
          slug,
          title:
            typeof data.title === "string" && data.title.trim()
              ? data.title.trim()
              : slug,
          description:
            typeof data.description === "string"
              ? data.description.trim()
              : "",
          category:
            typeof data.category === "string" && data.category.trim()
              ? data.category.trim()
              : "Research",
          date:
            typeof data.date === "string" && data.date.trim()
              ? data.date.trim()
              : "",
        };
      })
      .sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;

        return (
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
        );
      });
  } catch (error) {
    console.error("Failed to load insights:", error);
    return [];
  }
}

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main className="min-h-screen bg-white pt-24 pb-16 transition-colors duration-300 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
              Insights
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 transition-colors duration-300 sm:text-5xl md:text-6xl dark:text-white">
              Research &amp; Engineering Insights
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 transition-colors duration-300 sm:text-lg dark:text-gray-400">
              Exploring intelligent computing, systems engineering,
              artificial intelligence, and the principles shaping
              future computing.
            </p>
          </header>

          {/* Empty state */}
          {insights.length === 0 ? (
            <div className="mx-auto mt-14 max-w-md rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900/50">
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Our initial technical logs and systems research
                whitepapers are currently being compiled. Check back soon.
              </p>
            </div>
          ) : (
            /* Insight cards */
            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
              {insights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group flex min-h-[250px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-500"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        {insight.category}
                      </span>

                      {insight.date && (
                        <span className="shrink-0">
                          {insight.date}
                        </span>
                      )}
                    </div>

                    <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-black dark:text-white dark:group-hover:text-gray-200">
                      {insight.title}
                    </h2>

                    {insight.description && (
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500 transition-colors duration-300 dark:text-gray-400">
                        {insight.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors duration-300 dark:text-gray-200">
                    Read Insight
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
