import Link from "next/link";
import { Shield, CheckCircle, Star, Lock, Download } from "lucide-react";

const badges = [
  { icon: Shield,      title: "Virus Free",      desc: "Scanned by VirusTotal — 72 engines, zero threats", color: "text-green-400",  bg: "from-green-500/15 to-green-600/5",  border: "border-green-400/20"  },
  { icon: CheckCircle, title: "Team Verified",    desc: "Every APK tested on real devices before release",  color: "text-blue-400",   bg: "from-blue-500/15 to-blue-600/5",    border: "border-blue-400/20"   },
  { icon: Star,        title: "4.7★ Rated",       desc: "18,500+ verified reviews from real Pakistani users",color: "text-yellow-400", bg: "from-yellow-400/15 to-orange-500/5",border: "border-yellow-400/20" },
  { icon: Lock,        title: "Secure Platform",  desc: "SSL encrypted + no personal data sold to 3rd parties",color:"text-purple-400",bg:"from-purple-500/15 to-violet-600/5", border: "border-purple-400/20" },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-7xl mx-auto">

        {/* Big stat row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: "2M+",    label: "Total Downloads",   sub: "From Pakistan alone", color: "text-yellow-400" },
            { value: "₨5K",    label: "Welcome Bonus",     sub: "For new players",     color: "text-green-400"  },
            { value: "2-5min", label: "Withdrawal Speed",  sub: "JazzCash & EasyPaisa",color: "text-blue-400"   },
            { value: "₨1K",    label: "Per Referral",      sub: "Unlimited referrals", color: "text-purple-400" },
          ].map((s) => (
            <div key={s.label}
              className="rounded-2xl p-5 text-center transition-all hover:-translate-y-1 duration-300"
              style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)" }}>
              <div className={`text-3xl font-black ${s.color} mb-1`}>{s.value}</div>
              <div className="text-sm font-bold text-white mb-0.5">{s.label}</div>
              <div className="text-xs text-white/40">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Trust content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-yellow-400/70 text-xs font-bold tracking-widest uppercase mb-3">Trust & Safety</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Safe, Tested &amp; <span className="gradient-text">Trusted by Millions</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6 text-sm">
              Every version of Teen Patti Tiger APK is scanned for malware, tested on multiple
              devices, and verified by our security team before publishing. 2+ million Pakistani
              players trust us — and we take that seriously.
            </p>
            <a
              href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-sm glow-btn"
            >
              <Download className="w-4 h-4" />
              Download Safe APK
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {badges.map((b) => (
              <div key={b.title}
                className={`rounded-2xl p-5 bg-gradient-to-br ${b.bg} border ${b.border} transition-all hover:-translate-y-1 duration-300`}>
                <b.icon className={`w-7 h-7 ${b.color} mb-3`} />
                <h3 className="font-black text-white text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
