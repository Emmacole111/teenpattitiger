import Link from "next/link";
import { Download, ArrowRight, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Daily Login Rewards – Free Chips Every Day",
  description:
    "Claim daily login rewards on Teen Patti Tiger. Free chips, spins, and prizes every day. 7-day streak bonus explained. Pakistan's best daily reward card game.",
  path: "/bonuses/daily-rewards",
  keywords: [
    "teen patti tiger daily rewards",
    "daily login bonus pakistan",
    "free chips card game",
    "teen patti tiger streak bonus",
    "3 patti tiger daily chips",
  ],
});

const dailyRewards = [
  { day: "Day 1", chips: "500", extra: "", icon: "🎁", color: "border-white/10" },
  { day: "Day 2", chips: "1,000", extra: "", icon: "💎", color: "border-white/10" },
  { day: "Day 3", chips: "2,000", extra: "5 Free Spins", icon: "🎰", color: "border-white/10" },
  { day: "Day 4", chips: "3,000", extra: "", icon: "🏆", color: "border-white/10" },
  { day: "Day 5", chips: "5,000", extra: "10 Free Spins", icon: "⭐", color: "border-white/10" },
  { day: "Day 6", chips: "8,000", extra: "Lucky Draw Entry", icon: "💰", color: "border-yellow-400/20" },
  { day: "Day 7", chips: "15,000", extra: "Spin Wheel + Bonus", icon: "🎉", color: "border-yellow-400/35" },
];

const rewardFaqs = [
  {
    question: "What happens if I miss a day in the streak?",
    answer:
      "Your streak resets to Day 1 if you miss any login. You don't lose chips you've already collected — but you restart the 7-day cycle from the beginning. Even Day 1 gives you 500 free chips, so logging in daily never hurts.",
  },
  {
    question: "When does the daily reward reset?",
    answer:
      "Daily rewards reset at midnight Pakistan Standard Time (PKT). If you claimed your reward at 11:50 PM, your next reward will be available at 12:00 AM — just 10 minutes later.",
  },
  {
    question: "Can I claim daily rewards without depositing?",
    answer:
      "Yes, completely free. Daily login rewards require only that you open the app and tap the reward notification. No deposit is needed. This makes daily rewards one of the best ways to build a chip balance without spending anything.",
  },
  {
    question: "What are the Free Spins on Day 3 and Day 5 for?",
    answer:
      "The free spins on Day 3 and Day 5 can be used on any slot game in Teen Patti Tiger. The spin value matches your last bet amount (or minimum bet if you haven't played). All winnings from free spins credit to your real balance.",
  },
  {
    question: "Does the 7-day streak repeat after Day 7?",
    answer:
      "Yes. After you collect the Day 7 reward, the cycle resets to Day 1 the next day. Consistent players can collect the 7-day jackpot roughly every week — that's 15,000 chips plus a Spin Wheel bonus once a week indefinitely.",
  },
];

