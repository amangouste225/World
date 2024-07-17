// import { CitiesProps } from "../lib/types";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import { TCitiesContext } from "../lib/types";
import { useCities } from "../context/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities() as TCitiesContext;
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
