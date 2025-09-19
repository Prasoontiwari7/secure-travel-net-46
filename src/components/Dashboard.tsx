import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  MapPin, 
  AlertTriangle, 
  Users, 
  Activity,
  Clock,
  CheckCircle,
  XCircle,
  Navigation,
  Phone
} from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';

interface DashboardStats {
  activeTourists: number;
  totalIncidents: number;
  openIncidents: number;
  resolvedIncidents: number;
  geofences: number;
}

interface Incident {
  id: string;
  level: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  location: string;
  timestamp: string;
  status: 'open' | 'in_progress' | 'resolved';
}

interface Tourist {
  id: string;
  name: string;
  location: string;
  status: 'safe' | 'warning' | 'alert';
  lastSeen: string;
}

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [stats] = useState<DashboardStats>({
    activeTourists: 247,
    totalIncidents: 12,
    openIncidents: 3,
    resolvedIncidents: 9,
    geofences: 15
  });

  const [incidents] = useState<Incident[]>([
    {
      id: '1',
      level: 'high',
      description: 'Tourist reported missing near Red Fort area',
      location: 'New Delhi, India',
      timestamp: '2024-01-15T14:30:00Z',
      status: 'open'
    },
    {
      id: '2',
      level: 'medium',
      description: 'Unusual activity detected in tourist zone',
      location: 'Mumbai, India',
      timestamp: '2024-01-15T13:15:00Z',
      status: 'in_progress'
    },
    {
      id: '3',
      level: 'low',
      description: 'Geofence boundary crossed without notification',
      location: 'Goa, India',
      timestamp: '2024-01-15T12:00:00Z',
      status: 'resolved'
    }
  ]);

  const [tourists] = useState<Tourist[]>([
    {
      id: '1',
      name: 'John Smith',
      location: 'New Delhi',
      status: 'safe',
      lastSeen: '2 minutes ago'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      location: 'Mumbai',
      status: 'warning',
      lastSeen: '15 minutes ago'
    },
    {
      id: '3',
      name: 'Mike Wilson',
      location: 'Goa',
      status: 'safe',
      lastSeen: '5 minutes ago'
    }
  ]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-destructive text-destructive-foreground';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-blue-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-success text-success-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'alert': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <AlertTriangle className="w-4 h-4" />;
      case 'in_progress': return <Clock className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      default: return <XCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Security Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Real-time monitoring and incident management
            </p>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-2">
            <Activity className="w-4 h-4 mr-2" />
            Live
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Active Tourists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.activeTourists}</div>
              <p className="text-xs text-muted-foreground mt-1">Currently monitored</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                Total Incidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{stats.totalIncidents}</div>
              <p className="text-xs text-muted-foreground mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-destructive" />
                Open Cases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{stats.openIncidents}</div>
              <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Resolved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.resolvedIncidents}</div>
              <p className="text-xs text-muted-foreground mt-1">Successfully handled</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Geofences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.geofences}</div>
              <p className="text-xs text-muted-foreground mt-1">Active zones</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="incidents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="incidents">Recent Incidents</TabsTrigger>
            <TabsTrigger value="tourists">Active Tourists</TabsTrigger>
            <TabsTrigger value="overview">System Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="incidents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Incident Management</CardTitle>
                <CardDescription>
                  Track and manage security incidents in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incidents.map((incident) => (
                    <div key={incident.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Badge className={getLevelColor(incident.level)}>
                          {incident.level.toUpperCase()}
                        </Badge>
                        <div>
                          <p className="font-medium">{incident.description}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {incident.location} • {new Date(incident.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getStatusIcon(incident.status)}
                          {incident.status.replace('_', ' ')}
                        </Badge>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tourists" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tourist Monitoring</CardTitle>
                <CardDescription>
                  Real-time status of tourists under monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tourists.map((tourist) => (
                    <div key={tourist.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-medium">
                          {tourist.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium">{tourist.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Navigation className="w-3 h-3" />
                            {tourist.location} • Last seen {tourist.lastSeen}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(tourist.status)}>
                          {tourist.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>AI Detection Service</span>
                    <Badge className="bg-success text-success-foreground">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Location Tracking</span>
                    <Badge className="bg-success text-success-foreground">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Emergency Response</span>
                    <Badge className="bg-success text-success-foreground">Ready</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Blockchain Network</span>
                    <Badge className="bg-success text-success-foreground">Synced</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Tourist Helpline</span>
                    <Button variant="outline" size="sm">
                      1800-11-1363
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Police</span>
                    <Button variant="outline" size="sm">
                      100
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Ambulance</span>
                    <Button variant="outline" size="sm">
                      102
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Medical Support</span>
                    <Button variant="outline" size="sm">
                      104
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};