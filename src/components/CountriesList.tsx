import { CitiesProps } from "../lib/types";

import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
export default function CountriesList({ cities, isLoading }: CitiesProps) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {cities.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
