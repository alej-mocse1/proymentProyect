import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <>
      <Link to="/form">
        <button className={styles.btn}>Agendar reunión</button>
      </Link>
    </>
  );
}
