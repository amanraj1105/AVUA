// Healthcare sector data
import type { SectorData } from "./energy";

export const healthcareData: SectorData = {
  meta: {
    title: "avua® | Healthcare Sector Recruitment",
    description: "Connect qualified healthcare professionals with patient care teams. From nurses to physicians.",
  },
  sector: "healthcare",
  theme: {
    primary: "#1D6FF2",
    primaryLight: "#4B8EF7",
    heroGradient: "linear-gradient(90deg, #7BB8FE 0%, #1E3A5F 100%)",
    strokeGradient: "linear-gradient(90deg, rgba(30, 58, 95, 0.18) 0%, #4B8EF7 51.44%, rgba(30, 58, 95, 0.18) 100%)",
    secondaryGradient: "linear-gradient(90deg, #3B82F6 0%, #1E4F9F 100%)",
    bg: "#EEF4FF",
    heroBadgeBg: "#DBEAFE",
    heroBadgeText: "#1D6FF2",
    announcementBg: "#1E3A5F",
  },
  hero: {
    badge: "Healthcare Recruitment Reimagined",
    titleLine1: "Care for People. Transform",
    titleLine2Parts: [
      { text: "", colored: false },
      { text: "Healthcare", colored: true },
      { text: " Hiring.", colored: false },
    ],
    subtitle: "From registered nurses to physicians, allied health to healthcare administration—connect qualified healthcare professionals with patient care teams.",
    cta: {
      primary: { label: "Hire Contractors", href: "https://avua.com/hire" },
      secondary: { label: "Build Your Healthcare Resume", href: "https://avua.com/jobseeker" },
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
    subtitle: "We simplify the complex nature of healthcare hiring into a streamlined, compliant workflow.",
    features: [
      {
        id: "ai-matching",
        icon: "🤖",
        iconBg: "#DBEAFE",
        title: "AI-Powered Matching",
        description: "Intelligent algorithms match candidates to roles based on clinical skills, certifications, and patient care experience.",
      },
      {
        id: "screening",
        icon: "✅",
        iconBg: "#DBEAFE",
        title: "Automated Screening",
        description: "Conversational AI interviews assess clinical competencies and regulatory compliance before human review.",
      },
      {
        id: "global",
        icon: "🌐",
        iconBg: "#DBEAFE",
        title: "Global Healthcare Access",
        description: "Connect with specialised healthcare professionals worldwide across all clinical settings and healthcare systems.",
      },
      {
        id: "streamlined",
        icon: "💙",
        iconBg: "#DBEAFE",
        title: "Streamlined Hiring",
        description: "Reduce time-to-hire with structured candidate profiles and end-to-end contractor management.",
      },
    ],
  },
  challenges: {
    sectionTitle: "Healthcare Talent is Critical.",
    sectionTitleHighlight: " Hiring",
    sectionTitleEnd: " Shouldn't Be Hard.",
    subtitle: "Healthcare systems worldwide face unprecedented staffing pressures. Traditional recruitment can't match the speed and compliance needs of modern healthcare hiring.",
    employerChallenges: {
      title: "Employer Challenges",
      items: [
        {
          id: "talent-shortage",
          icon: "⚠️",
          title: "Staff Shortages",
          description: "Critical shortage of qualified nurses, physicians, and allied health professionals.",
        },
        {
          id: "credential-verification",
          icon: "📋",
          title: "Credential Verification",
          description: "Complex licensing and certification requirements across different specialties and regions.",
        },
        {
          id: "compliance",
          icon: "📄",
          title: "Regulatory Compliance",
          description: "Stringent healthcare regulations and patient safety standards require thorough vetting.",
        },
        {
          id: "global-competition",
          icon: "🌍",
          title: "Intense Competition",
          description: "Competing with hospitals and clinics worldwide for top qualified healthcare professionals.",
        },
        {
          id: "slow-processes",
          icon: "⏱️",
          title: "Slow Onboarding",
          description: "Lengthy credentialing and onboarding processes affect patient care capacity.",
        },
      ],
    },
    professionalChallenges: {
      title: "Professional Challenges",
      items: [
        {
          id: "scattered-opportunities",
          icon: "🔍",
          title: "Fragmented Job Market",
          description: "Difficulty finding relevant healthcare roles consolidated across different settings.",
        },
        {
          id: "unclear-expectations",
          icon: "❓",
          title: "Unclear Role Requirements",
          description: "Inconsistent job requirements and scope of practice across different healthcare facilities.",
        },
        {
          id: "resume-complexity",
          icon: "📝",
          title: "Complex Portfolio",
          description: "Showcasing clinical experience, certifications, and specialties effectively to employers.",
        },
        {
          id: "limited-visibility",
          icon: "👁️",
          title: "Limited Placement Options",
          description: "Hard to connect with healthcare employers offering contract or locum positions.",
        },
        {
          id: "compliance-navigation",
          icon: "⚖️",
          title: "Licensing Navigation",
          description: "Managing multi-state or international licenses and continuing education requirements.",
        },
      ],
    },
  },
  roles: {
    sectionLabel: "Healthcare Expertise",
    title: "Roles We Cover Across All",
    titleHighlight: "Healthcare",
    titleEnd: " Settings",
    subtitle: "From registered nurses to specialized physicians, allied health to healthcare administration—find qualified professionals across the entire healthcare spectrum.",
    categories: [
      {
        id: "nursing",
        icon: "🏥",
        title: "Nursing",
        description: "Connecting registered nurses, specialist nurses, and nurse practitioners with healthcare facilities requiring expert patient care.",
        roles: ["Registered Nurses", "ICU Nurses", "Surgical Nurses", "Community Nurses"],
      },
      {
        id: "clinical-specialists",
        icon: "🩺",
        title: "Specialized Clinical",
        description: "Recruiting specialist physicians and clinical experts across all medical specialties and subspecialties.",
        roles: ["Cardiologists", "Oncologists", "Anesthesiologists", "Radiologists"],
      },
      {
        id: "allied-health",
        icon: "💊",
        title: "Allied Health",
        description: "Sourcing physiotherapists, occupational therapists, and diagnostic specialists supporting multidisciplinary care.",
        roles: ["Physiotherapists", "Occupational Therapists", "Medical Imaging Specialists"],
      },
      {
        id: "healthcare-it",
        icon: "💻",
        title: "Healthcare IT",
        description: "Providing health informatics, EHR implementation, and digital health specialists supporting clinical technology.",
        roles: ["Health Informatics", "EHR Specialists", "Clinical Systems Analysts", "Telehealth Engineers"],
      },
      {
        id: "administration",
        icon: "📊",
        title: "Administration",
        description: "Placing healthcare administrators, practice managers, and operational leaders driving efficient healthcare delivery.",
        roles: ["Practice Managers", "Medical Coders", "Revenue Cycle Specialists"],
      },
      {
        id: "leadership",
        icon: "👥",
        title: "Leadership",
        description: "Recruiting healthcare executives, clinical directors, and quality improvement leaders driving organisational excellence.",
        roles: ["Clinical Directors", "Chief Medical Officers", "Quality Managers", "Department Heads"],
      },
    ],
  },
  security: {
    sectionTitle: "Enterprise-Grade",
    sectionTitleHighlight: " Protection",
    subtitle: "In healthcare, trust is everything. avua ensures full compliance and data security across every interaction, from candidate assessment to final placement.",
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
        description: "Bank-level encryption protects sensitive information, from personal details to clinical credentials.",
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
    title: "Hire Healthcare Talent,",
    titleLine2Colored: "Powered",
    titleLine2Rest: " by AI",
    subtitle: "Connect with qualified healthcare professionals through intelligent matching, compliance-first screening, and streamlined contractor management.",
    steps: [
      {
        number: "1",
        title: "Post Your Healthcare Role",
        description: "Create detailed job postings with clinical requirements, certifications, and facility specifics. Your role reaches our network of credentialed healthcare professionals instantly.",
      },
      {
        number: "2",
        title: "AI Screens Candidates",
        description: "Our AI conducts compliance-first interviews, verifying clinical competencies, licensing, and availability—filtering unqualified applicants automatically.",
      },
      {
        number: "3",
        title: "Review & Select",
        description: "Access standardised candidate profiles with verified credentials, clinical history, and references. Compare qualified professionals side-by-side quickly.",
      },
      {
        number: "4",
        title: "Onboard & Manage",
        description: "Complete the contractor lifecycle: contracts, payroll, compliance documentation, and secure payments—all from one platform.",
      },
    ],
  },
  futureRecruitment: {
    sectionLabel: "Why avua?",
    title: "The Future of",
    titleHighlight: "Healthcare",
    titleEnd: " Recruitment",
    subtitle: "avua transforms how healthcare organisations hire and how professionals build careers with specialised tools and compliance expertise.",
    employers: {
      title: "For Healthcare Employers",
      description: "Whether you're staffing hospitals, clinics, or care facilities, avua accelerates your talent acquisition with compliance-first hiring across all clinical specialties.",
      stats: [
        { value: "70%", label: "Faster Recruitment" },
        { label: "Lower recruitment costs", icon: "↓" },
        { label: "Compliance built-in", icon: "✓" },
        { label: "Global talent access", icon: "🌐" },
      ],
    },
    professionals: {
      title: "For Healthcare Professionals",
      description: "From early-career nurses to experienced clinical specialists, avua connects you with opportunities aligned to your expertise and licensing requirements.",
      features: [
        { label: "Direct access", sublabel: "To verified healthcare employers" },
        { label: "Clinical resume tools", sublabel: "For healthcare roles" },
        { label: "Locum opportunities", sublabel: "With clear requirements" },
        { label: "Career development", sublabel: "For clinical professionals" },
      ],
    },
  },
  careerSection: {
    sectionLabel: "For Professionals",
    title: "Build Your Healthcare Career",
    subtitle: "Access live clinical opportunities, professional tools, and resources designed specifically for healthcare professionals.",
    cards: [
      {
        id: "find-jobs",
        title: "Find Healthcare Jobs",
        description: "Browse live vacancies across hospitals, clinics, home care, and specialist centres with clear role requirements.",
        href: "https://avua.com/jobseeker",
      },
      {
        id: "resume-builder",
        title: "Clinical Resume Builder",
        description: "Create ATS-optimised resumes designed for healthcare hiring managers and clinical recruiters.",
        href: "https://avua.com/jobseeker",
      },
    ],
  },
  cta: {
    title: "Ready to Transform",
    titleHighlight: "Healthcare Hiring?",
    description: "Whether you're staffing critical care units or advancing your clinical career, avua connects you faster and smarter.",
    stats: [
      { value: "70%", label: "Faster Recruitment" },
      { value: "15k+", label: "Verified Professionals" },
    ],
    badges: ["AI-POWERED", "VERIFIED TALENT", "BANK-LEVEL SECURITY"],
    buttons: [
      { label: "Post Healthcare Roles", href: "https://avua.com/hire", primary: true },
      { label: "Explore Healthcare Jobs", href: "https://avua.com/jobseeker", primary: false },
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
