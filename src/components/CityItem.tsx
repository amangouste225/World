import { Link } from "react-router-dom";
import { Cities } from "../lib/types";
import styles from "./CityItem.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };

const formatDate = (dater: string) =>
  new Intl.DateTimeFormat("en-US", options).format(new Date(dater));

export default function CityItem({ city }: { city: Cities }) {
  return (
    <li>
      <Link
        className={styles.cityItem}
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
