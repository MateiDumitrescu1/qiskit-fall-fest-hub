import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ScheduleSection />
      <SpeakersSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
