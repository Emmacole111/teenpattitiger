import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import AuthorBox from "@/components/ui/AuthorBox";
import TableOfContents from "@/components/ui/TableOfContents";
import { blogPosts, siteConfig } from "@/lib/siteConfig";
import { articleSchema } from "@/lib/schemas";
import { generateArticleMeta } from "@/lib/metadata";
import { Download, CheckCircle, AlertCircle, Shield } from "lucide-react";

const post = blogPosts[3];

export const metadata = generateArticleMeta(post, {
  metaTitle: "How to Download & Install Teen Patti Tiger APK on Android (2026)",
  metaDescription:
    "Complete step-by-step guide to download and install Teen Patti Tiger APK on any Android phone. Enable Unknown Sources, fix installation errors, and troubleshoot common issues.",
  keywords: [
    "how to install teen patti tiger apk",
    "teen patti tiger apk install guide android",
    "teen patti tiger download steps pakistan",
    "3 patti tiger apk install 2026",
    "teen patti tiger unknown sources",
  ],
});

const tocItems = [
  { id: "requirements", title: "Requirements Before Installing" },
  { id: "enable-unknown", title: "Enable Unknown Sources" },
  { id: "download", title: "Download the APK File" },
  { id: "install", title: "Install & Launch the App" },
  { id: "first-setup", title: "First-Time Setup & Registration" },
  { id: "troubleshoot", title: "Troubleshooting Errors" },
  { id: "safety", title: "Is It Safe to Install?" },
  { id: "faq", title: "FAQs" },
];

const installFaqs = [
  {
    question: 'What does "Install blocked" or "Install from unknown sources" mean?',
    answer:
      'Android prevents APK installations from outside the Play Store by default. You need to enable "Unknown Sources" (Android 7 and below) or grant your browser permission to install APKs (Android 8+). Full steps are in the guide above.',
  },
  {
    question: "Why isn't Teen Patti Tiger on the Google Play Store?",
    answer:
      "Google Play Store policies prohibit real-money gambling applications in Pakistan and most South Asian countries. This applies to every 3 Patti app — not just Teen Patti Tiger. Downloading via APK from the official website is the standard method for all Pakistani players.",
  },
  {
    question: "The APK download is very slow or keeps stopping. What to do?",
    answer:
      "Switch to a WiFi connection if you're on mobile data. If the download fails partway, delete the incomplete file and re-download from scratch — partial APKs won't install. Make sure your browser isn't blocking the download.",
  },
  {
    question: "The app crashes immediately after opening. How to fix?",
    answer:
      "Restart your phone, then open the app again. If it still crashes, go to Settings → Apps → Teen Patti Tiger → Storage → Clear Cache and Clear Data. Then reopen. If the crash persists, uninstall and reinstall the APK.",
  },
  {
    question: "Can I install Teen Patti Tiger on an older Android phone?",
    answer:
      "Yes — Teen Patti Tiger requires Android 5.0 or higher, which covers phones as old as 2014. The app is also optimized for low-RAM devices (1 GB minimum). If you're on an older phone, download the older v1.5.0 from the Old Versions page for better performance.",
  },
  {
    question: "Will installing Teen Patti Tiger APK harm my phone?",
    answer:
      "No, provided you download from the official website. The APK is verified against its official checksum before release. Do not download from YouTube links, random websites, or WhatsApp forwards — those sources sometimes distribute modified APKs with malware.",
  },
];

