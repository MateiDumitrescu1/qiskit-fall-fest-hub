import { Card } from "@/components/ui/card";
import { Atom, Code, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Atom,
    title: "Quantum Computing",
    description: "Explore the fundamentals and cutting-edge applications of quantum computing technology"
  },
  {
    icon: Code,
    title: "Qiskit Workshops",
    description: "Hands-on programming sessions with IBM's open-source quantum computing framework"
  },
  {
    icon: Users,
    title: "Expert Speakers",
    description: "Learn from leading researchers and industry professionals from IBM and beyond"
  },
  {
    icon: Trophy,
    title: "Competition",
    description: "Test your quantum programming skills in our exciting coding challenge"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-quantum bg-clip-text text-transparent">
            About Qiskit Fall Fest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Qiskit Fall Fest is a global series of quantum computing events designed to bring together 
            students, researchers, and industry professionals to explore the exciting world of quantum 
            computing through IBM's Qiskit framework.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-quantum transition-all duration-500 hover:scale-105 group">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-quantum rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Card className="p-8 bg-gradient-card border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Attend?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're a quantum computing novice or an experienced researcher, Qiskit Fall Fest 2025 
              offers something for everyone. Join us for a day of learning, networking, and pushing the 
              boundaries of what's possible with quantum technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Free Event</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">All Skill Levels</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">Networking</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">Hands-on Learning</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;