import React from "react";
import styles from "./PlanesAccecibles.module.scss";
import img from "./assets/img.png";
import imgSlice from "./assets/Mobile.svg";
import imgSlice2 from "./assets/grafico.svg";



const PlanesAccecibles = () => {

    return(
        <div className={styles.div}>

            <div className={styles.div1}>

              <div className={styles.divTexto}>
               <h2> Planes accesibles para soluciones en ventas</h2>
               <p>Y lo mejor de todo, es que nos adaptamos a tus necesidades. Proyment se enfoca en desarrollar las habilidades comerciales en el área comercial.</p>
                <button>Agendar reunión</button>
              </div>

            </div>

            <div className={styles.div2}>

              <div className={styles.divImg}>
                  <img src={img} alt="img/potenciamiento" className={styles.imgPrincipal} />
                  <img src={imgSlice} alt="img/potenciamiento2"  className={styles.imgSlice}/>
                  <img src={imgSlice2} alt="img/potenciamiento3"  className={styles.imgSlice2}/>           
              </div>


            </div>

        </div>
    )
}

export default PlanesAccecibles

