import styles from "./NuestrasSoluciones.module.scss";
import imgGastos from "./assets/img solución gastos.png";
import imgTesoreria from "./assets/img solución tesorería.png";
import imgRRHH from "./assets/img solución rrhh.png";
import imgFinanzas from "./assets/img solución finanzas.png";
import imgVentas from "./assets/img solución ventas.png";
import imgAreas from "./assets/img solución áreas.png";

/* Carrousel */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "../../Servicios.feature/solucionesEnVenta/Carrousel.scss";

export default function NuestrasSolucionesAreas() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4>Nuestras Soluciones de datos para las áreas</h4>
          <div className={styles.picturecard}>
            <section>
              <div className={styles.img}>
                <img src={imgGastos} alt="Gastos"></img>
              </div>
              <h6>Solución Gastos</h6>
              <p>
                Análisis de la información que genera sus sistemas de gestión.
              </p>
            </section>
            <section>
              <div className={styles.img}>
                <img src={imgTesoreria} alt="Tesoreria"></img>
              </div>
              <h6>Solución Tesorería</h6>
              <p>
                Análisis de relaciones de entidades financieras y del estado
                Cash-flow.
              </p>
            </section>
            <section>
              <div className={styles.img}>
                <img src={imgRRHH} alt="RRHH"></img>
              </div>
              <h6>Solución RRHH</h6>
              <p>Análisis de la planilla, rotación, absentismo y más.</p>
            </section>
            <section>
              <div className={styles.img}>
                <img src={imgFinanzas} alt="Finanzas"></img>
              </div>
              <h6>Solución Finanzas</h6>
              <p>
                Visión táctica y estratégica de los estados financieros de tu
                empresa.
              </p>
            </section>
            <section>
              <div className={styles.img}>
                <img src={imgVentas} alt="Ventas"></img>
              </div>
              <h6>Solución Ventas</h6>
              <p>Análisis estratégico de procesos de venta.</p>
            </section>
            <section>
              <div className={styles.img}>
                <img src={imgAreas} alt="Areas"></img>
              </div>
              <h6>Solución Áreas</h6>
              <p>
                Análisis de las áreas de producción, logística y otros en tiempo
                real.
              </p>
            </section>
          </div>
          {/* ---------------Carrousel--------------- */}
          <div className={styles.carrousel}>
            <div className={styles.move}>
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                /* centeredSlides={true} */
                pagination={{ el: ".Solution-pagination", clickable: true }}
                className={styles.data}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    
                    spaceBetween: 10,
                  },
                  380: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  440: {
                    slidesPerView: 1.3,
                    spaceBetween: 10,
                  },
                  500: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },
                  560: {
                    slidesPerView: 1.6,
                    spaceBetween: 10,
                  },
                  620: {
                    slidesPerView: 1.7,
                    spaceBetween: 10,
                  },
                  680: {
                    slidesPerView: 1.9,
                    spaceBetween: 10,
                  },
                  740: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  800: {
                    slidesPerView: 2.1,
                    spaceBetween: 10,
                  },
                  860: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide>
                  <section>
                    <div className={styles.img}>
                      <img src={imgGastos} alt="Gastos"></img>
                    </div>
                    <h6>Solución Gastos</h6>
                    <p>
                      Análisis de la información que genera sus sistemas de
                      gestión.
                    </p>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section>
                    <div className={styles.img}>
                      <img src={imgTesoreria} alt="Tesoreria"></img>
                    </div>
                    <h6>Solución Tesorería</h6>
                    <p>
                      Análisis de relaciones de entidades financieras y del
                      estado Cash-flow.
                    </p>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section>
                    <div className={styles.img}>
                      <img src={imgRRHH} alt="RRHH"></img>
                    </div>
                    <h6>Solución RRHH</h6>
                    <p>Análisis de la planilla, rotación, absentismo y más.</p>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section>
                    <div className={styles.img}>
                      <img src={imgFinanzas} alt="Finanzas"></img>
                    </div>
                    <h6>Solución Finanzas</h6>
                    <p>
                      Visión táctica y estratégica de los estados financieros de
                      tu empresa.
                    </p>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section>
                    <div className={styles.img}>
                      <img src={imgVentas} alt="Ventas"></img>
                    </div>
                    <h6>Solución Ventas</h6>
                    <p>Análisis estratégico de procesos de venta.</p>
                  </section>
                </SwiperSlide>
                <SwiperSlide>
                  <section>
                    <div className={styles.img}>
                      <img src={imgAreas} alt="Areas"></img>
                    </div>
                    <h6>Solución Áreas</h6>
                    <p>
                      Análisis de las áreas de producción, logística y otros en
                      tiempo real.
                    </p>
                  </section>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="Solution-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
