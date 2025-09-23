import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface OpenStreetMapProps {
  className?: string;
  height?: string;
}

interface LocationState {
  lat: number;
  lng: number;
  loading: boolean;
  error: string | null;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({ 
  className = "w-full h-96", 
  height = "400px" 
}) => {
  const [location, setLocation] = useState<LocationState>({
    lat: 28.6139, // Default to New Delhi
    lng: 77.2090,
    loading: true,
    error: null
  });

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        loading: false,
        error: "Geolocation is not supported by this browser."
      }));
      return;
    }

    // Request user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          loading: false,
          error: null
        });
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location.";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
        }

        setLocation(prev => ({
          ...prev,
          loading: false,
          error: errorMessage
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }, []);

  if (location.loading) {
    return (
      <div className={`${className} flex items-center justify-center bg-muted rounded-lg`} style={{ height }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Getting your location...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            {location.error ? (
              <div>
                <strong>Default Location</strong><br />
                New Delhi, India<br />
                <small className="text-muted-foreground">{location.error}</small>
              </div>
            ) : (
              <div>
                <strong>Your Location</strong><br />
                Lat: {location.lat.toFixed(4)}<br />
                Lng: {location.lng.toFixed(4)}
              </div>
            )}
          </Popup>
        </Marker>
      </MapContainer>
      
      {location.error && (
        <div className="mt-2 p-2 bg-warning/10 border border-warning/20 rounded text-sm text-warning">
          {location.error} Using default location (New Delhi).
        </div>
      )}
    </div>
  );
};

export default OpenStreetMap;