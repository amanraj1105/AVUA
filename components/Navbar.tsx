"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Products",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "avua Hire", href: "#" },
      { label: "avua Pool", href: "#" },
      { label: "AI Screening", href: "#" },
    ],
  },
  {
    label: "Sectors",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Energy", href: "/sectors/energy" },
      { label: "Healthcare", href: "/sectors/healthcare" },
      { label: "Robotics", href: "/sectors/robotics" },
    ],
  },
  { label: "Job Openings", href: "#", hasDropdown: false },
  {
    label: "Resources",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Blog", href: "#" },
      { label: "Resume Examples", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        background: "#ffffff",
        borderBottom: "1px solid #F3F4F6",
        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "flex-start",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: "#1A1A2E",
              letterSpacing: "-0.05em",
              fontSize: "26px",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            avua
          </span>
          <span
            style={{
              color: "#7B3FF2",
              fontSize: "11px",
              fontWeight: 700,
              lineHeight: 1,
              marginTop: "4px",
            }}
          >
            ®
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              style={{ position: "relative" }}
              onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "8px 14px",
                  fontSize: "14.5px",
                  fontWeight: 500,
                  color: "#374151",
                  textDecoration: "none",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    style={{
                      width: "12px",
                      height: "12px",
                      transition: "transform 200ms",
                      transform: openDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {link.hasDropdown && link.children && openDropdown === link.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    marginTop: "4px",
                    width: "180px",
                    background: "#fff",
                    borderRadius: "12px",
                    border: "1px solid #F0F0F0",
                    padding: "6px 0",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    zIndex: 100,
                  }}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "9px 16px",
                        fontSize: "13.5px",
                        color: "#4B5563",
                        textDecoration: "none",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ── CTA Buttons ── */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className="hidden md:flex"
        >
          {/* Recruit Talent — outlined */}
          <Link
            href="https://avua.com/hire"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "1.5px solid #7B3FF2",
              color: "#7B3FF2",
              padding: "9px 22px",
              fontSize: "14px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              background: "transparent",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#7B3FF2";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#7B3FF2";
            }}
          >
            Recruit Talent
          </Link>

          {/* Explore Job Opportunities — lavender fill */}
          <Link
            href="https://avua.com/jobseeker"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "1.5px solid #C9B8FF",
              background: "#EDE4FF",
              color: "#6C3FF5",
              padding: "9px 22px",
              fontSize: "14px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#7B3FF2";
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "#7B3FF2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#EDE4FF";
              (e.currentTarget as HTMLElement).style.color = "#6C3FF5";
              (e.currentTarget as HTMLElement).style.borderColor = "#C9B8FF";
            }}
          >
            Explore Job Opportunities
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{
            padding: "8px",
            borderRadius: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#374151",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid #F0F0F0", background: "#fff" }} className="md:hidden">
          <div style={{ padding: "12px 16px" }}>
            {navLinks.map((link) => (
              <div key={link.label}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#9CA3AF", padding: "8px 12px" }}>
                  {link.label}
                </div>
                {link.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    style={{
                      display: "block",
                      padding: "8px 24px",
                      fontSize: "14px",
                      color: "#4B5563",
                      textDecoration: "none",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
                {!link.children && (
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "8px 12px",
                      fontSize: "14px",
                      color: "#374151",
                      textDecoration: "none",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ paddingTop: "12px", borderTop: "1px solid #F0F0F0", marginTop: "8px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link
                href="https://avua.com/hire"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "999px",
                  border: "1.5px solid #7B3FF2",
                  color: "#7B3FF2",
                  textDecoration: "none",
                }}
              >
                Recruit Talent
              </Link>
              <Link
                href="https://avua.com/jobseeker"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "999px",
                  background: "#7B3FF2",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Explore Job Opportunities
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}