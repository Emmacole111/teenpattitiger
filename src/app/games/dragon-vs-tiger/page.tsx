import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  absoluteTitle: true,
  title: "Dragon vs Tiger – How to Play & Win | Teen Patti Tiger Pakistan",
  description:
    "Play Dragon vs Tiger on Teen Patti Tiger APK. Learn the rules, payout ratios, betting strategies, and how to win consistently. Pakistan's fastest card game.",
  path: "/games/dragon-vs-tiger",
  keywords: [
    "dragon vs tiger game",
    "dragon vs tiger pakistan",
    "dragon tiger card game rules",
    "dragon tiger apk",
    "teen patti tiger dragon vs tiger",
    "3 patti tiger dragon game",
  ],
});

const dvtFaqs = [
  {
    question: "What is Dragon vs Tiger?",
    answer:
      "Dragon vs Tiger is a 2-card casino game. One card is dealt to Dragon, one to Tiger. You bet on which card is higher. Aces count as the lowest card (value 1), Kings are highest (value 13). Rounds complete in under 30 seconds.",
  },
  {
    question: "What bets can I place in Dragon vs Tiger?",
    answer:
      "Three bets are available: Dragon (pays 1:1), Tiger (pays 1:1), and Tie (pays 8:1). Suit bets are also available on some tables — you predict whether Dragon or Tiger holds a specific suit, paying 3.5:1.",
  },
  {
    question: "What is the house edge in Dragon vs Tiger?",
    answer:
      "Dragon and Tiger bets have a house edge of approximately 3.73% each. The Tie bet has a house edge of 32.77% — experienced players avoid it entirely. Suit bets sit around 3.5% house edge.",
  },
  {
    question: "Is there a strategy for Dragon vs Tiger?",
    answer:
      "Since the game is purely luck-based with 2 outcomes, no mathematical strategy changes the long-term outcome. The best approach is strict bankroll management: set a loss limit, stick to flat betting, and never chase losses.",
  },
  {
    question: "What is the minimum bet for Dragon vs Tiger on Teen Patti Tiger?",
    answer:
      "Dragon vs Tiger tables start from ₨5 per round on Teen Patti Tiger, making it one of the most accessible games on the platform. Higher stakes tables go up to ₨5,000+ per round.",
  },
];

