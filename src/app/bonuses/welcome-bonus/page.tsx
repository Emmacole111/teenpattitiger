import Link from "next/link";
import { Download, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Teen Patti Tiger Welcome Bonus – Up to ₨5,000 Free",
  description:
    "Claim your Teen Patti Tiger welcome bonus up to ₨5,000. 100% first deposit match for new Pakistani players. Instant credit, low 1x wagering, JazzCash & EasyPaisa.",
  path: "/bonuses/welcome-bonus",
  keywords: [
    "teen patti tiger welcome bonus",
    "new player bonus pakistan",
    "teen patti tiger 5000 bonus",
    "3 patti tiger first deposit bonus",
    "teen patti tiger free chips pakistan",
  ],
});

const welcomeFaqs = [
  {
    question: "How much is the Teen Patti Tiger welcome bonus?",
    answer:
      "The welcome bonus matches 100% of your first deposit up to ₨5,000. Deposit ₨500 and get ₨500 bonus. Deposit ₨5,000 and get ₨5,000 bonus. Deposits above ₨5,000 still only receive ₨5,000 as the maximum match.",
  },
  {
    question: "What is the wagering requirement on the welcome bonus?",
    answer:
      "The welcome bonus has a 1x wagering requirement. If you receive ₨2,000 in bonus chips, you need to wager a total of ₨2,000 across any game before the bonus converts to real withdrawable money. 1x is very low compared to the industry average of 10x–35x.",
  },
  {
    question: "Can I withdraw the welcome bonus directly?",
    answer:
      "No — bonus chips must meet the wagering requirement before withdrawal. However, any winnings you generate from your real deposit balance can be withdrawn at any time, even before the bonus is released.",
  },
  {
    question: "What payment methods trigger the welcome bonus?",
    answer:
      "JazzCash, EasyPaisa, and bank transfer all qualify for the welcome bonus. The bonus credits automatically within seconds of your deposit being confirmed.",
  },
  {
    question: "What if my first deposit fails — do I still get the bonus?",
    answer:
      "The bonus triggers when the deposit successfully completes. If your transaction fails or is reversed, the bonus is not applied. Resubmit the deposit once the original transaction clears (usually within minutes for JazzCash/EasyPaisa).",
  },
];

