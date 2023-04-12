import React from "react";
import styles from "./LasEmpresasConfianEnNosotros.module.scss";
import "./lasEmpresas.scss";
import LasEmpresasHijo from "./LasEmpresasHijo";


import img1 from "./assets/search.svg";
import img2 from "./assets/soluciones.svg";
import img3 from "./assets/estadísticas.svg";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

const LasEmpresasConfianEnNosotros = () => {


  const state=[
    {
        id:1,
        img:img1,
        name:"Cuéntanos la problemática",
        texto:"Nos cuentas tu problema o idea a solucionar para lograr comprender el entorno actual."
    },
    {
        id:2,
        img:img2,
        name:"Te brindamos las soluciones",
        texto:"A través de la experiencia de nuestros especialistas, te brindaremos la solución más oportuna para tu empresa."
    },
    {
        id:3,
        img:img3,
        name:"Comencemos",
        texto:"Si estás de acuerdo con nuestra propuesta, comenzaremos a trabajar de forma ágil."
    },

  ]

    return(
        <div className={styles.div}>
           <div className={styles.divblanco}></div>
           
           <div className={styles.divConteiner}>
                <div className={styles.divConteiner1}>    
                   
                   <h2>Las empresas confían en nosotros</h2>

                   <div>
                    <p>Porque más allá de resultados, significamos un ahorro para las empresas. </p>
                    <p>Crecemos contigo a través de nuestros servicios profesionales.</p>
                   </div>


                 </div>

                 <div className={styles.divConteiner2}> 

                    <div>
                        <img src={img1} alt="proyment-seacrh" />

                        <h4>Cuéntanos la problemática</h4>

                        <p>Nos cuentas tu problema o idea a solucionar para lograr comprender el entorno actual.</p>  
                    </div> 

                    <div>
                         <img src={img2} alt="proyment-soluciones" />

                         <h4>Te brindamos las soluciones</h4>

                         <p>A través de la experiencia de nuestros especialistas, te brindaremos la solución más oportuna para tu empresa.</p>  
                    </div> 

                    <div>
                         <img src={img3} alt="proyment-estadisticas" />

                         <h4>Comencemos</h4>

                         <p>Si estás de acuerdo con nuestra propuesta, comenzaremos a trabajar de forma ágil.</p>  
                    </div> 
                 </div>

                 <div className={styles.divConteiner3}>    
                      <p>Hacemos que las soluciones sean simples y que los resultados se maximicen. Trabajamos de forma ágil, lo que nos permite realizar cambios o mejoras en corto plazo.</p>


                      <button>Agendar reunión</button>
                 </div>
           </div>
           
           <div className={styles.divNegro}></div>



           <div className={styles.divResponsive}>


              <h3>Las empresas confían en nosotros</h3>

              <p>Porque más allá de resultados, significamos un ahorro para las empresas.</p>

              <p>Crecemos contigo a través de nuestros servicios profesionales.</p> 
          
 

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
                <LasEmpresasHijo key={info.id} info={info} />
              </SwiperSlide>
              ))}
            </Swiper>
            <div className=" lideres-pagination" />



            <p className={styles.pInferior}>Hacemos que las soluciones sean simples y que los resultados se maximicen. Trabajamos de forma ágil, lo que nos permite realizar cambios o mejoras en corto plazo.</p>


            <button className={styles.btnResponsive}>Agendar reunión</button>
           </div>

           
        </div>
    )
}


export default LasEmpresasConfianEnNosotros