import type { SectorData } from "@/data/energy";

interface RolesGridProps {
  data: SectorData["roles"];
  theme: SectorData["theme"];
}

export default function RolesGrid({ data, theme }: RolesGridProps) {
  return (
    <section className="w-full py-20" style={{ background: theme.bg }}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-block text-sm font-semibold mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: theme.heroBadgeBg,
              color: theme.primary,
            }}
          >
            {data.sectionLabel}
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
            style={{ color: "#1A1A2E", lineHeight: 1.2 }}
          >
            {data.title}{" "}
            <span style={{ color: theme.primary }}>{data.titleHighlight}</span>
            {data.titleEnd}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.categories.map((category, index) => (
            <div
              key={category.id}
              className="card-hover group relative overflow-hidden rounded-2xl p-6 border border-gray-100"
              style={{
                background: index % 2 === 0
                  ? `linear-gradient(135deg, ${theme.heroBadgeBg} 0%, white 60%)`
                  : "white",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Top row: icon + view all roles */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                >
                  {category.icon}
                </div>
                <a
                  href="#"
                  className="text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  style={{ color: theme.primary }}
                >
                  VIEW ALL ROLES
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#1A1A2E" }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  {/* Role tags */}
                  {category.roles && (
                    <div className="flex flex-wrap gap-2">
                      {category.roles.map((role) => (
                        <span
                          key={role}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{
                            background: "white",
                            color: "#666",
                            border: "1px solid #E5E7EB",
                          }}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Decorative bg icon */}
                <div
                  className="hidden sm:flex text-6xl opacity-10 flex-shrink-0 select-none"
                  style={{ filter: "grayscale(1)" }}
                >
                  {category.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
