// import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import {} from "../lib/types";
import { useParams } from "react-router-dom";

const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", options).format(new Date(date));

function City() {
  const params = useParams();
  const { emoji, notes, cityName, date } = params;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://www.google.com/search?q=${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Google &rarr;
        </a>
      </div>

      {/* <div>
        <ButtonBack />
      </div> */}
    </div>
  );
}

export default City;
