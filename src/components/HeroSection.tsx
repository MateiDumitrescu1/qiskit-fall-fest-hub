import heroImage from "@/assets/hero-quantum.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Quantum computing visualization" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-quantum bg-clip-text text-transparent">
              Qiskit Fall Fest
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              2025
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join the premier quantum computing conference featuring cutting-edge research, 
              hands-on workshops, and the latest innovations in quantum technology.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>October 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Virtual & In-Person</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Quantum Enthusiasts</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-quantum text-background font-semibold px-8 py-6 text-lg shadow-quantum hover:shadow-glow transition-all duration-500">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;