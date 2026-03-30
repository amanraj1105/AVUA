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
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* ════ LEFT COLUMN ════ */}
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <div
              style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: `${theme.primary}10`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4.85742C11.6309 6.18341 12.4847 7.40458 13.54 8.45996C14.5952 9.51513 15.8159 10.3691 17.1416 11C15.8159 11.6309 14.5952 12.4849 13.54 13.54C12.4849 14.5952 11.6309 15.8159 11 17.1416C10.3692 15.8158 9.51614 14.5943 8.46094 13.5391C7.40552 12.4836 6.18349 11.6308 4.85742 11C6.18349 10.3692 7.40552 9.51636 8.46094 8.46094C9.51636 7.40552 10.3692 6.18349 11 4.85742Z" stroke="url(#paint0_linear_1_141)" strokeWidth="2.52381"/>
                <defs>
                  <linearGradient id="paint0_linear_1_141" x1="0" y1="11" x2="22" y2="11" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B47BFE"/>
                    <stop offset="1" stopColor="#371E5A"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              style={{
                background: `${theme.primary}10`,
                borderRadius: "10px",
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "14.5px", fontWeight: 600, color: "#1F2937" }}>
                {data.badge}
              </span>
            </div>
          </div>

          {/* Title — 2 lines, bold, sized to fit left column without overflow */}
          <div style={{ marginBottom: "24px" }}>
            <h1
              style={{
                color: "#0D0D14",
                fontSize: "clamp(26px, 3.4vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                whiteSpace: "nowrap",
                margin: 0,
              }}
            >
              {data.titleLine1}
            </h1>
            <h1
              style={{
                color: "#0D0D14",
                fontSize: "clamp(26px, 3.4vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                whiteSpace: "nowrap",
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
              fontSize: "15px",
              lineHeight: 1.65,
              color: "#4B5563",
              maxWidth: "400px",
              marginBottom: "36px",
              marginTop: 0,
            }}
          >
            {data.subtitle}
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link
              href={data.cta.primary.href}
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: theme.buttonGradient,
                borderRadius: "12px",
                padding: "14px 32px",
                fontSize: "15px", fontWeight: 600, color: "#fff",
                whiteSpace: "nowrap", border: "none",
                boxShadow: theme.buttonShadow,
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
                padding: "13px 28px",
                fontSize: "15px", fontWeight: 500,
                border: "1.5px solid #D1D5DB",
                color: "#111827",
                background: "#FFFFFF",
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              {data.cta.secondary.label}
            </Link>
          </div>
        </div>

        {/* ════ RIGHT COLUMN ════ */}
        <div style={{ position: "relative", width: "100%", minWidth: 0 }}>

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

        </div>
      </div>
    </section>
  );
}