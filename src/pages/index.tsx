import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Hamburger from "~/components/Hamburger/Hamburger";
import Navbar from "~/components/Navbar";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from 'next/dynamic';
import Filters from "~/components/Filters/Filters";


const MapWithNoSSR = dynamic(() => import('../components/Map/DynamicMap'), {
  ssr: false,
});
const DEFAULT_CENTER = [38.907132, -77.036546]

const Index: NextPage = () => {
  const [show, setShow] = useState(false);

  const onHamburgerChange = () => {
    if (!show) {
      setShow(true)
      return
    }
    setShow(false)
  }

  return (
    <div className="h-screen relative">
      <Navbar onHamburgerClick={onHamburgerChange} onAccountClick={() => {console.log("clicked")}} hamburgerShown={show} setHamburgerShown={setShow}></Navbar>
      <Hamburger show={show} onGreyAreaClick={onHamburgerChange}></Hamburger>
      <div className="w-full h-full">
        <MapWithNoSSR/>
      </div>
      <Filters />
    </div>
  )
  // TODO: Make this the login.tsx
}

export default Index;