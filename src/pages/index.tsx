/* eslint-disable @typescript-eslint/no-misused-promises */
import type { NextPage } from "next";
import { useState } from "react";
import Hamburger from "~/components/Hamburger/Hamburger";
import Navbar from "~/components/Navbar";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import Filters from "~/components/Filters/Filters";
import { useRouter } from "next/router";
import VehicleDescription from "~/components/VehicleDescription"
import Citroen from "~/../public/vehicles/citroen.png"
import CarIcon from "public/filtersIcons/car.png"


const MapWithNoSSR = dynamic(() => import("../components/Map/DynamicMap"), {
  ssr: false
});

const Index: NextPage = () => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState<string>("left-[-100%] transition-all")
  const router = useRouter();

  const onHamburgerChange = () => {
    if (!show) {
      setShow(true);
      setHidden("left-0 transition-all")
      return;
    }
    setShow(false);
    setHidden("left-[-100%] transition-all")
  };

  return (
    <div className="h-screen relative">
      <Navbar onHamburgerClick={onHamburgerChange} onAccountClick={async () => {
        await router.push("/login"); 
      }} hamburgerShown={show} setHamburgerShown={setShow}></Navbar>
      <Hamburger show={show} classname={hidden} onGreyAreaClick={onHamburgerChange}></Hamburger>
      <div className="w-full h-full">
        <MapWithNoSSR/>
      </div>
      <Filters />  

      <VehicleDescription type="car" vehicle_image={Citroen.src}
        battery_percentage="90" km_traveled={10} license_plate="FE348XA" 
        price_km={0.20} type_image={CarIcon.src}
      />  
    </div>
  );
  // TODO: Make this the login.tsx
};

export default Index;
