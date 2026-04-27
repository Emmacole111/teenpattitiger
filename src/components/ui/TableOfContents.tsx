"use client";

import { useState, useEffect, useId } from "react";
import { BookOpen, ChevronDown } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const panelId = useId();
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-10% 0% -80% 0%" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="flex items-center gap-2 font-semibold text-white text-sm">
          <BookOpen className="w-4 h-4 text-yellow-400" aria-hidden />
          Table of Contents
        </span>
        <ChevronDown
          aria-hidden
          className={`w-4 h-4 text-white/50 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div id={panelId} hidden={!open} className="px-4 pb-4 space-y-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block text-sm py-1.5 px-2 rounded-lg transition-all ${
                activeId === item.id
                  ? "text-yellow-400 bg-yellow-400/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.title}
            </a>
          ))}
      </div>
    </div>
  );
}
