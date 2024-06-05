import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
