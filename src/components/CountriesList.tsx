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

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country))
      return [...acc, { country: city.country, emoji: city.city }];
    else return acc;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
