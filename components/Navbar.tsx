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
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-100"
      style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Navbar row — height: 56px matches reference */}
        <div className="flex items-center justify-between" style={{ height: "56px" }}>

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center flex-shrink-0" style={{ gap: "0px" }}>
            <span
              className="font-black select-none"
              style={{
                color: "#1A1A2E",
                letterSpacing: "-0.05em",
                fontSize: "22px",
                lineHeight: 1,
              }}
            >
              avua
            </span>
            <span
              style={{
                color: "#7B3FF2",
                fontSize: "10px",
                fontWeight: 700,
                lineHeight: 1,
                alignSelf: "flex-start",
                marginTop: "3px",
              }}
            >
              ®
            </span>
          </Link>

          {/* ── Desktop Nav — gap matches reference spacing ── */}
          <nav className="hidden md:flex items-center" style={{ gap: "0px" }}>
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-md transition-colors duration-150"
                  style={{
                    padding: "6px 12px",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    color: "#374151",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#111827";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#374151";
                  }}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      style={{
                        width: "11px",
                        height: "11px",
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
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl border border-gray-100 py-2"
                    style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)", zIndex: 100 }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        style={{ fontSize: "13px" }}
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
          <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
            {/* "Recruit Talent" — transparent with purple outline */}
            <Link
              href="https://avua.com/hire"
              className="rounded-full border font-semibold transition-all duration-200"
              style={{
                borderColor: "#7B3FF2",
                color: "#7B3FF2",
                padding: "7px 18px",
                fontSize: "13px",
                whiteSpace: "nowrap",
                background: "transparent",
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

            {/* "Explore Job Opportunities" — lavender fill */}
            <Link
              href="https://avua.com/jobseeker"
              className="rounded-full border font-semibold transition-all duration-200"
              style={{
                background: "#EDE4FF",
                borderColor: "#C9B8FF",
                color: "#6C3FF5",
                padding: "7px 18px",
                fontSize: "13px",
                whiteSpace: "nowrap",
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
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="text-sm font-semibold text-gray-500 px-3 py-2">{link.label}</div>
                {link.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
                {!link.children && (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 pb-2 space-y-2 border-t border-gray-100 mt-2">
              <Link
                href="https://avua.com/hire"
                className="block w-full text-center py-2.5 text-sm font-semibold rounded-full border"
                style={{ borderColor: "#7B3FF2", color: "#7B3FF2" }}
              >
                Recruit Talent
              </Link>
              <Link
                href="https://avua.com/jobseeker"
                className="block w-full text-center py-2.5 text-sm font-semibold rounded-full text-white"
                style={{ background: "#7B3FF2" }}
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
