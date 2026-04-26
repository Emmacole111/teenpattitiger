"use client";

import { Download, Shield, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

interface DownloadButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function DownloadButton({ size = "md", className = "" }: DownloadButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5",
    lg: "px-8 py-4 text-lg gap-3",
  };
  const iconSizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a
        href={siteConfig.apkDownloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black glow-btn pulse-glow hover:scale-105 transition-all duration-300 shadow-2xl ${sizeClasses[size]}`}
      >
        <Download className={iconSizes[size]} />
        Download APK Free
      </a>
      <div className="flex items-center gap-4 text-xs text-white/50">
        <span className="flex items-center gap-1">
          <Smartphone className="w-3 h-3 text-green-400" />
          Android {siteConfig.apkVersion}
        </span>
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-blue-400" />
          Safe &amp; Tested
        </span>
        <span>{siteConfig.apkSize}</span>
      </div>
    </div>
  );
}
