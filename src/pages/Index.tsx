import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ScheduleSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
