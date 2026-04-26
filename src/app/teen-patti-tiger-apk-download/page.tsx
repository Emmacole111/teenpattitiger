import Link from "next/link";
import { Download, Shield, Smartphone, Clock, CheckCircle, AlertCircle, Star } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { softwareAppSchema } from "@/lib/schemas";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Download Teen Patti Tiger APK Latest Version – Free for Android",
  description: `Download Teen Patti Tiger APK v${siteConfig.apkVersion} for Android. Latest version, safe, virus-free, and free to download for Pakistan players.`,
  path: "/teen-patti-tiger-apk-download",
  keywords: [
    "Teen Patti Tiger APK download",
    "Teen Patti Tiger latest version",
    "Teen Patti Tiger free download Pakistan",
    "Teen Patti APK Android",
  ],
});

const apkDetails = [
  { label: "App Name", value: "Teen Patti Tiger" },
  { label: "Version", value: siteConfig.apkVersion },
  { label: "Size", value: siteConfig.apkSize },
  { label: "OS Required", value: "Android 5.0+" },
  { label: "Category", value: "Card Game" },
  { label: "Last Updated", value: "April 20, 2026" },
  { label: "Downloads", value: "2,000,000+" },
  { label: "Rating", value: "4.7 / 5.0" },
  { label: "Price", value: "Free" },
  { label: "Language", value: "English, Urdu" },
];

const installSteps = [
  {
    step: 1,
    title: "Download the APK",
    desc: 'Click the "Download APK Free" button above. The file will start downloading automatically.',
  },
  {
    step: 2,
    title: "Allow Unknown Sources",
    desc: 'Go to Settings → Security → Enable "Unknown Sources" or "Install Unknown Apps" on your Android device.',
  },
  {
    step: 3,
    title: "Open the APK File",
    desc: "Open your notification bar or file manager, find the downloaded APK file and tap on it.",
  },
  {
    step: 4,
    title: "Install & Play",
    desc: 'Tap "Install" and wait for the installation to complete. Open Teen Patti Tiger and start playing!',
  },
];

const downloadFaqs = [
  {
    question: "Is Teen Patti Tiger APK safe to install?",
    answer:
      "Yes! Our APK is scanned with multiple antivirus tools including VirusTotal. It contains no malware, spyware, or viruses. Millions of users have safely installed it.",
  },
  {
    question: "Why do I need to enable Unknown Sources?",
    answer:
      "Because Teen Patti Tiger APK is not on the Google Play Store, Android requires you to manually allow installation from external sources. This is a standard security setting, not a sign of any issue.",
  },
  {
    question: "Can I update Teen Patti Tiger APK?",
    answer:
      "Yes! Simply download the latest version from this page and install it. The new version will automatically replace the old one, keeping your account data.",
  },
  {
    question: "What if the installation fails?",
    answer:
      "Make sure you have enough storage space (at least 100MB free), that Unknown Sources is enabled, and that you downloaded the complete APK file. Try restarting your phone and installing again.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema()) }}
      />
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 hero-bg overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="max-w-5xl mx-auto relative">
            <Breadcrumb
              items={[{ label: "Download APK", href: "/teen-patti-tiger-apk-download" }]}
            />
            <div className="mt-8 text-center">
              <span className="text-6xl mb-6 block">📲</span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Download <span className="gradient-text">Teen Patti Tiger APK</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Download the latest Teen Patti Tiger APK v{siteConfig.apkVersion} for Android. Free,
                safe, and instant download for Pakistan.
              </p>

              {/* Download Card */}
              <div className="glass-card rounded-3xl border border-yellow-400/20 p-8 max-w-lg mx-auto bg-gradient-to-br from-yellow-400/5 to-transparent">
                <div className="flex items-center justify-between mb-6 text-sm text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-green-400" />
                    Android 5.0+
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-400" />
                    Virus Free
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    v{siteConfig.apkVersion}
                  </span>
                </div>

                <a
                  href={siteConfig.apkDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black text-xl glow-btn pulse-glow hover:scale-105 transition-all"
                >
                  <Download className="w-6 h-6" />
                  Download APK Free
                </a>

                <div className="flex justify-center gap-6 mt-4 text-xs text-white/40">
                  <span>{siteConfig.apkSize}</span>
                  <span>•</span>
                  <span>Free</span>
                  <span>•</span>
                  <span>v{siteConfig.apkVersion}</span>
                </div>

                <div className="flex items-center justify-center gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s <= 5 ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`}
                    />
                  ))}
                  <span className="text-xs text-white/50 ml-1">4.7 (18,500+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APK Details Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-6">
              📋 APK <span className="gradient-text">Details</span>
            </h2>
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <table className="table-custom w-full">
                <tbody>
                  {apkDetails.map((row, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-white/80 w-1/3">{row.label}</td>
                      <td className="text-yellow-400">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0a0a1a]/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-8">
              📱 How to <span className="gradient-text">Install</span> Teen Patti Tiger APK
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {installSteps.map((step) => (
                <div key={step.step} className="glass-card rounded-2xl p-6 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-black mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl border border-green-400/20 p-6 bg-green-400/5">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-green-400 mb-1">APK Safety Verified</h3>
                  <p className="text-sm text-white/70">
                    This APK file has been scanned by VirusTotal and multiple antivirus engines. Zero
                    threats detected. The SHA-256 hash can be verified independently. We scan every
                    new version before publishing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Version History */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-6">
              📦 Version <span className="gradient-text">History</span>
            </h2>
            <div className="space-y-4">
              {[
                { version: "1.4", date: "April 2026", note: "Current — Performance, security & Urdu polish", current: true },
                { version: "1.3.2", date: "March 2026", note: "Bug fixes & payment API updates", current: false },
                { version: "1.3.0", date: "January 2026", note: "Stability improvements", current: false },
              ].map((v) => (
                <div key={v.version} className="glass-card rounded-2xl border border-white/10 p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${v.current ? "bg-yellow-400 text-black" : "bg-white/10 text-white"}`}>
                      v{v.version.split(".")[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">v{v.version}</span>
                        {v.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/15 text-green-400 font-medium">Latest</span>
                        )}
                      </div>
                      <p className="text-xs text-white/50">{v.date} — {v.note}</p>
                    </div>
                  </div>
                  {v.current ? (
                    <a
                      href={siteConfig.apkDownloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-4 py-2 rounded-xl bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 transition-all font-semibold"
                    >
                      Download
                    </a>
                  ) : (
                    <Link
                      href={`/old-versions/${v.version === "2.0.0" ? "v2" : "v1"}`}
                      className="text-xs px-4 py-2 rounded-xl bg-white/10 text-white/70 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all"
                    >
                      Download
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl border border-orange-400/20 p-5 bg-orange-400/5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-white/60">
                  <span className="text-orange-400 font-semibold">Disclaimer: </span>
                  Teen Patti Tiger is for entertainment purposes only. This website is not affiliated
                  with Google Play Store. Download APKs at your own discretion.{" "}
                  <Link href="/disclaimer" className="text-orange-400 underline">
                    Read full disclaimer
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-8 text-center">
              Download <span className="gradient-text">FAQs</span>
            </h2>
            <FaqSection faqs={downloadFaqs} />
          </div>
        </section>
      </div>
    </>
  );
}
