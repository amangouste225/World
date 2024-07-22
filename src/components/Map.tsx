import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import { TCitiesContext } from "../lib/types";
import { Geolocation } from "../hooks/useGeolocation";
import Button from "./Button";

export default function Map() {
  const [searchParams] = useSearchParams();
  const { cities } = useCities() as TCitiesContext;
  const lat: number = searchParams.get("lat");
  const lng: number = searchParams.get("lng");

  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  const {
    getPosition,
    position: geoLocationPosition,
    isLoading,
  } = Geolocation();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lng, lat]);

  useEffect(() => {
    if (geoLocationPosition)
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  }, [geoLocationPosition]);
  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type="position" onclick={getPosition}>
          {isLoading ? "Loading..." : "Use my position"}
        </Button>
      )}
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
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
