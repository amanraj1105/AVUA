"use client";

import Link from "next/link";
import type { SectorData } from "@/data/energy";

interface CareerSectionProps {
  data: SectorData["careerSection"];
  theme: SectorData["theme"];
}

const cardIcons = [
  // Search/Find jobs icon
  <svg key="search" viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <circle cx="11" cy="11" r="8" fill={`#7B3FF2`} opacity="0.9" />
    <path d="M21 21l-4.35-4.35" stroke="#7B3FF2" strokeWidth="2" strokeLinecap="round" />
    <circle cx="11" cy="11" r="5" fill="white" opacity="0.3" />
    <circle cx="11" cy="11" r="2.5" fill="white" />
  </svg>,
  // Document/Resume icon
  <svg key="doc" viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <rect x="4" y="2" width="16" height="20" rx="3" fill="#7B3FF2" opacity="0.9" />
    <path d="M8 8h8M8 12h8M8 16h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="12" y="0" width="6" height="5" rx="1" fill="white" opacity="0.3" />
  </svg>,
];

export default function CareerSection({ data, theme }: CareerSectionProps) {
  return (
    <section
      className="w-full py-24"
      style={{
        background: "linear-gradient(135deg, #0A0A14 0%, #130E26 50%, #0A0A14 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold mb-4"
            style={{ color: theme.primary }}
          >
            {data.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
            {data.title}
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#9CA3AF" }}>
            {data.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.cards.map((card, i) => (
            <div
              key={card.id}
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "#7B3FF220" }}
              >
                {cardIcons[i]}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                  {card.description}
                </p>
              </div>

              <Link
                href={card.href}
                className="inline-flex items-center gap-2 text-sm font-semibold mt-auto transition-all duration-200 hover:gap-3"
                style={{ color: theme.primary }}
              >
                Get Started
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
