import { useState } from "react";

export default function useGeolocation() {
  const [userLocation, setuserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPosition = () => {
    if (!navigator.geolocation)
      return setError("Geo-location is not supported by your browser.");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setuserLocation({ latitude, longitude });
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  };

  return { getPosition, userLocation, isLoading, error };
}
