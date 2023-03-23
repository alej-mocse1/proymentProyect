import React from "react";
import style from "./ProymentParaPotenciar.module.scss"
import img from "./assets/img chica.png"




export default function ProymentParaPotenciar () {
    return(
        <div className={style.container}>
            <div className={style.containerInfo}>
                <h4>Cada vez más empresas usan el servicio de </h4>
                <h3>Proyment para potenciar sus ventas</h3>
                <div className={style.containerBtn}></div>
            </div>
            <div className={style.containerImg}>
                {/* <img src={img} al="not"/> */}
            </div>
        </div>
    )
}