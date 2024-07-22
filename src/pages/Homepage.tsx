import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Here to help keep
          <br />
          you on the move
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Button type="primary" onclick={() => navigate("App")}>
          Start tracking now
        </Button>
      </section>
    </main>
  );
}
