import { TCities } from "../lib/types";
import styles from "./CountryItem.module.css";

function CountryItem({ country }: { country: TCities }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
