import React from "react";
import Styles from "./logo.module.scss";

import img1 from "./assets/logoadecor.svg";
import img2 from "./assets/logopgi.svg";
import img3 from "./assets/logoestacio.svg";
import img4 from "./assets/logotredici.svg";
import img5 from "./assets/logobakar.svg";
import img6 from "./assets/logoabn8.svg";

const Logos  = () => {


    return(
        <div className={Styles.div}>
           

        <div className={Styles.divh2}>
             <h2>Cada vez más empresas usan el servicio
              de Proyment para potenciar sus ventas</h2>
        </div>

        <div  className={Styles.divLogos}>
          <img src={img1} alt="adecor" />
          <img src={img2} alt="pgi" />
          <img src={img3} alt="estacio" />
          <img src={img4} alt="tredici" />
          <img src={img5} alt="bakar" />
          <img src={img6} alt="abn8" />
    
        </div>
           
        </div>
    )
}


export default Logos