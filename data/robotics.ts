// Robotics sector data
import type { SectorData } from "./energy";

export const roboticsData: SectorData = {
  meta: {
    title: "avua® | Robotics Sector Recruitment",
    description: "Connect specialized robotics talent with cutting-edge innovation projects. From industrial automation to autonomous systems.",
  },
  sector: "robotics",
  theme: {
    primary: "#E63946",
    primaryLight: "#F26D78",
    heroGradient: "linear-gradient(90deg, #FE9BAB 0%, #5A1E2B 100%)",
    strokeGradient: "linear-gradient(90deg, rgba(90, 30, 43, 0.18) 0%, #FF4F63 51.44%, rgba(90, 30, 43, 0.18) 100%)",
    secondaryGradient: "linear-gradient(90deg, #FF4F63 0%, #991F2F 100%)",
    bg: "#FEF2F2",
    heroBadgeBg: "#FFE4E6",
    heroBadgeText: "#E63946",
    announcementBg: "#3D0B12",
  },
  hero: {
    badge: "Robotics Recruitment Reimagined",
    titleLine1: "Build the Future. Transform",
    titleLine2Parts: [
      { text: "", colored: false },
      { text: "Robotics", colored: true },
      { text: " Hiring.", colored: false },
    ],
    subtitle: "From industrial automation to autonomous systems, AI robotics to collaborative robots—connect specialized robotics talent with cutting-edge innovation projects.",
    cta: {
      primary: { label: "Hire Contractors", href: "https://avua.com/hire" },
      secondary: { label: "Build Your Robotics Resume", href: "https://avua.com/jobseeker" },
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
    subtitle: "We accelerate robotics talent acquisition with AI-driven precision and deep industry expertise.",
    features: [
      {
        id: "ai-matching",
        icon: "🤖",
        iconBg: "#FFE4E6",
        title: "AI-Powered Matching",
        description: "Intelligent algorithms match candidates to roles based on robotics specialization, programming languages, and systems experience.",
      },
      {
        id: "screening",
        icon: "✅",
        iconBg: "#FFE4E6",
        title: "Automated Screening",
        description: "Technical AI assessments evaluate robotics competencies, control systems knowledge, and software skills before human review.",
      },
      {
        id: "global",
        icon: "🌐",
        iconBg: "#FFE4E6",
        title: "Global Robotics Access",
        description: "Connect with specialized robotics engineers worldwide across industrial automation, autonomous systems, and AI robotics.",
      },
      {
        id: "streamlined",
        icon: "🦾",
        iconBg: "#FFE4E6",
        title: "Streamlined Hiring",
        description: "Reduce time-to-hire with structured engineer profiles and seamless project-based contractor management.",
      },
    ],
  },
  challenges: {
    sectionTitle: "Robotics Talent is Specialized.",
    sectionTitleHighlight: " Hiring",
    sectionTitleEnd: " Shouldn't Be Hard.",
    subtitle: "The robotics industry is evolving at breakneck speed. Traditional hiring methods can't keep pace with the highly specialized, cross-disciplinary nature of modern robotics projects.",
    employerChallenges: {
      title: "Employer Challenges",
      items: [
        {
          id: "talent-shortage",
          icon: "⚠️",
          title: "Talent Scarcity",
          description: "Extreme shortage of engineers with deep robotics, AI, and automation expertise.",
        },
        {
          id: "niche-requirements",
          icon: "📋",
          title: "Specialized Skill Sets",
          description: "Need for rare combinations of mechanical, electrical, software, and AI expertise.",
        },
        {
          id: "contract-complexity",
          icon: "📄",
          title: "Project-Based Hiring",
          description: "Innovation-driven projects require flexible contractors and short-term specialists.",
        },
        {
          id: "global-competition",
          icon: "🌍",
          title: "Global Competition",
          description: "Tech giants and startups compete aggressively for the same scarce robotics talent pool.",
        },
        {
          id: "slow-processes",
          icon: "⏱️",
          title: "Rapid Iteration Needs",
          description: "Fast development cycles demand quick hiring decisions that traditional processes can't support.",
        },
      ],
    },
    professionalChallenges: {
      title: "Professional Challenges",
      items: [
        {
          id: "scattered-opportunities",
          icon: "🔍",
          title: "Limited Job Boards",
          description: "Robotics roles scattered across general platforms with no centralized specialized hub.",
        },
        {
          id: "unclear-expectations",
          icon: "❓",
          title: "Unclear Tech Stacks",
          description: "Job descriptions often vague about required robotics frameworks, ROS versions, programming languages.",
        },
        {
          id: "resume-complexity",
          icon: "📝",
          title: "Portfolio Complexity",
          description: "Showcasing robotics projects, simulations, and multi-disciplinary skills in a compelling way.",
        },
        {
          id: "limited-visibility",
          icon: "👁️",
          title: "Startup Visibility",
          description: "Difficulty connecting with innovative startups and research labs hiring for cutting-edge projects.",
        },
        {
          id: "compliance-navigation",
          icon: "⚖️",
          title: "IP & Safety Compliance",
          description: "Navigating complex IP agreements, safety standards, and export control requirements.",
        },
      ],
    },
  },
  roles: {
    sectionLabel: "Robotics Expertise",
    title: "Roles We Cover Across All",
    titleHighlight: "Robotics",
    titleEnd: " Sectors",
    subtitle: "From industrial robots to autonomous vehicles, surgical robotics to AI systems—find specialized talent across the entire robotics and automation spectrum.",
    categories: [
      {
        id: "industrial-automation",
        icon: "🏭",
        title: "Industrial Automation",
        description: "Connecting automation engineers with manufacturers deploying robotic assembly lines and automated production systems.",
        roles: ["Automation Engineers", "PLC Programmers", "SCADA Specialists", "Systems Integrators"],
      },
      {
        id: "autonomous-systems",
        icon: "🚗",
        title: "Autonomous Systems",
        description: "Recruiting engineers building self-driving vehicles, delivery drones, and autonomous mobile robots.",
        roles: ["Autonomous System Engineers", "LIDAR Specialists", "Path Planning Engineers"],
      },
      {
        id: "ai-robotics",
        icon: "🧠",
        title: "AI & Machine Learning",
        description: "Sourcing AI engineers developing perception, decision-making, and learning systems for intelligent robots.",
        roles: ["ML Engineers", "Computer Vision Specialists", "Reinforcement Learning Researchers"],
      },
      {
        id: "ros-software",
        icon: "💻",
        title: "ROS & Software",
        description: "Placing robotics software engineers proficient in ROS, simulation environments, and real-time control systems.",
        roles: ["ROS Developers", "Embedded Systems Engineers", "Simulation Engineers", "Control Systems Engineers"],
      },
      {
        id: "medical-robotics",
        icon: "🩺",
        title: "Medical Robotics",
        description: "Recruiting specialists in surgical robots, rehabilitation systems, and medical automation requiring regulatory expertise.",
        roles: ["Surgical Robotics Engineers", "Medical Device Engineers", "FDA Compliance Specialists"],
      },
      {
        id: "research-development",
        icon: "🔬",
        title: "Research & Development",
        description: "Connecting research scientists and R&D engineers with institutions advancing the frontiers of robotics innovation.",
        roles: ["Research Scientists", "Prototype Engineers", "Mechatronics Engineers", "R&D Directors"],
      },
    ],
  },
  security: {
    sectionTitle: "Enterprise-Grade",
    sectionTitleHighlight: " Protection",
    subtitle: "In robotics, IP and data security are paramount. avua ensures full compliance and data protection across every hiring interaction.",
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
        description: "Bank-level encryption protects sensitive information, from personal details to proprietary project data.",
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
    title: "Hire Robotics Talent,",
    titleLine2Colored: "Powered",
    titleLine2Rest: " by AI",
    subtitle: "Connect with specialized robotics engineers through intelligent matching, technical screening, and streamlined contractor management.",
    steps: [
      {
        number: "1",
        title: "Post Your Robotics Role",
        description: "Create detailed job postings with technical requirements, required frameworks, and project specifics. Reach our network of specialized robotics engineers instantly.",
      },
      {
        number: "2",
        title: "AI Screens Candidates",
        description: "Our AI conducts technical interviews assessing robotics competencies, programming skills, and project experience—filtering unqualified candidates automatically.",
      },
      {
        number: "3",
        title: "Review & Select",
        description: "Access structured engineer profiles with portfolios, project history, and technical assessments. Compare qualified candidates side-by-side quickly.",
      },
      {
        number: "4",
        title: "Onboard & Manage",
        description: "Manage the full contractor lifecycle: contracts, IP agreements, payroll, and compliance—all from one platform with audit-ready records.",
      },
    ],
  },
  futureRecruitment: {
    sectionLabel: "Why avua?",
    title: "The Future of",
    titleHighlight: "Robotics",
    titleEnd: " Recruitment",
    subtitle: "avua transforms how robotics companies hire and how engineers build careers with specialized tools and deep industry expertise.",
    employers: {
      title: "For Robotics Employers",
      description: "Whether you're scaling production robotics or building cutting-edge autonomous systems, avua accelerates your talent acquisition with specialized technical screening.",
      stats: [
        { value: "60%", label: "Faster Time-to-Hire" },
        { label: "Lower recruitment costs", icon: "↓" },
        { label: "Global talent access", icon: "🌐" },
        { label: "Technical screening", icon: "✓" },
      ],
    },
    professionals: {
      title: "For Robotics Professionals",
      description: "From ROS developers to autonomous systems engineers, avua connects you with innovative companies working at the frontier of robotics and AI.",
      features: [
        { label: "Direct access", sublabel: "To top robotics companies" },
        { label: "Technical resume tools", sublabel: "For engineering roles" },
        { label: "Project-based opportunities", sublabel: "With clear tech requirements" },
        { label: "Career development", sublabel: "For robotics professionals" },
      ],
    },
  },
  careerSection: {
    sectionLabel: "For Professionals",
    title: "Build Your Robotics Career",
    subtitle: "Access live engineering opportunities, technical tools, and resources designed specifically for robotics professionals.",
    cards: [
      {
        id: "find-jobs",
        title: "Find Robotics Jobs",
        description: "Browse live vacancies across industrial automation, autonomous systems, AI robotics, and R&D with clear technical requirements.",
        href: "https://avua.com/jobseeker",
      },
      {
        id: "resume-builder",
        title: "Technical Resume Builder",
        description: "Create ATS-optimised resumes showcasing your robotics projects, skills, and expertise for technical recruiters.",
        href: "https://avua.com/jobseeker",
      },
    ],
  },
  cta: {
    title: "Ready to Transform",
    titleHighlight: "Robotics Hiring?",
    description: "Whether you're building the next autonomous system or advancing your engineering career, avua connects you faster and smarter.",
    stats: [
      { value: "60%", label: "Faster Time-to-Hire" },
      { value: "5k+", label: "Verified Robotics Experts" },
    ],
    badges: ["AI-POWERED", "VERIFIED TALENT", "BANK-LEVEL SECURITY"],
    buttons: [
      { label: "Post Robotics Roles", href: "https://avua.com/hire", primary: true },
      { label: "Explore Robotics Jobs", href: "https://avua.com/jobseeker", primary: false },
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
