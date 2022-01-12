import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';



function Map(props) {
    return <div id="map">
        <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {
                props.data.map(element => {
                    return <CircleMarker key={element.id} center={[element.reclat, element.reclong]}> 
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </CircleMarker>
                })
            }
        </MapContainer>
    </div>
}

export default Map;