import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Zap, Trophy, Star } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "All Games on Teen Patti Tiger – Play & Win in Pakistan",
  description:
    "Explore all games on Teen Patti Tiger APK — Teen Patti Classic, Dragon vs Tiger, Aviator, Slots, Rummy & more. Real money card games for Pakistani players.",
  path: "/games",
  keywords: [
    "teen patti tiger games",
    "teen patti online pakistan",
    "dragon vs tiger pakistan",
    "3 patti tiger games",
    "slots game apk",
    "aviator game pakistan",
  ],
});

const allGames = [
  {
    href: "/games/teen-patti",
    icon: "🃏",
    name: "Teen Patti Classic",
    label: "Most Popular",
    labelColor: "bg-yellow-400/15 text-yellow-400 border-yellow-400/25",
    players: "45,000+",
    desc: "The original 3-card game played across South Asia. Bet blind or seen, bluff your way to the pot, and compete against real players from Pakistan in real time.",
    color: "from-yellow-500/15 to-orange-600/10",
    border: "border-yellow-500/20",
    accent: "text-yellow-400",
  },
  {
    href: "/games/dragon-vs-tiger",
    icon: "🐉",
    name: "Dragon vs Tiger",
    label: "Fastest Game",
    labelColor: "bg-red-400/15 text-red-400 border-red-400/25",
    players: "32,000+",
    desc: "Pick Dragon or Tiger — one card each, highest wins. Rounds finish in under 30 seconds. Simple rules, instant payouts, and one of the lowest house edges on the platform.",
    color: "from-red-500/15 to-pink-600/10",
    border: "border-red-500/20",
    accent: "text-red-400",
  },
  {
    href: "/games/slots",
    icon: "🎰",
    name: "Slots",
    label: "Big Jackpots",
    labelColor: "bg-purple-400/15 text-purple-400 border-purple-400/25",
    players: "18,000+",
    desc: "20+ slot themes with 3-reel, 5-reel, and progressive jackpot machines. Daily free spins, Wild symbols, and Scatter bonuses with potential multipliers up to 500x.",
    color: "from-purple-500/15 to-blue-600/10",
    border: "border-purple-500/20",
    accent: "text-purple-400",
  },
  {
    href: "/games",
    icon: "✈️",
    name: "Aviator",
    label: "High Stakes",
    labelColor: "bg-blue-400/15 text-blue-400 border-blue-400/25",
    players: "27,000+",
    desc: "Watch the multiplier climb and cash out before the plane flies away. The longer you wait, the bigger the reward — but wait too long and you lose it all. Pure tension.",
    color: "from-blue-500/15 to-cyan-600/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    href: "/games",
    icon: "🎴",
    name: "Andar Bahar",
    label: "Fan Favourite",
    labelColor: "bg-green-400/15 text-green-400 border-green-400/25",
    players: "14,000+",
    desc: "A pure prediction game rooted in Indian card culture. One card is revealed face-up and you bet whether the matching card appears on the Andar (inside) or Bahar (outside) pile.",
    color: "from-green-500/15 to-emerald-600/10",
    border: "border-green-500/20",
    accent: "text-green-400",
  },
  {
    href: "/games",
    icon: "🀄",
    name: "Rummy",
    label: "Skill Game",
    labelColor: "bg-orange-400/15 text-orange-400 border-orange-400/25",
    players: "9,000+",
    desc: "Form sets and sequences with 13 cards before your opponents do. The only skill-dominant game on Teen Patti Tiger — strategy and memory beat luck over the long run.",
    color: "from-orange-500/15 to-amber-600/10",
    border: "border-orange-500/20",
    accent: "text-orange-400",
  },
];

