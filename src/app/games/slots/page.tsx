import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  absoluteTitle: true,
  title: "Slots Games – Spin & Win Real Money | Teen Patti Tiger Pakistan",
  description:
    "Play 20+ slot machine games on Teen Patti Tiger APK. Free spins, jackpots, 3-reel and 5-reel slots with real money payouts via JazzCash and EasyPaisa in Pakistan.",
  path: "/games/slots",
  keywords: [
    "slots game apk pakistan",
    "online slot machine pakistan",
    "teen patti tiger slots",
    "free spins card game",
    "jackpot slot apk",
    "3 patti tiger slots",
  ],
});

const slotFaqs = [
  {
    question: "What types of slot games are on Teen Patti Tiger?",
    answer:
      "Teen Patti Tiger offers 3-reel classic slots, 5-reel video slots, and progressive jackpot slots. Themes include Golden Fortune, Dragon Gold, Diamond Rush, Royal Crown, and more. New themes are added with each major update.",
  },
  {
    question: "How do free spins work on Teen Patti Tiger slots?",
    answer:
      "Free spins are triggered either by landing Scatter symbols (3 or more) or through daily login rewards. During free spins, your base bet stays the same but you don't pay for each spin. All winnings from free spins are credited to your real balance.",
  },
  {
    question: "What is a progressive jackpot slot?",
    answer:
      "Progressive jackpot slots pool a portion of every bet from all players into a central prize. The jackpot grows until one player hits the winning combination. Jackpots on Teen Patti Tiger have been known to reach ₨50,000+ before being claimed.",
  },
  {
    question: "What is the minimum bet on slots?",
    answer:
      "Slot bets start from as low as ₨2 per spin on Teen Patti Tiger, making them ideal for using bonus chips. Maximum bets depend on the specific slot — high-variance machines typically allow up to ₨1,000+ per spin.",
  },
  {
    question: "Can I use my welcome bonus on slots?",
    answer:
      "Yes. The welcome bonus chips are valid on all slot games. Slots are actually an efficient way to meet wagering requirements since most slot bets count 100% toward the playthrough requirement.",
  },
];

const slotThemes = [
  { name: "Golden Fortune", icon: "🏆", type: "5-Reel", rtp: "96.2%", jackpot: "Progressive" },
  { name: "Dragon Gold", icon: "🐉", type: "5-Reel", rtp: "95.8%", jackpot: "Fixed 50x" },
  { name: "Diamond Rush", icon: "💎", type: "3-Reel", rtp: "97.1%", jackpot: "Fixed 100x" },
  { name: "Fruit Blast", icon: "🍎", type: "3-Reel Classic", rtp: "95.5%", jackpot: "Fixed 20x" },
  { name: "Royal Crown", icon: "👑", type: "5-Reel Video", rtp: "96.5%", jackpot: "Progressive" },
  { name: "Lucky Strike", icon: "⚡", type: "5-Reel", rtp: "96.0%", jackpot: "Fixed 75x" },
];

