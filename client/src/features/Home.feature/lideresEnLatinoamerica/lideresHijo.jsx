import React from "react";
import styles from './LideresEnLatinoamerica.module.css';

const LideresHIJO = (props) => {



    return(
        <div className={styles.DivRESPONSIVE}>

 


        <div className={styles.divResponsiveFrase}>
             <p>{props.frase}</p>
        </div>


        <div className={styles.DivInfoResponsive}>

                 <img src={props.img} alt="img1"/>
                 
                 <div className={styles.infoContactoResponsive}>
                    <h3>{props.name}</h3>
                    <p>{props.titulo}</p>
                 </div>

        </div>



        <div  className={styles.DivBTNS}>
           <button className={styles.btnIZQ} onClick={() => props.prevPage()}>izquierda </button>
           <button className={styles.btnDER}  onClick={() => props.nextPage()}>derecha</button>
        </div>
    </div>
    )
}



export default LideresHIJO