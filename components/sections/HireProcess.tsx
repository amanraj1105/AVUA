import type { SectorData } from "@/data/energy";

interface HireProcessProps {
  data: SectorData["hireProcess"];
  theme: SectorData["theme"];
}

const stepIcons = [
  // 1. Post Your Energy Role — pencil/edit icon
  <svg key="post" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="28" height="28">
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // 2. AI Screens Candidates — chat/message icon
  <svg key="ai" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="28" height="28">
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // 3. Review & Select — people/group icon
  <svg key="review" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="28" height="28">
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // 4. Onboard & Manage — clipboard check icon
  <svg key="onboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width="28" height="28">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
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
          maxWidth: "1280px",
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
              fontWeight: 900,
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
                  {stepIcons[index]}
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