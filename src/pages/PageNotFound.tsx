import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.not_found}>
      <div>
        <h1>404</h1>
        <p>Page not found😀</p>

        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}
