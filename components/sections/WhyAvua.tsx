import type { ReactNode } from "react";
import type { SectorData } from "@/data/energy";

interface WhyAvuaProps {
  data: SectorData["whyAvua"];
  theme: SectorData["theme"];
}

const iconMap: Record<string, ReactNode> = {
  "🤖": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="20" height="20">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M9 8V6a3 3 0 016 0v2" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
      <path d="M9 18h6" strokeLinecap="round" />
    </svg>
  ),
  "✅": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="20" height="20">
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "🌐": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="20" height="20">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </svg>
  ),
  "⚡": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="20" height="20">
      <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" strokeLinejoin="round" />
    </svg>
  ),
  "💙": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="20" height="20">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  "🦾": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="20" height="20">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
};

export default function WhyAvua({ data, theme }: WhyAvuaProps) {
  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              color: "#1A1A2E",
              fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              margin: "0 0 16px 0",
            }}
          >
            {data.title}{" "}
            <span style={{ color: theme.primary }}>{data.titleHighlight}</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#6B7280",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            {data.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {data.features.map((feature, index) => (
            <div
              key={feature.id}
              style={{ position: "relative", display: "flex" }}
            >
              {/* Card */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "28px 24px 28px 24px",
                  borderRadius: "16px",
                  border: "1px solid #EBEBEB",
                  background: "#FFFFFF",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                  width: "100%",
                  boxSizing: "border-box" as const,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: feature.iconBg,
                    color: theme.primary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {iconMap[feature.icon] ?? (
                    <span style={{ fontSize: "1.2rem" }}>{feature.icon}</span>
                  )}
                </div>

                {/* Title + Description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "#1A1A2E",
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#6B7280",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector */}
              {index < data.features.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: "-20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: theme.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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