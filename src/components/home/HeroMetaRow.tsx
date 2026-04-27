import { siteConfig } from "@/lib/siteConfig";

export default function HeroMetaRow({ className = "" }: { className?: string }) {
  const items = [`v${siteConfig.apkVersion}`, siteConfig.apkSize, "Android 5.0+", "Free", "No VPN needed"];
  return (
    <div className={`flex flex-wrap items-center gap-3 text-xs text-white/60 ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="w-1 h-1 rounded-full bg-white/35" aria-hidden />}
          {item}
        </span>
      ))}
    </div>
  );
}
