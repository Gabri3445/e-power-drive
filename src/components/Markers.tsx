import {useState, useEffect} from "react"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet"


interface MarkerProps{
    vehicle_type: string 
    vehicle_icon: string 
    lat: number
    lon: number
}

const MarkerVehicle = (props:MarkerProps) =>{
    // random coordinates
    const icon = L.icon({
        iconUrl: props.vehicle_icon,
        iconSize:     [34, 35], // size of the icon
        iconAnchor:   [1, 10], // point of the icon which will correspond to marker's location
    })
    
    return(
        <>
            <Marker eventHandlers={{
                click: () => {
                    const elem = document.querySelector(".vecdesc") as HTMLDivElement                    
                    elem.style.display = "block"
                }
            }} icon={icon} position={[props.lat, props.lon]}/>
        </>
    )
}

export default MarkerVehicle