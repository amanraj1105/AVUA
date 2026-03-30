import type { SectorData } from "@/data/energy";

interface FutureRecruitmentProps {
  data: SectorData["futureRecruitment"];
  theme: SectorData["theme"];
}

export default function FutureRecruitment({ data, theme }: FutureRecruitmentProps) {
  return (
    <section style={{ width: "100%", background: "#ffffff", padding: "64px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "14px", fontWeight: 600, color: theme.primary, marginBottom: "12px" }}>
            {data.sectionLabel}
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 4.5vw, 52px)",
            fontWeight: 900,
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
                <svg viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth={1.5} width={20} height={20}>
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                      {/* Trending up icon */}
                      <svg viewBox="0 0 20 20" fill="none" width={16} height={16} style={{ marginBottom: "6px" }}>
                        <polyline points="2,14 7,8 11,11 18,4" stroke={theme.primary} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <polyline points="13,4 18,4 18,9" stroke={theme.primary} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <div style={{ fontSize: "28px", fontWeight: 900, color: "#0F0F1A", lineHeight: 1 }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "4px" }}>
                        {stat.label}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* 2×2 grid icon */}
                      <svg viewBox="0 0 20 20" fill="none" width={16} height={16} style={{ marginBottom: "6px" }}>
                        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke={theme.primary} strokeWidth={1.6} />
                        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke={theme.primary} strokeWidth={1.6} />
                        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke={theme.primary} strokeWidth={1.6} />
                        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke={theme.primary} strokeWidth={1.6} />
                      </svg>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#1F2937" }}>
                        {stat.label}
                      </div>
                      {"sublabel" in stat && (stat as { label: string; sublabel?: string }).sublabel && (
                        <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "3px" }}>
                          {(stat as { label: string; sublabel: string }).sublabel}
                        </div>
                      )}
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
                <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={1.5} width={20} height={20}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                const amberIcons = [
                  /* alert circle */
                  <svg key="0" viewBox="0 0 20 20" fill="none" width={16} height={16}>
                    <circle cx="10" cy="10" r="7" stroke="#F59E0B" strokeWidth={1.6} />
                    <path d="M10 7v3.5M10 13h.01" stroke="#F59E0B" strokeWidth={1.6} strokeLinecap="round" />
                  </svg>,
                  /* globe */
                  <svg key="1" viewBox="0 0 20 20" fill="none" width={16} height={16}>
                    <circle cx="10" cy="10" r="7" stroke="#F59E0B" strokeWidth={1.6} />
                    <path d="M3 10h14M10 3c-2 2.5-3 4.8-3 7s1 4.5 3 7M10 3c2 2.5 3 4.8 3 7s-1 4.5-3 7" stroke="#F59E0B" strokeWidth={1.3} strokeLinecap="round" />
                  </svg>,
                  /* document */
                  <svg key="2" viewBox="0 0 20 20" fill="none" width={16} height={16}>
                    <rect x="4" y="2" width="12" height="16" rx="2" stroke="#F59E0B" strokeWidth={1.6} />
                    <path d="M7 7h6M7 10h6M7 13h4" stroke="#F59E0B" strokeWidth={1.4} strokeLinecap="round" />
                  </svg>,
                  /* shield */
                  <svg key="3" viewBox="0 0 20 20" fill="none" width={16} height={16}>
                    <path d="M10 2l6 2.5v5C16 13.5 13 17 10 18c-3-1-6-4.5-6-8.5v-5L10 2z" stroke="#F59E0B" strokeWidth={1.6} strokeLinejoin="round" />
                  </svg>,
                ];
                return (
                  <div key={i} style={{
                    background: "#F9FAFB",
                    border: "1px solid #EFEFEF",
                    borderRadius: "12px",
                    padding: "16px 18px",
                  }}>
                    <div style={{ marginBottom: "6px" }}>{amberIcons[i % 4]}</div>
                    <div style={{ fontSize: "14px", fontWeight: 600, color: "#1F2937" }}>
                      {feature.label}
                    </div>
                    <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "3px" }}>
                      {feature.sublabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}