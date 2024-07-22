import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat: number = searchParams.get("lat");
  const lng: number = searchParams.get("lng");

  return { lat, lng };
}

export { useUrlPosition };
