import type { ReactNode } from "react";
import Image from "next/image";
import type { SectorData } from "@/data/energy";

interface ChallengesProps {
  data: SectorData["challenges"];
  theme: SectorData["theme"];
}

const employerIcons = [
  "/iconify-icon → SVG-1.svg",
  "/iconify-icon → SVG-2.svg",
  "/Paper.svg",
  "/Globe.svg",
  "/iconify-icon → SVG-3.svg",
  "/iconify-icon → SVG.svg",
];

const professionalIcons = [
  "/s1.svg",
  "/s2.svg",
  "/s3.svg",
  "/Hide.svg",
  "/Shield Fail.svg",
  "/s.svg",
];

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
          maxWidth: "100%",
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
              fontWeight: 500,
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
            {/* Horizontal line Left */}
            <div
              style={{
                position: "absolute",
                width: "140px",
                height: "2px",
                background: `linear-gradient(to right, transparent, ${theme.primary})`,
                left: "-120px",
                opacity: 0.6,
              }}
            />
            {/* Horizontal line Right */}
            <div
              style={{
                position: "absolute",
                width: "140px",
                height: "2px",
                background: `linear-gradient(to left, transparent, ${theme.primary})`,
                right: "-120px",
                opacity: 0.6,
              }}
            />
            
            {/* Badge */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "24px",
                background: "#FFFFFF",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "rotate(-12deg)",
                zIndex: 2,
                position: "relative",
              }}
            >
              <span
                style={{
                  transform: "rotate(12deg)",
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  color: theme.primary,
                  letterSpacing: "-0.01em",
                }}
              >
                VS
              </span>
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
              {data.employerChallenges.items.map((item, index) => (
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
                    <Image
                      src={employerIcons[index % employerIcons.length]}
                      alt={item.title}
                      width={18}
                      height={18}
                      style={{ objectFit: "contain" }}
                    />
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
              {data.professionalChallenges.items.map((item, index) => (
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
                    <Image
                      src={professionalIcons[index % professionalIcons.length]}
                      alt={item.title}
                      width={18}
                      height={18}
                      style={{ objectFit: "contain" }}
                    />
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