import React from "react";
import styles from "./CadaAreaTieneUnIndicador.module.scss";


const CardC = ({ info }) => {

    return(
        <div  className={styles.cardResposive} >
        <h4>{info.Title}</h4>
        <p>{info.descipcion}</p>
    

        <p className={styles.pLinks}> <div className={styles.icono}><i class="ri-check-line" ></i> </div>{info.punto1}</p>
        <p className={styles.pLinks}> <div className={styles.icono}><i class="ri-check-line" ></i> </div>{info.punto2}</p>
        <p className={styles.pLinks}> <div className={styles.icono}><i class="ri-check-line" ></i> </div>{info.punto3}</p>
        <p className={styles.pLinks}> <div className={styles.icono}><i class="ri-check-line" ></i> </div>{info.punto4}</p>
     </div>
    )
}


export default CardC