import Image from "next/image";
import Link from "next/link";
import { Download, AlertCircle, ArrowRight, Shield } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Teen Patti Tiger Old Versions – Download Previous APK",
  description:
    "Download old versions of Teen Patti Tiger APK for Android. Teen Patti Tiger v1.5, v2.0 changelog, features, and safe download links. Version history for Pakistani players.",
  path: "/old-versions",
  keywords: [
    "teen patti tiger old version",
    "teen patti tiger previous version",
    "teen patti tiger v1 download",
    "teen patti tiger v2 apk",
    "3 patti tiger version history pakistan",
  ],
});

const versions = [
  {
    slug: "v2",
    version: "2.0.0",
    date: "December 2025",
    size: "42 MB",
    status: "old",
    statusLabel: "Older Version",
    statusColor: "bg-orange-400/15 text-orange-400",
    highlights: [
      "Redesigned dark UI with glassmorphism cards",
      "Slots game added — 6 initial themes",
      "Improved Dragon vs Tiger payout speed",
      "EasyPaisa API update for faster withdrawals",
      "Performance improvements for mid-range phones",
      "Bug fixes from v1.5.0",
    ],
    knownIssues: ["Aviator game not yet included", "Urdu language partial (50%)"],
  },
  {
    slug: "v1",
    version: "1.5.0",
    date: "June 2025",
    size: "35 MB",
    status: "legacy",
    statusLabel: "Legacy",
    statusColor: "bg-red-400/15 text-red-400",
    highlights: [
      "Initial public release",
      "Teen Patti Classic with blind/seen mode",
      "Dragon vs Tiger game",
      "JazzCash and EasyPaisa payment integration",
      "Referral program — ₨500 per referral",
      "Daily login chip rewards",
    ],
    knownIssues: ["No slots", "Slower withdrawal processing (15–30 min)", "English only"],
  },
];

export default function OldVersionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Old Versions", href: "/old-versions" }]} />

        <div className="mt-8 mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/8 border border-white/10 text-white/60 text-xs font-bold tracking-wider uppercase mb-4">
            Version Archive
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Teen Patti Tiger{" "}
            <span className="gradient-text">Old Versions</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-sm leading-relaxed">
            Looking for a specific version of the Teen Patti Tiger APK? This page documents all
            previous releases with changelogs, system requirements, and download links. Each version
            has been preserved for users who need compatibility with older Android devices.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden mb-8 border border-white/10">
          <Image
            src="/images/teen-patti-tiger-old-versions.webp"
            alt="Teen Patti Tiger Old Versions – Download Previous APK Versions for Android"
            width={800}
            height={420}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Recommended Banner */}
        <div className="glass-card rounded-2xl border border-yellow-400/25 bg-yellow-400/5 p-5 mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-white/75">
              <span className="text-yellow-400 font-bold">Always recommended: </span>
              Download the{" "}
              <a href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">
                latest version v{siteConfig.apkVersion}
              </a>{" "}
              for the best performance, security patches, and all new features. Old versions may have
              unpatched security vulnerabilities and slower payment APIs.
            </p>
          </div>
        </div>

        {/* Why someone might want old version */}
        <section className="glass-card rounded-3xl border border-white/10 p-6 mb-8">
          <h2 className="text-xl font-black text-white mb-4">Why Download an Old Version?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📱", title: "Older Android Devices", desc: "If your phone runs Android 5.0–6.0, older APK builds may perform better than the latest version optimized for newer hardware." },
              { icon: "🔌", title: "Compatibility Issues", desc: "Some custom Android ROMs or device models experience conflicts with newer builds. An older stable version may resolve them." },
              { icon: "🌐", title: "Slow Connection Areas", desc: "Earlier versions have smaller APK sizes — v1.5.0 is 35 MB vs 44 MB for v1.4. On slow connections, the smaller download matters." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-bold text-white text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Version history */}
        <h2 className="text-2xl font-black text-white mb-5">Version History</h2>
        <div className="space-y-5 mb-10">
          {versions.map((v) => (
            <div key={v.slug} className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl font-black text-white">v{v.version}</h2>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${v.statusColor}`}>
                      {v.statusLabel}
                    </span>
                  </div>
                  <div className="text-sm text-white/40">{v.date} · {v.size} · Android 5.0+</div>
                </div>
                <Link
                  href={`/old-versions/${v.slug}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white font-semibold text-sm hover:bg-white/12 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download v{v.version}
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <h3 className="text-sm font-bold text-green-400 mb-3">What&apos;s Included</h3>
                  <ul className="space-y-1.5">
                    {v.highlights.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/65">
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-orange-400 mb-3">Known Limitations</h3>
                  <ul className="space-y-1.5">
                    {v.knownIssues.map((issue) => (
                      <li key={issue} className="flex items-start gap-2 text-xs text-white/65">
                        <span className="text-orange-400 mt-0.5 flex-shrink-0">⚠</span> {issue}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link
                      href={`/old-versions/${v.slug}`}
                      className="text-xs text-yellow-400 hover:text-yellow-300 flex items-center gap-1 font-semibold"
                    >
                      Full changelog <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Version comparison */}
        <section className="glass-card rounded-3xl border border-white/10 p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-black text-white mb-5">Version Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="table-custom w-full text-sm">
              <thead>
                <tr className="text-white/50 text-xs">
                  <th className="text-left py-2 px-3">Feature</th>
                  <th className="text-center py-2 px-3">v1.5.0</th>
                  <th className="text-center py-2 px-3">v2.0.0</th>
                  <th className="text-center py-2 px-3">v{siteConfig.apkVersion} (Latest)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Teen Patti Classic", v1: "✓", v2: "✓", latest: "✓" },
                  { feature: "Dragon vs Tiger", v1: "✓", v2: "✓", latest: "✓" },
                  { feature: "Slots Games", v1: "✗", v2: "✓", latest: "✓" },
                  { feature: "Aviator", v1: "✗", v2: "✗", latest: "✓" },
                  { feature: "Urdu Language", v1: "✗", v2: "Partial", latest: "Full" },
                  { feature: "EasyPaisa Speed", v1: "15–30 min", v2: "5–10 min", latest: "2–5 min" },
                  { feature: "JazzCash API", v1: "v1", v2: "v2", latest: "v3" },
                  { feature: "Weekly Tournaments", v1: "✗", v2: "✗", latest: "✓" },
                  { feature: "APK Size", v1: "35 MB", v2: "42 MB", latest: `${siteConfig.apkSize}` },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="py-2.5 px-3 text-white/70">{row.feature}</td>
                    <td className={`text-center py-2.5 px-3 ${row.v1 === "✗" ? "text-red-400" : "text-white/60"}`}>{row.v1}</td>
                    <td className={`text-center py-2.5 px-3 ${row.v2 === "✗" ? "text-red-400" : "text-white/60"}`}>{row.v2}</td>
                    <td className={`text-center py-2.5 px-3 text-green-400 font-semibold`}>{row.latest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety note */}
        <div className="glass-card rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5 flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-white/65 leading-relaxed">
            <strong className="text-blue-400">Safety note: </strong>
            {`Only download Teen Patti Tiger APKs from this website (${siteConfig.url}) or other official channels. Third-party APK mirrors may bundle modified files that steal account credentials or payment information. All versions listed here are original, unmodified builds.`}
          </p>
        </div>
      </div>
    </div>
  );
}
