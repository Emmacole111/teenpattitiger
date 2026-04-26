import Image from "next/image";
import Link from "next/link";
import { Download, Monitor, Smartphone, CheckCircle, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "Teen Patti Tiger for PC – Download & Play on Windows & Mac (2026)",
  description:
    "Play Teen Patti Tiger on PC using BlueStacks or LDPlayer emulator. Complete guide to download and install Teen Patti Tiger on Windows 10, 11 and Mac for Pakistan players. Free setup, 5 minutes.",
  path: "/teen-patti-tiger-for-pc",
  keywords: [
    "teen patti tiger for pc",
    "teen patti tiger windows",
    "teen patti tiger on computer",
    "bluestacks teen patti tiger pakistan",
    "3 patti tiger pc download 2026",
    "teen patti tiger mac",
  ],
});

const pcFaqs = [
  {
    question: "Which emulator is best for Teen Patti Tiger on PC?",
    answer:
      "BlueStacks 5 is the most widely recommended emulator for Teen Patti Tiger. It's free, has a native Android 9 core, and runs smoothly on any Windows PC made after 2015. LDPlayer is a strong alternative for lower-spec machines — it's lighter and uses less RAM.",
  },
  {
    question: "Is Teen Patti Tiger on PC completely free?",
    answer:
      "Yes. Both BlueStacks and Teen Patti Tiger APK are completely free to download. The only costs are optional in-app deposits if you choose to play with real money. You can use bonus chips to play without spending anything.",
  },
  {
    question: "Will my account work on both mobile and PC?",
    answer:
      "Yes. Teen Patti Tiger accounts sync across devices via your phone number login. Play a round on mobile, continue on PC, or switch between them freely. Chips, bonuses, and VIP progress all carry over.",
  },
  {
    question: "What PC specs do I need for smooth gameplay?",
    answer:
      "Minimum: Intel Core i3 or AMD equivalent, 4 GB RAM, 5 GB free storage, Windows 7+ or macOS 10.12+. For a smooth, high-quality experience: Intel Core i5, 8 GB RAM, dedicated GPU. BlueStacks also requires Virtualization Technology (VT-x/AMD-V) to be enabled in your BIOS.",
  },
  {
    question: "Can I play on PC and mobile at the same time on the same account?",
    answer:
      "No — simultaneous logins on the same account are not permitted. If you log in on PC while already logged in on mobile, the mobile session will be logged out. Switch between devices freely, but use them one at a time.",
  },
  {
    question: "Does Teen Patti Tiger look better on PC than on mobile?",
    answer:
      "Yes. On a large monitor, the card tables are much larger and easier to read. The UI scales up beautifully, and you can use keyboard shortcuts within BlueStacks to speed up your play. The overall experience is significantly more comfortable for longer sessions.",
  },
];

