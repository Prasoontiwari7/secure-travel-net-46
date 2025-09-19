import { Shield, Smartphone, Brain, MapPin, Monitor, Wifi, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain-based Digital ID",
      description: "Secure, tamper-proof digital identification for tourists using blockchain technology. Instant verification and global recognition.",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile App with SOS",
      description: "Comprehensive mobile application with real-time tracking, safety scores, and one-touch emergency SOS broadcasting.",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Advanced machine learning algorithms detect unusual patterns and potential threats, providing proactive safety alerts.",
      gradient: "bg-gradient-accent",
    },
    {
      icon: MapPin,
      title: "Geo-fencing Alerts",
      description: "Smart location boundaries that automatically alert authorities when tourists enter or exit designated safe zones.",
      gradient: "bg-gradient-primary",
    },
    {
      icon: Monitor,
      title: "Police & Tourism Dashboard",
      description: "Real-time monitoring dashboards for law enforcement and tourism officials with incident management capabilities.",
      gradient: "bg-gradient-secondary",
    },
    {
      icon: Wifi,
      title: "IoT Wearables",
      description: "Optional smart wearable devices for continuous health and location monitoring with emergency features.",
      gradient: "bg-gradient-accent",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Full application support in multiple languages including English and regional Indian languages for seamless communication.",
      gradient: "bg-gradient-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Advanced Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Safety
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              Ecosystem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our platform combines cutting-edge technology with practical safety solutions 
            to create the most comprehensive tourist safety monitoring system available.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl border border-border shadow-md hover:shadow-xl transition-smooth hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-lg mb-6 ${feature.gradient} group-hover:shadow-glow transition-smooth`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Response Accuracy</div>
              <p className="text-sm text-muted-foreground">
                Lightning-fast incident detection and response with near-perfect accuracy rates.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
              <p className="text-sm text-muted-foreground">
                Round-the-clock safety monitoring with real-time alerts and emergency response.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Privacy Protected</div>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption and blockchain security ensuring complete data privacy.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;