import React from "react";
import Styles from "./planUnico.module.scss";
import img from './assets/img.png';
import {Link} from "react-router-dom"


const PlanUnico  = () => {


    return(
        <div className={Styles.div}>
                  
           <div className={Styles.div1}>

            <div className={Styles.divImg}>
                <img src={img} alt="proyment-potenciamiento de ventas" />
            </div>
           
           </div>

           <div className={Styles.div2}>

            <div className={Styles.divTexto}>
                 <h2>Plan único para cada empresa</h2>
                  <p>
                    Personalizamos cada plan de potenciamiento de ventas para cada empresa a
                    través de múltiples canales de formación.
                  </p>
                  <Link to={"/form"} style={{textDecoration:"none", color:"inherit"}}><button>Agendar reunión</button></Link>
            </div>

           </div>
        </div>
    )
}


export default PlanUnico