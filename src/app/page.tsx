import { TopBar } from "@/components/navigation/TopBar";
import { MainNav } from "@/components/navigation/MainNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <MainNav />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
