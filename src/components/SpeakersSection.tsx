import { Card } from "@/components/ui/card";
import rihanHaiPhoto from "@/assets/rihan-hai.jpg";

const speakers = [
  {
    name: "Prof. Rihan Hai",
    title: "Assistant Professor, TU Delft",
    photo: rihanHaiPhoto,
    talkTitle: "Quantum Data Management in the NISQ Era and Beyond",
    talkAbstract: "Quantum computing is one of the most exciting frontiers in science and technology, offering radically new ways to compute through entanglement, superposition, and measurement. But today's NISQ systems remain noisy, limited in scale, and hard to program. This leaves a wide gap between elegant algorithms and real-world applications. A critical part of bridging that gap is data: how we define quantum data, move it across classical and quantum systems, and design storage and processing models that make quantum computing truly usable. In this talk, I'll introduce the emerging field of quantum data management and explore how fresh ideas in data representation, system design, and workflow integration are beginning to drive this field forward. We'll look at how classical data systems can support quantum computation, how hybrid architectures connect classical and quantum components, and how rethinking data for the quantum world opens new possibilities in software, privacy, and systems research. I'll outline the key ways data and computation converge in the quantum era, highlighting the challenges and opportunities they create for the future of computing. My goal is to share a clear vision of where this field is heading, and to inspire new ideas and contributions that will shape the data foundations of our quantum future.",
    bio: "Rihan Hai is an Assistant Professor at Delft University of Technology, Netherlands. She leads the InfiniData team at TU Delft, working on data systems for AI and quantum. She received her doctorate degree from RWTH Aachen and was nominated for the university's Friedrich Wilhelm Best Dissertation Award. She was awarded the NWO Veni personal grant, VLDB Distinguished PC Member Awards (2024, 2025), the SIGMOD 2025 Best Demo Runner-Up, and the EDBT 2023 Best Demo Award. She founded the DBML and International Workshop on Quantum Data and Machine Learning workshop series and serves broadly on top-tier database conferences as PCs. Her recent research centers on quantum data management, with a strong focus on data-intensive simulators and quantum-native database systems."
  }
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-quantum bg-clip-text text-transparent">
            Keynote Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading experts in quantum computing and quantum data management
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card border-border/50 shadow-lg hover:shadow-quantum transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-semibold mb-6">
                    {speaker.title}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {speaker.talkTitle}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {speaker.talkAbstract}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Bio
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
