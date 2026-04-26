import Link from "next/link";
import { Shield, Users, Star, Download } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { siteConfig } from "@/lib/siteConfig";
import { generateMeta } from "@/lib/metadata";

export const metadata = generateMeta({
  title: "About Us – Teen Patti Tiger APK",
  description:
    "Learn about Teen Patti Tiger APK — Pakistan's most trusted source for Teen Patti Tiger downloads. Our mission, team, and commitment to user safety.",
  path: "/about",
  keywords: [
    "about Teen Patti Tiger",
    "Teen Patti Tiger Pakistan website",
    "who made Teen Patti Tiger APK site",
  ],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About Us", href: "/about" }]} />

        <div className="mt-8">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About <span className="gradient-text">Teen Patti Tiger</span>
          </h1>
          <p className="text-white/60 text-lg mb-12 max-w-2xl">
            Pakistan&apos;s most trusted Teen Patti Tiger APK download website. We provide safe,
            verified, and up-to-date APK downloads for millions of players.
          </p>

          {/* Mission */}
          <div className="glass-card rounded-3xl border border-white/10 p-8 mb-8">
            <h2 className="text-2xl font-black text-white mb-4">🎯 Our Mission</h2>
            <p className="text-white/70 leading-relaxed">
              Our mission is to provide Pakistani players with a safe, reliable, and up-to-date
              source for Teen Patti Tiger APK downloads. We rigorously test every APK version for
              security before publishing, ensuring your device stays safe.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
            {[
              { icon: Download, value: "2M+", label: "Downloads Served" },
              { icon: Star, value: "4.7★", label: "Average Rating" },
              { icon: Users, value: "500K+", label: "Monthly Visitors" },
              { icon: Shield, value: "100%", label: "Safe Downloads" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass-card rounded-2xl border border-white/10 p-5 text-center">
                <Icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-yellow-400">{value}</div>
                <div className="text-xs text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>

          {/* What we do */}
          <div className="glass-card rounded-2xl border border-white/10 p-8 mb-8">
            <h2 className="text-2xl font-black text-white mb-4">💼 What We Do</h2>
            <div className="prose-custom">
              <ul>
                <li>Publish and maintain the latest Teen Patti Tiger APK versions</li>
                <li>Scan every APK for viruses and malware before publishing</li>
                <li>Provide comprehensive guides for new players</li>
                <li>Keep players informed about bonuses and promotions</li>
                <li>Offer troubleshooting support through our blog</li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="highlight-box">
            <p className="text-sm text-white/70">
              Have questions? Visit our{" "}
              <Link href="/contact" className="text-yellow-400 hover:underline">Contact page</Link>{" "}
              or read our{" "}
              <Link href="/disclaimer" className="text-yellow-400 hover:underline">Disclaimer</Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-yellow-400 hover:underline">Privacy Policy</Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
