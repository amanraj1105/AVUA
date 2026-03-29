import type { ReactNode } from "react";
import type { SectorData } from "@/data/energy";

interface SecurityProps {
  data: SectorData["security"];
  theme: SectorData["theme"];
}

export default function Security({ data, theme }: SecurityProps) {
  const iconMap: Record<string, ReactNode> = {
    "🛡️": (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 3L5 8v7c0 6.55 4.73 12.68 11 14 6.27-1.32 11-7.45 11-14V8L16 3z" strokeLinejoin="round" />
        <path d="M11 16l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "🔐": (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="7" y="14" width="18" height="14" rx="3" />
        <path d="M11 14v-3a5 5 0 0110 0v3" strokeLinecap="round" />
        <circle cx="16" cy="21" r="2" fill="currentColor" stroke="none" />
        <path d="M16 23v2" strokeLinecap="round" />
      </svg>
    ),
    "📋": (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="4" width="20" height="24" rx="3" />
        <path d="M12 4v4h8V4" strokeLinejoin="round" />
        <path d="M11 14h10M11 19h8" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <section
      className="w-full py-20"
      style={{ background: "#F7F5FF" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: "#1A1A2E" }}
          >
            {data.sectionTitle}
            <span style={{ color: theme.primary }}>{data.sectionTitleHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Security Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.features.map((feature) => (
            <div
              key={feature.id}
              className="card-hover rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: theme.heroBadgeBg,
                border: `1px solid ${theme.primary}15`,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm"
                style={{ color: theme.primary }}
              >
                {iconMap[feature.icon] ?? (
                  <span className="text-2xl">{feature.icon}</span>
                )}
              </div>

              <div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#1A1A2E" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
