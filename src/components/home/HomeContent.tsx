import Link from "next/link";
import { Download, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import AppScreenshots from "@/components/home/AppScreenshots";

const apkDetails = [
  { label: "App Name", value: "Teen Patti Tiger" },
  { label: "Latest Version", value: "v1.4" },
  { label: "File Size", value: "44.46 MB" },
  { label: "Category", value: "Card & Slot Games" },
  { label: "Supported OS", value: "Android 5.0 and above" },
  { label: "Languages", value: "English, Urdu" },
  { label: "Payment Methods", value: "JazzCash, EasyPaisa, Bank Transfer" },
  { label: "Minimum Withdrawal", value: "500 PKR" },
];

const games = [
  { name: "Teen Patti Classic", desc: "The version everyone knows. Three cards, side bets, show or pack. Quick rounds, good for learning the app's rhythm.", icon: "🃏", href: "/games/teen-patti" },
  { name: "Dragon vs Tiger", desc: "Probably the most-played game. Two cards drawn, you bet on which side gets the higher one. Each round lasts about 30 seconds.", icon: "🐉", href: "/games/dragon-vs-tiger" },
  { name: "Andar Bahar", desc: "The old Bangalore-origin game. You pick a side, a card gets drawn, and the dealer flips until a match appears. Pure coin-flip energy.", icon: "🎴", href: "/games" },
  { name: "Aviator", desc: "The crash game that took over casinos worldwide. A multiplier climbs, you cash out before the plane flies away. Nerve-wracking in the best way.", icon: "✈️", href: "/games" },
  { name: "Teen Patti 20-20", desc: "Faster, more aggressive version of classic Teen Patti built for shorter attention spans. Best if you don't want to think too much.", icon: "⚡", href: "/games/teen-patti" },
  { name: "7 Up Down & Color Prediction", desc: "Quick-hit games for when you just want something light between bigger rounds. Simple and fast.", icon: "🎲", href: "/games" },
  { name: "Slots", desc: "Fruit Line, 777 Bingo, God of Fortune, Spin of Fortune. Standard slot mechanics with the usual volatility.", icon: "🎰", href: "/games/slots" },
  { name: "Sports Games", desc: "If you follow cricket, football, or tennis, there are skill-based sports modes you can bet on too.", icon: "🏏", href: "/games" },
];

const comparisons = [
  { app: "Teen Patti Master", verdict: "Master has a bigger user base globally but clunkier Pakistani payments. Tiger's JazzCash/EasyPaisa integration is smoother.", winner: "tiger" },
  { app: "3 Patti World", verdict: "World has a slightly deeper slots library, but Tiger's referral payouts are higher and the APK is lighter.", winner: "tie" },
  { app: "3 Patti Lucky", verdict: "Lucky's minimum withdrawal is lower (around 300 PKR) but games feel laggier. Tiger's UI is cleaner.", winner: "tiger" },
  { app: "3 Patti Crown", verdict: "Crown pushes bigger welcome bonuses but tighter wagering requirements. Tiger's bonuses are smaller but easier to actually withdraw.", winner: "tiger" },
];

const downloadSteps = [
  { step: 1, text: "Go to teenpattitiger.com.pk and tap the download button at the top of the page." },
  { step: 2, text: 'Your browser will warn you that APK files can harm your device. Tap "Download anyway" — this is standard for any sideloaded app.' },
  { step: 3, text: 'Open your phone\'s Settings and find "Install from Unknown Sources" (under Security or tied to your browser). Enable it.' },
  { step: 4, text: "Go to your Downloads folder, tap the Teen Patti Tiger APK, and hit Install." },
  { step: 5, text: "Wait 30 seconds. Open the app." },
];

const registrationSteps = [
  { step: 1, text: 'Open the app and tap "Guest Login" to get in immediately.' },
  { step: 2, text: 'Once you\'re on the home screen, find "Bind Number" or "Profile" and tap it.' },
  { step: 3, text: "Enter your mobile number and Gmail address. Set a password you'll actually remember." },
  { step: 4, text: "Verify the OTP that lands on your phone." },
  { step: 5, text: "Pick a username and avatar. Your welcome bonus drops into your account automatically." },
];

const depositSteps = [
  'Tap "Add Chips" or the wallet icon.',
  "Choose JazzCash, EasyPaisa, or bank transfer.",
  "Enter the amount. Minimum deposits usually start around 300 PKR.",
  "Confirm via OTP from your payment provider.",
  "Chips land in your game balance within 1 to 2 minutes.",
];

const withdrawSteps = [
  'Tap "Withdraw" on your main screen.',
  "Enter an amount of 500 PKR or more.",
  "Pick JazzCash, EasyPaisa, or bank.",
  "Submit. Processing takes 2 to 5 minutes for smaller amounts.",
];

const tips = [
  { tip: "Set a budget before you open the app. Decide on an amount for the session and close when you hit it, win or lose.", icon: "💡" },
  { tip: "Start with Dragon vs Tiger or Andar Bahar if you're new — they're simple enough to learn without losing money figuring them out.", icon: "🎯" },
  { tip: "Use your welcome bonus as a test run. Play without depositing first to see if you enjoy the platform.", icon: "🎁" },
  { tip: "Never chase losses. The round that 'feels due' almost never is. The games are genuinely random.", icon: "🚫" },
  { tip: "Take advantage of daily bonuses. Login rewards, spin wheel, and weekly chip grants extend your playtime without extra deposits.", icon: "📅" },
  { tip: "If the app starts feeling like work instead of fun, uninstall it for a week. Come back fresh or don't come back at all.", icon: "🧘" },
];

const v14Updates = [
  "Faster load times on older Android devices (big improvement if you're on anything pre-2022)",
  "Fewer disconnection issues during Dragon vs Tiger rounds",
  "Updated JazzCash API for faster deposits",
  "New tournament formats running on weekends",
  "Urdu language polish — menus that were half-translated in v1.3 are now fully localized",
];

const homeFaqs = [
  { q: "Is Teen Patti Tiger APK safe to download in Pakistan?", a: "Yes. The Teen Patti Tiger APK from the official site is virus-free and scanned before every release. Millions of Pakistani players have safely installed it — avoid third-party sites that bundle modified APKs." },
  { q: "What is 3 Patti Tiger and is it the same as Teen Patti Tiger?", a: "Yes — 3 Patti Tiger and Teen Patti Tiger are the same app. '3 Patti' is the alternate spelling of 'Teen Patti', and both names refer to the same popular card gaming platform built for Pakistan." },
  { q: "How do I download Teen Patti Tiger APK on Android?", a: "Visit the official download page, tap the Download button, enable Unknown Sources in your Android settings, and install the APK. The whole process takes under 2 minutes. No VPN needed in Pakistan." },
  { q: "How long do Teen Patti Tiger withdrawals take in Pakistan?", a: "Teen Patti Tiger JazzCash and EasyPaisa withdrawals clear in 2 to 5 minutes for amounts under ₨10,000. Larger payouts or late-night requests may take up to an hour." },
  { q: "Is Teen Patti Tiger a real earning app in Pakistan?", a: "Teen Patti Tiger is a real app where real money changes hands. Players genuinely withdraw through JazzCash and EasyPaisa. That said, it's gambling — treat it as entertainment, not a guaranteed income source." },
  { q: "What is the Teen Patti Tiger referral bonus?", a: "You earn ₨1,000 PKR for every friend who registers through your referral link and makes a qualifying deposit. There's no cap — active referrers earn a lifetime commission on their referrals' activity too." },
  { q: "What is the latest version of Teen Patti Tiger?", a: "The latest version is Teen Patti Tiger v1.4, released in 2026. It includes faster load times, updated JazzCash API, new weekend tournaments, and full Urdu localization." },
  { q: "Can I play 3 Patti Tiger on iPhone?", a: "The 3 Patti Tiger APK is Android-only for now. An iOS version has been mentioned by developers but has no confirmed release date. iPhone users will need to wait." },
];

export default function HomeContent() {
  return (
    <article className="py-0">
      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="prose-custom space-y-4 mb-8">
            <p>
              If you&apos;ve been searching for a proper <strong>Teen Patti Tiger download</strong> that
              actually works in Pakistan, pays out through JazzCash and EasyPaisa, and doesn&apos;t crash
              on a mid-range Android — you&apos;ve probably already tried two or three that disappointed
              you. <strong>Teen Patti Tiger</strong> is the one most Pakistani players eventually stick
              with. It&apos;s built for local users, lightweight enough to run on almost any phone, and the
              withdrawal system actually moves money. No endless &ldquo;processing&rdquo; screens.
            </p>
            <p>
              Also known as <strong>3 Patti Tiger</strong> or <strong>3patti Tiger</strong>, this is
              Pakistan&apos;s most downloaded real-money card game app in 2026. This page walks you through
              everything — what the app is, how to do the <strong>Teen Patti Tiger APK download</strong>{" "}
              on Android, how to claim your welcome bonus, and what you need to know before you deposit
              your first rupee.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS TPT ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a1a]/40 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
            What Is <span className="gradient-text">Teen Patti Tiger?</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="prose-custom space-y-4">
              <p>
                <strong>Teen Patti Tiger</strong> — also known as <strong>3 Patti Tiger</strong> — is
                a Pakistani card and casino-style gaming app for Android, built around the classic
                three-card game everyone in South Asia grew up watching at family gatherings. The app
                takes that familiar game and puts it on your phone with over 100 modes to choose from
                — Teen Patti Classic, Dragon vs Tiger, Andar Bahar, Aviator, Rummy, Zoo Roulette, and
                a long list of slots and sports games.
              </p>
              <p>
                What sets <strong>Teen Patti Tiger Pakistan</strong> apart from the dozens of similar
                apps flooding the local market is a combination of three things: Pakistani payment
                support (JazzCash, EasyPaisa, bank transfer), a refer-and-earn system that genuinely
                pays out, and a bilingual interface in both English and Urdu.
              </p>
              <p>
                The <strong>3patti Tiger APK</strong> is Android-only for now. An iOS version has been
                promised but isn&apos;t out yet. File size: just 44 MB — runs on Android 5.0 and above.
              </p>
            </div>

            {/* Quick Info Table */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <div className="px-5 py-3 bg-yellow-400/10 border-b border-yellow-400/20">
                <h3 className="font-bold text-yellow-400 text-sm">Quick Info</h3>
              </div>
              <table className="table-custom w-full">
                <tbody>
                  {apkDetails.map((row) => (
                    <tr key={row.label}>
                      <td className="font-medium text-white/70 w-2/5 text-xs">{row.label}</td>
                      <td className="text-white text-xs font-semibold">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP SCREENSHOTS SLIDER ─────────────────────────── */}
      <AppScreenshots />

      {/* ── WHY PLAYERS CHOOSE TPT ─────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Why Pakistani Players Choose{" "}
            <span className="gradient-text">Teen Patti Tiger</span> Over Other Apps
          </h2>
          <p className="text-white/60 mb-8">
            The <strong>3 Patti Tiger Pakistan</strong> market is crowded with look-alike apps. Here&apos;s
            exactly what makes <strong>teen patti tiger download</strong> worth it over the rest:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "📱",
                title: "Runs on Budget Phones",
                desc: "The APK is under 45 MB. Competitor apps push 100 MB+ and lag on anything older than a mid-2023 phone. If you're on a Redmi, Infinix, or Tecno from two years ago, this one still works smoothly.",
              },
              {
                icon: "💸",
                title: "Payments Actually Clear",
                desc: "The most common complaint about Pakistani gaming apps is stuck withdrawals. Teen Patti Tiger's JazzCash and EasyPaisa integration clears money in 2–5 minutes — faster than every major competitor in the 3 patti tiger Pakistan space.",
              },
              {
                icon: "👥",
                title: "Generous Referral Program",
                desc: "Earn ₨1,000 PKR for every friend who joins through your Teen Patti Tiger referral link and makes a qualifying deposit. Unlike most apps, the bonus lands in your account immediately, not behind vague 'activity requirements.'",
              },
              {
                icon: "🇵🇰",
                title: "Real Urdu Support",
                desc: "Not just a half-translated menu. Game instructions, bonus descriptions, and customer support all work in Urdu — which matters for a huge chunk of the Pakistani audience.",
              },
              {
                icon: "🎁",
                title: "Daily Bonuses Stack",
                desc: "Login rewards, weekly chip grants, progress rewards, spin wheel, and lucky draw bonuses all run simultaneously. You can start playing without putting your own money in.",
              },
              {
                icon: "⚡",
                title: "Fast Match-Making",
                desc: "Real-time multiplayer with actual humans, not bots. Match-making is fast — under 10 seconds during peak hours (evenings 7 PM to midnight).",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl border border-white/10 hover:border-yellow-400/20 p-5 flex gap-4 transition-all"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1.5 text-sm">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMES ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0a0a1a]/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Best Games on <span className="gradient-text">Teen Patti Tiger</span> Pakistan
          </h2>
          <p className="text-white/60 mb-8">
            There&apos;s a difference between &ldquo;100+ games&rdquo; as a marketing line and 100+ games you&apos;ll
            genuinely want to open twice. Here&apos;s what&apos;s worth your time on <strong>3 Patti Tiger</strong>:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <Link
                key={game.name}
                href={game.href}
                className="glass-card rounded-2xl border border-white/10 hover:border-yellow-400/25 p-5 transition-all hover:-translate-y-1 group"
              >
                <span className="text-4xl block mb-3">{game.icon}</span>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-yellow-400 transition-colors">{game.name}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{game.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
            >
              View All Games <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW TO DOWNLOAD ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            How to Do the{" "}
            <span className="gradient-text">Teen Patti Tiger APK Download</span> on Android
          </h2>
          <div className="prose-custom mb-6">
            <p>
              The <strong>Teen Patti Tiger APK</strong> isn&apos;t on Google Play because Play Store
              policies don&apos;t allow real-money gaming apps for Pakistani users. This applies to every{" "}
              <strong>3 patti tiger download</strong> in the country — it&apos;s not a red flag. You get
              the APK directly from the official website. The{" "}
              <strong>teen patti tiger apk download</strong> process takes under 2 minutes.
            </p>
          </div>
          <div className="space-y-3 mb-8">
            {downloadSteps.map(({ step, text }) => (
              <div key={step} className="glass-card rounded-xl border border-white/10 p-4 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-black text-sm flex-shrink-0">
                  {step}
                </div>
                <p className="text-sm text-white/75 leading-relaxed pt-1">{text}</p>
              </div>
            ))}
          </div>
          <div className="highlight-box mb-6">
            <p className="text-sm text-white/75">
              ✅ You don&apos;t need a VPN, you don&apos;t need to root your phone, and you don&apos;t need to mess
              with developer settings. That&apos;s it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black glow-btn hover:scale-105 transition-all shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download APK Free
            </a>
            <Link
              href="/blog/apk-install-guide"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-card border border-white/15 text-white/70 font-semibold text-sm hover:border-yellow-400/30 hover:text-yellow-400 transition-all"
            >
              Step-by-Step Install Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <Link href="/old-versions" className="hover:text-yellow-400 transition-colors">
              📦 Download Old Versions
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/teen-patti-tiger-for-pc" className="hover:text-yellow-400 transition-colors">
              💻 Teen Patti Tiger for PC
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/teen-patti-tiger-apk-download" className="hover:text-yellow-400 transition-colors">
              📋 Full APK Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION ───────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a1a]/40 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Registration &amp; Claiming Your{" "}
            <span className="gradient-text">Welcome Bonus</span>
          </h2>
          <p className="text-white/60 mb-6">
            First-time <strong>3 patti tiger</strong> registration takes under two minutes:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              {registrationSteps.map(({ step, text }) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-green-400/15 border border-green-400/30 flex items-center justify-center font-bold text-green-400 text-xs flex-shrink-0 mt-0.5">
                    {step}
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <div className="glass-card rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 space-y-4">
              <div>
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-bold text-yellow-400 mb-1.5 text-sm">Important Tip</h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  Bind your number before you start playing seriously. Guest accounts can be lost if you
                  uninstall the app. Always link your phone number and email right after registration.
                </p>
              </div>
              <div className="pt-3 border-t border-white/8 space-y-2">
                <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">After registering</p>
                <Link href="/bonuses/welcome-bonus" className="flex items-center justify-between text-sm text-white/70 hover:text-yellow-400 transition-colors py-1">
                  <span>→ Claim ₨5,000 Welcome Bonus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/bonuses/daily-rewards" className="flex items-center justify-between text-sm text-white/70 hover:text-yellow-400 transition-colors py-1">
                  <span>→ Set Up Daily Login Rewards</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/bonuses" className="flex items-center justify-between text-sm text-white/70 hover:text-yellow-400 transition-colors py-1">
                  <span>→ View All Bonuses & Rewards</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOSITS & WITHDRAWALS ─────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-10">
            <p className="text-yellow-400/70 text-xs font-bold tracking-widest uppercase mb-2">Payments</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Deposits &amp; <span className="gradient-text">Withdrawals</span>
            </h2>
            <p className="text-white/50 text-sm mt-2">Fast, local, and hassle-free payments — how <strong className="text-white/70">3patti tiger</strong> handles your money in Pakistan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* ── DEPOSIT CARD ── */}
            <div className="rounded-3xl overflow-hidden" style={{ background:"linear-gradient(145deg,rgba(74,222,128,0.07),rgba(74,222,128,0.02))", border:"1px solid rgba(74,222,128,0.18)" }}>
              {/* Card header */}
              <div className="px-6 pt-6 pb-4 flex items-center gap-3" style={{ borderBottom:"1px solid rgba(74,222,128,0.10)" }}>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0" style={{ background:"linear-gradient(135deg,rgba(74,222,128,0.2),rgba(74,222,128,0.08))", border:"1px solid rgba(74,222,128,0.25)" }}>
                  💳
                </div>
                <div>
                  <h2 className="font-black text-white text-base leading-tight">Add Money (Deposit)</h2>
                  <p className="text-green-400 text-xs font-semibold">Min: ₨300 · Instant credit</p>
                </div>
                <div className="ml-auto px-2.5 py-1 rounded-full text-[10px] font-bold text-green-400" style={{ background:"rgba(74,222,128,0.12)", border:"1px solid rgba(74,222,128,0.25)" }}>
                  LIVE
                </div>
              </div>

              {/* Steps */}
              <div className="px-6 py-5 space-y-3">
                {depositSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5"
                      style={{ background:"linear-gradient(135deg,rgba(74,222,128,0.25),rgba(74,222,128,0.10))", border:"1px solid rgba(74,222,128,0.3)", color:"#4ade80" }}>
                      {i + 1}
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Payment methods */}
              <div className="px-6 pb-6">
                <p className="text-[10px] text-white/35 font-bold uppercase tracking-wider mb-3">Accepted Methods</p>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { name:"JazzCash", emoji:"💚", color:"rgba(74,222,128,0.12)", border:"rgba(74,222,128,0.25)", text:"text-green-400" },
                    { name:"EasyPaisa", emoji:"🟠", color:"rgba(249,115,22,0.12)", border:"rgba(249,115,22,0.25)", text:"text-orange-400" },
                    { name:"Bank", emoji:"🏦", color:"rgba(99,102,241,0.12)", border:"rgba(99,102,241,0.25)", text:"text-indigo-400" },
                  ].map((m) => (
                    <div key={m.name} className="rounded-xl py-2.5 px-2 text-center" style={{ background:m.color, border:`1px solid ${m.border}` }}>
                      <div className="text-lg mb-0.5">{m.emoji}</div>
                      <div className={`text-[10px] font-bold ${m.text}`}>{m.name}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl px-3 py-2 text-xs text-white/55 flex items-center gap-2" style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-yellow-400">💡</span>
                  First deposit bonus: <span className="text-yellow-400 font-bold ml-1">+10–20% extra chips</span>
                </div>
              </div>
            </div>

            {/* ── WITHDRAWAL CARD ── */}
            <div className="rounded-3xl overflow-hidden" style={{ background:"linear-gradient(145deg,rgba(245,197,24,0.07),rgba(245,197,24,0.02))", border:"1px solid rgba(245,197,24,0.18)" }}>
              {/* Card header */}
              <div className="px-6 pt-6 pb-4 flex items-center gap-3" style={{ borderBottom:"1px solid rgba(245,197,24,0.10)" }}>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0" style={{ background:"linear-gradient(135deg,rgba(245,197,24,0.2),rgba(245,197,24,0.08))", border:"1px solid rgba(245,197,24,0.25)" }}>
                  💸
                </div>
                <div>
                  <h2 className="font-black text-white text-base leading-tight">Withdraw Money</h2>
                  <p className="text-yellow-400 text-xs font-semibold">Min: ₨500 · 2–5 min processing</p>
                </div>
                <div className="ml-auto px-2.5 py-1 rounded-full text-[10px] font-bold text-yellow-400" style={{ background:"rgba(245,197,24,0.12)", border:"1px solid rgba(245,197,24,0.25)" }}>
                  FAST
                </div>
              </div>

              {/* Steps */}
              <div className="px-6 py-5 space-y-3">
                {withdrawSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5"
                      style={{ background:"linear-gradient(135deg,rgba(245,197,24,0.25),rgba(245,197,24,0.10))", border:"1px solid rgba(245,197,24,0.3)", color:"#f5c518" }}>
                      {i + 1}
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Speed table */}
              <div className="px-6 pb-5">
                <p className="text-[10px] text-white/35 font-bold uppercase tracking-wider mb-3">Processing Speed</p>
                <div className="rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
                  {[
                    { amount:"Under ₨10,000", time:"2–5 minutes", color:"text-green-400", dot:"bg-green-400", bar:"bg-green-400", width:"w-1/4" },
                    { amount:"₨10,000+", time:"Up to 1 hour", color:"text-yellow-400", dot:"bg-yellow-400", bar:"bg-yellow-400", width:"w-2/3" },
                    { amount:"Late-night", time:"May be delayed", color:"text-orange-400", dot:"bg-orange-400", bar:"bg-orange-400", width:"w-full" },
                  ].map((row, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none", background:"rgba(255,255,255,0.02)" }}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-white/70 font-medium">{row.amount}</span>
                        <span className={`text-xs font-bold ${row.color} flex items-center gap-1.5`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${row.dot} animate-pulse`} />
                          {row.time}
                        </span>
                      </div>
                      <div className="w-full h-1 rounded-full" style={{ background:"rgba(255,255,255,0.06)" }}>
                        <div className={`h-full rounded-full ${row.bar} ${row.width} opacity-40`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KYC note */}
              <div className="px-6 pb-6">
                <div className="rounded-xl px-4 py-3 flex items-start gap-2.5" style={{ background:"rgba(99,102,241,0.08)", border:"1px solid rgba(99,102,241,0.18)" }}>
                  <AlertCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/55 leading-relaxed">
                    <span className="text-indigo-400 font-semibold">KYC Note: </span>
                    Big payouts may need a photo ID — that&apos;s a compliance check, not a scam.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── REFER & EARN ───────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a1a]/40 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl border border-green-400/20 bg-green-400/5 p-8 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-5xl block mb-4">👥</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                  Refer &amp; Earn –{" "}
                  <span className="text-green-400">₨1,000 Per Referral</span>
                </h2>
                <div className="prose-custom space-y-3">
                  <p>
                    The referral system is where a lot of active <strong>3 patti tiger</strong> users
                    end up making more than they do from gameplay itself.
                  </p>
                  <p>
                    You get a unique referral link from your profile. When someone downloads{" "}
                    <strong>3patti tiger</strong> through your link, creates an account, and makes
                    their first qualifying deposit,{" "}
                    <strong className="text-white"> ₨1,000 PKR lands in your referral wallet.</strong>
                  </p>
                  <p>
                    There&apos;s no cap on how many people you can refer. You also earn a small{" "}
                    <strong className="text-white">lifetime commission</strong> on active referrals — so if
                    someone you referred keeps playing, you keep earning small amounts from their activity.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Referral Bonus", value: "₨1,000 per refer", icon: "💰" },
                  { label: "Referral Cap", value: "No limit", icon: "♾️" },
                  { label: "Lifetime Commission", value: "Yes, from active referrals", icon: "🔄" },
                  { label: "Payment Method", value: "Credited to referral wallet", icon: "💳" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 glass-card rounded-xl border border-white/10 p-3.5">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-white/50">{item.label}</div>
                      <div className="text-sm font-bold text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES THAT MATTER ───────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            <span className="gradient-text">Teen Patti Tiger</span> Features That Genuinely Matter
          </h2>
          <p className="text-white/60 mb-8">
            Not going to list 20 bullet points. Here&apos;s what actually affects your daily experience
            on <strong>3 patti tiger</strong> — things competitors get wrong that this app gets right:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🏠", title: "Private Tables", desc: "Play with specific friends or family only. Recreate the home game experience without being in the same room." },
              { icon: "🔴", title: "Real-Time Multiplayer", desc: "Every table has actual humans — not bots. Match-making is fast, under 10 seconds during peak hours (7 PM to midnight)." },
              { icon: "📊", title: "Clean Transaction History", desc: "Every deposit, withdrawal, and bonus with timestamps. If something goes wrong, you have records." },
              { icon: "💬", title: "24/7 In-App Support", desc: "Responds in under 15 minutes most of the time. Better than most competitors' email-only systems." },
              { icon: "🏆", title: "Weekly Tournaments", desc: "Leaderboards with bigger prize pools on Fridays and weekends. Compete for serious money." },
              { icon: "📅", title: "Daily Login Streaks", desc: "Streaks reset if you miss a day — giving you a reason to open the app every day even if you're not playing heavily." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl border border-white/10 hover:border-yellow-400/20 p-5 transition-all hover:-translate-y-1">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS IT REAL OR FAKE ─────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0a0a1a]/40">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl border border-white/10 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Is Teen Patti Tiger Real or Fake in Pakistan?{" "}
              <span className="gradient-text">Honest Answer</span>
            </h2>
            <p className="text-sm text-white/50 mb-6 italic">
              &ldquo;Is teen patti tiger real?&rdquo; is the most searched question about this app — so let&apos;s address it directly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
                <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                <h3 className="font-bold text-green-400 mb-2 text-sm">Teen Patti Tiger Is Real</h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  The app exists, payments clear, and people genuinely withdraw real money. Thousands of
                  Pakistani players pull out ₨5,000 to ₨50,000 through JazzCash and EasyPaisa every
                  day. <strong>Teen Patti Tiger Pakistan</strong> has a verified payout track record.
                </p>
              </div>
              <div className="glass-card rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5">
                <AlertCircle className="w-6 h-6 text-orange-400 mb-3" />
                <h3 className="font-bold text-orange-400 mb-2 text-sm">But It&apos;s Still Gambling</h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  The <strong>3patti tiger</strong> platform is a gambling product. Whether you win or
                  lose depends on the same math that governs every casino on earth. The house has an
                  edge. Treat it as entertainment with occasional payouts — not a guaranteed income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Teen Patti Tiger vs Other{" "}
            <span className="gradient-text">3 Patti Apps in Pakistan</span>
          </h2>
          <p className="text-white/60 mb-8">
            Searching for the best <strong>teen patti tiger download</strong> alternative? Here&apos;s an
            honest comparison against the main <strong>3 patti tiger pakistan</strong> competitors:
          </p>
          <div className="space-y-3">
            {comparisons.map((item) => (
              <div key={item.app} className="glass-card rounded-2xl border border-white/10 p-5 flex items-start gap-4">
                <div className={`flex-shrink-0 w-16 text-center text-xs font-bold px-2 py-1 rounded-lg ${item.winner === "tiger" ? "bg-green-400/15 text-green-400" : "bg-yellow-400/15 text-yellow-400"}`}>
                  {item.winner === "tiger" ? "Tiger Wins" : "Tie"}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">vs {item.app}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item.verdict}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 highlight-box">
            <p className="text-sm text-white/70">
              <strong className="text-yellow-400">Bottom line:</strong> Tiger&apos;s strongest areas are{" "}
              <strong className="text-white">payout reliability, referral earning, and UI polish.</strong>{" "}
              Its weakest is that the slots library isn&apos;t as deep as some competitors.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIPS ───────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a1a]/40 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Tips for <span className="gradient-text">Staying in Control</span>
          </h2>
          <p className="text-white/60 mb-8">
            A few things learned from watching how players actually behave on{" "}
            <strong>3 patti tiger</strong> and similar apps:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((item) => (
              <div key={item.tip} className="glass-card rounded-2xl border border-white/10 p-5 flex gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-sm text-white/70 leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S NEW v1.4 ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Teen Patti Tiger Latest Version –{" "}
            <span className="gradient-text">What&apos;s New in v1.4 (2026)</span>
          </h2>
          <p className="text-white/60 mb-6">
            The <strong>Teen Patti Tiger latest version</strong> v1.4 rolled out earlier this year.
            Here&apos;s what changed and why it matters for <strong>teen patti tiger pakistan</strong> players:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {v14Updates.map((update, i) => (
              <div key={i} className="glass-card rounded-xl border border-white/10 p-4 flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-yellow-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-400 text-xs font-bold">✓</span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{update}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/50 mt-5 italic">
            Bug fixes are ongoing. If something breaks, report it through in-app support instead of
            ditching the app — the team does push patches.
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a1a]/40 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center">
            Teen Patti Tiger Pakistan –{" "}
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {homeFaqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl border border-white/10 p-5">
                <h3 className="font-bold text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL TAKE ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-5">
              Final Take
            </h2>
            <div className="prose-custom space-y-4 mb-8">
              <p>
                <strong>Teen Patti Tiger</strong> is the most practical choice for Pakistani players
                who want a reliable, locally-integrated real-money card game on Android. It&apos;s not
                perfect — no app is — but it does the fundamentals better than any other{" "}
                <strong>3 patti tiger pakistan</strong> competitor. Payments work, the interface is
                clean, the referral program genuinely pays out, and the 100+ game library keeps you
                engaged without overwhelming you.
              </p>
              <p>
                If you&apos;re going to try one <strong>teen patti tiger download</strong> this year, this
                is the one worth installing first. Whether you call it <strong>3patti tiger</strong>,{" "}
                <strong>teen patti tiger apk</strong>, or just &ldquo;the Tiger app&rdquo; — it&apos;s the same
                platform trusted by millions of players across Pakistan. Play smart, stay within your
                budget, and treat every session as entertainment. The wins will come when they come.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black text-lg glow-btn pulse-glow hover:scale-105 transition-all shadow-2xl"
              >
                <Download className="w-5 h-5" />
                Download APK Free
              </a>
              <Link
                href="/blog/how-to-play-teen-patti-tiger"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl glass-card border border-white/20 text-white font-bold hover:border-yellow-400/40 transition-all"
              >
                How to Play Guide <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Quick links grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              {[
                { href: "/games", label: "All Games", icon: "🎮" },
                { href: "/bonuses", label: "Bonuses & Rewards", icon: "🎁" },
                { href: "/old-versions", label: "Old Versions", icon: "📦" },
                { href: "/teen-patti-tiger-for-pc", label: "PC Version", icon: "💻" },
                { href: "/blog/tips-and-tricks", label: "Tips & Tricks", icon: "📊" },
                { href: "/blog/earning-guide", label: "Earning Guide", icon: "💰" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass-card border border-white/8 text-sm text-white/60 hover:text-yellow-400 hover:border-yellow-400/20 transition-all"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <p className="text-xs text-white/30">
              Version {siteConfig.apkVersion} • {siteConfig.apkSize} • Android 5.0+ • Free to Download
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
