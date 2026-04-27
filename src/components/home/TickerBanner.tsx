const items = [
  "✨ Teen Patti Tiger v1.4 Now Available",
  "💚 JazzCash Withdrawals in 2-5 Minutes",
  "🎁 Welcome Bonus Up to ₨5,000",
  "👥 12,800+ Players Online Right Now",
  "⭐ Rated 4.7/5 by 18,500+ Users",
  "💸 ₨1,000 Per Referral – No Cap",
  "🏆 Weekly Tournaments Every Friday",
  "✅ 100% Safe APK – VirusTotal Verified",
  "🎴 100+ Games — Teen Patti, Dragon Tiger, Aviator & More",
  "📱 Works on All Android Phones — Even Budget Ones",
];

export default function TickerBanner() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3 border-y border-yellow-400/10"
      style={{ background:"linear-gradient(90deg,rgba(245,197,24,0.05),rgba(255,120,0,0.03),rgba(245,197,24,0.05))" }}>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background:"linear-gradient(90deg,#03030f,transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background:"linear-gradient(270deg,#03030f,transparent)" }} />

      <div className="flex ticker-animate" style={{ width:"max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-8 text-xs font-semibold whitespace-nowrap text-white/70 hover:text-yellow-400 transition-colors cursor-default">
            {item}
            <span className="text-yellow-400/55" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
