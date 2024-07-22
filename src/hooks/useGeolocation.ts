import { useState } from "react";

// define the function that finds the users geolocation
function Geolocation(defaultPosition = null) {
  const [position, setPosition] = useState(defaultPosition);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Geolocation is not supported by this browser.");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { getPosition, position, isLoading, error };
}

export { Geolocation };
