import type { ReactNode } from "react";
import type { SectorData } from "@/data/energy";

interface ChallengesProps {
  data: SectorData["challenges"];
  theme: SectorData["theme"];
}

const challengeIcons: Record<string, ReactNode> = {
  "⚠️": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#EF4444" }}>
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  "📋": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#F59E0B" }}>
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
  ),
  "📄": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#F59E0B" }}>
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
    </svg>
  ),
  "🌍": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#3B82F6" }}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
  ),
  "⏱️": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#F59E0B" }}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  ),
  "🔍": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#6366F1" }}>
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  ),
  "❓": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#6366F1" }}>
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  ),
  "📝": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#10B981" }}>
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  ),
  "👁️": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#EF4444" }}>
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  ),
  "⚖️": (
    <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" style={{ color: "#F59E0B" }}>
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  ),
};

export default function Challenges({ data, theme }: ChallengesProps) {
  return (
    <section
      style={{
        width: "100%",
        background: theme.bg,
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
        {/* Header — centered */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              color: "#0F0F1A",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              margin: "0 0 16px 0",
            }}
          >
            {data.sectionTitle}
            <span style={{ color: theme.primary }}>{data.sectionTitleHighlight}</span>
            {data.sectionTitleEnd}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#6B7280",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            {data.subtitle}
          </p>
        </div>

        {/* Two-column layout with VS in the middle */}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* VS badge — centered between columns */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Horizontal line */}
            <div
              style={{
                position: "absolute",
                width: "80px",
                height: "1px",
                background: `linear-gradient(to right, ${theme.primary}60, ${theme.primary}20)`,
                left: "-40px",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "80px",
                height: "1px",
                background: `linear-gradient(to left, ${theme.primary}60, ${theme.primary}20)`,
                right: "-40px",
              }}
            />
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                border: `1.5px solid ${theme.primary}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: theme.primary,
                letterSpacing: "0.05em",
              }}
            >
              VS
            </div>
          </div>

          {/* Employer Challenges Panel */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "20px",
              border: `1.5px solid ${theme.primary}40`,
              boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
              padding: "32px",
              borderTop: `3px solid ${theme.primary}`,
            }}
          >
            {/* Panel Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: theme.heroBadgeBg ?? "#EDE9FE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" style={{ color: theme.primary }}>
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A1A2E", margin: 0 }}>
                {data.employerChallenges.title}
              </h3>
            </div>

            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {data.employerChallenges.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    background: "#F8F8FB",
                    border: "1px solid #F0F0F5",
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    {challengeIcons[item.icon] ?? <span>{item.icon}</span>}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "3px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.55 }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Challenges Panel */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "20px",
              border: "1.5px solid #6366F140",
              boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
              padding: "32px",
              borderTop: "3px solid #6366F1",
            }}
          >
            {/* Panel Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#EEF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" style={{ color: "#6366F1" }}>
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A1A2E", margin: 0 }}>
                {data.professionalChallenges.title}
              </h3>
            </div>

            {/* Items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {data.professionalChallenges.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    background: "#F8F8FB",
                    border: "1px solid #F0F0F5",
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: "2px" }}>
                    {challengeIcons[item.icon] ?? <span>{item.icon}</span>}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "3px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.55 }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}