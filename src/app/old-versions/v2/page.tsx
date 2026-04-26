import Link from "next/link";
import { Download, AlertCircle, ArrowRight, Shield } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Teen Patti Tiger APK v2.0.0 – Old Version Download",
  description:
    "Download Teen Patti Tiger APK v2.0.0 (December 2025). Full changelog, new features including Slots, improved Dragon vs Tiger, and faster EasyPaisa withdrawals.",
  path: "/old-versions/v2",
  keywords: [
    "teen patti tiger v2",
    "teen patti tiger 2.0 download",
    "teen patti tiger old version 2",
    "3 patti tiger apk v2 pakistan",
    "teen patti tiger slots version",
  ],
});

const v2Faqs = [
  {
    question: "What was new in Teen Patti Tiger v2.0.0?",
    answer:
      "v2.0.0 introduced the Slots game category with 6 initial themes, a fully redesigned dark UI with glassmorphism cards, an updated EasyPaisa payment API (5–10 minute withdrawals), improved Dragon vs Tiger performance, and stability fixes from v1.5.0.",
  },
  {
    question: "Is v2.0.0 still supported?",
    answer:
      "v2.0.0 accounts are still server-compatible, but no new security patches or payment API updates are released for it. The JazzCash and EasyPaisa APIs in v2.0.0 are one generation behind the latest version, so withdrawals are slower.",
  },
  {
    question: "Can I upgrade from v2.0.0 to the latest version without losing data?",
    answer:
      "Yes. Uninstall v2.0.0 and install the latest APK. Your account, balance, referral earnings, and progress are stored server-side — nothing is lost when you switch versions. Log in with the same credentials.",
  },
  {
    question: "Does v2.0.0 have Urdu language support?",
    answer:
      "v2.0.0 includes partial Urdu support — approximately 50% of the in-app text is translated. Menu items, game names, and main navigation are in Urdu, but gameplay instructions and bonus descriptions remain in English. Full Urdu localization came with v1.4.",
  },
];

export default function V2Page() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Old Versions", href: "/old-versions" },
            { label: "Version 2.0.0", href: "/old-versions/v2" },
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
                    Teen Patti Tiger <span className="gradient-text">v2.0.0</span>
                  </h1>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-orange-400/15 text-orange-400 font-medium">Older Version</span>
                </div>
                <p className="text-white/50 text-sm mb-5">Slots Update · December 2025 · 42 MB · Android 5.0+</p>

                <div className="glass-card rounded-2xl border border-orange-400/20 p-4 bg-orange-400/5 mb-5 max-w-lg">
                  <div className="flex items-center gap-2 text-sm text-orange-400">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Upgrade to{" "}
                      <a href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-300">
                        latest v{siteConfig.apkVersion}
                      </a>{" "}
                      for Aviator, full Urdu, and 2-5 min withdrawals</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-5">
                  {[
                    { label: "Version", value: "2.0.0" },
                    { label: "Size", value: "42 MB" },
                    { label: "Released", value: "Dec 2025" },
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
                  Download v2.0.0 APK
                </a>
              </div>
            </div>
          </div>

          {/* What's new + Issues */}
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="font-bold text-white mb-4">What&apos;s New in v2.0.0</h2>
              <ul className="space-y-2">
                {[
                  "Slots game added — 6 themes including Golden Fortune, Diamond Rush, Dragon Gold",
                  "Redesigned dark UI with glassmorphism card style",
                  "EasyPaisa API v2 — withdrawals in 5–10 minutes",
                  "Dragon vs Tiger — improved card animation and payout speed",
                  "Performance improvements for Android 6.0+ devices",
                  "Referral bonus increased from ₨500 to ₨800",
                  "In-app push notifications for daily reward reminders",
                  "Stability and crash fixes from v1.5.0",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/65">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h2 className="font-bold text-white mb-4">Still Missing in v2.0.0</h2>
              <ul className="space-y-2 mb-5">
                {[
                  { issue: "Aviator game — added in v1.3", severity: "high" },
                  { issue: "Full Urdu language — only 50% translated", severity: "medium" },
                  { issue: "JazzCash v3 API — v2 API is slower (5–10 min)", severity: "high" },
                  { issue: "Weekly tournaments — added in v1.3", severity: "medium" },
                  { issue: "VIP cashback program — added in v1.3", severity: "low" },
                  { issue: "Referral bonus at ₨1,000 — still ₨800 in v2.0.0", severity: "low" },
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

          {/* v2.0.0 vs v1.4 comparison */}
          <section className="glass-card rounded-3xl border border-white/10 p-6 mb-8">
            <h2 className="text-xl font-black text-white mb-5">v2.0.0 vs Latest v{siteConfig.apkVersion}</h2>
            <div className="space-y-2">
              {[
                { area: "Game Library", v2: "8 games (no Aviator)", latest: "100+ games including Aviator" },
                { area: "Withdrawal Speed", v2: "5–10 minutes", latest: "2–5 minutes" },
                { area: "Urdu Language", v2: "Partial (50%)", latest: "Full Urdu + English" },
                { area: "Referral Payout", v2: "₨800 per referral", latest: "₨1,000 per referral" },
                { area: "Weekly Tournaments", v2: "Not available", latest: "Available with prize pools" },
                { area: "APK Size", v2: "42 MB", latest: `${siteConfig.apkSize}` },
                { area: "Security Patches", v2: "Dec 2025 build", latest: "2026 (latest patches)" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-3 items-center px-4 py-3 rounded-xl bg-white/3 hover:bg-white/5 transition-all text-xs">
                  <span className="text-white/50 font-medium">{row.area}</span>
                  <span className="text-orange-400/80">{row.v2}</span>
                  <span className="text-green-400 font-semibold">{row.latest}</span>
                </div>
              ))}
            </div>
          </section>

          {/* System requirements */}
          <section className="glass-card rounded-2xl border border-white/10 p-6 mb-8">
            <h2 className="font-bold text-white mb-4">System Requirements for v2.0.0</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Android Version", value: "5.0 or higher" },
                { label: "RAM", value: "1 GB minimum, 2 GB recommended" },
                { label: "Storage", value: "42 MB APK + 60 MB cache" },
                { label: "Internet", value: "3G/4G, 2 Mbps minimum" },
                { label: "Processor", value: "1.4 GHz quad-core recommended" },
                { label: "iOS Support", value: "Not available" },
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
              All version downloads on this site are original, checksum-verified APKs. If you downloaded
              from any other source, verify the APK file size matches the figures listed here before
              installing. Mismatched file sizes are a common indicator of modified builds.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">v2.0.0 FAQ</h2>
          <FaqSection faqs={v2Faqs} />

          {/* Navigation */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/teen-patti-tiger-apk-download", label: "Get Latest v" + siteConfig.apkVersion, emoji: "📲" },
              { href: "/old-versions/v1", label: "View v1.5.0", emoji: "⬇️" },
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
