import { Card } from "@/components/ui/card";
import { Clock, Coffee, Presentation, Wrench, Trophy, Users } from "lucide-react";

const scheduleItems = [
  {
    time: "10:00",
    title: "Arrival & Registration",
    description: "Check-in and networking with fellow quantum enthusiasts",
    icon: Users,
    duration: "15 minutes"
  },
  {
    time: "10:15",
    title: "Welcome Talk",
    description: "Opening remarks and introduction to the event",
    icon: Presentation,
    duration: "15 minutes"
  },
  {
    time: "10:30",
    title: "Dr. Rihan Hai",
    description: "Quantum Data Management in the NISQ Era and Beyond",
    icon: Presentation,
    duration: "30 minutes"
  },
  {
    time: "11:15",
    title: "Prof. Vandersypen",
    description: "Presentation from QuTech research institute",
    icon: Presentation,
    duration: "1 hour"
  },
  {
    time: "12:15",
    title: "Lunch Break",
    description: "Networking and refreshments",
    icon: Coffee,
    duration: "45 minutes"
  },
  {
    time: "13:00",
    title: "EduQuation",
    description: "Educational session on quantum computing",
    icon: Presentation,
    duration: "45 minutes"
  },
  {
    time: "14:00",
    title: "Workshop",
    description: "Hands-on practical session",
    icon: Wrench,
    duration: "45 minutes"
  },
  {
    time: "15:00",
    title: "Coding Competition",
    description: "Quantum programming challenge",
    icon: Trophy,
    duration: "50 minutes"
  },
  {
    time: "16:00",
    title: "IBM Speaker",
    description: "Industry insights from IBM Quantum team",
    icon: Presentation,
    duration: "1 hour"
  }
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-quantum bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully crafted day of learning, networking, and quantum innovation
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-quantum opacity-30"></div>
          
          <div className="space-y-8">
            {scheduleItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-quantum rounded-full border-4 border-background shadow-glow z-10"></div>
                  
                  {/* Content card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="p-6 bg-gradient-card border-border/50 shadow-lg hover:shadow-quantum transition-all duration-500 hover:scale-105">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-quantum rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-background" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-primary">{item.time}</span>
                            <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                              {item.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;