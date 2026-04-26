import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/siteConfig";

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-yellow-400/70 text-xs font-bold tracking-widest uppercase mb-2">Blog & Guides</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Learn & <span className="gradient-text">Win More</span>
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors group">
            All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post, idx) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article
                className="relative rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Color accent top bar */}
                <div className={`h-1 w-full ${["bg-gradient-to-r from-yellow-400 to-orange-500","bg-gradient-to-r from-blue-500 to-indigo-500","bg-gradient-to-r from-green-500 to-emerald-500","bg-gradient-to-r from-purple-500 to-violet-500"][idx % 4]}`} />

                <div className="p-5">
                  {/* Category */}
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                    {post.category}
                  </span>

                  <h3 className="font-black text-white mt-3 mb-2 text-sm leading-snug line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-[10px] text-white/35 pt-3 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-PK", { month:"short", day:"numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Read more arrow */}
                <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400/15 flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