export default function PCVersionPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Teen Patti Tiger for PC", href: "/teen-patti-tiger-for-pc" }]} />

        <div className="mt-8">
          {/* Hero */}
          <div className="glass-card rounded-3xl border border-purple-500/20 p-8 sm:p-12 mb-10 bg-gradient-to-br from-purple-600/10 to-blue-600/10 text-center">
            <Monitor className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Teen Patti Tiger{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                for PC
              </span>
            </h1>
            <p className="text-white/65 max-w-2xl mx-auto mb-3 leading-relaxed">
              Play Teen Patti Tiger on your Windows or Mac computer using a free Android emulator.
              Bigger screen, faster play, keyboard shortcuts — the full experience on your desktop.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs mb-8">
              {["Windows 7/8/10/11 ✓", "macOS 10.12+ ✓", "100% Free ✓", "BlueStacks / LDPlayer ✓"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-xl glass-card border border-purple-400/20 text-purple-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.bluestacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold hover:scale-105 transition-all shadow-xl"
              >
                <Download className="w-4 h-4" />
                Download BlueStacks Free
              </a>
              <a
                href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/20 text-white font-bold hover:border-purple-400/40 transition-all"
              >
                <Smartphone className="w-4 h-4" />
                Get APK File
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden mb-10 border border-white/10">
            <Image
              src="/images/teen-patti-tiger-for-pc.webp"
              alt="Teen Patti Tiger for PC – Download & Play on Windows and Mac with BlueStacks"
              width={800}
              height={420}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Quick overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Setup Time", value: "~5 minutes", icon: "⏱️" },
              { label: "Cost", value: "100% Free", icon: "✅" },
              { label: "Emulator", value: "BlueStacks 5", icon: "💻" },
              { label: "OS Support", value: "Win + Mac", icon: "🖥️" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl border border-white/10 p-4 text-center">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-white font-black text-base">{stat.value}</div>
                <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why play on PC */}
          <div className="mb-10">
            <h2 className="text-2xl font-black text-white mb-2">
              Why Play Teen Patti Tiger on PC?
            </h2>
            <p className="text-white/55 text-sm mb-6 leading-relaxed max-w-3xl">
              The mobile app is excellent, but PC gameplay offers advantages that serious players
              genuinely appreciate — especially during long sessions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Bigger Screen = Better Cards",
                  desc: "Reading card values, tracking pot sizes, and monitoring opponents is significantly easier on a 21-inch monitor than a 6-inch phone screen.",
                  icon: "🖥️",
                },
                {
                  title: "No Battery Anxiety",
                  desc: "Long sessions on mobile drain the battery fast. PC gameplay runs indefinitely — no chargers, no overheating worries, no battery warnings.",
                  icon: "🔋",
                },
                {
                  title: "Keyboard Shortcuts",
                  desc: "BlueStacks lets you map keyboard keys to in-game actions. Speed up betting, fold quickly, or trigger actions with single keystrokes.",
                  icon: "⌨️",
                },
                {
                  title: "Multi-Window Capability",
                  desc: "Run BlueStacks alongside a browser to check strategies or track bonuses simultaneously — something impossible on a single-screen phone.",
                  icon: "🪟",
                },
                {
                  title: "Better Internet Connection",
                  desc: "Wired Ethernet on a PC provides more stable latency than mobile data or WiFi — important for fast-action games like Dragon vs Tiger.",
                  icon: "🌐",
                },
                {
                  title: "Account Security",
                  desc: "Your PC session can remain logged in between play sessions without the app being closed. No repeated login OTPs every session.",
                  icon: "🔐",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-2xl border border-white/10 p-5 flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-step guide */}
          <h2 className="text-2xl font-black text-white mb-6">
            Complete Step-by-Step{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Installation Guide
            </span>
          </h2>

          <div className="space-y-4 mb-12">
            {[
              {
                step: 1,
                title: "Download BlueStacks Emulator",
                desc: "Go to bluestacks.com and download BlueStacks 5 for Windows or Mac. The installer file is approximately 600 MB. Pick the version matching your OS — do not use BlueStacks 4 or older versions.",
                icon: "📥",
                time: "~5 min download",
              },
              {
                step: 2,
                title: "Install BlueStacks",
                desc: "Run the downloaded installer (BlueStacks-Installer.exe on Windows). Accept the license agreement, choose the installation location, and click Install Now. The process takes 3–5 minutes and sets up a full Android environment on your PC.",
                icon: "⚙️",
                time: "~5 min install",
              },
              {
                step: 3,
                title: "Complete BlueStacks Initial Setup",
                desc: "After installation, BlueStacks launches automatically. Complete the initial setup — you may need to sign in with a Google account (optional for installing APKs directly). Let BlueStacks finish its configuration process.",
                icon: "🔧",
                time: "~2 min",
              },
              {
                step: 4,
                title: "Download the Teen Patti Tiger APK",
                desc: "On your PC browser, visit the Teen Patti Tiger download page and download the APK file. Save it to your Desktop or Downloads folder for easy access. Do not open the APK in the browser — save it to disk first.",
                icon: "📱",
                time: "~1 min download",
              },
              {
                step: 5,
                title: "Install the APK in BlueStacks",
                desc: 'Two methods work: (1) Drag the APK file directly into the BlueStacks window — it installs automatically. (2) In BlueStacks, click the folder icon in the sidebar, select "Install APK", and navigate to your downloaded file.',
                icon: "📲",
                time: "~1 min",
              },
              {
                step: 6,
                title: "Launch Teen Patti Tiger",
                desc: "Find the Teen Patti Tiger icon in the BlueStacks home screen or app drawer. Click it to launch. Register your account using your Pakistani phone number, link your JazzCash/EasyPaisa wallet, and claim your welcome bonus.",
                icon: "🎮",
                time: "~2 min setup",
              },
            ].map((step) => (
              <div key={step.step} className="glass-card rounded-2xl border border-white/10 p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-black text-white text-lg flex-shrink-0 shadow-lg shadow-purple-900/30">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span>{step.icon}</span>
                      <h3 className="font-bold text-white text-sm">{step.title}</h3>
                    </div>
                    <span className="text-[10px] text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full border border-purple-400/20">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Emulator comparison */}
          <div className="mb-10">
            <h2 className="text-2xl font-black text-white mb-6">
              BlueStacks vs LDPlayer – Which to Choose?
            </h2>
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <table className="table-custom w-full text-sm">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>BlueStacks 5</th>
                    <th>LDPlayer 9</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Android Version", bs: "Android 9 (Pie)", ld: "Android 9 (Pie)" },
                    { feature: "RAM Usage", bs: "~1.5 GB", ld: "~1 GB" },
                    { feature: "Best For", bs: "Most users", ld: "Low-spec PCs" },
                    { feature: "APK Install Support", bs: "✓ Yes", ld: "✓ Yes" },
                    { feature: "Keyboard Mapping", bs: "✓ Full support", ld: "✓ Full support" },
                    { feature: "macOS Support", bs: "✓ Official support", ld: "✗ Windows only" },
                    { feature: "Performance", bs: "Excellent", ld: "Very Good" },
                    { feature: "Price", bs: "Free (with ads)", ld: "Free" },
                  ].map((row) => (
                    <tr key={row.feature}>
                      <td className="font-medium text-white/80">{row.feature}</td>
                      <td className="text-purple-300">{row.bs}</td>
                      <td className="text-blue-300">{row.ld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/45 mt-3">
              Recommendation: Use BlueStacks 5 on Mac (only option) or on a decent Windows PC. Use
              LDPlayer if your PC has less than 4 GB RAM or struggles to run BlueStacks smoothly.
            </p>
          </div>

          {/* System requirements */}
          <div className="mb-10">
            <h2 className="text-2xl font-black text-white mb-6">
              System Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  os: "Windows",
                  icon: "🪟",
                  requirements: [
                    { label: "OS", value: "Windows 7 / 8 / 10 / 11 (64-bit)", status: "required" },
                    { label: "Processor", value: "Intel or AMD multi-core CPU", status: "required" },
                    { label: "RAM (Minimum)", value: "4 GB", status: "required" },
                    { label: "RAM (Recommended)", value: "8 GB", status: "recommended" },
                    { label: "Storage", value: "5 GB free space", status: "required" },
                    { label: "GPU", value: "Any DirectX 9.0c or higher", status: "required" },
                    { label: "Virtualization", value: "Intel VT-x or AMD-V enabled in BIOS", status: "required" },
                  ],
                },
                {
                  os: "Mac",
                  icon: "🍎",
                  requirements: [
                    { label: "OS", value: "macOS 10.12 Sierra or later", status: "required" },
                    { label: "Processor", value: "Intel Core or Apple Silicon (M1/M2/M3)", status: "required" },
                    { label: "RAM (Minimum)", value: "4 GB", status: "required" },
                    { label: "RAM (Recommended)", value: "8 GB", status: "recommended" },
                    { label: "Storage", value: "5 GB free space", status: "required" },
                    { label: "Note", value: "Apple Silicon requires Rosetta 2 (auto-install)", status: "info" },
                    { label: "Internet", value: "Required for gameplay", status: "required" },
                  ],
                },
              ].map((sys) => (
                <div key={sys.os} className="glass-card rounded-2xl border border-white/10 p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-base">
                    <span>{sys.icon}</span> {sys.os} Requirements
                  </h3>
                  <div className="space-y-2">
                    {sys.requirements.map((r) => (
                      <div key={r.label} className="flex items-start justify-between gap-2">
                        <span className="text-xs text-white/40 flex-shrink-0 w-28">{r.label}</span>
                        <span className="text-xs text-white/75 text-right">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="mb-10">
            <h2 className="text-2xl font-black text-white mb-6">Troubleshooting BlueStacks Issues</h2>
            <div className="space-y-3">
              {[
                {
                  problem: "BlueStacks won't start / crashes on launch",
                  fix: "Enable Virtualization Technology in your BIOS settings. Restart your PC, enter BIOS (usually F2 or DEL key on startup), find Virtualization (VT-x or AMD-V), and enable it. Save and restart.",
                  icon: "💻",
                },
                {
                  problem: "Teen Patti Tiger APK fails to install in BlueStacks",
                  fix: "Make sure BlueStacks is fully loaded (past the home screen) before dragging the APK. If drag-and-drop fails, use the 'Install APK' button in the sidebar menu instead.",
                  icon: "📲",
                },
                {
                  problem: "Game runs very slowly or lags on PC",
                  fix: "In BlueStacks settings, increase the allocated RAM to 4 GB and CPU cores to 4. Also set Performance Mode to 'High Performance'. If still slow, close all other programs while playing.",
                  icon: "🐌",
                },
                {
                  problem: "Can't connect to game servers through BlueStacks",
                  fix: "Restart BlueStacks and your internet router. Temporarily disable your PC antivirus or firewall — some security software blocks emulator network traffic. Add BlueStacks to the antivirus exception list.",
                  icon: "🌐",
                },
                {
                  problem: "BlueStacks ads are intrusive",
                  fix: "Consider LDPlayer as an alternative — it's completely ad-free. Or use BlueStacks with an ad blocker extension installed in its browser.",
                  icon: "📢",
                },
              ].map((item) => (
                <div key={item.problem} className="glass-card rounded-2xl border border-white/10 p-5 flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-2">{item.problem}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-white/60 leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prefer mobile note */}
          <div className="glass-card rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-6 mb-10">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-yellow-400 text-sm mb-2">Prefer Playing on Mobile?</p>
                <p className="text-xs text-white/65 leading-relaxed mb-3">
                  The Android app offers the same full feature set as the PC version and is
                  optimized for all Android phones. For most Pakistani players, mobile is the
                  more convenient option.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xs">
                    Download Mobile APK
                  </a>
                  <Link href="/blog/apk-install-guide" className="px-4 py-2 rounded-xl glass-card border border-white/20 text-white font-bold text-xs hover:border-yellow-400/30 transition-all">
                    APK Install Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-black text-white mb-6">
            PC Version <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">FAQs</span>
          </h2>
          <FaqSection faqs={pcFaqs} />

          {/* Related links */}
          <div className="mt-10">
            <h3 className="font-black text-white text-xl mb-4">Related Guides</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/blog/apk-install-guide", title: "APK Install Guide", emoji: "📱" },
                { href: "/blog/how-to-play-teen-patti-tiger", title: "How to Play Guide", emoji: "📖" },
                { href: "/bonuses/welcome-bonus", title: "Claim ₨5,000 Bonus", emoji: "🎁" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="glass-card rounded-xl border border-white/10 p-4 hover:border-purple-400/30 transition-all group">
                  <span className="text-2xl block mb-2">{l.emoji}</span>
                  <span className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">{l.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
