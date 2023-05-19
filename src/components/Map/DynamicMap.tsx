import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, } from "react-leaflet";
import L from "leaflet"
import MarkerVehicle from "../Markers";
import fs from "fs"
import { GetServerSideProps } from "next";
import CarIcon from "public/filtersIcons/car.png"


interface ChangeViewProps {
  coords: [number, number];
}

export function ChangeView({ coords }: ChangeViewProps) {
  const map = useMap();
  map.setView(coords, 20);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 41.11148, lon: 16.8554 });
  useEffect(() => {    
    const controls = document.querySelector("div.leaflet-control-zoom.leaflet-bar.leaflet-control") as HTMLDivElement;
    controls.style.display = "none";
    navigator.geolocation.getCurrentPosition((pos) => {
      setGeoData({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    });
  }, []);

  const center: [number, number] = [geoData.lat, geoData.lon];
  
  
  return (
    <MapContainer center={center} style={{ height: "100%" }} className="z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerVehicle vehicle_icon={CarIcon.src} vehicle_type="car" lat={geoData.lat} lon={geoData.lon} />
      <ChangeView coords={center} />
    </MapContainer>
  );
}
