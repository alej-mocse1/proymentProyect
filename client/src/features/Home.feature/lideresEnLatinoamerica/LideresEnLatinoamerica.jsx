import React from "react";
import styles from './LideresEnLatinoamerica.module.css';
import img1 from './assets/AvatarCircle01.png'
import img2 from './assets/AvatarCircle02.png'
import img3 from './assets/AvatarCircle03.png'



const LideresEnLatinoamerica = () => {



    return(
        <div className={styles.div}>
            <h2>líderes  en latinoamerica nos recomiendan</h2>

            <div className={styles.divCards}>


                <div className={styles.divChildren1}>

                    <h2>
                        Proyment fue ágil desde el primer contacto, valoro la simplicidad y la rapides
                        para solucionar problemas especificos
                    </h2>

                    <div className={styles.infoPersona}>
                       <img src={img3} alt="img1"/>

                       
                       <div className={styles.divTEXTiNFO}>
                            <h3>Leandro rocha</h3>
                            <p>Project Manager en SP</p>
                         </div>


                    </div>
                </div>



                <div className={styles.divChildren2}>
                  

                   <h2 >
                       Nuestra experiencia con Proyment fue excelente, pudieron brindranos un conjunto de planes orientado 
                       a nuestras necesidades. luego de dos meses de arduo trabajo, pudimos cumplir con los objetivos
                       empresariales . 
                    </h2>

                    <div className={styles.infoPersona}>
                       <img src={img2} alt="img1"/>

                       
                       <div className={styles.divTEXTiNFO}>
                            <h3>Jonh Montoro</h3>
                            <p>Gerente de Operaciones en Tom Gutie Company </p>
                         </div>


                    </div>


                </div>



                <div className={styles.divChildren1}>

                    <h2>
                         Tivemos que realizar un importante lançamento de marca no Brasil e a Proyment 
                         contribuiu em grande parte para os ótimos que tivemos  
                    </h2>

                 
                    
                      <div className={styles.infoPersona}>
                         <img src={img1} alt="img1"/>
                         
                         <div className={styles.divTEXTiNFO}>
                            <h3>Matt Cannon</h3>
                            <p>Marketing director at ABN8 Trading </p>
                         </div>

                       </div>

                   


                </div>


            </div>



            <div className={styles.DivRESPONSIVE}>

                <div className={styles.divResponsiveFrase}>
                     <p>
                       Nuestra experiencia con Proyment fue excelente, pudieron brindranos un conjunto de planes orientado 
                       a nuestras necesidades. luego de dos meses de arduo trabajo, pudimos cumplir con los objetivos
                       empresariales . 
                     </p>
                </div>


                <div className={styles.DivInfoResponsive}>

                         <img src={img1} alt="img1"/>
                         
                         <div className={styles.infoContactoResponsive}>
                            <h3>Matt Cannon</h3>
                            <p>Marketing director at ABN8 Trading </p>
                         </div>

                </div>

               
            </div>
        </div>
    )

}


export default LideresEnLatinoamerica