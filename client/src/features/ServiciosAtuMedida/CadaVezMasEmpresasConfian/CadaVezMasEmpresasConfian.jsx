import React from "react";
import styles from "./CadaVezMasEmpresasConfian.module.scss";
import img from "./assets/dashboard.svg";
import icon from "./assets/graphic.svg"


const CadaVezMasEmpresasConfian = () => {

    return(
        <div className={styles.div}>

            <div className={styles.divInfo}>

                <div className={styles.divInfo1}>
                     
                     <div>

                        <h2>Cada vez más empresas usan los servicios a medida de proyment para solucionar sus problemas</h2>
                         
                        <p>Puedes elegir entre uno (1) o los seis (6) servicios que ofrece proyment en simultáneo. Conecta con nosotros mediante una reunión.</p>

                        <button> Agendar Reunion</button>

                     </div>
                     <img src={icon} alt="not" />

                </div>

                <div className={styles.divInfo2}>
                    <img src={img} alt="proyment" />
                </div>

            </div>

        </div>
    )
}


export default CadaVezMasEmpresasConfian