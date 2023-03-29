import React from "react";
import style from "./LandingPageServIntegrales.module.scss";
import img from "./assets/degradadoserviciosintegrales.svg";
import Register from "../../../Components/Register/Register";

const LandingPageServIntegrales = () => {


    return(
        <div className={style.container}>
        {/* <div className={style.polygon}></div> */}
        <div className={style.degrade}>
          <img src={img} alt="Servicios-Integrales" />
        </div>
        <div className={style.containerInfo}>
          <h4>Servicio Integrales</h4>
          <h2>Mejoramos empresas a través de la productividad</h2>
          <button>Agendar reunión</button>
        </div>
  
        <div className={style.containerForm}>
          <Register />
        </div>
      </div>
    )
}

export default LandingPageServIntegrales