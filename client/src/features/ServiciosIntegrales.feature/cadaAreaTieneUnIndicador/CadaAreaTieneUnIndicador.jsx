import React from "react";
import styles from "./CadaAreaTieneUnIndicador.module.scss";
import "./CadaArea.scss";

/* import { useState } from "react";*/
import 'remixicon/fonts/remixicon.css';
import img from "./assets/img.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";


import CardC from "./Card";

const CadaAreaTieneUnIndicador = () => {

   /* const [Info , setInfo] = useState([
      {
         id:1,
         Title : "Áreas optimizadas",
         descipcion : "Superar las expectativas del cliente en toda su experiencia con la marca y asegura un gran retorno de la inversión.",
         punto1 :"Operaciones",
         punto2 :"Contabilidad",
         punto3 :"Logística",
         punto4 :" Ventas / Comercial",
      },
      {
         id:2,
         Title : "Retorno de la inversión",
         descipcion : "Superar las expectativas del cliente en toda su experiencia con la marca y asegura un gran retorno de la inversión.",
         punto1 :"Marketing",
         punto2 :"Planeamiento",
         punto3 :"Finanzas",
         punto4 :"Recursos humanos",
      }
   ]) */
   const Info =[
      {
         id:1,
         Title : "Áreas optimizadas",
         descipcion : "Superar las expectativas del cliente en toda su experiencia con la marca y asegura un gran retorno de la inversión.",
         punto1 :"Operaciones",
         punto2 :"Contabilidad",
         punto3 :"Logística",
         punto4 :" Ventas / Comercial",
      },
      {
         id:2,
         Title : "Retorno de la inversión",
         descipcion : "Superar las expectativas del cliente en toda su experiencia con la marca y asegura un gran retorno de la inversión.",
         punto1 :"Marketing",
         punto2 :"Planeamiento",
         punto3 :"Finanzas",
         punto4 :"Recursos humanos",
      }
   ]

    return(
        <div className={styles.div}>
           
           <div className={styles.divContenido}>

            <div className={styles.divContenidoTexto}>

                <div className={styles.divfranja}></div>

                <h2 className={styles.h2}>Cada área tiene un indicador de productividad...</h2>

                <div className={styles.cards}>
                 <div  className={styles.card} >
                    <h4>Áreas optimizadas</h4>
                    <p>Superar las expectativas del cliente en toda su experiencia con la marca y asegura un gran retorno de la inversión.</p>
                

                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Operaciones</p>
                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Contabilidad </p>
                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Logística </p>
                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Ventas / Comercial</p>
                 </div>
                 

                 <div  className={styles.card}>
                    <h4>Retorno de la inversión</h4>
                    <p>Superar las expectativas del cliente en toda su experiencia con la marca y asegura un gran retorno de la inversión.</p>

                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Marketing </p>
                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Planeamiento  </p>
                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Finanzas  </p>
                    <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>  Recursos humanos</p>             
                 </div>
                </div>



                <div className={styles.cardsResponsive}>
                <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{
                el: ".CadaArea-pagination",
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
            //   breakpoints={{
            //    320: {
            //       slidesPerView: 10,
            //       spaceBetween: 30,
            //     },
            //     380: {
            //       slidesPerView: 1.2,
            //       spaceBetween: 10,
            //     },
            //     420: {
            //       slidesPerView: 1.3,
            //       spaceBetween: 10,
            //     },
            //     460: {
            //       slidesPerView: 1.4,
            //       spaceBetween: 10,
            //     },
            // }}
            >
              {Info.map((info) => (
                <SwiperSlide key={info.id}>
                  <CardC key={info.id} info={info} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className=" CadaArea-pagination" />

                </div>

            </div>

            <div className={styles.divImg}>
                <img src={img} alt="indicador-proyement" />
             </div>



           </div>
        </div>
    )
}


export default CadaAreaTieneUnIndicador