import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Zap, Star, Users, Shield } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "All Bonuses & Rewards – Teen Patti Tiger Pakistan",
  description:
    "Claim all Teen Patti Tiger bonuses in Pakistan — ₨5,000 welcome bonus, daily login rewards, ₨1,000 referral bonus, VIP cashback. Full bonus guide for Pakistani players.",
  path: "/bonuses",
  keywords: [
    "teen patti tiger bonus",
    "welcome bonus pakistan",
    "teen patti tiger daily rewards",
    "teen patti tiger referral bonus",
    "3 patti tiger cashback",
    "teen patti tiger vip",
  ],
});

const bonuses = [
  {
    href: "/bonuses/welcome-bonus",
    icon: "🎁",
    title: "Welcome Bonus",
    amount: "Up to ₨5,000",
    desc: "New player exclusive. Deposit for the first time and receive a 100% bonus on your initial deposit, up to ₨5,000. Claimed instantly. Minimum deposit ₨500.",
    color: "from-yellow-500/15 to-orange-600/10",
    border: "border-yellow-500/25",
    tag: "New Players Only",
    tagColor: "bg-yellow-400/15 text-yellow-400 border-yellow-400/25",
    accent: "text-yellow-400",
    cta: "Claim Welcome Bonus",
  },
  {
    href: "/bonuses/daily-rewards",
    icon: "📅",
    title: "Daily Login Rewards",
    amount: "Free Chips Daily",
    desc: "Log in every day and collect free chips, spins, and exclusive gifts. Rewards scale up every day — day 7 of a streak pays the biggest prize. Resets if you miss a day.",
    color: "from-green-500/15 to-emerald-600/10",
    border: "border-green-500/25",
    tag: "All Players",
    tagColor: "bg-green-400/15 text-green-400 border-green-400/25",
    accent: "text-green-400",
    cta: "View Daily Schedule",
  },
  {
    href: "#",
    icon: "👥",
    title: "Refer & Earn",
    amount: "₨1,000 Per Referral",
    desc: "Share your unique referral link. For every friend who downloads 3 patti tiger, registers, and makes a qualifying deposit — you earn ₨1,000 PKR. No referral cap. Lifetime commission on active referrals.",
    color: "from-blue-500/15 to-indigo-600/10",
    border: "border-blue-500/25",
    tag: "No Limit",
    tagColor: "bg-blue-400/15 text-blue-400 border-blue-400/25",
    accent: "text-blue-400",
    cta: "Get Your Referral Link",
  },
  {
    href: "#",
    icon: "💎",
    title: "VIP Cashback",
    amount: "Up to 10% Weekly",
    desc: "Active players earn VIP status by playing regularly. VIP members receive weekly cashback on net losses — up to 10% returned to your account every Monday morning.",
    color: "from-purple-500/15 to-violet-600/10",
    border: "border-purple-500/25",
    tag: "VIP Players",
    tagColor: "bg-purple-400/15 text-purple-400 border-purple-400/25",
    accent: "text-purple-400",
    cta: "Check VIP Status",
  },
  {
    href: "#",
    icon: "🏆",
    title: "Weekly Tournament Prizes",
    amount: "₨50,000+ Prize Pool",
    desc: "Compete on the leaderboard every week. Top players share a prize pool that scales with total platform activity. Bigger the week, bigger the pool. Teen Patti and Dragon vs Tiger are both included.",
    color: "from-orange-500/15 to-amber-600/10",
    border: "border-orange-500/25",
    tag: "All Players",
    tagColor: "bg-orange-400/15 text-orange-400 border-orange-400/25",
    accent: "text-orange-400",
    cta: "View Leaderboard",
  },
  {
    href: "#",
    icon: "🔄",
    title: "Deposit Reload Bonus",
    amount: "10–20% Extra Chips",
    desc: "Every deposit — not just your first — comes with a bonus chip reload. The percentage varies by active promotions, but most weeks include a 10% reload on all deposits.",
    color: "from-cyan-500/15 to-teal-600/10",
    border: "border-cyan-500/25",
    tag: "Returning Players",
    tagColor: "bg-cyan-400/15 text-cyan-400 border-cyan-400/25",
    accent: "text-cyan-400",
    cta: "Deposit Now",
  },
];

