import React from "react";
import style from "./ProymentParaPotenciar.module.scss"
import img from "./assets/img chica.png"
import graphic from "./assets/graphic flecha.svg"
import Pattern from "./assets/Pattern graphic flotante.svg"




export default function ProymentParaPotenciar () {
    return(
        <div className={style.container}>
            <div className={style.containerInfo}>
                <img src={graphic} alt="not" />
                <h4>Cada vez más empresas usan el servicio de </h4>
                <h3>Proyment para potenciar sus ventas</h3>     
                    <button>Agendar reunión</button>
            </div>
            <div className={style.containerImg}>
                <img src={img} al="not" width="200px"/>
            </div>
            <div className={style.containerGraphic}>
                <img src={Pattern} alt="not" />
            </div>
        </div>
    )
}