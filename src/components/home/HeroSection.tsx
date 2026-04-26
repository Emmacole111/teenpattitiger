"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, Play, Star, Shield, Users, Zap, ChevronDown, Package } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const APK_URL = siteConfig.apkDownloadUrl;

const stars = [
  { top:"8%",  left:"5%",  size:2, dur:"2.5s", del:"0s"   },
  { top:"15%", left:"18%", size:3, dur:"3.2s", del:"0.5s"  },
  { top:"25%", left:"8%",  size:1, dur:"2.8s", del:"1.2s"  },
  { top:"40%", left:"3%",  size:2, dur:"3.5s", del:"0.3s"  },
  { top:"60%", left:"12%", size:1, dur:"2.2s", del:"1.8s"  },
  { top:"75%", left:"6%",  size:3, dur:"3.8s", del:"0.7s"  },
  { top:"10%", left:"88%", size:2, dur:"2.9s", del:"0.4s"  },
  { top:"22%", left:"93%", size:1, dur:"3.1s", del:"1.5s"  },
  { top:"45%", left:"95%", size:3, dur:"2.6s", del:"0.9s"  },
  { top:"65%", left:"90%", size:2, dur:"3.4s", del:"0.2s"  },
  { top:"80%", left:"85%", size:1, dur:"2.7s", del:"1.1s"  },
  { top:"5%",  left:"50%", size:2, dur:"3.3s", del:"0.6s"  },
  { top:"88%", left:"45%", size:3, dur:"2.4s", del:"1.7s"  },
  { top:"18%", left:"70%", size:1, dur:"3.6s", del:"0.8s"  },
  { top:"55%", left:"25%", size:2, dur:"2.9s", del:"1.4s"  },
];

