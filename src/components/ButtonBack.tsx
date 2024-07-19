import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

export default function ButtonBack() {
  const navigate = useNavigate();
  return (
    <div className={styles.back}>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
