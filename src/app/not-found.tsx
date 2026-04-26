import type { Metadata } from "next";
import Link from "next/link";
import { Home, Download, Search } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Teen Patti Tiger APK" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 hero-bg">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black gradient-text mb-4">404</div>
        <h1 className="text-3xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-white/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold glow-btn"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <a
            href="https://pk3pattitiger.com/?from_gameid=8177465&channelCode=7989368" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/20 text-white font-bold hover:border-yellow-400/30 transition-all"
          >
            <Download className="w-4 h-4" />
            Download APK
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/20 text-white font-bold hover:border-yellow-400/30 transition-all"
          >
            <Search className="w-4 h-4" />
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
