import React from "react";
import styles from "./logos.module.scss";



import img1 from "./assets/tableau.svg";
import img2 from "./assets/PowerBi.svg";
import img3 from "./assets/Snowflake.svg";
import img4 from "./assets/pentaho.svg";
import img5 from "./assets/hadoop.svg";
import img6 from "./assets/datarobot.svg";


import img7 from "./assets/kibana.svg";
import img8 from "./assets/elastic.svg";
import img9 from "./assets/tibco.svg";
import img10 from "./assets/Python.svg";
import img11 from "./assets/qliko.svg";
import img12 from "./assets/oracle.svg";




const Logos = () => {

    return(
         <div className={styles.div}>
           <h2>Alta experiencia y competencias técnicas con las herramientas más utilizadas del mercado</h2>
      
           <div className={styles.divLogos}>
            <div className={styles.divLogos1}>
                <img src={img1} alt="tableau" />
                <img src={img2} alt="PowerBi" />
                <img src={img3} alt="Snowflake" />
                <img src={img4} alt="pentaho" />
                <img src={img5} alt="hadoop" />
                <img src={img6} alt="datarobot" />

            </div>
            <div className={styles.divLogos2}>
                <img src={img7} alt="kibana" />
                <img src={img8} alt="elastic" />
                <img src={img9} alt="tibco" />
                <img src={img10} alt="Python" />
                <img src={img11} alt="qliko" />
                <img src={img12} alt="oracle" />
            </div>

           </div>


           <div className={styles.divLogosResponsive}>

            <div  className={styles.divLogosResponsiveHijo}>
               <img src={img3} alt="Snowflake" />
               <img src={img4} alt="pentaho" />
               <img src={img2} alt="PowerBi" />
            </div>
               

            <div className={styles.divLogosResponsiveHijo}>
                <img src={img1} alt="tableau" />
                <img src={img5} alt="hadoop" />
                <img src={img6} alt="datarobot" />
            </div>
               
            <div className={styles.divLogosResponsiveHijo}>
               <img src={img7} alt="kibana" />
               <img src={img8} alt="elastic" />
               <img src={img10} alt="Python" />
            </div>

            

            <div className={styles.divLogosResponsiveHijo}>
               <img src={img11} alt="qliko" />
               <img src={img12} alt="oracle" />
               <img src={img12} alt="oracle" />
            </div>

            <div className={styles.divLogosResponsiveHijo}>
            <img src={img9} alt="tibco" />
            </div>

           </div>
        </div>
    )
}


export default Logos