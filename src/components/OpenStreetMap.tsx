import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up the default marker icons
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

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
          <MapContainer
            center={[mapCenter.lat, mapCenter.lng]}
            zoom={userLocation ? 15 : 10}
            className="h-full w-full rounded-lg"
            zoomControl={true}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {userLocation && (
              <Marker position={[userLocation.lat, userLocation.lng]}>
                <Popup>
                  <div className="text-center">
                    <strong>Your Location</strong>
                    <br />
                    Lat: {userLocation.lat.toFixed(4)}
                    <br />
                    Lng: {userLocation.lng.toFixed(4)}
                  </div>
                </Popup>
              </Marker>
            )}
            
            {!userLocation && (
              <Marker position={[mapCenter.lat, mapCenter.lng]}>
                <Popup>
                  <div className="text-center">
                    <strong>New Delhi, India</strong>
                    <br />
                    Default Location
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
          
          {/* Status indicator */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm shadow-lg z-[1000]">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                locationStatus === 'granted' ? 'bg-success animate-pulse' :
                locationStatus === 'denied' || locationStatus === 'unavailable' ? 'bg-warning' : 'bg-muted'
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
