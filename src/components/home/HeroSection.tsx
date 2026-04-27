import Link from "next/link";
import { Download, Play, Star, Shield, Users, Zap, Package } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import HeroPhoneMockup from "@/components/home/HeroPhoneMockup";
import HeroMetaRow from "@/components/home/HeroMetaRow";

const APK_URL = siteConfig.apkDownloadUrl;

const stars = [
  { top:"8%",  left:"5%",  size:2, dur:"2.5s", del:"0s"   },
  { top:"25%", left:"8%",  size:1, dur:"2.8s", del:"1.2s"  },
  { top:"60%", left:"12%", size:1, dur:"2.2s", del:"1.8s"  },
  { top:"10%", left:"88%", size:2, dur:"2.9s", del:"0.4s"  },
  { top:"45%", left:"95%", size:3, dur:"2.6s", del:"0.9s"  },
  { top:"5%",  left:"50%", size:2, dur:"3.3s", del:"0.6s"  },
  { top:"88%", left:"45%", size:3, dur:"2.4s", del:"1.7s"  },
  { top:"55%", left:"25%", size:2, dur:"2.9s", del:"1.4s"  },
];

const stats = [
  { icon: Download, value: "2M+",  label: "Downloads",    color: "from-yellow-400/20 to-orange-500/10", border: "border-yellow-400/20", text: "text-yellow-400" },
  { icon: Star,     value: "4.7★", label: "Rating",       color: "from-blue-500/20 to-indigo-500/10",   border: "border-blue-400/20",   text: "text-blue-400"   },
  { icon: Users,    value: "500K+",label: "Players",      color: "from-green-500/20 to-emerald-500/10", border: "border-green-400/20",  text: "text-green-400"  },
  { icon: Shield,   value: "Safe", label: "Verified APK", color: "from-purple-500/20 to-violet-500/10", border: "border-purple-400/20", text: "text-purple-400" },
  { icon: Package,  value: `v${siteConfig.apkVersion}`, label: "Latest Version", color: "from-cyan-500/20 to-teal-500/10", border: "border-cyan-400/20", text: "text-cyan-400" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-x-hidden hero-bg grid-pattern">

      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white star pointer-events-none"
            style={{
              top: s.top, left: s.left,
              width: s.size, height: s.size,
              ["--duration" as string]: s.dur,
              ["--delay" as string]: s.del,
            }}
          />
        ))}
      </div>

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-700/12 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/8 rounded-full blur-[100px] pointer-events-none translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[400px] bg-indigo-900/15 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Desktop: two columns ────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left column: text + CTAs + meta */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-badge text-yellow-400 text-xs font-bold mb-6 tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5 fill-yellow-400" aria-hidden />
              #1 Card Game in Pakistan 2026
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.08] mb-5 tracking-tight">
              <span className="text-white block">Teen Patti Tiger APK</span>
              <span className="gradient-text block my-1">Free Download for Pakistan</span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Pakistan&apos;s most trusted card game. Play Teen Patti, Dragon vs Tiger &amp; Aviator.
              Withdraw via <span className="text-green-400 font-semibold">JazzCash</span> &amp;{" "}
              <span className="text-orange-400 font-semibold">EasyPaisa</span> in minutes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
              {stats.map(({ icon: Icon, value, label, color, border, text }) => (
                <div key={label} className={`gradient-border-card p-3.5 bg-gradient-to-br ${color} border ${border} text-center hover:-translate-y-1 transition-all duration-300`}>
                  <Icon className={`w-5 h-5 ${text} mx-auto mb-1.5`} />
                  <div className={`text-lg font-black ${text}`}>{value}</div>
                  <div className="text-[10px] text-white/65 font-medium">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <a href={APK_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black text-base glow-btn pulse-glow shadow-2xl">
                <Download className="w-5 h-5" />
                Download APK Free
              </a>
              <Link href="/games"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-base text-white hover:-translate-y-0.5 transition-all duration-200"
                style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", backdropFilter:"blur(12px)" }}>
                <Play className="w-5 h-5 text-yellow-400 fill-yellow-400/30" />
                Explore Games
              </Link>
            </div>

            <HeroMetaRow />
          </div>

          {/* Right column: phone */}
          <div className="flex justify-center" aria-hidden>
            <HeroPhoneMockup />
          </div>
        </div>

        {/* ── Mobile/Tablet: single column, strict DOM order ── */}
        <div className="lg:hidden">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-badge text-yellow-400 text-xs font-bold mb-6 tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5 fill-yellow-400" aria-hidden />
            #1 Card Game in Pakistan 2026
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden />
          </div>

          <h1 className="text-4xl sm:text-5xl font-black leading-[1.08] mb-5 tracking-tight">
            <span className="text-white block">Teen Patti Tiger APK</span>
            <span className="gradient-text block my-1">Free Download for Pakistan</span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">
            Pakistan&apos;s most trusted card game. Play Teen Patti, Dragon vs Tiger &amp; Aviator.
            Withdraw via <span className="text-green-400 font-semibold">JazzCash</span> &amp;{" "}
            <span className="text-orange-400 font-semibold">EasyPaisa</span> in minutes.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {stats.map(({ icon: Icon, value, label, color, border, text }) => (
              <div key={label} className={`gradient-border-card p-3.5 bg-gradient-to-br ${color} border ${border} text-center hover:-translate-y-1 transition-all duration-300`}>
                <Icon className={`w-5 h-5 ${text} mx-auto mb-1.5`} />
                <div className={`text-lg font-black ${text}`}>{value}</div>
                <div className="text-[10px] text-white/65 font-medium">{label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a href={APK_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black text-base glow-btn pulse-glow shadow-2xl">
              <Download className="w-5 h-5" />
              Download APK Free
            </a>
            <Link href="/games"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-base text-white hover:-translate-y-0.5 transition-all duration-200"
              style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", backdropFilter:"blur(12px)" }}>
              <Play className="w-5 h-5 text-yellow-400 fill-yellow-400/30" />
              Explore Games
            </Link>
          </div>

          {/* ★ Phone mockup — physically after the download button in DOM */}
          <div className="flex justify-center overflow-x-clip py-6" aria-hidden>
            <HeroPhoneMockup />
          </div>

          {/* Meta row below phone */}
          <HeroMetaRow className="justify-center" />
        </div>

      </div>
    </section>
  );
}
