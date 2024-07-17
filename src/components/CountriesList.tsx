// import { CitiesProps } from "../lib/types";

import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import { useContext } from "react";

import { TCitiesContext } from "../lib/types";
import { MyContext } from "../context/CitiesContext";
export default function CountriesList() {
  const { cities, isLoading } = useContext(MyContext) as TCitiesContext;
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
