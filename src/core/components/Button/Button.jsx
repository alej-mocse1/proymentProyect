import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

export default function FormButton() {
  return (
    <>
      <Link to="/form" className={styles.container}>
        <button className={styles.btn}>Agendar reunión</button>
      </Link>
    </>
  );
}
