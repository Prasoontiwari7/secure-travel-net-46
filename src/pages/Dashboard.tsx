import Navbar from "@/components/Navbar";
import { 
  Users, 
  AlertTriangle, 
  MapPin, 
  Activity, 
  Shield,
  Clock,
  TrendingUp,
  Monitor,
  Smartphone,
  Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Tourists",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Active Incidents", 
      value: "3",
      change: "-25%",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      title: "Safety Score",
      value: "94.2%",
      change: "+2.1%", 
      icon: Shield,
      color: "text-primary"
    },
    {
      title: "Geofenced Areas",
      value: "156",
      change: "+8%",
      icon: MapPin,
      color: "text-accent"
    }
  ];

  const recentIncidents = [
    {
      id: "INC-001",
      type: "Medical Emergency",
      location: "Marina Bay, Singapore",
      time: "2 min ago",
      status: "Active",
      severity: "High"
    },
    {
      id: "INC-002", 
      type: "Lost Tourist",
      location: "Connaught Place, Delhi",
      time: "15 min ago",
      status: "Resolved",
      severity: "Medium"
    },
    {
      id: "INC-003",
      type: "Geofence Alert",
      location: "Restricted Zone, Mumbai",
      time: "32 min ago", 
      status: "Monitoring",
      severity: "Low"
    }
  ];

  const touristClusters = [
    { area: "Times Square, NYC", count: 245, risk: "Low" },
    { area: "Taj Mahal, Agra", count: 189, risk: "Medium" },
    { area: "Marina Bay, Singapore", count: 156, risk: "High" },
    { area: "Eiffel Tower, Paris", count: 134, risk: "Low" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-8">
              <Monitor className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Live Dashboard Preview
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Real-time Safety</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Monitoring
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience our comprehensive monitoring dashboard with live tourist tracking, 
              incident management, and AI-powered threat detection.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-smooth">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-gradient-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-sm font-medium ${stat.color}`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.title}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Live Map Placeholder */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Live Tourist Tracking
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="relative h-80 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map with Live Tourist Locations</p>
                    <p className="text-sm text-muted-foreground mt-2">Real-time GPS tracking with geofenced zones</p>
                  </div>
                </div>
                
                {/* Simulated markers */}
                <div className="absolute top-6 left-8 w-3 h-3 bg-success rounded-full animate-pulse shadow-glow"></div>
                <div className="absolute top-16 right-12 w-3 h-3 bg-warning rounded-full animate-pulse shadow-glow"></div>
                <div className="absolute bottom-20 left-16 w-3 h-3 bg-success rounded-full animate-pulse shadow-glow"></div>
                <div className="absolute bottom-12 right-8 w-3 h-3 bg-destructive rounded-full animate-pulse shadow-glow"></div>
                
                {/* Zone overlays */}
                <div className="absolute top-12 left-12 w-20 h-16 border-2 border-success/30 bg-success/10 rounded-lg"></div>
                <div className="absolute bottom-16 right-16 w-16 h-12 border-2 border-destructive/30 bg-destructive/10 rounded-lg"></div>
              </div>

              {/* Map Controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Safe Zone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span className="text-muted-foreground">Caution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Restricted</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Full Screen
                </Button>
              </div>
            </div>

            {/* Incidents Panel */}
            <div className="bg-card rounded-xl border border-border shadow-md p-6">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Active Incidents
              </h2>
              
              <div className="space-y-4">
                {recentIncidents.map((incident, index) => (
                  <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-muted-foreground">{incident.id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        incident.severity === 'High' ? 'bg-destructive/10 text-destructive' :
                        incident.severity === 'Medium' ? 'bg-warning/10 text-warning' :
                        'bg-success/10 text-success'
                      }`}>
                        {incident.severity}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{incident.type}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{incident.location}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {incident.time}
                      </span>
                      <span className={`px-2 py-1 rounded-full ${
                        incident.status === 'Active' ? 'bg-destructive/10 text-destructive' :
                        incident.status === 'Resolved' ? 'bg-success/10 text-success' :
                        'bg-warning/10 text-warning'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Incidents
              </Button>
            </div>
          </div>

          {/* Tourist Clusters */}
          <div className="mt-8 bg-card rounded-xl border border-border shadow-md p-6">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Tourist Clusters
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {touristClusters.map((cluster, index) => (
                <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-foreground">{cluster.count}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      cluster.risk === 'High' ? 'bg-destructive/10 text-destructive' :
                      cluster.risk === 'Medium' ? 'bg-warning/10 text-warning' :
                      'bg-success/10 text-success'
                    }`}>
                      {cluster.risk} Risk
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cluster.area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-primary/5 rounded-xl border border-primary/10">
              <Activity className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Advanced analytics dashboard with predictive insights and trend analysis
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-secondary/5 rounded-xl border border-accent/10">
              <Smartphone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Mobile Integration</h3>
              <p className="text-sm text-muted-foreground">
                Seamless mobile app integration with push notifications and alerts
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-accent/5 rounded-xl border border-primary/10">
              <Radio className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Emergency Dispatch</h3>
              <p className="text-sm text-muted-foreground">
                Automated emergency response coordination with local authorities
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Experience the Full Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get access to our complete monitoring and incident management system 
                with advanced features and real-time capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;