import { useState } from "react";
import Navbar from "@/components/Navbar";
import { 
  Shield, 
  Smartphone, 
  Brain, 
  MapPin, 
  Monitor, 
  Wifi, 
  Globe, 
  Lock,
  Zap,
  Eye,
  Cloud,
  Users,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const detailedFeatures = [
    {
      icon: Shield,
      title: "Blockchain-based Digital Tourist ID",
      description: "Revolutionary secure identification system for tourists",
      longDescription: "Our blockchain-based Digital Tourist ID provides tamper-proof, globally recognized identification for travelers. Using distributed ledger technology, we ensure that tourist credentials are secure, verifiable, and instantly accessible to authorized personnel worldwide.",
      benefits: [
        "Immutable identity verification",
        "Global recognition and acceptance", 
        "Instant credential verification",
        "Enhanced security against fraud",
        "Seamless border processing"
      ],
      gradient: "bg-gradient-primary",
      category: "identity"
    },
    {
      icon: Smartphone,
      title: "Mobile App with SOS & Safety Score",
      description: "Comprehensive mobile application for tourist safety",
      longDescription: "Our mobile application serves as the central hub for tourist safety, featuring real-time safety scoring, one-touch SOS functionality, and continuous location tracking. The app provides tourists with instant access to emergency services and safety information.",
      benefits: [
        "Real-time safety score monitoring",
        "One-touch emergency SOS",
        "GPS tracking and location sharing",
        "Safety tips and local alerts",
        "Emergency contact management"
      ],
      gradient: "bg-gradient-secondary",
      category: "mobile"
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Advanced machine learning for proactive threat detection",
      longDescription: "Our AI-powered anomaly detection system continuously analyzes tourist behavior patterns, location data, and environmental factors to identify potential safety threats before they become critical incidents.",
      benefits: [
        "Predictive threat analysis",
        "Behavioral pattern recognition",
        "Real-time risk assessment",
        "Automated alert generation",
        "Continuous learning algorithms"
      ],
      gradient: "bg-gradient-accent",
      category: "ai"
    },
    {
      icon: MapPin,
      title: "Geo-fencing & Location Monitoring",
      description: "Smart boundaries for enhanced tourist safety",
      longDescription: "Dynamic geo-fencing technology creates virtual safety boundaries around tourists, automatically alerting authorities when individuals enter restricted areas or deviate from safe zones.",
      benefits: [
        "Dynamic safety boundaries",
        "Automatic zone monitoring",
        "Real-time location alerts",
        "Customizable safe zones",
        "Emergency evacuation routes"
      ],
      gradient: "bg-gradient-primary",
      category: "location"
    },
    {
      icon: Monitor,
      title: "Police & Tourism Dashboard",
      description: "Comprehensive monitoring and response system",
      longDescription: "Real-time dashboards provide law enforcement and tourism officials with complete situational awareness, incident management capabilities, and resource coordination tools for effective emergency response.",
      benefits: [
        "Real-time incident monitoring",
        "Resource allocation optimization",
        "Multi-agency coordination",
        "Historical data analysis",
        "Response time tracking"
      ],
      gradient: "bg-gradient-secondary",
      category: "dashboard"
    },
    {
      icon: Wifi,
      title: "IoT Wearables Integration",
      description: "Connected devices for continuous monitoring",
      longDescription: "Optional IoT wearable devices provide continuous health and safety monitoring, enabling proactive intervention and emergency response based on biometric data and location information.",
      benefits: [
        "Continuous health monitoring",
        "Fall detection and alerts",
        "Emergency beacon activation",
        "Biometric data tracking",
        "Seamless device integration"
      ],
      gradient: "bg-gradient-accent",
      category: "iot"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Global accessibility in multiple languages",
      longDescription: "Complete application support in multiple languages including English and regional Indian languages, ensuring seamless communication and accessibility for tourists from diverse backgrounds.",
      benefits: [
        "Multi-language interface",
        "Real-time translation",
        "Cultural context awareness",
        "Local emergency phrases",
        "Voice command support"
      ],
      gradient: "bg-gradient-primary",
      category: "language"
    },
  ];

  const categories = [
    { id: "all", name: "All Features", icon: Zap },
    { id: "identity", name: "Digital Identity", icon: Shield },
    { id: "mobile", name: "Mobile App", icon: Smartphone },
    { id: "ai", name: "AI Technology", icon: Brain },
    { id: "location", name: "Location Services", icon: MapPin },
    { id: "dashboard", name: "Dashboards", icon: Monitor },
  ];

  const filteredFeatures = (category: string) => {
    if (category === "all") return detailedFeatures;
    return detailedFeatures.filter(feature => feature.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Comprehensive Feature Set
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Advanced Features for</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Complete Safety
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive suite of advanced features designed to provide 
              unparalleled safety and security for tourists worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="space-y-12">
            {/* Category Tabs */}
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full max-w-4xl mx-auto h-auto p-2 bg-card border border-border rounded-xl">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center gap-2 p-4 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Feature Content */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredFeatures(category.id).map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group p-8 bg-card rounded-xl border border-border shadow-md hover:shadow-xl transition-smooth cursor-pointer"
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className={`inline-flex p-4 rounded-xl mb-6 ${feature.gradient} group-hover:shadow-glow transition-smooth`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                          {feature.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {feature.description}
                        </p>

                        <div className="space-y-2">
                          {feature.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-success" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Button variant="ghost" className="w-full mt-6 group-hover:bg-primary/5">
                          Learn More
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Technical Specifications */}
          <div className="mt-20 bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built with cutting-edge technology for maximum reliability and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-primary/5 rounded-xl border border-primary/10">
                <Cloud className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Cloud Infrastructure</h3>
                <p className="text-sm text-muted-foreground">99.9% uptime with global CDN</p>
              </div>
              <div className="text-center p-6 bg-gradient-secondary/5 rounded-xl border border-accent/10">
                <Lock className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">End-to-End Encryption</h3>
                <p className="text-sm text-muted-foreground">AES-256 military-grade security</p>
              </div>
              <div className="text-center p-6 bg-gradient-accent/5 rounded-xl border border-primary/10">
                <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Real-time Processing</h3>
                <p className="text-sm text-muted-foreground">Sub-second response times</p>
              </div>
              <div className="text-center p-6 bg-gradient-primary/5 rounded-xl border border-primary/10">
                <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Global Coverage</h3>
                <p className="text-sm text-muted-foreground">Available in 50+ countries</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Experience Advanced Safety?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of tourists who trust GoSecure for their safety and security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;