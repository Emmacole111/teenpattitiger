import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

const games = [
  {
    slug: "teen-patti",
    name: "Teen Patti Classic",
    desc: "3-card showdown against real players. Bluff, raise, and win big pots.",
    icon: "🃏",
    players: "4.2K playing",
    tag: "Most Popular",
    tagColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    bg: "from-[#1a0e00] to-[#0d0800]",
    accent: "rgba(245,197,24,0.15)",
    border: "rgba(245,197,24,0.25)",
    iconBg: "from-yellow-500 to-orange-600",
  },
  {
    slug: "dragon-vs-tiger",
    name: "Dragon vs Tiger",
    desc: "30-second rounds. Pick Dragon or Tiger. Double your bet instantly.",
    icon: "🐉",
    players: "6.1K playing",
    tag: "Most Played",
    tagColor: "text-red-400 bg-red-400/10 border-red-400/20",
    bg: "from-[#1a0008] to-[#0d0005]",
    accent: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.22)",
    iconBg: "from-red-500 to-pink-600",
  },
  {
    slug: "slots",
    name: "Slots & Aviator",
    desc: "Crash games, jackpot slots, and Aviator — fast wins at every spin.",
    icon: "🎰",
    players: "3.8K playing",
    tag: "New Games",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    bg: "from-[#0a001a] to-[#05000d]",
    accent: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.22)",
    iconBg: "from-purple-500 to-violet-600",
  },
];

export default function GamesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-yellow-400/70 text-xs font-bold tracking-widest uppercase mb-2">Top Games</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Play & <span className="gradient-text">Win Now</span>
            </h2>
          </div>
          <Link href="/games" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors group">
            All Games <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {games.map((game) => (
            <Link key={game.slug} href={`/games/${game.slug}`} className="group">
              <div
                className="relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background:`linear-gradient(135deg,${game.accent},rgba(255,255,255,0.02))`, border:`1px solid ${game.border}` }}
              >
                {/* Top banner */}
                <div className={`relative h-40 bg-gradient-to-br ${game.bg} flex items-center justify-center overflow-hidden`}>
                  {/* Subtle grid */}
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  {/* Glow orb */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-32 h-32 rounded-full opacity-30 blur-3xl" style={{ background: game.accent.replace("0.15","0.6").replace("0.12","0.5") }} />
                  </div>
                  {/* Icon */}
                  <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${game.iconBg} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{game.icon}</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${game.tagColor}`}>{game.tag}</span>
                    <span className="flex items-center gap-1 text-[10px] text-white/40 font-medium">
                      <Users className="w-3 h-3" />{game.players}
                    </span>
                  </div>
                  <h3 className="font-black text-white mb-1.5 group-hover:text-yellow-400 transition-colors">{game.name}</h3>
                  <p className="text-xs text-white/55 leading-relaxed mb-4">{game.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-yellow-400 group-hover:gap-2.5 transition-all">
                    Play Now <ArrowRight className="w-3.5 h-3.5" />
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
