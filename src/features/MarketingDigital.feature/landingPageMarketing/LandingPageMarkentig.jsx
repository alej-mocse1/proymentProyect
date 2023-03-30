import Register from "../../../Components/Register/Register";
import style from "./LandingPageMarkentig.module.scss";
import img from "./assets/degradado.svg";

export default function LandingPageMarkentig() {
  return (
    <div className={style.container}>

      <div className={style.degrade}>
        <img src={img} alt="Marqueting-digital" />
      </div>
      <div className={style.containerInfo}>
        <h4>Servicio de marketing 360°</h4>
        <h2>Innova, Transforma, Alcanza.</h2>

        <div className={style.divBtn}>
         <button className={style.BTNConocerMas}>Conocer más</button>
         <button className={style.BTNAgendarReunion}>Agendar reunión</button>
        </div>
      </div>

      <div className={style.containerForm}>
        <Register />
      </div>
    </div>
  );
}