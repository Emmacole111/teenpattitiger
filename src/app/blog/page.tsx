import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Teen Patti Tiger Blog – Guides, Tips & Tricks",
  description:
    "Read expert guides, tips, and strategies for Teen Patti Tiger. Learn how to play, win more, and earn real money with our comprehensive blog for Pakistan players.",
  path: "/blog",
  keywords: [
    "Teen Patti Tiger blog",
    "Teen Patti guide Pakistan",
    "Teen Patti tips tricks",
    "how to play Teen Patti Tiger",
  ],
});

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

        <div className="mt-8 mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Blog & <span className="gradient-text">Guides</span>
          </h1>
          <p className="text-white/60 max-w-xl">
            Expert guides, winning strategies, and earning tips for Teen Patti Tiger players in
            Pakistan.
          </p>
        </div>

        {/* Category labels (display only — avoids inert buttons for a11y) */}
        <div className="flex flex-wrap gap-2 mb-8" aria-label="Blog topics">
          {["All", "Guide", "Strategy", "Earning", "Tutorial"].map((cat) => (
            <span
              key={cat}
              className={`inline-flex px-4 py-2 rounded-xl text-sm font-medium ${
                cat === "All"
                  ? "bg-yellow-400 text-black"
                  : "glass-card border border-white/10 text-white/70"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-16 glass-card rounded-2xl border border-white/10 p-6 text-center">
          <p className="text-white/60 mb-4">Ready to start playing after reading?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm glow-btn"
            >
              Download APK
            </a>
            <a
              href="/bonuses"
              className="px-5 py-2.5 rounded-xl glass-card border border-white/20 text-white font-bold text-sm hover:border-yellow-400/30 transition-all"
            >
              Claim Bonuses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
