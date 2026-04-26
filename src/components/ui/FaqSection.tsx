"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqSchema } from "@/lib/schemas";

interface Faq {
  question: string;
  answer: string;
}

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-all"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
              aria-expanded={openIdx === idx}
            >
              <span className="font-semibold text-white text-sm sm:text-base pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-yellow-400 flex-shrink-0 transition-transform ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-5 border-t border-white/5">
                <p className="text-sm text-white/70 leading-relaxed pt-4">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
