import type { SectorData } from "@/data/energy";

interface HireProcessProps {
  data: SectorData["hireProcess"];
  theme: SectorData["theme"];
}

const stepIcons = [
  // Post role icon
  <svg key="post" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // AI screen icon
  <svg key="ai" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M9 8V6a3 3 0 016 0v2" strokeLinecap="round" />
    <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
  </svg>,
  // Review icon
  <svg key="review" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Onboard icon
  <svg key="onboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function HireProcess({ data, theme }: HireProcessProps) {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold mb-4"
            style={{ color: theme.primary }}
          >
            {data.sectionLabel}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6"
            style={{ color: "#0F0F1A" }}
          >
            {data.title}
            <br />
            <span style={{ color: theme.primary }}>{data.titleLine2Colored}</span>
            {data.titleLine2Rest}
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col gap-5 p-6 rounded-2xl bg-white border"
              style={{
                borderColor: "#F0F0F0",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: "#EDE4FF", color: theme.primary }}
              >
                {stepIcons[index]}
              </div>

              {/* Step Number + Title */}
              <div>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: theme.primary }}
                >
                  {index + 1}. {step.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
