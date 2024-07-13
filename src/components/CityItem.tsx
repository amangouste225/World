import { Cities } from "../lib/types";
import styles from "./CityItem.module.css";

const options = { day: "numeric", month: "long", year: "numeric" };
const date = new Date();
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", options).format(new Date(date));

console.log(formatDate, date);

export default function CityItem({ city }: { city: Cities }) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.cityName} </span>
      <h3 className={styles.name}>{city.countryName}</h3>
      <time className={styles.date}>{formatDate(city.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
