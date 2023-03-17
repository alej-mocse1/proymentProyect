import styles from "./OPT.module.scss";
import dashboard from "../../../features/Home.feature/assets/imgOptimizandoEmpresas/graphicdashboard.svg";
import image2bkgr from "../../../features/Home.feature/assets/imgOptimizandoEmpresas/Patterngraphic-.svg";
import dashboardfloat from "../../../features/Home.feature/assets/imgOptimizandoEmpresas/graphicflotantedashboard.svg";

export default function OPT() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container2}>
            <img src={dashboard} alt="dashboard" className={styles.dashboard1}></img>
            <img src={dashboardfloat} alt="dashboard.float" className={styles.dashboardfloat1}></img>
          <div className={styles.content}>
            <p className={styles.contentTitle}>
              Optimizamos empresas con nuestros servicios profesionales a medida
            </p>
            <button className={styles.btn}>Agendar reunión</button>
          </div>
        </div>
        <img src={image2bkgr} alt="imagen" className={styles.imgbkgr2}></img>
      </div>
    </>
  );
}