const stats = [
  { icon: Download, value: "2M+",  label: "Downloads",   color: "from-yellow-400/20 to-orange-500/10", border: "border-yellow-400/20", text: "text-yellow-400" },
  { icon: Star,     value: "4.7★", label: "Rating",      color: "from-blue-500/20 to-indigo-500/10",   border: "border-blue-400/20",   text: "text-blue-400"   },
  { icon: Users,    value: "500K+",label: "Players",     color: "from-green-500/20 to-emerald-500/10", border: "border-green-400/20",  text: "text-green-400"  },
  { icon: Shield,   value: "Safe", label: "Verified APK",color: "from-purple-500/20 to-violet-500/10", border: "border-purple-400/20", text: "text-purple-400" },
  { icon: Package,  value: `v${siteConfig.apkVersion}`, label: "Latest Version", color: "from-cyan-500/20 to-teal-500/10", border: "border-cyan-400/20", text: "text-cyan-400" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-bg grid-pattern">

      {/* Star field */}
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

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-700/12 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/8 rounded-full blur-[100px] pointer-events-none translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[400px] bg-indigo-900/15 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ─────────────────────────────────────── */}
          <div className="order-2 lg:order-1">

            {/* Neon badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-badge text-yellow-400 text-xs font-bold mb-6 tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5 fill-yellow-400" />
              #1 Card Game in Pakistan 2026
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.08] mb-5 tracking-tight">
              <span className="text-white block">Teen Patti Tiger APK</span>
              <span className="gradient-text block my-1">Free Download for Pakistan</span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
              Pakistan&apos;s most trusted card game. Play Teen Patti, Dragon vs Tiger &amp; Aviator.
              Withdraw via <span className="text-green-400 font-semibold">JazzCash</span> &amp;{" "}
              <span className="text-orange-400 font-semibold">EasyPaisa</span> in minutes.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
              {stats.map(({ icon: Icon, value, label, color, border, text }) => (
                <div key={label} className={`gradient-border-card p-3.5 bg-gradient-to-br ${color} border ${border} text-center hover:-translate-y-1 transition-all duration-300`}>
                  <Icon className={`w-5 h-5 ${text} mx-auto mb-1.5`} />
                  <div className={`text-lg font-black ${text}`}>{value}</div>
                  <div className="text-[10px] text-white/50 font-medium">{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black text-base glow-btn pulse-glow shadow-2xl"
              >
                <Download className="w-5 h-5" />
                Download APK Free
              </a>
              <Link
                href="/games"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-base text-white hover:-translate-y-0.5 transition-all duration-200"
                style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", backdropFilter:"blur(12px)" }}
              >
                <Play className="w-5 h-5 text-yellow-400 fill-yellow-400/30" />
                Explore Games
              </Link>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/35">
              {[`v${siteConfig.apkVersion}`, siteConfig.apkSize, "Android 5.0+", "Free", "No VPN needed"].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-white/20" />}
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Phone Mockup ──────────────────────── */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative float-animation">

              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-[3rem] scale-[1.15]"
                style={{ background:"linear-gradient(135deg,rgba(245,197,24,0.15),rgba(138,43,226,0.15))", filter:"blur(30px)" }} />

              {/* Spinning dashed ring */}
              <div className="absolute inset-0 rounded-full scale-[1.25] border-2 border-dashed border-yellow-400/15 spin-slow" style={{ borderRadius:"45%"}} />
              <div className="absolute inset-0 rounded-full scale-[1.35] border border-purple-500/10 spin-slow-rev" style={{ borderRadius:"40%" }} />

              {/* Phone frame */}
              <div className="relative w-[250px] sm:w-[280px]"
                style={{
                  background:"linear-gradient(160deg,#14142b,#08081a)",
                  borderRadius:"3rem",
                  border:"1px solid rgba(255,255,255,0.12)",
                  boxShadow:"0 30px 80px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.08)",
                }}>

                {/* Dynamic island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10 flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-white/10" />
                  <div className="w-3 h-3 rounded-full bg-[#1a1a1a] border border-white/10" />
                </div>

                {/* Screen */}
                <div className="h-[520px] sm:h-[580px] flex flex-col items-center justify-start p-5 pt-14 overflow-hidden"
                  style={{ borderRadius:"3rem", background:"linear-gradient(170deg,#0e0a24,#0a1020,#04040f)" }}>

                  {/* App icon */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl blur-xl opacity-60 scale-110" />
                    <div className="relative w-[72px] h-[72px] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/teen-patti-tiger-logo.webp"
                        alt="Teen Patti Tiger Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-white font-black text-base mb-0.5">Teen Patti Tiger</h3>
                  <p className="text-white/40 text-[10px] mb-5">v{siteConfig.apkVersion} • Free Download</p>

                  {/* Live players badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-semibold">12,847 players online</span>
                  </div>

                  {/* Game cards */}
                  <div className="grid grid-cols-3 gap-2 w-full mb-5">
                    {[
                      { emoji:"🃏", name:"Teen Patti", color:"from-yellow-500/30 to-orange-500/20" },
                      { emoji:"🐉", name:"Dragon Tiger", color:"from-red-500/30 to-pink-500/20" },
                      { emoji:"🎰", name:"Slots", color:"from-purple-500/30 to-blue-500/20" },
                    ].map((g) => (
                      <div key={g.name} className={`aspect-square rounded-2xl bg-gradient-to-br ${g.color} border border-white/8 flex flex-col items-center justify-center gap-1`}>
                        <span className="text-xl">{g.emoji}</span>
                        <span className="text-[8px] text-white/50 text-center leading-tight">{g.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Download progress */}
                  <div className="w-full rounded-2xl p-3.5 mb-4"
                    style={{ background:"rgba(245,197,24,0.06)", border:"1px solid rgba(245,197,24,0.2)" }}>
                    <div className="flex justify-between text-[10px] text-white/50 mb-2">
                      <span>✓ Download Complete</span>
                      <span className="text-yellow-400 font-bold">100%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-full" />
                    </div>
                  </div>

                  {/* Bonus badge */}
                  <div className="w-full rounded-2xl p-3 text-center"
                    style={{ background:"linear-gradient(135deg,rgba(74,222,128,0.1),rgba(74,222,128,0.05))", border:"1px solid rgba(74,222,128,0.2)" }}>
                    <div className="text-[10px] text-white/50 mb-0.5">Welcome Bonus</div>
                    <div className="text-green-400 font-black text-sm">₨5,000 FREE 🎁</div>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/25 rounded-full" />
              </div>

              {/* Floating chips */}
              <div className="absolute -top-5 -right-8 float-slow"
                style={{ background:"rgba(7,7,22,0.9)", border:"1px solid rgba(245,197,24,0.3)", boxShadow:"0 0 20px rgba(245,197,24,0.2)", borderRadius:"1rem", padding:"0.5rem 0.75rem" }}>
                <div className="text-[10px] text-yellow-400 font-bold">⭐ 4.7 / 5 Rating</div>
                <div className="text-[9px] text-white/40">18,500+ reviews</div>
              </div>
              <div className="absolute -bottom-5 -left-8 float-slow" style={{ animationDelay:"1.5s", background:"rgba(7,7,22,0.9)", border:"1px solid rgba(74,222,128,0.3)", boxShadow:"0 0 20px rgba(74,222,128,0.15)", borderRadius:"1rem", padding:"0.5rem 0.75rem" }}>
                <div className="text-[10px] text-green-400 font-bold">✓ Safe & Virus Free</div>
                <div className="text-[9px] text-white/40">VirusTotal verified</div>
              </div>
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 float-slow" style={{ animationDelay:"0.8s", background:"rgba(7,7,22,0.9)", border:"1px solid rgba(168,85,247,0.3)", borderRadius:"1rem", padding:"0.5rem 0.75rem" }}>
                <div className="text-[10px] text-purple-400 font-bold">💸 JazzCash</div>
                <div className="text-[9px] text-white/40">2-5 min payout</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
