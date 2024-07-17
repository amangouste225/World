import { useContext } from "react";
// import { CitiesProps } from "../lib/types";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import { TCitiesContext } from "../lib/types";
import { MyContext } from "../context/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useContext(MyContext) as TCitiesContext;
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
