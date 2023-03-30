import Register from "../../../Components/Register/Register";
import style from "./LandingPage.module.scss";
import img from "./assets/degradadoserviciosintegrales.svg"

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.degrade}>
        <img src={img} alt="Servicios-Integrales" />
      </div>
      <div className={style.containerInfo}>
        <h4>Servicio de potenciamiento de ventas</h4>
        <h2>Potenciamos el crecimiento comercial</h2>
        <button>Agendar reunión</button>
      </div>

      <div className={style.containerForm}>
        <Register />
      </div>
    </div>
  );
}
