import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navCards = [
  {
    href: "/games",
    emoji: "🎮",
    title: "Games",
    desc: "Teen Patti, Dragon Tiger, Aviator, Slots & more",
    tag: "100+ Games",
    accent: "rgba(245,197,24,0.12)",
    border: "rgba(245,197,24,0.25)",
    glow: "rgba(245,197,24,0.08)",
    tagColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  },
  {
    href: "/bonuses",
    emoji: "🎁",
    title: "Bonuses",
    desc: "Welcome ₨5K, daily chips, referral ₨1K/refer",
    tag: "Big Offers",
    accent: "rgba(74,222,128,0.10)",
    border: "rgba(74,222,128,0.22)",
    glow: "rgba(74,222,128,0.06)",
    tagColor: "text-green-400 bg-green-400/10 border-green-400/20",
  },
  {
    href: "/blog",
    emoji: "📖",
    title: "Guides & Tips",
    desc: "Expert strategies, earning guide, install help",
    tag: "4 Articles",
    accent: "rgba(99,102,241,0.10)",
    border: "rgba(99,102,241,0.22)",
    glow: "rgba(99,102,241,0.06)",
    tagColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  },
  {
    href: "/teen-patti-tiger-for-pc",
    emoji: "💻",
    title: "PC Version",
    desc: "Play on Windows & Mac via BlueStacks",
    tag: "BlueStacks",
    accent: "rgba(168,85,247,0.10)",
    border: "rgba(168,85,247,0.22)",
    glow: "rgba(168,85,247,0.06)",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  },
  {
    href: "/old-versions",
    emoji: "📦",
    title: "Old Versions",
    desc: "Download v1.5 and v2.0 APK files",
    tag: "v1 & v2",
    accent: "rgba(236,72,153,0.10)",
    border: "rgba(236,72,153,0.22)",
    glow: "rgba(236,72,153,0.06)",
    tagColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  },
  {
    href: "/teen-patti-tiger-apk-download",
    emoji: "⬇️",
    title: "Download APK",
    desc: "Latest v1.4 — free, safe, 44MB",
    tag: "v1.4 Latest",
    accent: "rgba(245,197,24,0.15)",
    border: "rgba(245,197,24,0.35)",
    glow: "rgba(245,197,24,0.10)",
    tagColor: "text-yellow-400 bg-yellow-400/15 border-yellow-400/30",
    featured: true,
  },
];

export default function QuickNavGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-yellow-400/70 text-xs font-bold tracking-widest uppercase mb-3">Everything in One Place</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Explore <span className="gradient-text">Teen Patti Tiger</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Games, bonuses, guides, and downloads — all you need to start winning.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {navCards.map((card) => (
            <Link key={card.href} href={card.href} className="group">
              <div
                className={`relative rounded-2xl p-5 sm:p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${card.featured ? "ring-1 ring-yellow-400/30" : ""}`}
                style={{
                  background: `linear-gradient(135deg, ${card.accent}, rgba(255,255,255,0.02))`,
                  border: `1px solid ${card.border}`,
                  boxShadow: `0 4px 24px ${card.glow}`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${card.glow.replace("0.06","0.15")}, transparent 70%)` }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl sm:text-4xl filter drop-shadow-lg">{card.emoji}</span>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${card.tagColor}`}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="font-black text-white mb-1.5 text-sm sm:text-base group-hover:text-yellow-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4">{card.desc}</p>
                  <div className="flex items-center gap-1 text-xs font-bold text-white/40 group-hover:text-yellow-400 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
