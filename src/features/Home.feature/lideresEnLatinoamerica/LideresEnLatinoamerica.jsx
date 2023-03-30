import React from "react";
import { useState } from "react";
import styles from './LideresEnLatinoamerica.module.scss';
import "./Lideres.scss"

import img1 from './assets/AvatarCircle01.png';
import img2 from './assets/AvatarCircle02.png';
import img3 from './assets/AvatarCircle03.png';
import grafico from './assets/grafico.svg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";



import LideresHIJO from "./lideresHijo";




const LideresEnLatinoamerica = () => {


    const [state, setState] = useState([
        { 
             id: 1,
           img:img1,
           name:"Leandro rocha",
           titulo:"Project Manager en SP",
           frase:" Proyment fue ágil desde el primer contacto, valoro la simplicidad y la rapides para solucionar problemas especificos"
       
        },
        {
            id: 2,
            img:img2,
            name:"Jonh Montoro",
            titulo:"Gerente de Operaciones en Tom Gutie Company ",
            frase:" Nuestra experiencia con Proyment fue excelente, pudieron brindranos un conjunto de planes orientado a nuestras necesidades. luego de dos meses de arduo trabajo, pudimos cumplir con los objetivos empresariales . "
        },
        {
            id: 3,
            img:img3,
            name:"Matt Cannon",
            titulo:"Marketing director at ABN8 Trading ",
            frase:" Tivemos que realizar un importante lançamento de marca no Brasil e a Proyment contribuiu em grande parte para os ótimos que tivemos "

        }
    ])




    return(
        <div className={styles.div}>
          <section id="seccion2"></section>
            <div>
               <h2 className={styles.H2}>Líderes  en Latinoamerica nos recomiendan</h2>
            </div>
           
           
            <div className={styles.divCards}>
            <img src={grafico} alt="grafico1"  className={styles.grafico}/>
            <img src={grafico} alt="grafico2" className={styles.grafico2}/>
           


                <div className={styles.divChildren1}>

                    <h2>
                        Proyment fue ágil desde el primer contacto, valoro la simplicidad y la rapidez
                        para solucionar problemas especificos.
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
                       <img src={img2} alt="img2"/>

                       
                       <div className={styles.divTEXTiNFO}>
                            <h3>Jonh Montoro</h3>
                            <p>Gerente de Operaciones en Tom Gutie Company </p>
                         </div>


                    </div>


                </div>



                <div className={styles.divChildren1}>

                    <h2>
                         Tivemos que realizar un importante lançamento de marca no Brasil e a Proyment 
                         contribuiu em grande parte para os ótimos que tivemos.
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

       

            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                el: ".lideres-pagination",
                clickable:true,
                }}
                loop={true}
                autoplay={{ delay:3000, 
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false
                    /* waitForTransition:true,  */
                    /* pauseOnMouseEnter:true */ 
                }}
              className={styles.data}
            >
              {state.map((info) => (
                <SwiperSlide key={info.id}>
                <LideresHIJO key={info.id} info={info} />
              </SwiperSlide>
              ))}
            </Swiper>
            <div className=" lideres-pagination" />
        
        


        </div>
    )

}


export default LideresEnLatinoamerica