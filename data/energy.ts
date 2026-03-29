// Energy sector data
export const energyData = {
  meta: {
    title: "avua® | Energy Sector Recruitment",
    description: "Connect specialized energy talent with critical projects. From oil & gas to renewables.",
  },
  sector: "energy",
  theme: {
    primary: "#7B3FF2",
    primaryLight: "#9B4FFF",
    heroGradient: "linear-gradient(90deg, #B47BFE 0%, #371E5A 100%)",
    strokeGradient: "linear-gradient(90deg, rgba(55, 30, 90, 0.18) 0%, #9B4FFF 51.44%, rgba(55, 30, 90, 0.18) 100%)",
    secondaryGradient: "linear-gradient(90deg, #864EFF 0%, #502F99 100%)",
    bg: "#F5F2FA",
    heroBadgeBg: "#EDE4FF",
    heroBadgeText: "#7D22F5",
    announcementBg: "#2B1845",
  },
  hero: {
    badge: "Energy Recruitment Reimagined",
    titleLine1: "Power the Future.",
    titleLine2Parts: [
      { text: "Transform ", colored: false },
      { text: "Energy", colored: true },
      { text: " Hiring.", colored: false },
    ],
    subtitle: "From oil & gas to renewables, nuclear to hydrogen—connect specialized energy talent with critical projects.",
    cta: {
      primary: { label: "Hire Contractors", href: "https://avua.com/hire" },
      secondary: { label: "Build Your Energy Resume", href: "https://avua.com/jobseeker" },
    },
    heroImage: "/Frame 2133921883.svg",
    floatingCard: {
      count: "15",
      label: "Relevant Candidates",
      extra: "+12 More",
    },
    credentials: "Credentials Verified",
  },
  announcement: {
    items: [
      { icon: "👍", text: "Trusted by 100,000+ job seekers" },
      { icon: "⭐", rating: "4.6/5 stars", stars: 4.5 },
      { icon: "🔒", text: "GDPR certified data protection" },
    ],
  },
  whyAvua: {
    sectionLabel: "Why choose avua",
    title: "Why the industry chooses",
    titleHighlight: "avua",
    subtitle: "We streamline the complex nature of energy hiring into a simple, efficient workflow.",
    features: [
      {
        id: "ai-matching",
        icon: "🤖",
        iconBg: "#EDE4FF",
        title: "AI-Powered Matching",
        description: "Intelligent algorithms match candidates to roles based on technical skills, certifications, and project experience.",
      },
      {
        id: "screening",
        icon: "✅",
        iconBg: "#EDE4FF",
        title: "Automated Screening",
        description: "Conversational AI interviews assess technical competencies and safety compliance before human review.",
      },
      {
        id: "global",
        icon: "🌐",
        iconBg: "#EDE4FF",
        title: "Global Energy Access",
        description: "Connect with specialized energy professionals worldwide across all sectors and project types.",
      },
      {
        id: "streamlined",
        icon: "⚡",
        iconBg: "#EDE4FF",
        title: "Streamlined Hiring",
        description: "Reduce time-to-hire with structured candidate profiles and end-to-end contractor management.",
      },
    ],
  },
  challenges: {
    sectionTitle: "Energy Talent is Complex.",
    sectionTitleHighlight: " Hiring",
    sectionTitleEnd: " Shouldn't Be.",
    subtitle: "The global energy sector is transforming at unprecedented speed. Traditional recruitment methods can't keep pace with the specialized, project-based nature of modern energy work.",
    employerChallenges: {
      title: "Employer Challenges",
      items: [
        {
          id: "talent-shortage",
          icon: "⚠️",
          title: "Talent Shortage",
          description: "Critical shortage of experienced engineers and specialized professionals.",
        },
        {
          id: "niche-requirements",
          icon: "📋",
          title: "Niche Requirements",
          description: "Highly specific technical skills across multiple energy sub-sectors.",
        },
        {
          id: "contract-complexity",
          icon: "📄",
          title: "Contract Complexity",
          description: "Project-based workforce with varying contract lengths and requirements.",
        },
        {
          id: "global-competition",
          icon: "🌍",
          title: "Global Competition",
          description: "Competing worldwide for qualified, experienced energy professionals.",
        },
        {
          id: "slow-processes",
          icon: "⏱️",
          title: "Slow Processes",
          description: "Extended time-to-hire delays critical project timelines and delivery.",
        },
      ],
    },
    professionalChallenges: {
      title: "Professional Challenges",
      items: [
        {
          id: "scattered-opportunities",
          icon: "🔍",
          title: "Scattered Opportunities",
          description: "Difficulty finding relevant energy roles consolidated in one platform.",
        },
        {
          id: "unclear-expectations",
          icon: "❓",
          title: "Unclear Expectations",
          description: "Inconsistent requirements across different energy sub-sectors.",
        },
        {
          id: "resume-complexity",
          icon: "📝",
          title: "Resume Complexity",
          description: "Structuring technical, project-based resumes for energy sector.",
        },
        {
          id: "limited-visibility",
          icon: "👁️",
          title: "Limited Visibility",
          description: "Hard to connect with employers hiring for contract or project work.",
        },
        {
          id: "compliance-navigation",
          icon: "⚖️",
          title: "Compliance Navigation",
          description: "Managing complex certifications and regulatory requirements.",
        },
      ],
    },
  },
  roles: {
    sectionLabel: "Energy Expertise",
    title: "Roles We Cover Across All",
    titleHighlight: "Energy",
    titleEnd: " Sectors",
    subtitle: "From oil & gas to renewables, nuclear to hydrogen—find specialised talent across the entire energy spectrum. avua supports recruitment for technical, operational, and management positions in traditional and emerging energy sectors.",
    categories: [
      {
        id: "oil-gas",
        icon: "🏭",
        title: "Oil & Gas Engineering",
        description: "We deliver reliable, safety-driven engineering solutions for oil, gas, and energy infrastructure — executed with precision and efficiency.",
        roles: ["Petroleum Engineers", "Pipeline Engineers", "Process Engineers", "HSE Specialists"],
      },
      {
        id: "nuclear",
        icon: "⚛️",
        title: "Nuclear Energy",
        description: "Delivering advanced engineering and technical solutions for safe, efficient, and high-performance nuclear power infrastructure.",
        roles: ["Nuclear Engineers", "Radiation Safety Officers", "Reactor Operators"],
      },
      {
        id: "renewable",
        icon: "🌿",
        title: "Renewable Energy",
        description: "Driving the clean energy transition with expertise in solar, wind, hydro, and emerging renewable technologies.",
        roles: ["Solar Engineers", "Wind Turbine Technicians", "Grid Integration Specialists"],
      },
      {
        id: "power-systems",
        icon: "⚡",
        title: "Power Systems & Grid",
        description: "Strengthening energy networks with resilient transmission, substations, and distribution infrastructure expertise.",
        roles: ["Substation Engineers", "Power Systems Engineers", "SCADA Engineers", "Grid Operators"],
      },
      {
        id: "hydrogen",
        icon: "💧",
        title: "Hydrogen & Clean Fuels",
        description: "Advancing zero-emission energy solutions with specialists in hydrogen production, storage, and distribution.",
        roles: ["Hydrogen Engineers", "Electrolyser Specialists", "Clean Fuel Researchers"],
      },
      {
        id: "energy-management",
        icon: "📊",
        title: "Energy Management",
        description: "Optimising energy use and efficiency with experts in monitoring, analytics, and smart building systems.",
        roles: ["Energy Analysts", "EMS Specialists", "Carbon Consultants"],
      },
    ],
  },
  security: {
    sectionTitle: "Enterprise-Grade",
    sectionTitleHighlight: " Protection",
    subtitle: "From source to grid—hire specialized talent across the energy value chain. avua recruits technical, operational, and leadership professionals across power, renewables, utilities, and emerging energy sectors.",
    features: [
      {
        id: "gdpr",
        icon: "🛡️",
        title: "GDPR Compliant",
        description: "Full compliance with global data protection regulations, ensuring privacy and security for all users.",
      },
      {
        id: "encrypted",
        icon: "🔐",
        title: "Encrypted Data Storage",
        description: "Bank-level encryption protects sensitive information, from personal details to payment data.",
      },
      {
        id: "transparent",
        icon: "📋",
        title: "Transparent Data Usage",
        description: "Clear policies and user controls over personal data, with no surprises or hidden practices.",
      },
    ],
  },
  hireProcess: {
    sectionLabel: "For Employers",
    title: "Hire Energy Talent,",
    titleLine2Colored: "Powered",
    titleLine2Rest: " by AI",
    subtitle: "Connect with specialized energy professionals through intelligent matching, AI-driven screening, and streamlined contractor management.",
    steps: [
      {
        number: "1",
        title: "Post Your Energy Role",
        description: "Create detailed job postings with technical requirements, certifications, and project specifics across all areas of energy sectors. Your role goes live instantly to our network of qualified professionals.",
      },
      {
        number: "2",
        title: "AI Screens Candidates",
        description: "Our conversational AI conducts intelligent first-round interviews, assessing technical competencies, safety compliance, project experience, and availability—eliminating unqualified applicants automatically.",
      },
      {
        number: "3",
        title: "Review & Select",
        description: "Access standardised candidate profiles with structured data highlighting skills, certifications, project history, and references. Compare qualified candidates side-by-side and make informed decisions quickly.",
      },
      {
        number: "4",
        title: "Onboard & Manage",
        description: "Complete the full contractor lifecycle: generate contracts, handle payroll, ensure compliance, manage documentation, and process secure payments—all from one platform with audit-ready records.",
      },
    ],
  },
  futureRecruitment: {
    sectionLabel: "Why avua?",
    title: "The Future of",
    titleHighlight: "Energy",
    titleEnd: " Recruitment",
    subtitle: "avua transforms how energy companies hire and how energy professionals build careers. Our AI-powered platform addresses the unique challenges of the energy sector with specialized tools and industry expertise.",
    employers: {
      title: "For Energy Employers",
      description: "Whether you're managing upstream oil and gas operations, commissioning nuclear facilities, developing renewable energy projects, or maintaining power infrastructure, avua accelerates your talent acquisition. Our platform specialises in contract-based and project-specific hiring across all energy sub-sectors including petroleum engineering, nuclear safety, wind and solar energy, Hydroelectric power, energy storage systems, and grid modernisation.",
      stats: [
        { value: "85%", label: "Reduction in time-to-hire" },
        { label: "Lower recruitment costs", icon: "↓" },
        { label: "Access global talent", icon: "🌐" },
        { label: "Ensure compliance", icon: "✓" },
      ],
    },
    professionals: {
      title: "For Energy Professionals",
      description: "From early-career field engineers to experienced energy consultants, project managers to grid specialists, avua connects you with opportunities aligned to your expertise. Navigate your energy career with tools designed for technical professionals including engineers, HSE specialists, project managers, and energy specialists working in oil & gas, renewables, nuclear, power generation, and clean energy.",
      features: [
        { label: "Direct access", sublabel: "To verified energy sector employers" },
        { label: "Industry-specific resume tools", sublabel: "For technical roles" },
        { label: "Project-based opportunities", sublabel: "With clear project details" },
        { label: "Career development resources", sublabel: "For energy professionals" },
      ],
    },
  },
  careerSection: {
    sectionLabel: "For Professionals",
    title: "Build Your Energy Career",
    subtitle: "Access live opportunities, powerful career tools, and resources designed specifically for energy professionals.",
    cards: [
      {
        id: "find-jobs",
        title: "Find Energy Jobs",
        description: "Browse live vacancies across oil & gas, nuclear, renewables, and power sectors with clear requirements and project details.",
        href: "https://avua.com/jobseeker",
      },
      {
        id: "resume-builder",
        title: "Energy Resume Builder",
        description: "Create ATS-optimised resumes designed for energy sector hiring managers and technical recruiters.",
        href: "https://avua.com/jobseeker",
      },
    ],
  },
  cta: {
    title: "Ready to Transform",
    titleHighlight: "Energy Hiring?",
    description: "Whether you're powering critical infrastructure or advancing your energy career, avua connects you faster and smarter.",
    stats: [
      { value: "85%", label: "Reduction in time-to-hire" },
      { value: "10k+", label: "Verified Professionals" },
    ],
    badges: ["AI-POWERED", "VERIFIED TALENT", "BANK-LEVEL SECURITY"],
    buttons: [
      { label: "Post Energy Roles", href: "https://avua.com/hire", primary: true },
      { label: "Explore Energy Jobs", href: "https://avua.com/jobseeker", primary: false },
    ],
  },
  footer: {
    services: [
      { label: "Applicant", href: "#" },
      { label: "avua Hire", href: "#" },
      { label: "avua Pool", href: "#" },
      { label: "Blogs", href: "#" },
      { label: "Resume examples", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Terms and Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "AI Ethics Policy", href: "#" },
      { label: "Contact us: support@avua.com", href: "mailto:support@avua.com" },
    ],
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/avua-international/" },
      { label: "X", href: "https://x.com/_avua_" },
      { label: "Facebook", href: "https://www.facebook.com/myavua" },
      { label: "Instagram", href: "https://www.instagram.com/avua__/" },
    ],
    copyright: "© Copyrights 2026, All rights reserved.",
  },
};

export type SectorData = typeof energyData;