export default function APKInstallGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: "APK Install Guide", href: "/blog/apk-install-guide" },
            ]}
          />

          <div className="mt-8 grid lg:grid-cols-[1fr_300px] gap-8">
            <article>
              <div className="mb-8">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-400/15 text-purple-400 border border-purple-400/20">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4 leading-tight">
                  How to Download & Install Teen Patti Tiger APK on Android (2026)
                </h1>
                <AuthorBox author={post.author} role={post.authorRole} date={post.date} readTime={post.readTime} />
              </div>

              {/* Featured Image */}
              <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src="/images/download-teen-patti-tiger-on-android.webp"
                  alt="Download Teen Patti Tiger APK on Android – Step by Step Installation Guide"
                  width={700}
                  height={380}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="lg:hidden mb-8">
                <TableOfContents items={tocItems} />
              </div>

              <div className="prose-custom">
                <div className="highlight-box mb-8">
                  <p className="text-sm text-white/80">
                    <strong className="text-yellow-400">Quick Summary:</strong> Download the APK
                    from the official page → Enable Unknown Sources in Android settings → Open the
                    APK file → Install → Register your account. Total time: under 3 minutes.
                    Works on Android 5.0 and above.
                  </p>
                </div>

                {/* Requirements */}
                <h2 id="requirements">Requirements Before Installing</h2>
                <p>
                  Before downloading the Teen Patti Tiger APK, confirm your device meets these
                  requirements. Installation will fail or perform poorly without them.
                </p>
                <div className="not-prose my-5 grid sm:grid-cols-2 gap-3">
                  {[
                    { label: "Android Version", value: "5.0 (Lollipop) or higher", icon: "📱", status: "Required" },
                    { label: "Free Storage", value: "At least 100 MB available", icon: "💾", status: "Required" },
                    { label: "RAM", value: "1 GB minimum (2 GB recommended)", icon: "⚡", status: "Required" },
                    { label: "Internet Connection", value: "3G, 4G, or WiFi", icon: "📶", status: "Required" },
                    { label: "Browser", value: "Chrome or Firefox (recommended)", icon: "🌐", status: "Recommended" },
                    { label: "Unknown Sources", value: "Must be enabled — steps below", icon: "🔓", status: "Required" },
                  ].map((item) => (
                    <div key={item.label} className="glass-card rounded-xl border border-white/10 p-3.5 flex items-center gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">{item.label}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${item.status === "Required" ? "bg-red-400/15 text-red-400" : "bg-blue-400/15 text-blue-400"}`}>{item.status}</span>
                        </div>
                        <span className="text-xs text-white/50">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enable Unknown Sources */}
                <h2 id="enable-unknown">Step 1: Enable Unknown Sources on Android</h2>
                <p>
                  Android blocks APK installations from outside the Play Store by default. You need
                  to grant permission once before installing. The steps differ by Android version:
                </p>
                <div className="not-prose my-5 space-y-3">
                  {[
                    {
                      version: "Android 8.0+ (Oreo and above) — Most phones",
                      steps: [
                        "Open Chrome (or the browser you'll use to download)",
                        "Go to Settings → Apps → Chrome (or your browser)",
                        "Scroll down to 'Install unknown apps'",
                        "Toggle ON 'Allow from this source'",
                      ],
                      color: "border-blue-400/20 bg-blue-400/5",
                      tag: "text-blue-400",
                    },
                    {
                      version: "Android 7.0 and below (Nougat / Marshmallow / Lollipop)",
                      steps: [
                        "Open the Settings app",
                        "Go to Security (or Privacy on some devices)",
                        "Find 'Unknown Sources' and toggle it ON",
                        "Tap OK on the warning dialog",
                      ],
                      color: "border-purple-400/20 bg-purple-400/5",
                      tag: "text-purple-400",
                    },
                  ].map((group) => (
                    <div key={group.version} className={`rounded-2xl border p-5 ${group.color}`}>
                      <p className={`text-sm font-bold mb-3 ${group.tag}`}>{group.version}</p>
                      <ol className="space-y-1.5">
                        {group.steps.map((step, i) => (
                          <li key={i} className="text-xs text-white/65 flex items-start gap-2">
                            <span className={`font-bold flex-shrink-0 ${group.tag}`}>{i + 1}.</span> {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
                <div className="glass-card rounded-xl border border-green-400/20 bg-green-400/5 p-4 not-prose flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/65">
                    You can disable Unknown Sources again after installing the APK. It&apos;s a
                    one-time permission for this specific download.
                  </p>
                </div>

                {/* Download */}
                <h2 id="download">Step 2: Download the Teen Patti Tiger APK</h2>
                <p>
                  Once Unknown Sources is enabled, you&apos;re ready to download:
                </p>
                <div className="not-prose my-5 space-y-3">
                  {[
                    { step: "1", text: "Open Chrome on your Android phone and go to the official Teen Patti Tiger download page", highlight: false },
                    { step: "2", text: "Tap the large Download APK button. The file is approximately 44 MB — it downloads in under a minute on 4G", highlight: false },
                    { step: "3", text: "You'll see a download progress bar at the bottom of your screen. Wait for it to complete fully before proceeding", highlight: false },
                    { step: "4", text: "If Chrome asks 'This type of file can harm your device. Keep?' — tap KEEP. This warning appears for all APK files, including safe ones", highlight: true },
                  ].map(({ step, text, highlight }) => (
                    <div key={step} className={`flex items-start gap-4 rounded-xl border p-4 ${highlight ? "border-yellow-400/20 bg-yellow-400/5" : "glass-card border-white/10"}`}>
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-black text-xs flex-shrink-0">
                        {step}
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p>
                  The downloaded APK file will be saved to your Downloads folder automatically.
                  Verify the file name matches <code className="text-yellow-400 bg-white/5 px-1.5 py-0.5 rounded text-xs">TeenPattiTiger_v{siteConfig.apkVersion}.apk</code> and the size is approximately {siteConfig.apkSize}.
                </p>

                {/* Install */}
                <h2 id="install">Step 3: Install & Launch the App</h2>
                <div className="not-prose my-5 space-y-3">
                  {[
                    { step: "1", title: "Open the downloaded file", desc: "Pull down your notification bar and tap the completed download notification. Alternatively, open your file manager app and navigate to Downloads." },
                    { step: "2", title: "Tap Install", desc: "Android shows you the app permissions it needs. Review them (network access and storage are standard for gaming apps), then tap Install." },
                    { step: "3", title: "Wait for installation", desc: "Installation takes 20–40 seconds. You'll see a progress bar. Do not close the screen during this process." },
                    { step: "4", title: "Tap Open", desc: "When installation completes, tap Open to launch Teen Patti Tiger immediately. Alternatively, find the app icon in your app drawer." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex items-start gap-4 glass-card rounded-xl border border-white/10 p-4">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/10 border border-purple-400/25 flex items-center justify-center text-purple-400 font-black text-sm flex-shrink-0">
                        {step}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{title}</p>
                        <p className="text-xs text-white/55 mt-1 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* First Setup */}
                <h2 id="first-setup">Step 4: First-Time Setup & Registration</h2>
                <p>
                  The first launch opens the registration screen. Complete these steps to secure
                  your account and claim your welcome bonus:
                </p>
                <ul>
                  <li><strong className="text-white">Register with your mobile number</strong> — enter your Pakistani number (+92) and verify with the OTP</li>
                  <li><strong className="text-white">Create a username and password</strong> — use a strong password and store it somewhere safe</li>
                  <li><strong className="text-white">Add your email address</strong> for account recovery (optional but strongly recommended)</li>
                  <li><strong className="text-white">Bind your JazzCash or EasyPaisa account</strong> in the Wallet section before playing — you need this to withdraw winnings</li>
                  <li><strong className="text-white">Navigate to Bonuses and claim your Welcome Bonus</strong> — make your first deposit of ₨500+ to trigger the ₨5,000 welcome match</li>
                </ul>

                {/* Troubleshooting */}
                <h2 id="troubleshoot">Troubleshooting Common Installation Errors</h2>
                <div className="not-prose my-5 space-y-3">
                  {[
                    {
                      problem: '"App not installed" error',
                      cause: "Previous version conflict or insufficient storage",
                      fix: "Uninstall any existing Teen Patti Tiger version first. Check storage — you need at least 100 MB free.",
                      icon: "⚠️",
                      color: "border-red-400/20 bg-red-400/5",
                    },
                    {
                      problem: '"Parse error" message',
                      cause: "The APK file is corrupted or incomplete",
                      fix: "Delete the downloaded file completely and re-download from scratch. Partial downloads cause parse errors.",
                      icon: "🔄",
                      color: "border-orange-400/20 bg-orange-400/5",
                    },
                    {
                      problem: "Installation blocked / Unknown sources warning",
                      cause: "Unknown Sources is not enabled for your browser",
                      fix: 'Go back to Step 1 and follow the Unknown Sources instructions for your specific Android version.',
                      icon: "🔒",
                      color: "border-yellow-400/20 bg-yellow-400/5",
                    },
                    {
                      problem: "Download stuck at 0% or very slow",
                      cause: "Weak internet connection or server-side throttling",
                      fix: "Switch to WiFi. If on WiFi, try mobile data instead. Clear your browser cache and retry.",
                      icon: "📶",
                      color: "border-blue-400/20 bg-blue-400/5",
                    },
                    {
                      problem: "App crashes immediately on launch",
                      cause: "Installation incomplete or cache corruption",
                      fix: "Settings → Apps → Teen Patti Tiger → Storage → Clear Cache → Clear Data. Restart phone, reopen app.",
                      icon: "💥",
                      color: "border-purple-400/20 bg-purple-400/5",
                    },
                    {
                      problem: "Game lags or runs poorly",
                      cause: "Insufficient RAM or storage",
                      fix: "Close all background apps before launching. Free up storage space. For very old phones, try the v1.5.0 APK (35 MB, lighter build).",
                      icon: "🐌",
                      color: "border-white/10",
                    },
                  ].map((item) => (
                    <div key={item.problem} className={`glass-card rounded-xl border p-4 ${item.color}`}>
                      <div className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-bold text-white text-sm mb-1">{item.problem}</p>
                          <p className="text-xs text-white/45 mb-1.5"><em>Cause: {item.cause}</em></p>
                          <p className="text-xs text-white/70"><strong className="text-yellow-400">Fix:</strong> {item.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Safety */}
                <h2 id="safety">Is It Safe to Install Teen Patti Tiger APK?</h2>
                <p>
                  Yes — with one important condition: download only from the official Teen Patti
                  Tiger website. Here&apos;s what you need to know:
                </p>
                <div className="not-prose my-5 grid sm:grid-cols-2 gap-4">
                  <div className="glass-card rounded-2xl border border-green-400/20 bg-green-400/5 p-5">
                    <CheckCircle className="w-5 h-5 text-green-400 mb-3" />
                    <h3 className="font-bold text-green-400 text-sm mb-2">Safe Practices</h3>
                    <ul className="space-y-1.5">
                      {[
                        "Download only from this website or official domain",
                        "Verify APK file size matches published specs ({siteConfig.apkSize})",
                        "Keep your Android updated with security patches",
                        "Use a strong password and enable 2FA",
                        "Bind your payment account before depositing",
                      ].map((item, i) => (
                        <li key={i} className="text-xs text-white/65 flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl border border-red-400/20 bg-red-400/5 p-5">
                    <AlertCircle className="w-5 h-5 text-red-400 mb-3" />
                    <h3 className="font-bold text-red-400 text-sm mb-2">Avoid These</h3>
                    <ul className="space-y-1.5">
                      {[
                        "APKs shared via WhatsApp groups or Facebook posts",
                        "YouTube download links — almost never official",
                        "Third-party APK mirror sites",
                        "Any APK that asks for unusual permissions (SMS, Contacts)",
                        "Files significantly larger or smaller than the official APK",
                      ].map((item, i) => (
                        <li key={i} className="text-xs text-white/65 flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">✕</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="glass-card rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5 not-prose flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/65 leading-relaxed">
                    <strong className="text-blue-400">Security note:</strong> The official Teen Patti
                    Tiger APK does not request access to your SMS, contacts, or camera unless you
                    explicitly grant it for specific features. Any APK that demands these permissions
                    upfront during installation is not the official build.
                  </p>
                </div>

                <div className="glass-card rounded-2xl border border-green-400/20 bg-green-400/5 p-5 not-prose mt-5 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-green-400 mb-1">Successfully installed?</p>
                    <p className="text-xs text-white/65 leading-relaxed">
                      Register your account, bind your JazzCash or EasyPaisa, and claim your{" "}
                      <Link href="/bonuses/welcome-bonus" className="text-yellow-400 hover:underline">
                        ₨5,000 welcome bonus
                      </Link>
                      . Then read our{" "}
                      <Link href="/blog/how-to-play-teen-patti-tiger" className="text-yellow-400 hover:underline">
                        beginner&apos;s guide
                      </Link>{" "}
                      to start playing correctly.
                    </p>
                  </div>
                </div>
              </div>

              <div id="faq" className="mt-10">
                <h2 className="text-2xl font-black text-white mb-6">Installation FAQs</h2>
                <FaqSection faqs={installFaqs} />
              </div>

              <div className="mt-10 glass-card rounded-2xl border border-yellow-400/20 p-6 bg-yellow-400/5 text-center">
                <h3 className="font-black text-white text-xl mb-2">Ready to Install?</h3>
                <p className="text-white/60 text-sm mb-4">Get the latest v{siteConfig.apkVersion} APK from the official download page.</p>
                <a href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold glow-btn">
                  <Download className="w-4 h-4" />
                  Download APK Free
                </a>
              </div>

              <div className="mt-10">
                <h3 className="font-black text-white text-xl mb-4">After Installing — What's Next?</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { href: "/blog/how-to-play-teen-patti-tiger", title: "How to Play Guide", emoji: "📖" },
                    { href: "/bonuses/welcome-bonus", title: "Claim ₨5,000 Bonus", emoji: "🎁" },
                    { href: "/blog/earning-guide", title: "Earning Guide 2026", emoji: "💰" },
                    { href: "/blog/tips-and-tricks", title: "Tips & Tricks", emoji: "📊" },
                    { href: "/old-versions", title: "Old Version APKs", emoji: "📦" },
                    { href: "/teen-patti-tiger-for-pc", title: "Play on PC Instead", emoji: "💻" },
                    { href: "/games", title: "All Games Overview", emoji: "🎮" },
                    { href: "/bonuses", title: "All Bonuses", emoji: "💎" },
                    { href: "/bonuses/daily-rewards", title: "Daily Login Rewards", emoji: "📅" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="glass-card rounded-xl border border-white/10 p-3.5 hover:border-yellow-400/30 transition-all group flex items-center gap-2.5">
                      <span className="text-xl flex-shrink-0">{l.emoji}</span>
                      <span className="text-sm font-semibold text-white/80 group-hover:text-yellow-400 transition-colors">{l.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <TableOfContents items={tocItems} />
                <div className="glass-card rounded-2xl border border-yellow-400/20 p-5 bg-yellow-400/5 text-center">
                  <span className="text-4xl block mb-3">📱</span>
                  <h3 className="font-black text-white mb-1 text-sm">Download APK Now</h3>
                  <p className="text-xs text-white/50 mb-3">v{siteConfig.apkVersion} · {siteConfig.apkSize} · Free</p>
                  <a href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm glow-btn">
                    Download APK
                  </a>
                </div>
                <div className="glass-card rounded-2xl border border-white/10 p-4">
                  <h3 className="font-semibold text-white text-sm mb-3">After Installing</h3>
                  <div className="space-y-2">
                    {[
                      { href: "/bonuses/welcome-bonus", label: "Claim ₨5,000 Bonus" },
                      { href: "/blog/how-to-play-teen-patti-tiger", label: "How to Play" },
                      { href: "/games", label: "All Games Guide" },
                      { href: "/old-versions", label: "Older Versions" },
                    ].map((l) => (
                      <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-yellow-400 transition-colors py-1 border-b border-white/5 last:border-0">
                        → {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
