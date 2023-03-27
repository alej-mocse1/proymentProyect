import React from "react";
import "./MetodologíasDeTrabajo.scss";
import img1 from "./assets/Card Icon.png";
import img2 from "./assets/Card Icon (1).png";
import img3 from "./assets/Card Icon (2).png";
import img4 from "./assets/Card Icon (3).png";
import img5 from "./assets/Card Icon (4).png";
import img6 from "./assets/Card Icon (5).png";
import img7 from "./assets/Card Icon (6).png";
import img8 from "./assets/Card Icon (7).png";
import background from "./assets/Rectangle 4800.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../../../core/components/Button/Button";

function MetodologíasDeTrabajo() {
  return (
    <>
      <div className="met--container">
        <div className="met--title">
          <h1 className="met-firstTitle">
            Trabajamos bajo una metodología adaptativa para potenciar las
            habilidades comerciales
          </h1>
          <span className="met-subtitle">
            A través del diagnóstico preparamos un plan potencial de ventas para
            que luego de la ejecución realizar las evaluaciones y el seguimiento
            correspondiente.
          </span>
        </div>

        <div className="met--content">
          <div className="met---content-firstBox">
            <div className="met--content-text">
              <img src={img1} alt="logo" />
              <h2>Planeamiento comercial estratégico</h2>
              <span>
                Planificar futuros escenarios de ingresos de ventas a partir de
                los distintos canales comerciales.
              </span>
            </div>
            <div className="met--content-img">
              <img src={background} alt="big-logo" />
            </div>
          </div>

          <div className="met---content-boxes">
            <div className="met--content-text">
              <img src={img2} alt="logo" />
              <h2>Rediseño de estructuras comerciales</h2>
              <span>
                Mejorar las funciones, comunicación y responsabilidades del
                equipo comercial.
              </span>
            </div>
          </div>

          <div className="met---content-boxes">
            <div className="met--content-text">
              <img src={img3} alt="logo" />
              <h2>Modelos de prospección, ventas y servicio</h2>
              <span>
                Incrementar la capacidad de detectar la necesidad de los
                clientes.
              </span>
            </div>
          </div>
          <div className="met---content-boxes">
            <div className="met--content-text">
              <img src={img4} alt="logo" />
              <h2>Contraste con la mejora de la experiencia del cliente</h2>
              <span>
                Mejorar la satisfacción del cliente desde la presentación al
                cierre de venta.
              </span>
            </div>
          </div>

          <div className="met---content-boxes">
            <div className="met--content-text">
              <img src={img5} alt="logo" />
              <h2>Transformación cultural y digital</h2>
              <span>
                Mejorar la satisfacción del cliente desde la presentación al
                cierre de venta.
              </span>
            </div>
          </div>

          <div className="met---content-boxes">
            <div className="met--content-text">
              <img src={img6} alt="logo" />
              <h2>Optimización y automatización de procesos</h2>
              <span>
                Optimizar los resultados comerciales automatizando actividades
                repetitivas.
              </span>
            </div>
          </div>

          <div className="met---content-boxes">
            <div className="met--content-text">
              <img src={img7} alt="logo" />
              <h2>Incremento del rendimiento de sellers</h2>
              <span>Mejorar la conversión de ventas de los vendedores.</span>
            </div>
          </div>
          <div className="met---content-boxes">
            <div className="met--content-text">
              <img src={img8} alt="logo" />
              <h2>Optimización de la supervisión comercial</h2>
              <span>
                Identificar la información de valor y toma criterios de decisión
                acertivos.
              </span>
            </div>
          </div>
        </div>

        <div className="carrousell">
          <Swiper
            modules={[Pagination]}
            //si no gusta slides = 1
            /*  loop={true} */
            /* slidesPerView={1.25} */
            spaceBetween={30}
            pagination={{ el: ".ADN-pagination", clickable: true }}
            className="data"
            breakpoints={{
              320: {
                slidesPerView: 1.25,
                spaceBetween: 30,
              },
              380: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              420: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              460: {
                slidesPerView: 1.4,
                spaceBetween: 10,
              },
              560: {
                slidesPerView: 1.65,
                spaceBetween: 10,
              },
              660: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              760: {
                slidesPerView: 2.5,
                spaceBetween: 5,
              },
              800: {
                slidesPerView: 2.15,
                spaceBetween: 20,
              },
              920: {
                slidesPerView: 2.55,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2.65,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 2.9,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img1} alt="logo" />
                  <h2>Planeamiento comercial estratégico</h2>
                  <span>
                    Planificar futuros escenarios de ingresos de ventas a partir
                    de los distintos canales comerciales.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img2} alt="logo" />
                  <h2>Rediseño de estructuras comerciales</h2>
                  <span>
                    Mejorar las funciones, comunicación y responsabilidades del
                    equipo comercial.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img3} alt="logo" />
                  <h2>Modelos de prospección, ventas y servicio</h2>
                  <span>
                    Incrementar la capacidad de detectar la necesidad de los
                    clientes.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img4} alt="logo" />
                  <h2>Contraste con la mejora de la experiencia del cliente</h2>
                  <span>
                    Mejorar la satisfacción del cliente desde la presentación al
                    cierre de venta.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img5} alt="logo" />
                  <h2>Transformación cultural y digital</h2>
                  <span>
                    Mejorar la satisfacción del cliente desde la presentación al
                    cierre de venta.
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img6} alt="logo" />
                  <h2>Optimización y automatización de procesos</h2>
                  <span>
                    Optimizar los resultados comerciales automatizando
                    actividades repetitivas.
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img7} alt="logo" />
                  <h2>Incremento del rendimiento de sellers</h2>
                  <span>
                    Mejorar la conversión de ventas de los vendedores.
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="met---content-boxes">
                <div className="met--content-text">
                  <img src={img8} alt="logo" />
                  <h2>Optimización de la supervisión comercial</h2>
                  <span>
                    Identificar la información de valor y toma criterios de
                    decisión acertivos.
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="ADN-pagination" />
        </div>
        <div className="met--content-button">
          <button>Agendar Reunión</button>
        </div>
      </div>
    </>
  );
}

export default MetodologíasDeTrabajo;
