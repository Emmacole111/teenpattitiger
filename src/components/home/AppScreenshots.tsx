"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/teen-patti-tiger-logo.webp",
    alt: "Teen Patti Tiger APK – Official Logo and Brand Identity",
    label: "Teen Patti Tiger",
    desc: "Pakistan's #1 real-money card game app — 2M+ downloads, JazzCash & EasyPaisa support",
    accent: "border-yellow-400/50",
    glow: "rgba(245,197,24,0.18)",
  },
  {
    src: "/images/teen-patti-tiger.webp",
    alt: "Teen Patti Tiger App Home Screen – Games Lobby",
    label: "Home Screen",
    desc: "Clean, fast lobby with all games ready to play — Teen Patti, Dragon vs Tiger, Aviator and more",
    accent: "border-orange-400/50",
    glow: "rgba(251,146,60,0.15)",
  },
  {
    src: "/images/teen-patti-tiger-register-bonus.webp",
    alt: "Teen Patti Tiger Registration and Welcome Bonus Screen",
    label: "Register & Bonus",
    desc: "Sign up in 2 minutes — ₨5,000 welcome bonus drops instantly after first deposit",
    accent: "border-green-400/50",
    glow: "rgba(52,211,153,0.15)",
  },
  {
    src: "/images/teen-patti-tiger-withdrawal.webp",
    alt: "Teen Patti Tiger Withdrawal Screen – JazzCash and EasyPaisa",
    label: "Withdrawals",
    desc: "JazzCash & EasyPaisa payouts in 2–5 minutes — minimum ₨500",
    accent: "border-blue-400/50",
    glow: "rgba(96,165,250,0.15)",
  },
  {
    src: "/images/teen-patti-tiger-refer-and-earn.webp",
    alt: "Teen Patti Tiger Refer and Earn Program Screen",
    label: "Refer & Earn",
    desc: "₨1,000 per successful referral — no cap, paid directly to withdrawable balance",
    accent: "border-purple-400/50",
    glow: "rgba(167,139,250,0.15)",
  },
  {
    src: "/images/teen-patti-tiger-customer-support.webp",
    alt: "Teen Patti Tiger 24/7 Customer Support in Urdu and English",
    label: "24/7 Support",
    desc: "Live customer support in Urdu and English — available around the clock",
    accent: "border-pink-400/50",
    glow: "rgba(244,114,182,0.15)",
  },
  {
    src: "/images/teen-patti-tiger-email.webp",
    alt: "Teen Patti Tiger OTP Email Verification – Secure Login",
    label: "Secure Login",
    desc: "OTP verification via email and SMS keeps your account fully protected",
    accent: "border-cyan-400/50",
    glow: "rgba(34,211,238,0.15)",
  },
];

export default function AppScreenshots() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number, dir: "left" | "right") => {
      if (animating || idx === active) return;
      setDirection(dir);
      setPrev(active);
      setActive(idx);
      setAnimating(true);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 420);
    },
    [active, animating]
  );

  const next = useCallback(() => goTo((active + 1) % slides.length, "right"), [active, goTo]);
  const back = useCallback(() => goTo((active - 1 + slides.length) % slides.length, "left"), [active, goTo]);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[active];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${slide.glow}, transparent 70%)` }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-badge text-yellow-400 text-xs font-bold mb-4 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden />
            App Screenshots
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Inside Teen Patti Tiger — <span className="gradient-text">Real Screenshots</span>
          </h2>
          <p className="text-white/65 text-sm">No mockups. These are actual screens from the app.</p>
        </div>

        {/* Main slider card */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

          {/* Image area */}
          <div
            className="relative bg-[#08081a]"
            style={{ height: "460px" }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Teen Patti Tiger app screenshots"
          >

            {/* Active image */}
            <div
              key={`a-${active}`}
              className="absolute inset-0 flex items-center justify-center p-4"
              style={{
                animation: `${direction === "right" ? "ssInRight" : "ssInLeft"} 0.38s cubic-bezier(0.4,0,0.2,1) both`,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 900px"
                priority={active === 0}
              />
            </div>

            {/* Exiting image */}
            {prev !== null && (
              <div
                key={`p-${prev}`}
                className="absolute inset-0 flex items-center justify-center p-4"
                style={{
                  animation: `${direction === "right" ? "ssOutLeft" : "ssOutRight"} 0.38s cubic-bezier(0.4,0,0.2,1) both`,
                }}
              >
                <Image
                  src={slides[prev].src}
                  alt={slides[prev].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            )}

            {/* Prev arrow */}
            <button
              type="button"
              onClick={back}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-2xl flex items-center justify-center text-white/70 hover:text-yellow-400 transition-all"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden />
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-2xl flex items-center justify-center text-white/70 hover:text-yellow-400 transition-all"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" aria-hidden />
            </button>

            {/* Label + counter badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-full border ${slide.accent} text-white`}
                style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
              >
                {slide.label}
              </span>
            </div>
            <div
              className="absolute top-4 right-4 z-10 text-[11px] font-bold text-white/60 px-2.5 py-1 rounded-full"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
            >
              {active + 1} / {slides.length}
            </div>
          </div>

          {/* Bottom bar: desc + thumbnails + dots */}
          <div className="px-5 py-4 border-t border-white/8 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-4">

            {/* Description */}
            <p
              key={active}
              className="text-sm text-white/60 flex-1 leading-relaxed"
              style={{ animation: "slideInUp 0.35s ease both" }}
            >
              {slide.desc}
            </p>

            {/* Thumbnails */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {slides.map((s, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goTo(i, i > active ? "right" : "left")}
                  className={`relative rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    i === active
                      ? "w-10 h-10 ring-2 ring-yellow-400 ring-offset-1 ring-offset-black/50 scale-110"
                      : "w-8 h-8 opacity-45 hover:opacity-75 ring-1 ring-white/15"
                  }`}
                  aria-label={`Show screenshot: ${s.label}`}
                  aria-current={i === active ? "true" : undefined}
                >
                  <Image src={s.src} alt="" fill className="object-cover" sizes="40px" />
                </button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {slides.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goTo(i, i > active ? "right" : "left")}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-yellow-400"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to screenshot ${i + 1} of ${slides.length}`}
                  aria-current={i === active ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide transition keyframes */}
      <style jsx>{`
        @keyframes ssInRight {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes ssInLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes ssOutLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-60px); opacity: 0; }
        }
        @keyframes ssOutRight {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(60px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
