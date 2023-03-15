import styles from "./OPT.module.scss";
import image from "../../../features/Home.feature/assets/graphicdashboard.svg";

export default function OPT() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container2}>
          <img src={image} alt="imagen" className={styles.svg} />
          <div className={styles.content}>
            <p className={styles.contentTitle}>
              Optimizamos empresas con nuestros servicios profesionales a medida
            </p>
            <button className={styles.btn}>Agendar reunión</button>
          </div>
        </div>
      </div>
    </>
  );
}
