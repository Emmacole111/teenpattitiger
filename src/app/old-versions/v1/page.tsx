import Link from "next/link";
import { Download, AlertCircle, ArrowRight, Shield } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Teen Patti Tiger APK v1.5.0 – Old Version Download",
  description:
    "Download Teen Patti Tiger APK v1.5.0 (June 2025). Legacy version changelog, features, known issues, and system requirements. Teen Patti Tiger v1 for Pakistan.",
  path: "/old-versions/v1",
  keywords: [
    "teen patti tiger v1",
    "teen patti tiger 1.5.0 download",
    "teen patti tiger old version v1",
    "3 patti tiger apk v1 pakistan",
    "teen patti tiger legacy version",
  ],
});

const v1Faqs = [
  {
    question: "Is Teen Patti Tiger v1.5.0 still safe to use?",
    answer:
      "The v1.5.0 APK works and the core games run fine. However, the JazzCash and EasyPaisa APIs in this version are older — withdrawals can take 15–30 minutes instead of 2–5 minutes in the latest version. For best payment experience, use the latest build.",
  },
  {
    question: "Can I still log in to my account with v1.5.0?",
    answer:
      "Yes, account credentials are server-side — your login works across all versions. Any progress, balance, or referral earnings you've accumulated are accessible from any version of the app.",
  },
  {
    question: "Why would I use v1.5.0 instead of the latest version?",
    answer:
      "v1.5.0 at 35 MB is the smallest build available. If your phone is running Android 5.0–6.0 or has limited storage, this version is the most compatible. It also uses less RAM and runs more smoothly on phones with 1–2 GB of memory.",
  },
  {
    question: "Are there slots in v1.5.0?",
    answer:
      "No — slots were introduced in v2.0.0. Version 1.5.0 includes only Teen Patti Classic and Dragon vs Tiger. If you want to play slots, upgrade to v2.0.0 or download the latest version.",
  },
];

export default function V1Page() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Old Versions", href: "/old-versions" },
            { label: "Version 1.5.0", href: "/old-versions/v1" },
          ]}
        />

        <div className="mt-8">
          {/* Hero */}
          <div className="glass-card rounded-3xl border border-white/10 p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">📦</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h1 className="text-3xl sm:text-4xl font-black text-white">
                    Teen Patti Tiger <span className="gradient-text">v1.5.0</span>
                  </h1>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-red-400/15 text-red-400 font-medium">Legacy</span>
                </div>
                <p className="text-white/50 text-sm mb-5">Original release · June 2025 · 35 MB · Android 5.0+</p>

                <div className="glass-card rounded-2xl border border-orange-400/20 p-4 bg-orange-400/5 mb-5 max-w-lg">
                  <div className="flex items-center gap-2 text-sm text-orange-400">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Recommend upgrading to the{" "}
                      <a href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-300">
                        latest v{siteConfig.apkVersion}
                      </a>{" "}
                      for faster payments and more games</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-5">
                  {[
                    { label: "Version", value: "1.5.0" },
                    { label: "Size", value: "35 MB" },
                    { label: "Released", value: "Jun 2025" },
                    { label: "Android", value: "5.0+" },
                  ].map((d) => (
                    <div key={d.label} className="text-center glass-card rounded-xl border border-white/10 px-4 py-2.5">
                      <div className="font-bold text-yellow-400 text-sm">{d.value}</div>
                      <div className="text-xs text-white/40">{d.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/8 border border-white/15 text-white font-bold text-sm hover:bg-white/12 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download v1.5.0 APK
                </a>
              </div>
            </div>
          </div>

          {/* Features + Issues */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="font-bold text-white mb-4">What&apos;s in v1.5.0</h2>
              <ul className="space-y-2">
                {[
                  "Teen Patti Classic — blind and seen mode, sideshow support",
                  "Dragon vs Tiger — standard Dragon/Tiger/Tie bets",
                  "JazzCash and EasyPaisa deposit support",
                  "Referral program — ₨500 per qualifying referral",
                  "Daily login chip rewards (500 to 8,000 chips over 7 days)",
                  "In-app customer support chat",
                  "Basic player profile with chip balance tracking",
                  "Android 5.0+ optimized — works on 1 GB RAM devices",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/65">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="font-bold text-white mb-4">Limitations in v1.5.0</h2>
              <ul className="space-y-2 mb-5">
                {[
                  { issue: "No Slots, Aviator, or Rummy games", severity: "high" },
                  { issue: "English only — no Urdu language option", severity: "medium" },
                  { issue: "Withdrawals take 15–30 minutes (older payment API)", severity: "high" },
                  { issue: "Lower referral payout — ₨500 vs ₨1,000 in latest version", severity: "medium" },
                  { issue: "No weekly tournament leaderboard", severity: "low" },
                  { issue: "No VIP cashback program", severity: "low" },
                ].map((item) => (
                  <li key={item.issue} className="flex items-start gap-2 text-xs text-white/65">
                    <span className={`mt-0.5 flex-shrink-0 font-bold ${item.severity === "high" ? "text-red-400" : item.severity === "medium" ? "text-orange-400" : "text-yellow-400"}`}>
                      {item.severity === "high" ? "✕" : "⚠"}
                    </span> {item.issue}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-white/35 italic">Red = significant · Orange = moderate · Yellow = minor</div>
            </div>
          </div>

          {/* System requirements */}
          <section className="glass-card rounded-2xl border border-white/10 p-6 mb-8">
            <h2 className="font-bold text-white mb-4">System Requirements for v1.5.0</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Android Version", value: "5.0 (Lollipop) or higher" },
                { label: "RAM", value: "1 GB minimum, 2 GB recommended" },
                { label: "Storage", value: "35 MB for APK + 50 MB runtime cache" },
                { label: "Internet", value: "Any 3G/4G connection, 1 Mbps minimum" },
                { label: "Processor", value: "1.2 GHz dual-core or better" },
                { label: "iOS Support", value: "Not available — Android only" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-center py-2 border-b border-white/5 last:border-0">
                  <span className="text-xs text-white/40 w-32 flex-shrink-0">{item.label}</span>
                  <span className="text-xs text-white/70 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Safety */}
          <div className="glass-card rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5 mb-8 flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/65 leading-relaxed">
              This is an original, unmodified build. All versions on this page are verified against the
              official release checksum. Do not download Teen Patti Tiger APKs from YouTube links,
              WhatsApp shares, or unnamed sites — they often contain credential-stealing modifications.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">v1.5.0 FAQ</h2>
          <FaqSection faqs={v1Faqs} />

          {/* Navigation */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/old-versions/v2", label: "Upgrade to v2.0.0", emoji: "⬆️" },
              { href: "/teen-patti-tiger-apk-download", label: "Latest v" + siteConfig.apkVersion, emoji: "📲" },
              { href: "/old-versions", label: "All Versions", emoji: "📋" },
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
