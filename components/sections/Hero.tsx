"use client";

import Image from "next/image";
import Link from "next/link";
import type { SectorData } from "@/data/energy";

interface HeroProps {
  data: SectorData["hero"];
  theme: SectorData["theme"];
}

export default function Hero({ data, theme }: HeroProps) {
  return (
    <section
      style={{
        background: theme.bg,
        width: "100%",
        height: "calc(100vh - 96px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${theme.primary}18 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* ── MAIN CONTAINER ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* ════ LEFT COLUMN ════ */}
        <div style={{ display: "flex", flexDirection: "column" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div
              style={{
                width: "34px", height: "34px", borderRadius: "10px",
                background: `${theme.primary}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                  stroke={theme.primary} strokeWidth="1.8" strokeLinejoin="round" fill="none"
                />
              </svg>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 500, color: "#374151" }}>
              {data.badge}
            </span>
          </div>

          {/* Title — 2 lines, no wrap issue */}
          <div style={{ marginBottom: "20px" }}>
            <h1
              style={{
                color: "#0F0F1A",
                fontSize: "clamp(36px, 3.8vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {data.titleLine1}
            </h1>
            <h1
              style={{
                color: "#0F0F1A",
                fontSize: "clamp(36px, 3.8vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              {data.titleLine2Parts.map((part, i) =>
                part.colored ? (
                  <span key={i} style={{ color: theme.primary }}>{part.text}</span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h1>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "15.5px",
              lineHeight: 1.7,
              color: "#4B5563",
              maxWidth: "420px",
              marginBottom: "32px",
            }}
          >
            {data.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href={data.cta.primary.href}
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: theme.primary,
                borderRadius: "12px",
                padding: "13px 28px",
                fontSize: "14.5px", fontWeight: 600, color: "#fff",
                whiteSpace: "nowrap", border: "none",
                boxShadow: `0 6px 20px ${theme.primary}55`,
                textDecoration: "none",
              }}
            >
              {data.cta.primary.label}
            </Link>
            <Link
              href={data.cta.secondary.href}
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "14.5px", fontWeight: 500,
                border: "1.5px solid #D1D5DB",
                color: "#374151", background: "#FFFFFF",
                whiteSpace: "nowrap", textDecoration: "none",
              }}
            >
              {data.cta.secondary.label}
            </Link>
          </div>
        </div>

        {/* ════ RIGHT COLUMN ════ */}
        <div style={{ position: "relative", width: "100%" }}>

          {/* "15 Relevant Candidates" — top-right, overlapping image corner */}
          {/* <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 6px 28px rgba(0,0,0,0.13)",
              padding: "12px 16px",
              minWidth: "200px",
              zIndex: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "9px" }}>
              <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
              <span style={{ fontSize: "13.5px", fontWeight: 700, color: "#111827" }}>
                {data.floatingCard.count}
              </span>
              <span style={{ fontSize: "12.5px", fontWeight: 500, color: "#6B7280" }}>
                {data.floatingCard.label}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex" }}>
                {["#A78BFA", "#6EE7B7", "#FCA5A5"].map((bg, i) => (
                  <div
                    key={i}
                    style={{
                      width: "26px", height: "26px", borderRadius: "50%",
                      background: bg, border: "2.5px solid white",
                      marginLeft: i > 0 ? "-8px" : 0,
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: 500 }}>
                {data.floatingCard.extra}
              </span>
            </div>
          </div> */}

          {/* Dashboard image */}
          <div style={{ paddingTop: "44px", paddingBottom: "64px" }}>
            <Image
              src={data.heroImage}
              alt="avua Platform Dashboard"
              width={900}
              height={640}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 20px 52px rgba(0,0,0,0.20))",
                borderRadius: "10px",
                display: "block",
              }}
              priority
            />
          </div>

          {/* "Credentials Verified" — bottom-left, overlapping image */}
          {/* <div
            style={{
              position: "absolute",
              bottom: "28px",
              left: "0px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 22px rgba(0,0,0,0.13)",
              padding: "10px 16px",
              display: "flex", alignItems: "center", gap: "9px",
              whiteSpace: "nowrap",
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: "22px", height: "22px", borderRadius: "50%",
                background: "#22C55E",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>
              {data.credentials}
            </span>
          </div> */}

        </div>
      </div>
    </section>
  );
}