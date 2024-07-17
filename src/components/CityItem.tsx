import { Link } from "react-router-dom";
import { TCities, TCitiesContext } from "../lib/types";
import styles from "./CityItem.module.css";
import { useCities } from "../context/CitiesContext";

const options = { day: "numeric", month: "long", year: "numeric" };

const formatDate = (dater: string) =>
  new Intl.DateTimeFormat("en-US", options).format(new Date(dater));

export default function CityItem({ city }: { city: TCities }) {
  const { currentCity } = useCities() as TCitiesContext;

  console.log(city.id, currentCity.id);

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          city.id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{city.cityName} </span>
        <h3 className={styles.name}>{city.countryName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
