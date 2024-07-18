import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import { TCities, TCitiesContext } from "../lib/types";

export default function Map() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { cities } = useCities() as TCitiesContext;
  const lat: number = searchParams.get("lat");
  const lng: number = searchParams.get("lng");

  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lng, lat]);
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={16}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city, id) => (
          <Marker position={[city.position.lat, city.position.lng]} key={id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>.
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}
