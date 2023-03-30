import React from "react";
import styles from "./AyudamosAsolucionarProblemas.module.scss"
import img from "./assets/Dashboard.svg";
import iconTineda from "./assets/Icontienda.svg";
import inconPhone from "./assets/Iconphone.svg";
import iconCrecimiento from "./assets/IconCrecimiento.svg";

const AyudamosAsolucionarProblemas = () => {

    return(
        <div className={styles.div}>

            <h2> Ayudamos a solucionar problemas y transformar su empresa </h2>


            <div className={styles.divContenido}>

                <div className={styles.divCard}>

                    <div className={styles.divCard1}>
                         <img src={iconTineda} alt="proyemnt"  className={styles.imgIcon}/> 

                        <div className={styles.divTexto}>
                            <h4>Tu negocio más simple</h4>
                            <p>Conocemos profundamente tu negocio, por eso vamos más allá, no solo resolvemos problemas, nos anticipamos a ellos y potenciamos el alcance de tu empresa con una visión end to end digital.</p>
                        </div>
                    </div >

                    <div className={styles.divCard2}>
                       <img src={inconPhone} alt="proyemnt"  className={styles.imgIcon}/> 
 
                        <div className={styles.divTexto}>
                          <h4 className={styles.h4White}>Tecnología más simple</h4>
                          <p className={styles.pWhite}>Estamos en constante movimiento, tenemos la vista puesta en las tendencias y las nuevas herramientas para ofrecer soluciones digitales a las empresas del futuro.</p>
                        </div>

                    </div>

                    <div className={styles.divCard3}>
                       <img src={iconCrecimiento} alt="proyemnt"  className={styles.imgIcon}/> 
 
                       <div className={styles.divTexto}>
                        <h4>Crecimiento más simple</h4>
                        <p>Un equipo multidisciplinario y talentoso, junto a nuestra visión global nos ha permitido crecer y hacer crecer a nuestros clientes alrededor del mundo en su camino a la transformación digital</p>
                      </div>
                    </div>

                </div>
   
                <div className={styles.divImg}>
                  <img src={img} alt="proyement-Solucion de Problemas" />
               </div>
            </div>


            <button className={styles.btn}>Ver más</button>
        </div>
    )
}

export default AyudamosAsolucionarProblemas
