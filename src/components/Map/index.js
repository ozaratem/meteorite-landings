import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Map() {
    return <div id="map">
        <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
}

export default Map;