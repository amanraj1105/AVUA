"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { SectorData } from "@/data/energy";

interface FooterProps {
  data: SectorData["footer"];
}

const socialIcons: Record<string, ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
};

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M17.523 15.341a1 1 0 01-1-1V9.659a1 1 0 012 0v4.682a1 1 0 01-1 1zm-11.046 0a1 1 0 01-1-1V9.659a1 1 0 012 0v4.682a1 1 0 01-1 1zM8.5 7h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5H15v2.5a1 1 0 01-2 0V15h-2v2.5a1 1 0 01-2 0V15H8.5A.5.5 0 018 14.5v-7A.5.5 0 018.5 7zM7.172 6l-.9-1.558a.25.25 0 01.433-.25l.93 1.61A5.987 5.987 0 0112 5c1.48 0 2.83.535 3.865 1.417l.93-1.61a.25.25 0 01.433.25L16.328 6a6 6 0 00-9.156 0zM10 9.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 0a.5.5 0 11-1 0 .5.5 0 011 0z" />
  </svg>
);

export default function Footer({ data }: FooterProps) {
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #1E1040 0%, #3A1870 40%, #5C2E9A 70%, #7B45B8 100%)",
        paddingTop: "32px",
        paddingBottom: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Inner container — matches max-width and horizontal padding of rest of site */}
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
          boxSizing: "border-box",
        }}
      >
        {/* ── 4-col grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            paddingBottom: "10px",
            alignItems: "start",
          }}
        >
          {/* ── Col 1: Brand + Socials ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "flex-start", lineHeight: 1 }}>
              <span
                style={{
                  color: "#ffffff",
                  fontFamily: "'Arial Black', 'Arial Bold', Arial, Helvetica, sans-serif",
                  fontSize: "3rem",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                avua
              </span>
              <span
                style={{
                  color: "#ffffff",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginTop: "6px",
                  marginLeft: "1px",
                }}
              >
                ®
              </span>
            </div>

            {/* Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {data.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.10)",
                    border: "1.5px solid rgba(255,255,255,0.45)",
                    transition: "background 0.2s, transform 0.2s",
                    flexShrink: 0,
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  {socialIcons[social.label] ?? (
                    <span style={{ fontSize: "13px" }}>{social.label[0]}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Services ── */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "1.05rem",
                margin: "0 0 22px 0",
                letterSpacing: "0",
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {data.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Company ── */}
          <div>
            <h4
              style={{
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "1.05rem",
                margin: "0 0 22px 0",
                letterSpacing: "0",
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {data.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Mobile App card ── */}
          <div>
            <div
              style={{
                borderRadius: "14px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "rgba(255,255,255,0.07)",
                border: "1.5px solid rgba(255,255,255,0.30)",
                boxSizing: "border-box",
              }}
            >
              <div>
                <h4
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    margin: "0 0 8px 0",
                    lineHeight: 1.2,
                  }}
                >
                  Apply on the go
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.70)",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  Get real-time job updates on our app
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* Apple App Store */}
                <a
                  href="#"
                  aria-label="App Store"
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    color: "#111111",
                    flexShrink: 0,
                    transition: "opacity 0.2s",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </a>

                {/* Android */}
                <a
                  href="#"
                  aria-label="Google Play"
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    color: "#111111",
                    flexShrink: 0,
                    transition: "opacity 0.2s",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.opacity = "1")
                  }
                >
                  <AndroidIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom divider + copyright ── */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.875rem",
              margin: 0,
            }}
          >
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}