export default function SlotsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Games", href: "/games" },
            { label: "Slots", href: "/games/slots" },
          ]}
        />
        <div className="mt-8">
          {/* Hero */}
          <div className="glass-card rounded-3xl border border-purple-500/20 p-8 sm:p-12 mb-10 bg-gradient-to-br from-purple-600/10 to-blue-600/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <span className="text-7xl flex-shrink-0">🎰</span>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-400/15 border border-purple-400/25 text-purple-400 text-xs font-bold mb-3">
                  20+ Slot Themes
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
                  Slots <span className="text-purple-400">Games</span>
                </h1>
                <p className="text-white/65 mb-5 text-sm leading-relaxed max-w-xl">
                  Spin the reels and hit the jackpot. Multiple slot machine themes, daily free spins,
                  progressive jackpots, and real money payouts via JazzCash in minutes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold text-sm hover:scale-105 transition-all shadow-xl"
                  >
                    <Download className="w-4 h-4" />
                    Download & Spin Free
                  </a>
                  <div className="flex items-center gap-1.5 px-4 py-2.5 glass-card rounded-xl border border-white/10 text-xs text-green-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    18,000+ playing now
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features + Themes */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-black text-white mb-4">Slot Features</h2>
              <div className="space-y-3">
                {[
                  { feature: "3-reel classic slots for purists", icon: "🎰", color: "text-yellow-400" },
                  { feature: "5-reel video slots with bonus rounds", icon: "🎬", color: "text-purple-400" },
                  { feature: "Progressive jackpots growing in real time", icon: "💰", color: "text-green-400" },
                  { feature: "Wild symbols that substitute for any card", icon: "⭐", color: "text-blue-400" },
                  { feature: "Scatter symbols that trigger free spin rounds", icon: "🔄", color: "text-orange-400" },
                  { feature: "Daily free spins for all logged-in players", icon: "🎁", color: "text-pink-400" },
                  { feature: "Multipliers up to 500x on winning lines", icon: "✖️", color: "text-red-400" },
                  { feature: "Autoplay mode — set spins and walk away", icon: "▶️", color: "text-cyan-400" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm py-1.5 border-b border-white/5 last:border-0">
                    <span className={f.color}>{f.icon}</span>
                    <span className="text-white/70">{f.feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-black text-white mb-4">Available Slot Themes</h2>
              <div className="space-y-2">
                {slotThemes.map((slot) => (
                  <div key={slot.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/3 hover:bg-white/5 transition-all">
                    <span className="text-2xl flex-shrink-0">{slot.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-white">{slot.name}</div>
                      <div className="text-xs text-white/40">{slot.type}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-bold text-green-400">{slot.rtp} RTP</div>
                      <div className="text-[10px] text-white/35">{slot.jackpot}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How slots work */}
          <section className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8 mb-10">
            <h2 className="text-2xl font-black text-white mb-5">How Slots Work on Teen Patti Tiger</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: "🔢",
                  title: "RNG System",
                  desc: "Every spin is determined by a certified Random Number Generator. The result is decided the moment you press spin — no pattern exists, and previous results don't affect future ones.",
                  color: "border-blue-400/20 bg-blue-400/5",
                  tag: "text-blue-400",
                },
                {
                  icon: "📈",
                  title: "Return to Player (RTP)",
                  desc: "RTP is the long-term payout percentage. A 96% RTP slot returns ₨96 for every ₨100 wagered over millions of spins. In short sessions, your experience will vary widely from this figure.",
                  color: "border-green-400/20 bg-green-400/5",
                  tag: "text-green-400",
                },
                {
                  icon: "🌊",
                  title: "Variance (Volatility)",
                  desc: "Low volatility slots pay frequently but in small amounts. High volatility slots pay rarely but can multiply your bet by 100x or more. Jackpot slots are always high volatility.",
                  color: "border-yellow-400/20 bg-yellow-400/5",
                  tag: "text-yellow-400",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h3 className={`font-bold text-sm mb-1.5 ${item.tag}`}>{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy tips */}
          <section className="mb-10">
            <h2 className="text-2xl font-black text-white mb-5">Smart Slot Playing Tips</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: "Use your free daily spins on progressive jackpot slots — your cost is zero, jackpot potential is real", icon: "🎁" },
                { tip: "For budget play, pick 3-reel classic slots — simpler paylines mean lower risk per spin", icon: "💰" },
                { tip: "Don't play Autoplay with a large number of spins without checking your balance. It's easy to drain your account in minutes", icon: "⚠️" },
                { tip: "Check the RTP before choosing a slot. Anything above 96% is considered player-friendly. Avoid slots below 94%", icon: "📊" },
                { tip: "Bet at minimum stake during free spins if you want your free spin balance to last longer for bonus features", icon: "🎯" },
                { tip: "Jackpot slots pay out rarely but randomly — you don't increase your chances by betting more per spin", icon: "🏆" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-2xl border border-white/10 p-4 flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-white/65 leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Content */}
          <section className="prose-custom mb-10 space-y-4 max-w-3xl">
            <h2 className="text-2xl font-black text-white">
              Slots on 3 Patti Tiger — What You Should Know
            </h2>
            <p>
              Slots are the second most played game category on <strong>Teen Patti Tiger</strong> after
              Teen Patti Classic. Their appeal is obvious: no rules to learn, no opponents to read, and
              the potential for large multiplier wins on a single spin.
            </p>
            <p>
              The slot library on <strong>3 patti tiger</strong> covers both casual and high-stakes
              players. Low-variance 3-reel classics are ideal for stretching a small bonus balance over
              many spins. High-variance 5-reel video slots are better for players chasing bigger
              single-session wins with a defined budget.
            </p>
            <p>
              All slot winnings are withdrawable immediately. There is no mandatory hold period.
              Pakistani players can cash out slot winnings to JazzCash or EasyPaisa with the standard
              ₨500 minimum withdrawal and 2–5 minute processing time.
            </p>
          </section>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">Slots FAQ</h2>
          <FaqSection faqs={slotFaqs} />

          {/* Related */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/games/teen-patti", label: "Teen Patti Classic", emoji: "🃏" },
              { href: "/games/dragon-vs-tiger", label: "Dragon vs Tiger", emoji: "🐉" },
              { href: "/bonuses/daily-rewards", label: "Daily Free Spins", emoji: "🎁" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="glass-card rounded-2xl border border-white/10 p-4 flex items-center gap-3 hover:border-yellow-400/30 transition-all group">
                <span className="text-2xl">{l.emoji}</span>
                <span className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">{l.label}</span>
                <ArrowRight className="w-4 h-4 text-white/30 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
