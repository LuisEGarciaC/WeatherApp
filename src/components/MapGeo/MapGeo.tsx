import "./Map.css";
import React from "react";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
} from "react-leaflet";
import { Icon as LeafletIcon } from "leaflet";



const position: [number, number] = [51.505, -0.09];

const IconOptions = new LeafletIcon({
	iconUrl: "../../assets/venue_location_icon.svg",
});


interface MapGeoProps {
	coords: {
		lat: number;
		log: number;
	};
}

export const MapGeo: React.FC<MapGeoProps> = ({ coords }) => {
	// component implementation
	return (
		<div>
			<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
			,{coords.lat}, {coords.log}
		</div>
	);
};
