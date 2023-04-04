import style from "./LandingServAtuMedida.module.scss";
import Register from "../../../Components/Register/Register";
import img from "./assets/degradadoserviciosintegrales.svg";

export default function LandingServAtuMedida() {
  return (
    <>
      <div className={style.container}>
        <div className={style.degrade}>
          <img src={img} alt="Servicios-Integrales" />
        </div>
        <div className={style.containerInfo}>
          {/* <h4>Servicios de diseño web</h4> */}
          <h2>Servicios a Medida</h2>
          <p>
          El servicio ideal para adquirir más de un servicio profesional. Lo mejor de todo, tú eliges cuál.
          </p>
          <button>Conocer más</button>
        </div>

        <div className={style.containerForm}>
          <Register />
        </div>
      </div>
    </>
  );
}