export default function DailyRewardsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Bonuses", href: "/bonuses" },
            { label: "Daily Rewards", href: "/bonuses/daily-rewards" },
          ]}
        />

        <div className="mt-8">
          {/* Hero */}
          <div className="glass-card rounded-3xl border border-green-400/25 p-8 sm:p-10 mb-10 bg-gradient-to-br from-green-500/10 to-emerald-600/5 text-center">
            <span className="text-6xl block mb-4">📅</span>
            <div className="inline-block px-3 py-1 rounded-full bg-green-400/15 border border-green-400/25 text-green-400 text-xs font-bold mb-4">
              Free · No Deposit Required
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 leading-tight">
              Daily <span className="text-green-400">Login Rewards</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
              Open Teen Patti Tiger every day to collect free chips, spins, and bonus prizes. The
              longer your streak, the bigger the daily reward — Day 7 gives 15,000 chips plus a Spin
              Wheel bonus.
            </p>
            <a
              href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-black text-base hover:scale-105 transition-all shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download & Start Streak
            </a>
          </div>

          {/* 7-day calendar */}
          <section className="mb-10">
            <h2 className="text-2xl font-black text-white mb-2">7-Day Reward Calendar</h2>
            <p className="text-white/50 text-sm mb-6">
              Rewards increase daily. Miss a day and your streak resets to Day 1.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {dailyRewards.map((r, idx) => (
                <div
                  key={r.day}
                  className={`glass-card rounded-2xl border p-4 text-center transition-all ${r.color} ${idx === 6 ? "bg-yellow-400/8 scale-105" : ""}`}
                >
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <div className="text-xs text-white/50 mb-1 font-medium">{r.day}</div>
                  <div className={`text-sm font-black ${idx === 6 ? "text-yellow-400" : "text-white"}`}>
                    {r.chips}
                  </div>
                  <div className="text-[9px] text-white/40 mt-0.5">chips</div>
                  {r.extra && (
                    <div className={`text-[9px] font-bold mt-2 px-1.5 py-0.5 rounded-full ${idx === 6 ? "bg-yellow-400/15 text-yellow-400" : "bg-white/8 text-white/50"}`}>
                      +{r.extra}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Total value */}
          <section className="glass-card rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-6 mb-10">
            <h2 className="text-xl font-black text-white mb-4">Total Weekly Value</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { label: "Total Chips (7 Days)", value: "34,500", color: "text-yellow-400" },
                { label: "Free Spins Included", value: "15", color: "text-purple-400" },
                { label: "Bonus Events", value: "2", color: "text-green-400" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className={`text-3xl font-black ${item.color}`}>{item.value}</div>
                  <div className="text-xs text-white/50 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-4 italic text-center">
              Completing the 7-day cycle every week gives you 34,500 free chips monthly — enough to play dozens of games without depositing.
            </p>
          </section>

          {/* How it works */}
          <section className="mb-10">
            <h2 className="text-2xl font-black text-white mb-5">How Daily Rewards Work</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🔔",
                  title: "Claim Within 24 Hours",
                  desc: "After logging in, tap the reward notification or visit the Rewards section in the app. You must tap to collect — rewards don't auto-claim. You have until midnight PKT to collect each day's reward.",
                  color: "border-blue-400/20 bg-blue-400/5",
                  tag: "text-blue-400",
                },
                {
                  icon: "🔥",
                  title: "Streak Keeps Going",
                  desc: "As long as you log in every calendar day, your streak continues indefinitely. Players who've maintained a 30+ day streak report receiving bonus streak rewards beyond the standard 7-day cycle.",
                  color: "border-orange-400/20 bg-orange-400/5",
                  tag: "text-orange-400",
                },
                {
                  icon: "🎰",
                  title: "Free Spins Are Real Value",
                  desc: "The free spins on Day 3 and Day 5 are credited to your slot balance. Use them on any available slot — all winnings from free spins convert to withdrawable balance after 1x wagering.",
                  color: "border-purple-400/20 bg-purple-400/5",
                  tag: "text-purple-400",
                },
                {
                  icon: "💡",
                  title: "Stack With Other Bonuses",
                  desc: "Daily rewards stack with your welcome bonus, referral earnings, and reload bonuses. There's no limit on how many bonus types can be active simultaneously in your account.",
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
          </section>

          {/* Warning */}
          <div className="glass-card rounded-2xl border border-orange-400/20 bg-orange-400/5 p-4 mb-10 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/65 leading-relaxed">
              <strong className="text-orange-400">Streak reset warning:</strong> If you miss even a
              single day, your streak goes back to Day 1. Set a reminder or notification so you don&apos;t
              lose your progress — especially when approaching Day 6 and Day 7.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">Daily Rewards FAQ</h2>
          <FaqSection faqs={rewardFaqs} />

          {/* Related */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/bonuses/welcome-bonus", label: "Welcome Bonus", emoji: "🎁" },
              { href: "/blog/earning-guide", label: "Full Earning Guide", emoji: "📖" },
              { href: "/teen-patti-tiger-apk-download", label: "Download APK", emoji: "📲" },
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