const stats = [
  { icon: Users, label: "Active Players", value: "1.2M+" },
  { icon: Trophy, label: "Games Available", value: "100+" },
  { icon: Zap, label: "Avg Round Time", value: "< 60s" },
  { icon: Star, label: "Player Rating", value: "4.8/5" },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Games", href: "/games" }]} />

        {/* Header */}
        <div className="mt-8 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-4">
            100+ Games Available
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            All Games on{" "}
            <span className="gradient-text">Teen Patti Tiger</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            From classic <strong className="text-white">3 Patti Tiger</strong> card tables to fast-paced
            Dragon vs Tiger rounds and progressive slot jackpots — every game on Teen Patti Tiger is
            played against real opponents, with real payouts via JazzCash and EasyPaisa.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden mb-10 border border-white/10">
          <Image
            src="/images/teen-patti-tiger-games.png"
            alt="Teen Patti Tiger Games – Teen Patti Classic, Dragon vs Tiger, Slots & More in Pakistan"
            width={800}
            height={420}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass-card rounded-2xl border border-white/10 p-4 text-center">
              <Icon className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{value}</div>
              <div className="text-xs text-white/50 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Games grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {allGames.map((game) => (
            <Link key={game.name} href={game.href} className="group">
              <div className={`glass-card rounded-3xl overflow-hidden border transition-all hover:-translate-y-2 bg-gradient-to-br ${game.color} ${game.border}`}>
                {/* Top bar */}
                <div className="px-5 pt-5 pb-4 flex items-start justify-between">
                  <span className="text-5xl">{game.icon}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${game.labelColor}`}>
                    {game.label}
                  </span>
                </div>
                <div className="px-5 pb-5">
                  <h2 className={`text-lg font-black text-white mb-1 group-hover:${game.accent} transition-colors`}>
                    {game.name}
                  </h2>
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-semibold">{game.players} playing now</span>
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed mb-4">{game.desc}</p>
                  <span className={`flex items-center gap-1.5 text-sm font-bold ${game.accent} group-hover:gap-3 transition-all`}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* How to choose game */}
        <section className="glass-card rounded-3xl border border-white/10 p-8 mb-12">
          <h2 className="text-2xl font-black text-white mb-6">
            Which Game Is Right for You?
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                profile: "For Beginners",
                icon: "🌱",
                rec: "Start with Dragon vs Tiger",
                why: "Two outcomes, no rules to memorize, and rounds complete in under 30 seconds. You'll understand the platform and deposit/withdrawal flow before risking serious money.",
                color: "border-green-400/20 bg-green-400/5",
                tag: "text-green-400",
              },
              {
                profile: "For Strategy Players",
                icon: "🧠",
                rec: "Play Teen Patti Classic",
                why: "Blind vs seen decisions, pot management, and reading opponents all matter here. Skill reduces the house edge over time — making it the best game for long-term engagement.",
                color: "border-yellow-400/20 bg-yellow-400/5",
                tag: "text-yellow-400",
              },
              {
                profile: "For Casual Players",
                icon: "🎲",
                rec: "Try Slots or Aviator",
                why: "No decisions required — just pick a stake and spin. Aviator adds the excitement of timing your cashout. Both have low minimum bets and are great for using bonus chips.",
                color: "border-purple-400/20 bg-purple-400/5",
                tag: "text-purple-400",
              },
            ].map((item) => (
              <div key={item.profile} className={`rounded-2xl border p-5 ${item.color}`}>
                <span className="text-3xl block mb-3">{item.icon}</span>
                <div className={`text-xs font-bold mb-1 ${item.tag}`}>{item.profile}</div>
                <h3 className="font-black text-white text-sm mb-2">{item.rec}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{item.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Content section */}
        <section className="prose-custom mb-12 space-y-4 max-w-3xl">
          <h2 className="text-2xl font-black text-white">
            About the Game Library on 3 Patti Tiger
          </h2>
          <p>
            Teen Patti Tiger hosts over 100 game modes across six categories: card games, casino table
            games, slot machines, sports games, skill games, and prediction games. The platform adds new
            titles regularly — v1.4 brought three new slot themes and an updated Aviator engine.
          </p>
          <p>
            All games on <strong>3 patti tiger</strong> use a verified random number generator (RNG)
            audited for fairness. There are no bots at the card tables — every opponent you face is a
            real player from Pakistan. Peak hours run from 7 PM to 1 AM, when live tables fill in
            under 10 seconds.
          </p>
          <p>
            Minimum stakes vary by game. Teen Patti tables start from ₨10 per round. Dragon vs Tiger
            starts from ₨5. Slots accept bets as low as ₨2 per spin. There is no maximum bet hard
            cap on most games, though VIP tables have higher minimums and bigger prize pools.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center glass-card rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-10">
          <h2 className="text-2xl font-black text-white mb-3">Ready to Play?</h2>
          <p className="text-white/60 mb-6 text-sm">
            Download the Teen Patti Tiger APK, claim your ₨5,000 welcome bonus, and start with any
            game you like — no deposit required to explore.
          </p>
          <a
            href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black glow-btn hover:scale-105 transition-all"
          >
            Download APK Free
          </a>
        </div>
      </div>
    </div>
  );
}
