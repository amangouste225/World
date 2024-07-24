import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import { useNavigate } from "react-router-dom";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import { TCitiesContext } from "../lib/types";

import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
import useGeolocation from "../hooks/useGeolocation";

export default function Map() {
  const { cities } = useCities() as TCitiesContext;
  const [mapPosition, setMapPosition] = useState([
    5.391804573239835, -4.070434570312501,
  ]);

  const { getPosition, userLocation, isLoading } = useGeolocation();

  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    if (userLocation)
      setMapPosition([userLocation.latitude, userLocation.longitude]);
  }, [userLocation]);

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lng, lat]);

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onclick={getPosition}>
        {isLoading ? "Loading..." : "Use my position"}
      </Button>

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
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
