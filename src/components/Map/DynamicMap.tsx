import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';

interface ChangeViewProps {
    coords: [number, number];
}

export function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

/* 
{geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )} 
*/

export default function Map() {
  const [geoData, setGeoData] = useState({lat: 41.11148, lon: 16.8554});

  useEffect(() => {
    const controls = document.querySelector("div.leaflet-control-zoom.leaflet-bar.leaflet-control") as HTMLDivElement
    controls.style.display = "none"
    navigator.geolocation.getCurrentPosition((pos) => {
      setGeoData({lat: pos.coords.latitude, lon: pos.coords.longitude})
    })
  }, [])

  const center: [number, number] = [geoData.lat, geoData.lon];

  return (
    <MapContainer center={center} zoom={12} style={{ height: '100%' }} className='z-0'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[geoData.lat, geoData.lon]}>
        <Popup>
          You are here
        </Popup>
      </Marker>
      <ChangeView coords={center} />
    </MapContainer>
  );
}