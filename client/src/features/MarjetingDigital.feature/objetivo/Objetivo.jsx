import React from "react";
import Styles from "./Objetivo.module.scss"
import img1 from "./assets/RDStation.svg";
import img2 from "./assets/Hootsuite.svg";
import img3 from "./assets/Ortto.svg";
import img4 from "./assets/Synerise.svg";


import img5 from "./assets/Googleanalytics.svg";
import img6 from "./assets/Semrush.svg";
import img7 from "./assets/Hubspot.svg";
import img8 from "./assets/Emarys.svg";




const Objetivos = () => {

    return(
        <div className={Styles.DIV}>

            <div className={Styles.divHijo}>
               
               <p>
               Nuestro objetivo fue brindar servicios acompañados de un asesoramiento integral en el cual analizamos a profundidad las necesidades y entornos de cada empresa.
               </p>


               <div className={Styles.divFRANJA}></div>


               <div className={Styles.divImg}>
                
                 <div className={Styles.divImg1}>
                  <img src={img1} alt="RDStation" /> 
                  <img src={img2} alt="Hootsuite" /> 
                  <img src={img3} alt="Ortto" /> 
                  <img src={img4} alt="Synerise" /> 
                 </div>
                 
                 <div className={Styles.divImg2}>
                  <img src={img5} alt="Googleanalytics" /> 
                  <img src={img6} alt="Semrush" /> 
                  <img src={img7} alt="Hubspot" /> 
                  <img src={img8} alt="Emaryss" /> 
                 </div>

               </div> 



               <div className={Styles.divImgResponsive}>
                
                <div className={Styles.divImg1}>
                 <img src={img1} alt="RDStation" /> 
                 <img src={img2} alt="Hootsuite" /> 
                 <img src={img3} alt="Ortto" /> 
                 <img src={img4} alt="Synerise" /> 
                </div>
                
                <div className={Styles.divImg2}>
                 <img src={img5} alt="Googleanalytics" /> 
                 <img src={img6} alt="Semrush" /> 
                 <img src={img7} alt="Hubspot" /> 
                 <img src={img8} alt="Emaryss" /> 
                </div>

              </div> 
            </div>

        </div>
    )

}

export default Objetivos