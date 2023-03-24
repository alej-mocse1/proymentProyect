import React from "react";
import styles from "./NuestrosPlanes.module.scss";
import img from "./assets/img.png";
import 'remixicon/fonts/remixicon.css';


const NuestrosPlanes = () => {

    return(
        <div className={styles.div}>

            <h2> Nuestros Planes</h2>

            <div className={styles.divConteiner}>
                
                <div className={styles.divTexto}>
                   
                   <h4>STARTER </h4>
                   <h3>Depende de los requerimientos</h3>
                   <p >Facturado mensual, planes trimestrales.</p>

                   <p className={styles.pLinks}> <span className={styles.icono}><i class="ri-check-line" ></i> </span>    Plan de capacitación personal de ventas a medida</p>
                   <p className={styles.pLinks}> <span className={styles.icono}><i class="ri-check-line" ></i> </span>     Plan de capacitación personal mando medio a medida</p>
                   <p className={styles.pLinks}> <span className={styles.icono}><i class="ri-check-line" ></i> </span>      Ejecución de capacitaciones personal de ventas</p>
                   <p className={styles.pLinks}> <span className={styles.icono}><i class="ri-check-line" ></i> </span>     Ejecución de capacitaciones personal mando medio</p>
                   <p className={styles.pLinks}> <span className={styles.icono}><i class="ri-check-line" ></i> </span>     Clínica de ventas</p>
                   <p className={styles.pLinks}><span className={styles.icono}><i class="ri-check-line" ></i> </span>    Reporte de mejora de ventas y personal</p>
                   

                   <p  className={styles.pbuttom}>Proyment cuenta con diversos planes donde nos adaptamos a los requerimientos de las empresas</p>

                   <button>Agendar reunión</button>
                </div>

                <div className={styles.divImg}>
                    <img src={img} alt="potenciamiento de ventas/proyment" /> 
                </div>

            </div>

        </div>
    )
}


export default NuestrosPlanes