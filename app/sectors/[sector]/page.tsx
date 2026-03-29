import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSectorData, availableSectors } from "@/data/index";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/sections/Hero";
import WhyAvua from "@/components/sections/WhyAvua";
import Challenges from "@/components/sections/Challenges";
import HireProcess from "@/components/sections/HireProcess";
import FutureRecruitment from "@/components/sections/FutureRecruitment";
import RolesGrid from "@/components/sections/RolesGrid";
import CareerSection from "@/components/sections/CareerSection";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

interface SectorPageProps {
  params: Promise<{ sector: string }>;
}

export async function generateStaticParams() {
  return availableSectors.map((sector) => ({ sector }));
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const { sector } = await params;
  const data = getSectorData(sector);
  if (!data) return {};
  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

export default async function SectorPage({ params }: SectorPageProps) {
  const { sector } = await params;
  const data = getSectorData(sector);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnnouncementBar data={data.announcement} theme={data.theme} />
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero data={data.hero} theme={data.theme} />
        {/* 2. Why the industry chooses avua */}
        <WhyAvua data={data.whyAvua} theme={data.theme} />
        {/* 3. Energy Talent is Complex */}
        <Challenges data={data.challenges} theme={data.theme} />
        {/* 4. For Employers: Hire Energy Talent, Powered by AI */}
        <HireProcess data={data.hireProcess} theme={data.theme} />
        {/* 5. Why avua? The Future of Energy Recruitment */}
        <FutureRecruitment data={data.futureRecruitment} theme={data.theme} />
        {/* 6. Roles We Cover Across All Energy Sectors */}
        <RolesGrid data={data.roles} theme={data.theme} />
        {/* 7. For Professionals: Build Your Energy Career */}
        <CareerSection data={data.careerSection} theme={data.theme} />
        {/* 8. Ready to Transform Energy Hiring? */}
        <CTABanner data={data.cta} theme={data.theme} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
}
