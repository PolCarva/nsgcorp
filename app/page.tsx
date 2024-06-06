import AboutSection from "@/components/AboutSection";
import CompaniesSection from "@/components/CompaniesSection";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <CompaniesSection />
    </main>
  );
}
