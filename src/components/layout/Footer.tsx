import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { Download, Shield, Star, Users, Zap } from "lucide-react";

const footerLinks = {
  Games: [
    { label: "Teen Patti", href: "/games/teen-patti" },
    { label: "Dragon vs Tiger", href: "/games/dragon-vs-tiger" },
    { label: "Slots & Aviator", href: "/games/slots" },
    { label: "All Games", href: "/games" },
  ],
  Bonuses: [
    { label: "Welcome Bonus ₨5K", href: "/bonuses/welcome-bonus" },
    { label: "Daily Login Rewards", href: "/bonuses/daily-rewards" },
    { label: "All Bonuses", href: "/bonuses" },
  ],
  Download: [
    { label: "Download APK v1.4", href: "/teen-patti-tiger-apk-download" },
    { label: "PC Version", href: "/teen-patti-tiger-for-pc" },
    { label: "Old Version v2.0", href: "/old-versions/v2" },
    { label: "Old Version v1.5", href: "/old-versions/v1" },
  ],
  Blog: [
    { label: "How to Play", href: "/blog/how-to-play-teen-patti-tiger" },
    { label: "Tips & Tricks", href: "/blog/tips-and-tricks" },
    { label: "Earning Guide", href: "/blog/earning-guide" },
    { label: "Install Guide", href: "/blog/apk-install-guide" },
  ],
  Legal: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const stats = [
  { icon: Download, value: "2M+",   label: "Downloads",    color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Star,     value: "4.7★",  label: "Rating",       color: "text-blue-400",   bg: "bg-blue-400/10"   },
  { icon: Users,    value: "500K+", label: "Active Players",color: "text-green-400",  bg: "bg-green-400/10"  },
  { icon: Shield,   value: "100%",  label: "Safe & Tested", color: "text-purple-400", bg: "bg-purple-400/10" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#020209", borderTop:"1px solid rgba(255,255,255,0.05)" }}>

      {/* Stats bar */}
      <div style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label, color, bg }) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <div className={`text-lg font-black ${color}`}>{value}</div>
                  <div className="text-xs text-white/40">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                <Image
                  src="/images/teen-patti-tiger-logo.webp"
                  alt="Teen Patti Tiger Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="font-black text-white text-sm">Teen Patti <span className="gradient-text">Tiger</span></div>
                <div className="text-[9px] text-yellow-400/60 tracking-widest">APK PAKISTAN</div>
              </div>
            </Link>
            <p className="text-xs text-white/40 leading-relaxed mb-5">
              Pakistan&apos;s most trusted source for Teen Patti Tiger APK. Safe, fast, and free.
            </p>
            <a
              href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xs glow-btn"
            >
              <Download className="w-3.5 h-3.5" />
              Download APK Free
            </a>
            <div className="flex items-center gap-1.5 mt-3 text-[10px] text-green-400/70">
              <Zap className="w-3 h-3" />
              v1.4 • 44MB • Free
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-black text-white text-xs mb-4 tracking-wider uppercase">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/40 hover:text-yellow-400 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-400 transition-colors flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/25 text-center">
            <span className="text-yellow-400/50">Disclaimer:</span> For entertainment only. Play responsibly. 18+
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Disclaimer", href: "/disclaimer" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-white/25 hover:text-yellow-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
