import { Shield, Zap, Gift, Users, Smartphone, Trophy, Globe, Clock } from "lucide-react";

const features = [
  { icon: Shield,     title: "100% Safe APK",        desc: "Scanned with VirusTotal. Zero malware, zero spyware. Every version tested before publishing.",       grad: "from-green-500 to-emerald-600",  glow: "rgba(74,222,128,0.2)"   },
  { icon: Zap,        title: "Instant Download",      desc: "Fast CDN servers. Your 44MB APK downloads in seconds, even on slow mobile data.",                    grad: "from-yellow-400 to-orange-500",  glow: "rgba(245,197,24,0.2)"   },
  { icon: Gift,       title: "₨5,000 Welcome Bonus",  desc: "New players get up to ₨5K on first deposit plus free chips from daily login rewards.",              grad: "from-pink-500 to-rose-600",      glow: "rgba(236,72,153,0.2)"   },
  { icon: Users,      title: "Real Multiplayer",      desc: "12,800+ live players right now. No bots, no fake tables. Matchmaking in under 10 seconds.",          grad: "from-blue-500 to-indigo-600",    glow: "rgba(99,102,241,0.2)"   },
  { icon: Smartphone, title: "Runs on Any Android",   desc: "Works on Redmi, Infinix, Tecno — any phone with Android 5.0+ and 1GB RAM.",                         grad: "from-purple-500 to-violet-600",  glow: "rgba(168,85,247,0.2)"   },
  { icon: Trophy,     title: "Weekly Tournaments",    desc: "Fixed buy-in competitions with big prize pools every Friday and weekend.",                            grad: "from-orange-500 to-red-600",     glow: "rgba(249,115,22,0.2)"   },
  { icon: Globe,      title: "Urdu + English UI",     desc: "Full Urdu language support — not half-translated. Game rules, support, menus all in Urdu.",          grad: "from-teal-500 to-cyan-600",      glow: "rgba(20,184,166,0.2)"   },
  { icon: Clock,      title: "2-5 Min Withdrawals",   desc: "JazzCash & EasyPaisa payouts clear in 2-5 minutes for amounts under ₨10,000.",                       grad: "from-lime-500 to-green-600",     glow: "rgba(132,204,22,0.2)"   },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-yellow-400/70 text-xs font-bold tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">
            Built for <span className="gradient-text">Pakistan</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm">
            Teen Patti Tiger does the fundamentals better than any competitor in the Pakistani market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${f.glow}, transparent 70%)`, border: `1px solid ${f.glow}` }}
              />

              <div className="relative">
                {/* Icon */}
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${f.grad} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 8px 24px ${f.glow}` }}>
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-black text-white text-sm mb-2 group-hover:text-yellow-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
