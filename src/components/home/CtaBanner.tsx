import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function CtaBanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
          style={{
            background:"linear-gradient(135deg,rgba(245,197,24,0.08),rgba(255,120,0,0.05),rgba(138,43,226,0.08))",
            border:"1px solid rgba(245,197,24,0.2)",
          }}
        >
          {/* BG glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-60 h-40 bg-purple-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-60 h-40 bg-orange-500/8 rounded-full blur-3xl" />
          </div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

          <div className="relative">
            <div className="text-5xl mb-5">🎴</div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ready to Play & <span className="gradient-text">Win Big?</span>
            </h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Download Teen Patti Tiger APK now. Free to play, ₨5,000 welcome bonus, JazzCash
              withdrawals in minutes. Millions of players waiting for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black text-base glow-btn pulse-glow shadow-2xl"
              >
                <Download className="w-5 h-5" />
                Download APK Free
              </a>
              <Link
                href="/blog/how-to-play-teen-patti-tiger"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white hover:-translate-y-0.5 transition-all"
                style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)" }}
              >
                How to Play <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-white/55">
              {[`v${siteConfig.apkVersion}`,`${siteConfig.apkSize}`,"Android 5.0+","Free","JazzCash & EasyPaisa"].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden />}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
