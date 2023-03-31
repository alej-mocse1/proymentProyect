import Register from "../../../Components/Register/Register";
import style from "./LandingPage.module.scss";
import img from "./assets/degradado servicios en tendencia.svg"

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.degrade}>
        <img src={img} alt="Servicios-Analisis" />
      </div>
      <div className={style.containerInfo}>
        <h4>Servicios en tendencia</h4>
        <h2>Servicios destinados a solucionar problemas específicos de empresas</h2>
        <button>Ver más</button>
      </div>

      <div className={style.containerForm}>
        <Register />
      </div>
    </div>
  );
}
