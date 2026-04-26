import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  absoluteTitle: true,
  title: "Teen Patti Game – Rules, Strategy & How to Win | Teen Patti Tiger",
  description:
    "Complete guide to playing Teen Patti on Teen Patti Tiger. Learn rules, hand rankings, blind vs seen strategy, betting tips, and how to win real money in Pakistan.",
  path: "/games/teen-patti",
  keywords: [
    "teen patti game rules",
    "how to play teen patti pakistan",
    "teen patti strategy",
    "teen patti hand rankings",
    "teen patti blind seen",
    "3 patti tiger card game",
  ],
});

const teenpattiFaqs = [
  {
    question: "What is the difference between blind and seen play in Teen Patti?",
    answer:
      "A 'blind' player bets without looking at their cards and pays half the current stake. A 'seen' player has looked at their cards and pays the full stake. Blind players can force seen players to show their cards, which adds a psychological layer to the game.",
  },
  {
    question: "What is the highest hand in Teen Patti?",
    answer:
      "A Trail (Three of a Kind) is the highest hand. Three Aces beat everything. The full ranking from highest to lowest is: Trail, Pure Sequence (Straight Flush), Sequence (Straight), Color (Flush), Pair, High Card.",
  },
  {
    question: "Can I play Teen Patti for free on Teen Patti Tiger?",
    answer:
      "Yes. New players receive a welcome bonus and daily login chips that can be used on any Teen Patti table. You can play for hours without depositing your own money.",
  },
  {
    question: "What is a sideshow in Teen Patti?",
    answer:
      "A sideshow (or compromise) lets you privately compare your cards with the previous seen player. If your hand is worse, you fold. If it's better, they fold. It's a key strategy tool to eliminate strong opponents early.",
  },
  {
    question: "What are the minimum stakes on Teen Patti tables?",
    answer:
      "Teen Patti tables on Teen Patti Tiger start from ₨10 per round. Higher stakes tables are available for experienced players, and VIP rooms have dedicated high-limit sessions.",
  },
];

