import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import {scalePow} from "d3-scale";

function getColor(itemFall) {
	if (itemFall === "Fell") {
		return "#FC8D62"
	} if (itemFall === "Found") {
		return "#8DA0CB"
	}
}

function Map(props) {
	const min = props.minMax[0];
	const max = props.minMax[1];

	const scale = scalePow().exponent(0.5).domain([min, max]).range([10, 50]);
	
	return <div id="map">
    <MapContainer center={[16, 0]} zoom={2} scrollWheelZoom={false}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {
        props.data.map(element => {
        	return <CircleMarker 
						key={element.id}
						center={[element.reclat, element.reclong]}
						radius={scale(element.mass)}
						color={getColor(element.fall)}
						weight={1}
						fillOpacity={0.2}
					> 
            <Popup>
              <h3>{element.name}</h3>
							 <p>{element.mass} grams</p>
            </Popup>
          </CircleMarker>
        })
      }
    </MapContainer>
	<div className="map-legend">
		<div className="map-sub-legend">
			<div className="circle-mass"></div> <p>Mass (grams)</p>
		</div>
		<div className="map-sub-legend">
			<div className="square-fell"></div> <p>Fell</p>
		</div>
		<div className="map-sub-legend">
			<div className="square-found"></div> <p>Found</p>
		</div>
	</div>
	</div>
}

export default Map;