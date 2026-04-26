"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/siteConfig";
import { Menu, X, Download, ChevronDown, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#03030f]/90 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity bg-yellow-400/30" />
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                <Image
                  src="/images/teen-patti-tiger-logo.webp"
                  alt="Teen Patti Tiger Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-black text-base tracking-tight">
                <span className="text-white">Teen Patti </span>
                <span className="gradient-text">Tiger</span>
              </span>
              <div className="text-[10px] text-yellow-400/70 font-medium -mt-0.5 tracking-wider">APK PAKISTAN</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div ref={menuRef} className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <div
                    onMouseEnter={() => setActiveMenu(link.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className={`flex items-center rounded-xl text-sm font-semibold transition-all duration-200 ${
                      activeMenu === link.label
                        ? "text-yellow-400 bg-yellow-400/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Link
                      href={link.href}
                      className="pl-3.5 py-2 pr-1"
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() => setActiveMenu(activeMenu === link.label ? null : link.label)}
                      className="pr-3 py-2 flex items-center"
                      aria-label={`${link.label} menu`}
                    >
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === link.label ? "rotate-180 text-yellow-400" : ""}`} />
                    </button>
                  </div>
                  {activeMenu === link.label && (
                    <div
                      onMouseEnter={() => setActiveMenu(link.label)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="absolute top-full left-0 mt-2 w-52 rounded-2xl p-1.5 shadow-2xl border border-white/8"
                      style={{ background: "rgba(7,7,22,0.97)", backdropFilter: "blur(24px)" }}
                    >
                      <div className="absolute inset-0 rounded-2xl border border-yellow-400/15 pointer-events-none" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm text-white/70 hover:text-yellow-400 hover:bg-yellow-400/8 transition-all duration-150 font-medium"
                        >
                          <span className="w-1 h-1 rounded-full bg-yellow-400/50" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.apkDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm glow-btn hover:scale-105 transition-all shadow-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
              <span className="hidden md:inline-flex items-center gap-1 ml-1 text-[10px] bg-black/20 rounded-md px-1.5 py-0.5 font-black">
                <Zap className="w-2.5 h-2.5" /> FREE
              </span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2.5 rounded-xl border border-white/10 text-white/80 hover:bg-white/8 hover:border-white/20 transition-all"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-t border-white/8"
          style={{ background: "rgba(3,3,15,0.98)", backdropFilter: "blur(24px)" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold text-white/80 hover:text-yellow-400 hover:bg-yellow-400/8 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-6 mt-1 space-y-0.5 mb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 rounded-lg text-xs text-white/50 hover:text-yellow-400 hover:bg-yellow-400/6 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        → {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-white/8">
              <a
                href={siteConfig.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-black font-black text-sm glow-btn"
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download APK Free – v{siteConfig.apkVersion}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