export default function WelcomeBonusPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Bonuses", href: "/bonuses" },
            { label: "Welcome Bonus", href: "/bonuses/welcome-bonus" },
          ]}
        />

        <div className="mt-8">
          {/* Hero */}
          <div className="glass-card rounded-3xl border border-yellow-400/25 p-8 sm:p-12 mb-10 bg-gradient-to-br from-yellow-400/10 to-orange-500/5 text-center">
            <span className="text-6xl block mb-4">🎁</span>
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/25 text-yellow-400 text-xs font-bold mb-4">
              New Players Only · One Time Offer
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 leading-tight">
              Welcome Bonus{" "}
              <span className="gradient-text">Up to ₨5,000</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
              Join Teen Patti Tiger and get a 100% match on your first deposit — up to ₨5,000 in free
              chips. Minimum deposit ₨500. 1x wagering requirement. Instant credit.
            </p>

            {/* Bonus summary */}
            <div className="grid grid-cols-3 gap-5 max-w-sm mx-auto mb-8">
              {[
                { label: "Max Bonus", value: "₨5,000" },
                { label: "Min Deposit", value: "₨500" },
                { label: "Wagering", value: "1x only" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl border border-white/10 p-3">
                  <div className="text-xl font-black text-yellow-400">{item.value}</div>
                  <div className="text-[10px] text-white/50 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-base glow-btn pulse-glow hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              Download & Claim Bonus
            </a>
          </div>

          {/* How to claim */}
          <section className="mb-10">
            <h2 className="text-2xl font-black text-white mb-6">How to Claim Your Welcome Bonus</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { step: 1, icon: "📲", title: "Download APK", desc: "Download and install the Teen Patti Tiger APK from the official download page. Takes under 2 minutes." },
                { step: 2, icon: "📝", title: "Register Account", desc: "Create your free account with your mobile number or email. Bind your number immediately to secure your account." },
                { step: 3, icon: "💳", title: "Make First Deposit", desc: "Deposit a minimum of ₨500 using JazzCash, EasyPaisa, or bank transfer. The bonus triggers automatically." },
                { step: 4, icon: "✅", title: "Bonus Credited", desc: "Your welcome bonus chips appear in your bonus wallet instantly. Use them on any game right away." },
              ].map((s) => (
                <div key={s.step} className="glass-card rounded-2xl border border-white/10 p-5 text-center">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-black text-xs mx-auto mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1.5">{s.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bonus breakdown */}
          <section className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-black text-white mb-5">Bonus Deposit Examples</h2>
            <div className="space-y-2 mb-5">
              {[
                { deposit: "₨500", bonus: "₨500", total: "₨1,000", wagering: "₨500" },
                { deposit: "₨1,000", bonus: "₨1,000", total: "₨2,000", wagering: "₨1,000" },
                { deposit: "₨2,500", bonus: "₨2,500", total: "₨5,000", wagering: "₨2,500" },
                { deposit: "₨5,000+", bonus: "₨5,000", total: "₨10,000+", wagering: "₨5,000" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-3 items-center px-4 py-3 rounded-xl bg-white/3 hover:bg-white/5 transition-all text-sm">
                  <div><span className="text-xs text-white/40 block">Deposit</span><span className="font-bold text-white">{row.deposit}</span></div>
                  <div><span className="text-xs text-white/40 block">Bonus</span><span className="font-bold text-green-400">+{row.bonus}</span></div>
                  <div><span className="text-xs text-white/40 block">Total Chips</span><span className="font-bold text-yellow-400">{row.total}</span></div>
                  <div><span className="text-xs text-white/40 block">To Unlock</span><span className="font-bold text-white/70">{row.wagering}</span></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 italic">Wagering = total amount to wager before bonus converts to real money (1x requirement)</p>
          </section>

          {/* What you can / can't do */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            <div className="glass-card rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
              <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="font-bold text-green-400 mb-3 text-sm">You Can</h3>
              <ul className="space-y-2 text-xs text-white/65">
                {[
                  "Use bonus chips on any game — Teen Patti, Slots, Dragon vs Tiger, Aviator",
                  "Withdraw real deposit winnings at any time, even before bonus clears",
                  "Stack daily login bonus on top of welcome bonus",
                  "Play multiple game types to meet the wagering requirement faster",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5">
              <AlertCircle className="w-6 h-6 text-orange-400 mb-3" />
              <h3 className="font-bold text-orange-400 mb-3 text-sm">You Cannot</h3>
              <ul className="space-y-2 text-xs text-white/65">
                {[
                  "Withdraw bonus chips directly — wagering must be completed first",
                  "Claim the welcome bonus more than once per account",
                  "Use welcome bonus on accounts registered with the same device or phone number",
                  "Transfer bonus chips to another player's account",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tips to maximize */}
          <section className="glass-card rounded-3xl border border-yellow-400/15 bg-yellow-400/5 p-6 mb-10">
            <h2 className="text-xl font-black text-white mb-4">Tips to Maximize Your Welcome Bonus</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Deposit the maximum (₨5,000) to get the most bonus chips — the 1x wagering is easy to meet",
                "Play Dragon vs Tiger to meet wagering requirements fast — 30-second rounds are ideal for quick playthrough",
                "Don't withdraw before the wagering is complete — early withdrawal cancels the remaining bonus",
                "Check for a welcome bonus reload promo code in the app's notification section after registering",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-white/65 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">Welcome Bonus FAQ</h2>
          <FaqSection faqs={welcomeFaqs} />

          {/* Related */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/bonuses/daily-rewards", label: "Daily Login Rewards", emoji: "📅" },
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
