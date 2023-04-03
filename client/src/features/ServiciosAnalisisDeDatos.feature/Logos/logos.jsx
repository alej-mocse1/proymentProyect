import React from "react";
import styles from "./logos.module.scss";

// import img1 from "./assets/tableau.svg";
// import img2 from "./assets/PowerBi.svg";
// import img3 from "./assets/Snowflake.svg";
// import img4 from "./assets/Pentaho.svg";
// import img5 from "./assets/handoop.svg";
// import img6 from "./assets/Datarobot.svg";

// import img7 from "./assets/Kibana.svg";
// import img8 from "./assets/Elastic.svg";
// import img9 from "./assets/Tibc.svg";
// import img10 from "./assets/Python.svg";



import imgPrueba from "./assets/prueba.svg";



const Logos = () => {

    return(
         <div className={styles.div}>
           <h2>Alta experiencia y competencias técnicas con las herramientas más utilizadas del mercado</h2>
      
           <div className={styles.divLogos}>
            <div className={styles.divLogos1}>
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />

            </div>
            <div className={styles.divLogos2}>
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
            </div>

           </div>


           <div className={styles.divLogosResponsive}>

            <div  className={styles.divLogosResponsiveHijo}>
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
            </div>
               

            <div className={styles.divLogosResponsiveHijo}>
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
            </div>
               
            <div className={styles.divLogosResponsiveHijo}>
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
            </div>

            

            <div className={styles.divLogosResponsiveHijo}>
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
                <img src={imgPrueba} alt="" />
            </div>

            <div className={styles.divLogosResponsiveHijo}>
                <img src={imgPrueba} alt="" />
            </div>

           </div>
        </div>
    )
}


export default Logos