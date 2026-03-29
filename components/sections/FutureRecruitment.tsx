import type { SectorData } from "@/data/energy";

interface FutureRecruitmentProps {
  data: SectorData["futureRecruitment"];
  theme: SectorData["theme"];
}

export default function FutureRecruitment({ data, theme }: FutureRecruitmentProps) {
  return (
    <section
      className="w-full py-24"
      style={{ background: "#F8F7FF" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold mb-4"
            style={{ color: theme.primary }}
          >
            {data.sectionLabel}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5"
            style={{ color: "#0F0F1A" }}
          >
            {data.title}{" "}
            <span style={{ color: theme.primary }}>{data.titleHighlight}</span>
            {data.titleEnd}
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* For Energy Employers */}
          <div
            className="rounded-3xl p-8 flex flex-col gap-6"
            style={{
              background: "white",
              border: `2px solid ${theme.primary}25`,
              borderTop: `3px solid ${theme.primary}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#EDE4FF" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth={1.5} className="w-5 h-5">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#0F0F1A" }}>
                {data.employers.title}
              </h3>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              {data.employers.description}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {data.employers.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: "#F8F7FF", border: "1px solid #EDE4FF" }}
                >
                  {"value" in stat && stat.value ? (
                    <>
                      <div className="text-2xl font-black" style={{ color: theme.primary }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span style={{ color: theme.primary }} className="text-sm font-bold">✓</span>
                      <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* For Energy Professionals */}
          <div
            className="rounded-3xl p-8 flex flex-col gap-6"
            style={{
              background: "white",
              border: "2px solid #3B82F625",
              borderTop: "3px solid #3B82F6",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#EFF6FF" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth={1.5} className="w-5 h-5">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-bold" style={{ color: "#0F0F1A" }}>
                {data.professionals.title}
              </h3>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              {data.professionals.description}
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {data.professionals.features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: "#F8FAFF", border: "1px solid #DBEAFE" }}
                >
                  <div className="text-sm font-semibold text-gray-800 mb-0.5">
                    {feature.label}
                  </div>
                  <div className="text-xs text-gray-400">{feature.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
