import { useState } from "react";

// define the function that finds the users geolocation
function Geolocation(defaultPosition = null) {
  const [position, setPosition] = useState(defaultPosition);

  const getPosition = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return { getPosition, position };
}

export { Geolocation };