export default function TeenPattiPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Games", href: "/games" },
            { label: "Teen Patti", href: "/games/teen-patti" },
          ]}
        />

        <div className="mt-8">
          {/* Hero */}
          <div className="glass-card rounded-3xl border border-yellow-500/20 p-8 sm:p-12 mb-10 bg-gradient-to-br from-yellow-500/10 to-orange-600/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <span className="text-7xl flex-shrink-0">🃏</span>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/25 text-yellow-400 text-xs font-bold mb-3">
                  #1 Most Played Game
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
                  Teen Patti <span className="gradient-text">Classic</span>
                </h1>
                <p className="text-white/65 mb-5 text-sm leading-relaxed max-w-xl">
                  Pakistan&apos;s most popular online card game. Play the classic 3-card game against real
                  players, bluff your opponents, and win real money via JazzCash or EasyPaisa.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm glow-btn"
                  >
                    <Download className="w-4 h-4" />
                    Download & Play Free
                  </a>
                  <div className="flex items-center gap-1.5 px-4 py-2.5 glass-card rounded-xl border border-white/10 text-xs text-green-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    45,000+ playing now
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rules + Rankings */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-black text-white mb-4">How to Play Teen Patti</h2>
              <div className="prose-custom">
                <p>
                  Teen Patti is played with a standard 52-card deck. Each player is dealt 3 cards face
                  down. A minimum bet (boot) is placed into the pot before cards are dealt. The goal is
                  to have the best 3-card hand — or convince everyone else you do.
                </p>
                <ul className="space-y-1.5 mt-3 text-sm text-white/70">
                  <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold mt-0.5">1.</span> All players place the boot (minimum stake) into the pot</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold mt-0.5">2.</span> Each player chooses to play blind (without seeing cards) or seen</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold mt-0.5">3.</span> Betting continues clockwise — Call, Raise, or Fold each turn</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-400 font-bold mt-0.5">4.</span> Last player standing wins the pot, or the best hand at showdown wins</li>
                </ul>
                <div className="mt-4 p-3 rounded-xl bg-yellow-400/5 border border-yellow-400/15 text-xs text-white/60">
                  <strong className="text-yellow-400">Key rule:</strong> Blind players pay half the stake
                  of seen players. This creates a huge strategic advantage for disciplined blind players.
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-black text-white mb-4">Hand Rankings (High to Low)</h2>
              <div className="space-y-2">
                {[
                  { rank: "1", name: "Trail / Three of a Kind", example: "A♠ A♥ A♦", note: "Highest" },
                  { rank: "2", name: "Pure Sequence (Straight Flush)", example: "A♠ K♠ Q♠", note: "Same suit" },
                  { rank: "3", name: "Sequence (Straight)", example: "A♠ K♥ Q♦", note: "Any suit" },
                  { rank: "4", name: "Color (Flush)", example: "A♠ 9♠ 5♠", note: "Same suit" },
                  { rank: "5", name: "Pair", example: "K♠ K♥ 2♦", note: "Two matching" },
                  { rank: "6", name: "High Card", example: "A♠ K♥ J♦", note: "Lowest" },
                ].map((h) => (
                  <div key={h.rank} className="flex items-center gap-3 text-sm py-1.5 border-b border-white/5 last:border-0">
                    <span className="w-6 h-6 rounded-full bg-yellow-400/15 text-yellow-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {h.rank}
                    </span>
                    <span className="text-white/80 flex-1 text-xs">{h.name}</span>
                    <span className="text-yellow-400 text-xs font-mono">{h.example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy section */}
          <section className="mb-10">
            <h2 className="text-2xl font-black text-white mb-6">
              Teen Patti Strategy for Pakistani Players
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "👁️",
                  title: "The Blind Advantage",
                  desc: "Playing blind forces seen players to bet double against you. Use this to pressure opponents with weak-to-medium hands early in the round. The longer you stay blind, the more fear you create.",
                  color: "border-blue-400/20 bg-blue-400/5",
                  tag: "text-blue-400",
                },
                {
                  icon: "🤝",
                  title: "When to Request a Sideshow",
                  desc: "Only request a sideshow (compromise) if you have a weak hand and want to eliminate the player before you. Don't use it when you hold a strong hand — just keep betting to build the pot.",
                  color: "border-green-400/20 bg-green-400/5",
                  tag: "text-green-400",
                },
                {
                  icon: "💰",
                  title: "Pot Management",
                  desc: "Avoid raising aggressively in the first 2–3 rounds unless you hold a Trail or Pure Sequence. Let the pot build naturally. Over-betting early scares players into folding before the pot is worth winning.",
                  color: "border-yellow-400/20 bg-yellow-400/5",
                  tag: "text-yellow-400",
                },
                {
                  icon: "🚪",
                  title: "Folding Is Free",
                  desc: "The most common beginner mistake is chasing weak hands. A pair of 2s is almost never worth a large pot. Fold early, save your chips, and wait for a stronger hand. Discipline wins more than aggression.",
                  color: "border-orange-400/20 bg-orange-400/5",
                  tag: "text-orange-400",
                },
                {
                  icon: "📊",
                  title: "Table Selection",
                  desc: "Join tables where the average stack is 5–10x the boot amount. Tables where players have very large stacks relative to the boot attract experienced players. Smaller boot tables are better for building confidence.",
                  color: "border-purple-400/20 bg-purple-400/5",
                  tag: "text-purple-400",
                },
                {
                  icon: "⏰",
                  title: "Play During Peak Hours",
                  desc: "Teen Patti Tiger has the most active tables between 8 PM and 12 AM Pakistan time. More players means faster matchmaking, more table choice, and more opponents who are playing casually rather than strategically.",
                  color: "border-cyan-400/20 bg-cyan-400/5",
                  tag: "text-cyan-400",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <h3 className={`font-bold text-sm mb-1.5 ${item.tag}`}>{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section className="glass-card rounded-3xl border border-red-400/15 bg-red-400/5 p-6 mb-10">
            <h2 className="text-xl font-black text-white mb-4">Common Mistakes New Players Make</h2>
            <div className="space-y-3">
              {[
                { mistake: "Playing too many hands — folding is a valid strategy, not weakness", fix: "Aim to play only the top 40% of hands you're dealt" },
                { mistake: "Calling every bet without a plan — passive play bleeds chips slowly", fix: "Every call should have a reason: pot odds, opponent read, or hand strength" },
                { mistake: "Playing at stakes too high for your bankroll", fix: "Keep each session budget to no more than 20–25 table boots" },
                { mistake: "Ignoring the blind/seen betting maths", fix: "Seen players pay 2x — factor this into every raise decision" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-400/20 text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✕</span>
                  <div>
                    <p className="text-sm text-white/70">{item.mistake}</p>
                    <p className="text-xs text-green-400 mt-0.5">Fix: {item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <div className="highlight-box mb-10">
            <p className="text-sm text-white/70">
              Want to go deeper?{" "}
              <Link href="/blog/how-to-play-teen-patti-tiger" className="text-yellow-400 hover:underline">
                Read the complete Teen Patti guide
              </Link>{" "}
              or check out{" "}
              <Link href="/blog/tips-and-tricks" className="text-yellow-400 hover:underline">
                advanced tips and tricks
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
          <FaqSection faqs={teenpattiFaqs} />

          {/* Related Pages */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/games/dragon-vs-tiger", label: "Dragon vs Tiger", emoji: "🐉" },
              { href: "/games/slots", label: "Slots Games", emoji: "🎰" },
              { href: "/bonuses/welcome-bonus", label: "Claim Welcome Bonus", emoji: "🎁" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="glass-card rounded-2xl border border-white/10 p-4 flex items-center gap-3 hover:border-yellow-400/30 transition-all group">
                <span className="text-2xl">{l.emoji}</span>
                <span className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">{l.label}</span>
                <ArrowRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-yellow-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