export default function DragonVsTigerPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Games", href: "/games" },
            { label: "Dragon vs Tiger", href: "/games/dragon-vs-tiger" },
          ]}
        />

        <div className="mt-8">
          {/* Hero */}
          <div className="glass-card rounded-3xl border border-red-500/20 p-8 sm:p-12 mb-10 bg-gradient-to-br from-red-600/10 to-pink-600/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-center flex-shrink-0">
                <span className="text-6xl block">🐉</span>
                <span className="text-4xl block mt-1">⚔️</span>
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-red-400/15 border border-red-400/25 text-red-400 text-xs font-bold mb-3">
                  Fastest Card Game on the Platform
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
                  Dragon vs <span className="text-red-400">Tiger</span>
                </h1>
                <p className="text-white/65 mb-5 text-sm leading-relaxed max-w-xl">
                  The simplest real-money card game in Pakistan. One card each — highest card wins.
                  Rounds complete in 30 seconds. Minimum ₨5 per bet. Payouts via JazzCash in minutes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-sm hover:scale-105 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download & Play Free
                  </a>
                  <div className="flex items-center gap-1.5 px-4 py-2.5 glass-card rounded-xl border border-white/10 text-xs text-green-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    32,000+ playing now
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Play + Payouts */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-black text-white mb-4">How to Play Dragon vs Tiger</h2>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Choose your bet amount (minimum ₨5)", color: "bg-red-400/15 text-red-400" },
                  { step: "2", text: "Select Dragon, Tiger, or Tie as your bet", color: "bg-red-400/15 text-red-400" },
                  { step: "3", text: "One card is dealt face-up to Dragon, one to Tiger", color: "bg-red-400/15 text-red-400" },
                  { step: "4", text: "The higher card wins. Aces = 1 (lowest), Kings = 13 (highest)", color: "bg-red-400/15 text-red-400" },
                  { step: "5", text: "Win pays 1:1. Tie pays 8:1. Winnings hit your wallet instantly", color: "bg-red-400/15 text-red-400" },
                ].map(({ step, text, color }) => (
                  <div key={step} className="flex items-start gap-3.5">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5 ${color}`}>
                      {step}
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="text-xl font-black text-white mb-4">Payout Table</h2>
              <div className="space-y-2 mb-5">
                {[
                  { bet: "Dragon", odds: "1:1", edge: "3.73%", note: "Standard bet", color: "border-blue-400/20 bg-blue-400/5", tag: "text-blue-400" },
                  { bet: "Tiger", odds: "1:1", edge: "3.73%", note: "Standard bet", color: "border-red-400/20 bg-red-400/5", tag: "text-red-400" },
                  { bet: "Tie", odds: "8:1", edge: "32.77%", note: "Avoid this bet", color: "border-orange-400/20 bg-orange-400/5", tag: "text-orange-400" },
                  { bet: "Suit (Dragon/Tiger)", odds: "3.5:1", edge: "~3.5%", note: "On select tables", color: "border-green-400/20 bg-green-400/5", tag: "text-green-400" },
                ].map((row) => (
                  <div key={row.bet} className={`rounded-xl border px-4 py-2.5 flex items-center justify-between ${row.color}`}>
                    <div>
                      <span className={`text-xs font-bold ${row.tag}`}>{row.bet}</span>
                      <span className="text-[10px] text-white/40 ml-2">{row.note}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-white">{row.odds}</div>
                      <div className="text-[10px] text-white/40">House edge: {row.edge}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-white/40 italic">
                Tie pays 8:1 but has a house edge 9x higher than Dragon/Tiger bets.
              </div>
            </div>
          </div>

          {/* Strategy section */}
          <section className="mb-10">
            <h2 className="text-2xl font-black text-white mb-5">Strategy & Bankroll Tips</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {[
                {
                  icon: "🚫",
                  title: "Never Bet the Tie",
                  desc: "The Tie bet looks attractive at 8:1, but the 32.77% house edge means you'll lose ₨32.77 for every ₨100 wagered over time. Stick to Dragon or Tiger only.",
                  color: "border-red-400/20 bg-red-400/5",
                  tag: "text-red-400",
                },
                {
                  icon: "📊",
                  title: "Flat Bet Consistently",
                  desc: "Bet the same amount each round. Martingale (doubling after losses) leads to rapid bankroll depletion. Flat betting keeps you in the game longer and limits catastrophic loss streaks.",
                  color: "border-yellow-400/20 bg-yellow-400/5",
                  tag: "text-yellow-400",
                },
                {
                  icon: "🛑",
                  title: "Set a Hard Stop Loss",
                  desc: "Decide before you start: if you lose X amount, you stop for the day. Dragon vs Tiger runs 60+ rounds per hour. Without a stop loss, a bad streak can clear your account in minutes.",
                  color: "border-orange-400/20 bg-orange-400/5",
                  tag: "text-orange-400",
                },
                {
                  icon: "🎯",
                  title: "Set a Win Target Too",
                  desc: "If you hit your win target — say 30% profit on your session budget — withdraw and stop. Most losing sessions start with a player who was up and kept going. Quit while ahead.",
                  color: "border-green-400/20 bg-green-400/5",
                  tag: "text-green-400",
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <h3 className={`font-bold text-sm mb-1.5 ${item.tag}`}>{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="highlight-box">
              <p className="text-sm text-white/70">
                <strong className="text-yellow-400">Reality check:</strong> Dragon vs Tiger is pure
                luck. No system or pattern-tracking will change the outcome of individual rounds. The
                math is fixed. The only winning strategy is strict bankroll discipline.
              </p>
            </div>
          </section>

          {/* Content article */}
          <section className="prose-custom mb-10 space-y-4 max-w-3xl">
            <h2 className="text-2xl font-black text-white">
              Why Dragon vs Tiger Is Popular in Pakistan
            </h2>
            <p>
              Dragon vs Tiger on <strong>3 Patti Tiger</strong> became one of the platform&apos;s most
              played games for three reasons: the rules take 10 seconds to learn, rounds complete faster
              than any other card game on the platform, and the near-50/50 odds on Dragon/Tiger bets
              give players a fighting chance.
            </p>
            <p>
              In a country where mobile internet can sometimes be unstable, a game that completes in
              under 30 seconds matters. You don&apos;t lose your progress if the connection drops between
              rounds. The compact round structure also means you can fit in 10–20 rounds in a short
              break without committing to a long table session.
            </p>
            <p>
              Payouts go directly to your JazzCash or EasyPaisa account. Winnings from Dragon vs Tiger
              are counted as game balance immediately — you can request a withdrawal after any completed
              round if your balance meets the ₨500 minimum.
            </p>
          </section>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">Frequently Asked Questions</h2>
          <FaqSection faqs={dvtFaqs} />

          {/* Related Pages */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/games/teen-patti", label: "Teen Patti Classic", emoji: "🃏" },
              { href: "/games/slots", label: "Slots Games", emoji: "🎰" },
              { href: "/blog/tips-and-tricks", label: "Winning Tips", emoji: "📊" },
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
