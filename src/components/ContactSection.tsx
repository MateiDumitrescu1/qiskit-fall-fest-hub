import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-quantum bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join the quantum revolution? Register now or reach out with any questions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
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
                      Virtual & In-Person<br />
                      Multiple venues worldwide
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-quantum rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      contact@qiskitfallfest.org
                    </p>
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
              <Button size="lg" className="bg-gradient-quantum text-background font-semibold px-8 py-6 text-lg shadow-quantum hover:shadow-glow transition-all duration-500 w-full sm:w-auto">
                <ExternalLink className="w-5 h-5 mr-2" />
                Register Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Registration opens soon - stay tuned!
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Have Questions?
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="Enter your first name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Enter your last name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="What would you like to discuss?"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your question or interest in the event..."
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-quantum text-background font-semibold py-3 shadow-quantum hover:shadow-glow transition-all duration-500"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;