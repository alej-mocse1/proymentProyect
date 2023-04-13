import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

export default function FormButton(planes) {
  return (
    <>
      <Link to="/form" className={styles.container}>
        <button className={planes? styles.btnplanes: styles.btn}>Agendar reunión</button>
      </Link>
    </>
  );
}
