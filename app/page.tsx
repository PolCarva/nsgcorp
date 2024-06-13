import AboutSection from "@/components/AboutSection";
import CompaniesSection from "@/components/CompaniesSection";
import ContactSection from "@/components/ContactSection";
import GSAPAnimations from "@/components/GSAPAnimations";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <GSAPAnimations/>

      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <CompaniesSection />
      <ContactSection />
    </main>
  );
}
