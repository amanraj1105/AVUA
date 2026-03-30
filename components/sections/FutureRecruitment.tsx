import type { SectorData } from "@/data/energy";
import Image from "next/image";

const employerIcons = [
  "/Trending_Down.svg",
  "/Vector.svg",
  "/Building_02.svg",
  "/Data.svg",
];

const professionalIcons = [
  "/Wavy_Check.svg",
  "/Vector.svg",
  "/Notebook.svg",
  "/Suitcase.svg",
];

interface FutureRecruitmentProps {
  data: SectorData["futureRecruitment"];
  theme: SectorData["theme"];
}

export default function FutureRecruitment({ data, theme }: FutureRecruitmentProps) {
  return (
    <section style={{ width: "100%", background: theme.bg || "#F9F8FF", paddingTop: "64px" }}>
      <div style={{
          position: "relative",
          width: "100%",
          background: "#FFFFFF",
          borderRadius: "64px 64px 0 0",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}>
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
        <div style={{ maxWidth: "100%", margin: "0 auto", paddingLeft: "80px", paddingRight: "80px" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "14px", fontWeight: 600, color: theme.primary, marginBottom: "12px" }}>
            {data.sectionLabel}
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#0F0F1A",
            marginBottom: "18px",
          }}>
            {data.title}{" "}
            <span style={{ color: theme.primary }}>{data.titleHighlight}</span>
            {data.titleEnd && <><br />{data.titleEnd}</>}
          </h2>
          <p style={{
            fontSize: "15px",
            color: "#6B7280",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto",
          }}>
            {data.subtitle}
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

          {/* ── Employers Card ── */}
          <div style={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            borderTop: `3px solid ${theme.primary}`,
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {/* Title row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "10px",
                background: "#F3F0FF",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Image src="/11.svg" alt="Employer" width={24} height={24} style={{ objectFit: "contain" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0F0F1A", margin: 0 }}>
                {data.employers.title}
              </h3>
            </div>

            {/* Description */}
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
              {data.employers.description}
            </p>

            {/* Stats 2×2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {data.employers.stats.map((stat, i) => (
                <div key={i} style={{
                  background: "#F9FAFB",
                  border: "1px solid #EFEFEF",
                  borderRadius: "12px",
                  padding: "16px 18px",
                }}>
                  {"value" in stat && stat.value ? (
                    <>
                      <div style={{ fontSize: "28px", fontWeight: 800, color: "#0F0F1A", marginBottom: "8px", lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Image src={employerIcons[i]} alt="icon" width={16} height={16} style={{ objectFit: "contain" }} />
                        <div style={{ fontSize: "12px", color: "#6B7280" }}>{stat.label}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#1F2937", marginBottom: "8px" }}>
                        {stat.label}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Image src={employerIcons[i]} alt="icon" width={16} height={16} style={{ objectFit: "contain" }} />
                        <div style={{ fontSize: "12px", color: "#6B7280" }}>{(stat as any).sublabel}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Professionals Card ── */}
          <div style={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            borderTop: "3px solid #3B82F6",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {/* Title row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "10px",
                background: "#EFF6FF",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Image src="/Suitcase.svg" alt="Professionals" width={24} height={24} style={{ objectFit: "contain" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0F0F1A", margin: 0 }}>
                {data.professionals.title}
              </h3>
            </div>

            {/* Description */}
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>
              {data.professionals.description}
            </p>

            {/* Features 2×2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {data.professionals.features.map((feature, i) => {
                return (
                  <div key={i} style={{
                    background: "#F9FAFB",
                    border: "1px solid #EFEFEF",
                    borderRadius: "12px",
                    padding: "16px 18px",
                  }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#1F2937", marginBottom: "8px" }}>
                      {feature.label}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <Image src={professionalIcons[i % professionalIcons.length]} alt="icon" width={16} height={16} style={{ objectFit: "contain" }} />
                      <div style={{ fontSize: "12px", color: "#6B7280" }}>{feature.sublabel}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}