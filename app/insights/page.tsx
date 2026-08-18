import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Insights & Technical Logs",
  description: "Read the latest engineering updates, technical analyses, and research notes from the OntoPhi computing infrastructure team.",
};

interface PostOverview {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  description: string;
}

export default function InsightsPage() {
  const postsDirectory = path.join(process.cwd(), "content/insights");
  let posts: PostOverview[] = [];

  // Safely scan and read local markdown files at server-render time
  if (fs.existsSync(postsDirectory)) {
    const filenames = fs.readdirSync(postsDirectory);

    posts = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
          slug,
          title: data.title || "Untitled Post",
          date: data.date || "Recent",
          author: data.author || "OntoPhi",
          category: data.category || "Research",
          description: data.description || "",
        };
      });

    // Sort posts chronologically (newest articles displayed first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-white min-h-screen">
        <Container>
          <SectionHeader
            badge="Insights"
            title="Technical Logs & Research"
            description="Deep dives into artificial intelligence infrastructure, compiler engineering, and systems software."
          />

          {posts.length === 0 ? (
            /* Lean fallback empty state for early startup phase */
            <div className="text-center py-12 max-w-md mx-auto border border-dashed border-gray-200 rounded-xl p-8 mt-12">
              <p className="text-gray-500 text-sm leading-relaxed">
                Our initial technical logs and systems research whitepapers are currently being compiled. Check back soon.
              </p>
            </div>
          ) : (
            /* High-density grid utilizing our custom startup hover interactions */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/insights/${post.slug}`}
                  className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-200 ease-in-out hover:border-gray-900 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Category Stamp & Timestamp metadata */}
                    <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      <span className="text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full text-[10px]">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    {/* Highly scannable title element */}
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight transition-colors group-hover:text-black">
                      {post.title}
                    </h3>

                    {/* Summary Excerpt */}
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* Contextual link direction flag */}
                  <div className="pt-4 flex items-center text-xs font-bold text-gray-900 uppercase tracking-wider gap-1 group-hover:underline">
                    Read Analysis <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}

