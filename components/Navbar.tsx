"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const navLinks = [
  {
    label: "Products",
    href: "#",
    
  },
  {
    label: "Sectors",
    href: "#",
    hasDropdown: true,
    isMega: true,
    children: [
      {
        label: "Energy", href: "/sectors/energy",
        desc: "Connect with skilled professionals driving innovation in renewable and traditional energy solutions.",
        bg: "#DDF7C6"
      },
      
      {
        label: "Healthcare", href: "/sectors/healthcare",
        desc: "Discover qualified talent supporting patient care, medical innovation, and health services.",
        bg: "#B5F5EB"
      },
      
      
      {
        label: "Robotics", href: "/sectors/robotics",
        desc: "Skilled robotics professionals across automation, AI systems, and advanced engineering disciplines.",
        bg: "#F9E1A3"
      },
    ],
  },
  { label: "Job Openings", href: "#", hasDropdown: false },
  {
    label: "Resources",
    href: "#",
    
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 250); // 250ms delay keeps it open while moving
  };

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
          maxWidth: "100%",
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
              style={{ position: (link as any).isMega ? "static" : "relative" }}
              onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
              onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
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
                  color: openDropdown === link.label && link.label === "Sectors" ? "#fff" : "#374151",
                  background: openDropdown === link.label && link.label === "Sectors" ? "#3F2B66" : "transparent",
                  textDecoration: "none",
                  borderRadius: "999px",
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
                (link as any).isMega ? (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      width: "100%",
                      background: "#fff",
                      borderTop: "1px solid #E5E7EB",
                      borderBottom: "1px solid #E5E7EB",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      padding: "40px 0",
                      zIndex: 100,
                      cursor: "default"
                    }}
                  >
                    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        columnGap: "32px",
                        rowGap: "0",
                      }}>
                        {link.children.map((child: any, idx) => (
                           <Link key={child.label} href={child.href} style={{ 
                             textDecoration: "none", display: "flex", gap: "16px",
                             paddingTop: idx >= 3 ? "32px" : "0",
                             paddingBottom: idx < 3 ? "32px" : "0",
                             borderTop: idx >= 3 ? "1px solid #E5E7EB" : "none",
                             alignItems: "flex-start",
                           }}>
                             <div style={{
                               width: "56px", height: "56px", borderRadius: "50%", flexShrink: 0,
                               background: child.bg || "#eee", display: "flex", alignItems: "center", justifyContent: "center",
                               color: "#1F2937"
                             }}>
                               {child.label === "Energy" && <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="6" y="5" width="12" height="15" rx="2" /><path d="M9 3h6" strokeLinecap="round" /><path d="M11 9l-2 3h4l-2 3" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                               {child.label === "Construction" && <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 4a8 8 0 00-8 8h16a8 8 0 00-8-8z" /><path d="M3 16h18M12 4v4 M8 12h8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                               {child.label === "Healthcare" && <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" /><path d="M9 12h6M12 9v6" strokeLinecap="round" /></svg>}
                               {child.label === "Life Sciences" && <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)" /><ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-45 12 12)" /><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>}
                               {child.label === "Technology" && <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 9h6v6H9z" /><path d="M9 2v3 M15 2v3 M9 19v3 M15 19v3 M2 9h3 M2 15h3 M19 9h3 M19 15h3" strokeLinecap="round" /></svg>}
                               {child.label === "Robotics" && <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="5" y="9" width="14" height="12" rx="3" /><path d="M12 9V3M9 3h6" strokeLinecap="round" /><circle cx="12" cy="15" r="2" /></svg>}
                             </div>
                             <div>
                               <h4 style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: 700, color: "#1F2937" }}>
                                 {child.label}
                               </h4>
                               <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.5, color: "#6B7280" }}>
                                 {child.desc}
                               </p>
                             </div>
                           </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
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
                    {link.children.map((child: any) => (
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
                )
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