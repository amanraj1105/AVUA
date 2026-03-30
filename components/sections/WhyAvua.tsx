import Image from "next/image";
import type { SectorData } from "@/data/energy";

interface WhyAvuaProps {
  data: SectorData["whyAvua"];
  theme: SectorData["theme"];
}

const customIcons = [
  "/SVG.svg",
  "/SVG-1.svg",
  "/Globe.svg",
  "/SVG-2.svg",
];

export default function WhyAvua({ data, theme }: WhyAvuaProps) {
  return (
    <section
      style={{
        width: "100%",
        background: theme.bg || "#F9F8FF",
        paddingTop: "64px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "#FFFFFF",
          borderRadius: "64px 64px 0 0",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Gradient curved top line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            borderRadius: "64px 64px 0 0",
            padding: "2px",
            background: `linear-gradient(180deg, ${theme.primary} 0%, transparent 120px)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      <div
        style={{
          maxWidth: "100%",
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
              fontWeight: 500,
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
                  <Image
                    src={customIcons[index % customIcons.length]}
                    alt={feature.title}
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
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
      </div>
    </section>
  );
}