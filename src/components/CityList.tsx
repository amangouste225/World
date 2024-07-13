import { CitiesProps } from "../lib/types";
import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

export default function CityList({ cities, isLoading }: CitiesProps) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.countriesList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
