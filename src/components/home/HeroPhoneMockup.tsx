import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

/** Decorative phone graphic for hero (mobile section + desktop column). */
export default function HeroPhoneMockup() {
  return (
    <div className="relative float-animation">
      <div className="absolute inset-0 rounded-[3rem] scale-[1.15]"
        style={{ background:"linear-gradient(135deg,rgba(245,197,24,0.15),rgba(138,43,226,0.15))", filter:"blur(30px)" }} />

      <div className="absolute inset-0 rounded-full scale-[1.25] border-2 border-dashed border-yellow-400/15 spin-slow" style={{ borderRadius:"45%"}} />
      <div className="absolute inset-0 rounded-full scale-[1.35] border border-purple-500/10 spin-slow-rev" style={{ borderRadius:"40%" }} />

      <div className="relative w-[250px] sm:w-[280px]"
        style={{
          background:"linear-gradient(160deg,#14142b,#08081a)",
          borderRadius:"3rem",
          border:"1px solid rgba(255,255,255,0.12)",
          boxShadow:"0 30px 80px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.08)",
        }}>

        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10 flex items-center justify-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-white/10" />
          <div className="w-3 h-3 rounded-full bg-[#1a1a1a] border border-white/10" />
        </div>

        <div className="h-[520px] sm:h-[580px] flex flex-col items-center justify-start p-5 pt-14 overflow-hidden"
          style={{ borderRadius:"3rem", background:"linear-gradient(170deg,#0e0a24,#0a1020,#04040f)" }}>

          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl blur-xl opacity-60 scale-110" />
            <div className="relative w-[72px] h-[72px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/teen-patti-tiger-logo.webp"
                alt="Teen Patti Tiger Logo"
                width={72}
                height={72}
                className="object-cover w-[72px] h-[72px]"
                sizes="72px"
              />
            </div>
          </div>

          <h3 className="text-white font-black text-base mb-0.5">Teen Patti Tiger</h3>
          <p className="text-white/40 text-[10px] mb-5">v{siteConfig.apkVersion} • Free Download</p>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] text-green-400 font-semibold">12,847 players online</span>
          </div>

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

          <div className="w-full rounded-2xl p-3 text-center"
            style={{ background:"linear-gradient(135deg,rgba(74,222,128,0.1),rgba(74,222,128,0.05))", border:"1px solid rgba(74,222,128,0.2)" }}>
            <div className="text-[10px] text-white/50 mb-0.5">Welcome Bonus</div>
            <div className="text-green-400 font-black text-sm">₨5,000 FREE 🎁</div>
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/25 rounded-full" />
      </div>

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
  );
}
