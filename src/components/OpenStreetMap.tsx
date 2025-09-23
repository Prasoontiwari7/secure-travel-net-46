import React, { useState, useEffect } from 'react';

interface OpenStreetMapProps {
  className?: string;
  height?: string;
}

interface Location {
  lat: number;
  lng: number;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({ 
  className = "w-full", 
  height = "400px" 
}) => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [mapCenter, setMapCenter] = useState<Location>({ lat: 28.6139, lng: 77.2090 }); // New Delhi fallback
  const [locationStatus, setLocationStatus] = useState<'loading' | 'granted' | 'denied' | 'unavailable'>('loading');

  useEffect(() => {
    // Check if geolocation is available
    if (!navigator.geolocation) {
      setLocationStatus('unavailable');
      return;
    }

    // Request user's current location
    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        const { latitude, longitude } = position.coords;
        const location = { lat: latitude, lng: longitude };
        setUserLocation(location);
        setMapCenter(location);
        setLocationStatus('granted');
      },
      // Error callback
      (error) => {
        console.warn('Geolocation error:', error.message);
        setLocationStatus('denied');
        // Keep the fallback location (New Delhi)
      },
      // Options
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000 // Cache for 1 minute
      }
    );
  }, []);

  const getStatusMessage = () => {
    switch (locationStatus) {
      case 'loading':
        return 'Requesting location permission...';
      case 'granted':
        return 'Showing your current location';
      case 'denied':
        return 'Location access denied. Showing New Delhi, India';
      case 'unavailable':
        return 'Geolocation not available. Showing New Delhi, India';
      default:
        return '';
    }
  };

  const generateMapUrl = () => {
    const lat = mapCenter.lat;
    const lng = mapCenter.lng;
    const zoom = userLocation ? 15 : 10;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lng}`;
  };

  return (
    <div className={className} style={{ height }}>
      {locationStatus === 'loading' && (
        <div className="h-full bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">{getStatusMessage()}</p>
          </div>
        </div>
      )}
      
      {locationStatus !== 'loading' && (
        <div className="relative h-full">
          <iframe
            src={generateMapUrl()}
            className="w-full h-full rounded-lg border"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="OpenStreetMap"
          />
          
          {/* Status indicator */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm shadow-lg z-[1000]">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                locationStatus === 'granted' ? 'bg-green-500 animate-pulse' :
                locationStatus === 'denied' || locationStatus === 'unavailable' ? 'bg-yellow-500' : 'bg-gray-400'
              }`} />
              <span className="text-foreground">{getStatusMessage()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenStreetMap;
