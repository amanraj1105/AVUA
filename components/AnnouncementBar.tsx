import type { SectorData } from "@/data/energy";

interface AnnouncementBarProps {
  data: SectorData["announcement"];
  theme: SectorData["theme"];
}

export default function AnnouncementBar({ data, theme }: AnnouncementBarProps) {
  return (
    <div
      className="w-full"
      style={{ background: theme.announcementBg, padding: "10px 0" }}
    >
      <div className="max-w-full mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex items-center justify-center flex-wrap" style={{ gap: "0" }}>
          {data.items.map((item, index) => (
            <div key={index} className="flex items-center" style={{ gap: "7px" }}>

              {/* Vertical divider between items */}
              {index > 0 && (
                <div
                  style={{
                    width: "1px",
                    height: "16px",
                    background: "rgba(255,255,255,0.20)",
                    margin: "0 24px",
                  }}
                />
              )}

              {item.stars ? (
                /* ── Star rating item ── */
                <div className="flex items-center" style={{ gap: "6px" }}>
                  {/* Orange circle with star */}
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "#F59E0B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    ★
                  </div>
                  {/* Star row */}
                  <div className="flex items-center" style={{ gap: "1.5px" }}>
                    {[1, 2, 3, 4].map((s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 20 20" fill="#F59E0B">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {/* Half star */}
                    <svg width="12" height="12" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="half-star-bar" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="70%" stopColor="#F59E0B" />
                          <stop offset="70%" stopColor="rgba(255,255,255,0.20)" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#half-star-bar)"
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                  <span style={{ color: "white", fontSize: "13px", fontWeight: 600 }}>
                    {item.rating}
                  </span>
                </div>
              ) : (
                /* ── Plain text item ── */
                <div className="flex items-center" style={{ gap: "6px" }}>
                  <span style={{ fontSize: "14px", lineHeight: 1 }}>{item.icon}</span>
                  <span style={{ color: "white", fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {item.text}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
