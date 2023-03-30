import React from "react";
import styles from './LideresEnLatinoamerica.module.scss';

const LideresHIJO = ({ info }) => {



    return(
        <div className={styles.DivRESPONSIVE}>

 


        <div className={styles.divResponsiveFrase}>
             <p>{info.frase}</p>
        </div>


        <div className={styles.DivInfoResponsive}>

                 <img src={info.img} alt="img1"/>
                 
                 <div className={styles.infoContactoResponsive}>
                    <h3>{info.name}</h3>
                    <p>{info.titulo}</p>
                 </div>

        </div>



        {/* <div  className={styles.DivBTNS}>
           <button className={styles.btnIZQ} onClick={() => props.prevPage()}> <i className="ri-arrow-left-line"></i> </button>
           <button className={styles.btnDER}  onClick={() => props.nextPage()}>  <i className="ri-arrow-right-line"></i> </button>
        </div> */}
    </div>
    )
}



export default LideresHIJO