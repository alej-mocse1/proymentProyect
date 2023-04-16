import React from "react";
import styles from "./LasEmpresasConfianEnNosotros.module.scss";



const LasEmpresasHijo = ({ info }) => {

    return(
        
           <div className={styles.carrousel}>
               <img src={info.img} alt="proyment" />

                <h4>{info.name}</h4>

               <p>{info.texto}</p>  
          </div> 


    )
}

export default LasEmpresasHijo

