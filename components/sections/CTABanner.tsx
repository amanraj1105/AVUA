"use client";

import Link from "next/link";
import type { SectorData } from "@/data/energy";

interface CTABannerProps {
  data: SectorData["cta"];
  theme: SectorData["theme"];
}

export default function CTABanner({ data, theme }: CTABannerProps) {
  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 sm:px-12 lg:px-16"
          style={{
            background: "linear-gradient(135deg, #0F0F1A 0%, #1A1033 50%, #0F0F1A 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ background: theme.primary }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 translate-x-1/3 translate-y-1/3 pointer-events-none"
            style={{ background: theme.primaryLight }}
          />

          <div className="relative z-10">
            {/* Top row: Title (left) + Stat boxes (right) */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
              {/* Title */}
              <div className="flex-1 max-w-lg">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  {data.title}
                  <br />
                  <span style={{ color: theme.primaryLight }}>{data.titleHighlight}</span>
                </h2>
              </div>

              {/* Stat boxes */}
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                {data.stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl px-8 py-6 flex flex-col gap-1 min-w-[160px]"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <span
                      className="text-4xl font-black"
                      style={{ color: "white" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-sm" style={{ color: "#9CA3AF" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <p
              className="text-base text-center max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "#9CA3AF" }}
            >
              {data.description}
            </p>

            {/* Divider */}
            <div
              className="w-64 h-px mx-auto mb-8 opacity-20"
              style={{ background: "white" }}
            />

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {data.buttons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
                  style={
                    btn.primary
                      ? {
                          background: "white",
                          color: "#0F0F1A",
                        }
                      : {
                          background: "rgba(255,255,255,0.08)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }
                  }
                >
                  {btn.label}
                  {btn.primary && (
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {data.badges.map((badge, i) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-xs font-semibold tracking-wider"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-xs"
                    style={{ background: i < 2 ? "#22C55E" : "#F59E0B" }}
                  >
                    {i < 2 ? "✓" : "🔒"}
                  </span>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
