import type { ReactNode } from "react";
import type { SectorData } from "@/data/energy";

interface WhyAvuaProps {
  data: SectorData["whyAvua"];
  theme: SectorData["theme"];
}

const iconMap: Record<string, ReactNode> = {
  "🤖": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M9 8V6a3 3 0 016 0v2" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
      <path d="M9 18h6" strokeLinecap="round" />
    </svg>
  ),
  "✅": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "🌐": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </svg>
  ),
  "⚡": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" strokeLinejoin="round" />
    </svg>
  ),
  "💙": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  "🦾": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
};

export default function WhyAvua({ data, theme }: WhyAvuaProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: "#1A1A2E", lineHeight: 1.2 }}
          >
            {data.title}{" "}
            <span style={{ color: theme.primary }}>{data.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((feature, index) => (
            <div key={feature.id} className="relative flex items-stretch">
              {/* Feature Card */}
              <div
                className="card-hover flex flex-col gap-5 p-6 rounded-2xl border bg-white w-full"
                style={{
                  borderColor: "#F0F0F0",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: feature.iconBg, color: theme.primary }}
                >
                  {iconMap[feature.icon] ?? (
                    <span className="text-2xl">{feature.icon}</span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className="text-base font-bold"
                    style={{ color: "#1A1A2E" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector between cards */}
              {index < data.features.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                    style={{ background: theme.primary }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 16 16"
                      fill="white"
                    >
                      <path d="M8 3l5 5-5 5M3 8h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
