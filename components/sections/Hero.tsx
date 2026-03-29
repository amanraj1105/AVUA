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
      className="relative w-full overflow-hidden"
      style={{ background: theme.bg }}
    >
      {/* ── Very subtle dot grid pattern — reference has it barely visible ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${theme.primary}18 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />

      {/* ── MAIN CONTAINER ── */}
      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20 pt-10 pb-0">

        {/* ── HERO GRID: ~43% left / ~57% right ── */}
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: "1fr 1.35fr",
            gap: "16px",
          }}
        >

          {/* ════════════════ LEFT COLUMN ════════════════ */}
          <div className="flex flex-col" style={{ paddingBottom: "40px" }}>

            {/* ── Badge ──
                Reference: very subtle lavender fill, no heavy white box,
                small diamond icon, 13px text, compact padding            */}
            <div
              className="inline-flex items-center self-start"
              style={{
                background: "rgba(108, 76, 241, 0.08)",
                border: "1px solid rgba(108, 76, 241, 0.18)",
                borderRadius: "6px",
                padding: "6px 12px",
                gap: "7px",
              }}
            >
              {/* 4-pointed diamond / sparkle icon */}
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M8 0L9.6 6.4L16 8L9.6 9.6L8 16L6.4 9.6L0 8L6.4 6.4L8 0Z"
                  fill={theme.primary}
                />
              </svg>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: theme.primary,
                  whiteSpace: "nowrap",
                  letterSpacing: "0",
                }}
              >
                {data.badge}
              </span>
            </div>

            {/* ── TITLE ──
                Reference: dominant, very large, tight line-height.
                Using clamp: at 1012px (3vw → 30, clamped to 46px min)    */}
            <div style={{ marginTop: "16px" }}>
              <h1
                className="font-black"
                style={{
                  color: "#0F0F1A",
                  fontSize: "clamp(46px, 5vw, 66px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                {data.titleLine1}
              </h1>
              <h1
                className="font-black"
                style={{
                  color: "#0F0F1A",
                  fontSize: "clamp(46px, 5vw, 66px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.025em",
                  margin: 0,
                  /* prevent orphaned word on small screens */
                  whiteSpace: "nowrap",
                }}
              >
                {data.titleLine2Parts.map((part, i) =>
                  part.colored ? (
                    <span
                      key={i}
                      style={{
                        /* Purple word — match reference vibrant purple */
                        color: theme.primary,
                      }}
                    >
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </h1>
            </div>

            {/* ── Subtitle ──
                Reference: narrower, slightly darker gray, slightly smaller  */}
            <p
              style={{
                marginTop: "16px",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#4B5563",
                maxWidth: "360px",
              }}
            >
              {data.subtitle}
            </p>

            {/* ── CTA Buttons ──
                Reference:
                  Primary   → strong purple gradient + subtle glow + pill
                  Secondary → very light gray fill + neutral border + pill   */}
            <div
              className="flex flex-wrap items-center"
              style={{ gap: "16px", marginTop: "28px" }}
            >
              {/* "Hire Contractors" — vibrant purple gradient pill */}
              <Link
                href={data.cta.primary.href}
                id="hero-cta-primary"
                className="inline-flex items-center justify-center font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary} 0%, #5B1FCC 100%)`,
                  borderRadius: "9999px",
                  padding: "13px 28px",
                  fontSize: "14.5px",
                  boxShadow: `0 4px 20px ${theme.primary}60`,
                  whiteSpace: "nowrap",
                  border: "none",
                }}
              >
                {data.cta.primary.label}
              </Link>

              {/* "Build Your Energy Resume" — very subtle outlined pill */}
              <Link
                href={data.cta.secondary.href}
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center font-medium transition-all duration-200"
                style={{
                  borderRadius: "9999px",
                  padding: "12px 24px",
                  fontSize: "14.5px",
                  border: "1.5px solid #D1D5DB",
                  color: "#374151",
                  background: "#F9F9FB",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#9CA3AF";
                  (e.currentTarget as HTMLElement).style.background = "#F3F4F6";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#D1D5DB";
                  (e.currentTarget as HTMLElement).style.background = "#F9F9FB";
                }}
              >
                {data.cta.secondary.label}
              </Link>
            </div>
          </div>

          {/* ════════════════ RIGHT COLUMN — IMAGE ════════════════ */}
          <div
            className="relative flex items-end justify-end"
            style={{ minHeight: "360px" }}
          >

            {/* ── "15 Relevant Candidates" floating card — top-right ──
                Reference: compact card, white bg, subtle shadow, right-aligned  */}
            <div
              className="absolute z-20 bg-white"
              style={{
                top: "4px",
                right: "0px",
                padding: "10px 14px",
                borderRadius: "14px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
                minWidth: "190px",
              }}
            >
              {/* Count row */}
              <div
                className="flex items-center"
                style={{ gap: "7px", marginBottom: "7px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22C55E",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#111827" }}>
                  {data.floatingCard.count}
                </span>
                <span style={{ fontSize: "11.5px", fontWeight: 500, color: "#6B7280" }}>
                  {data.floatingCard.label}
                </span>
              </div>

              {/* Avatar stack + "+12 More" */}
              <div className="flex items-center" style={{ gap: "5px" }}>
                <div className="flex items-center">
                  {[
                    "#A78BFA",
                    "#6EE7B7",
                    "#FCA5A5",
                  ].map((bg, i) => (
                    <div
                      key={i}
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        background: bg,
                        border: "2px solid white",
                        marginLeft: i > 0 ? "-7px" : 0,
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 500 }}>
                  {data.floatingCard.extra}
                </span>
              </div>
            </div>

            {/* ── Dashboard image ──
                paddingTop pushes it below the floating card              */}
            <div
              className="relative w-full"
              style={{ paddingTop: "48px" }}
            >
              <Image
                src={data.heroImage}
                alt="avua Platform Dashboard"
                width={780}
                height={560}
                className="w-full h-auto object-contain"
                style={{
                  filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.20))",
                }}
                priority
              />
            </div>

            {/* ── "Credentials Verified" badge ──
                Reference: centered horizontally below the dashboard image,
                green checkmark circle + bold label text, compact           */}
            <div
              className="absolute z-20 bg-white"
              style={{
                bottom: "68px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "8px 16px",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "7px",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1.5 5L3.8 7.5L8.5 2.5"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                {data.credentials}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
