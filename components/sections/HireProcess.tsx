import type { SectorData } from "@/data/energy";
import Image from "next/image";

interface HireProcessProps {
  data: SectorData["hireProcess"];
  theme: SectorData["theme"];
}

const stepIconPaths = [
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
];

export default function HireProcess({ data, theme }: HireProcessProps) {
  // Circle size
  const CIRCLE = 88;

  return (
    <section
      style={{
        width: "100%",
        paddingTop: "80px",
        paddingBottom: "80px",
        background: "linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #f0f4ff 100%)",
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
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          {/* Label */}
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: theme.primary,
              marginBottom: "12px",
              letterSpacing: "0.01em",
            }}
          >
            {data.sectionLabel}
          </p>

          {/* Title */}
          <h2
            style={{
              color: "#0F0F1A",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.18,
              margin: "0 0 20px 0",
            }}
          >
            {data.title}
            <br />
            <span style={{ color: theme.primary }}>{data.titleLine2Colored}</span>
            {data.titleLine2Rest}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#6B7280",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.65,
              textAlign: "center",
            }}
          >
            {data.subtitle}
          </p>
        </div>

        {/* ── Steps ── */}
        <div style={{ position: "relative" }}>
          {/* Connecting line — sits at vertical center of circles */}
          <div
            style={{
              position: "absolute",
              top: `${CIRCLE / 2}px`,
              left: `calc(${100 / 8}% )`,
              right: `calc(${100 / 8}% )`,
              height: "1px",
              background: "#D1C4E9",
              zIndex: 0,
            }}
          />

          {/* 4-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
            }}
          >
            {data.steps.map((step, index) => (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Circle */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: `${CIRCLE}px`,
                    height: `${CIRCLE}px`,
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    border: "1.5px solid #C4B5E8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.primary,
                    marginBottom: "24px",
                    flexShrink: 0,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <Image 
                    src={stepIconPaths[index]} 
                    alt={step.title} 
                    width={36} 
                    height={36} 
                    style={{ objectFit: "contain" }} 
                  />
                </div>

                {/* Step title */}
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#0F0F1A",
                    margin: "0 0 10px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {index + 1}. {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}