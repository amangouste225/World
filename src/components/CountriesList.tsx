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

  const country = cities.filter(
    (obj, index, el) => index === el.findIndex((t) => t.country === obj.country)
  );

  return (
    <ul className={styles.countryList}>
      {country.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