export default function BonusesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Bonuses", href: "/bonuses" }]} />

        {/* Header */}
        <div className="mt-8 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-4">
            6 Active Bonus Types
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Bonuses &{" "}
            <span className="gradient-text">Rewards</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            Teen Patti Tiger Pakistan runs six different bonus programs simultaneously. New players get
            a welcome package, daily players get login chips, and active referrers can earn more from
            invites than from gameplay itself.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden mb-10 border border-white/10">
          <Image
            src="/images/teen-patti-tiger-bonuses.webp"
            alt="Teen Patti Tiger Bonuses – Welcome Bonus, Daily Rewards, Refer & Earn in Pakistan"
            width={800}
            height={420}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Gift, label: "Max Welcome Bonus", value: "₨5,000" },
            { icon: Users, label: "Referral Per Invite", value: "₨1,000" },
            { icon: Zap, label: "Bonus Credit Time", value: "Instant" },
            { icon: Star, label: "VIP Cashback", value: "Up to 10%" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass-card rounded-2xl border border-white/10 p-4 text-center">
              <Icon className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl font-black text-white">{value}</div>
              <div className="text-xs text-white/50 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Bonuses grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {bonuses.map((bonus) => (
            <Link key={bonus.title} href={bonus.href} className="group">
              <div className={`glass-card rounded-3xl p-6 border transition-all hover:-translate-y-1 bg-gradient-to-br ${bonus.color} ${bonus.border} h-full flex flex-col`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{bonus.icon}</span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${bonus.tagColor}`}>
                    {bonus.tag}
                  </span>
                </div>
                <h2 className={`text-lg font-black text-white mb-1 group-hover:${bonus.accent} transition-colors`}>
                  {bonus.title}
                </h2>
                <div className={`text-2xl font-black ${bonus.accent} mb-3`}>{bonus.amount}</div>
                <p className="text-xs text-white/55 mb-5 leading-relaxed flex-1">{bonus.desc}</p>
                <span className={`flex items-center gap-1.5 text-sm font-bold ${bonus.accent} group-hover:gap-3 transition-all`}>
                  {bonus.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* How bonuses work */}
        <section className="glass-card rounded-3xl border border-white/10 p-8 mb-12">
          <h2 className="text-2xl font-black text-white mb-6">How the Bonus System Works</h2>
          <div className="prose-custom space-y-4 max-w-3xl">
            <p>
              All bonuses on <strong>Teen Patti Tiger</strong> credit to a separate bonus wallet. You
              can use bonus chips on any game immediately. Winnings from bonus chips convert to real
              money once the wagering requirement is met (typically 1x the bonus amount for welcome
              bonuses).
            </p>
            <p>
              The <strong>referral bonus</strong> works differently — it goes directly to your real
              balance, not your bonus wallet. That means ₨1,000 from a referral can be withdrawn
              immediately once the qualifying deposit is confirmed, without any wagering requirement.
            </p>
            <p>
              <strong>Daily login rewards</strong> are chip-based and reset each day at midnight. The
              7-day streak reward is the largest payout, so consistent daily logins compound
              significantly over a month of play.
            </p>
          </div>
        </section>

        {/* Trust points */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: Gift, title: "No Hidden Wagering Tricks", desc: "Bonus terms are displayed clearly before you claim. The 1x wagering on welcome bonus is one of the lowest in the Pakistani market.", color: "text-yellow-400" },
            { icon: Zap, title: "Instant Bonus Credit", desc: "All bonuses except VIP cashback are credited within seconds of triggering the qualifying action.", color: "text-green-400" },
            { icon: Shield, title: "Referral Bonus Is Real Cash", desc: "Unlike most apps where referral bonuses are locked chips, Teen Patti Tiger referral earnings go straight to withdrawable balance.", color: "text-blue-400" },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl border border-white/10 p-5">
              <item.icon className={`w-7 h-7 ${item.color} mb-3`} />
              <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
