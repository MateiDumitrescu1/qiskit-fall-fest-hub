import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
const ContactSection = () => {
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-quantum bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join the quantum revolution? Register now or reach out with any questions
          </p>
        </div>
        
        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="max-w-2xl w-full space-y-8">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Event Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-quantum rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Pulse Hall 1, TU Delft Campus<br />
                      Delft, Netherlands<br />
                      Saturday, November 15th, 2025
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-quantum rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">a.ilinescu@student.tudelft.nl</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-quantum rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Support</h4>
                    <p className="text-muted-foreground">
                      Available 24/7 via email<br />
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-quantum text-background font-semibold px-8 py-6 text-lg shadow-quantum hover:shadow-glow hover:scale-105 transition-all duration-500 w-full sm:w-auto" onClick={() => window.open('https://forms.gle/jWTS8AL3nX3LDdXt9', '_blank')}>
                <ExternalLink className="w-5 h-5 mr-2" />
                Register Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;