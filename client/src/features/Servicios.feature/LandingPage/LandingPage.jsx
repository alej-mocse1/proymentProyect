import Register from "../../../Components/Register/Register";
import style from "./LandingPage.module.scss";

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.polygon}></div>
      <div className={style.degrade}></div>
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
