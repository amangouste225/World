// import { CitiesProps } from "../lib/types";

import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";

import { TCitiesContext } from "../lib/types";
import { useCities } from "../context/CitiesContext";

export default function CountriesList() {
  const { cities, isLoading } = useCities() as TCitiesContext;
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const country = cities.filter(
    (obj, index, el) => index === el.findIndex((t) => t.emoji === obj.emoji)
  );

  console.log(country, cities);

  return (
    <ul className={styles.countryList}>
      {country.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
