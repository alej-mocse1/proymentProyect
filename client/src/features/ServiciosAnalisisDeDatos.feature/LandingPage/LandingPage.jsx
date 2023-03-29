import Register from "../../../Components/Register/Register";
import style from "./LandingPage.module.scss";
import img from "./assets/degradado análisis de datos.svg"

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.degrade}>
        <img src={img} alt="Servicios-Analisis" />
      </div>
      <div className={style.containerInfo}>
        <h4>Servicio de análisis de datos</h4>
        <h2>Convierta datos sin procesar en información de valor en tiempo real</h2>
        <button>Conoce más</button>
      </div>

      <div className={style.containerForm}>
        <Register />
      </div>
    </div>
  );
}
