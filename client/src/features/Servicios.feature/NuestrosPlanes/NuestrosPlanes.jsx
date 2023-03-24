import React from "react";
import styles from "./NuestrosPlanes.module.scss";
import img from "./assets/img.png"


const NuestrosPlanes = () => {

    return(
        <div className={styles.div}>

            <h2> Nuestros Planes</h2>

            <div className={styles.divConteiner}>
                
                <div className={styles.divTexto}>


                </div>

                <div className={styles.divImg}>
                    <img src={img} alt="potenciamiento de ventas/proyment" />

                </div>

            </div>

        </div>
    )
}


export default NuestrosPlanes