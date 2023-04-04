import React from "react";
import "./NuestrosServicios.scss";
import img1 from "./Image Mask Wrapper.png";
import img2 from "./03.png";
import img3 from "./01.png";
import img4 from "./02.png";
import img5 from "./04.png";
import img6 from "./05.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function NuestrosServicios() {
  return (
    <div className="services--container">
      <h2 className="services--title">Nuestros servicios</h2>
      <div className="service--container__boxes">
        <div className="service--box">
          <div className="container-img">
            <img src={img1} alt="potenciamiento" />
          </div>
          <div className="ncontainer--text">
            <h3>Servicio de potenciamiento de ventas</h3>
            <span>
              Solucionamos el problema de la baja conversión de ventas por parte
              de la fuerza comercial.
            </span>
          </div>
        </div>
        <div className="service--box">
          <div className="container-img">
            <img src={img2} alt="integrales" />
          </div>
          <div className="ncontainer--text">
            <h3>Servicios integrales</h3>
            <span>
              Solucionamos el problema de la baja productividad de las empresas
              a través de la tecnología y/o transformación digital.
            </span>
          </div>
        </div>
        <div className="service--box">
          <div className="container-img">
            <img src={img3} alt="marketing" />
          </div>
          <div className="ncontainer--text">
            <h3>Servicios de marketing</h3>
            <span>
              Solucionamos el problema de falta de clientes potenciales a través
              de la terciariazación de tu área de marketing o una especialidad
              de ella.
            </span>
          </div>
        </div>
        <div className="service--box">
          <div className="container-img">
            <img src={img4} alt="diseño" />
          </div>
          <div className="ncontainer--text">
            <h3>Servicio de diseño UI / UX</h3>
            <span>
              Solucionamos el problema de tener interfaces poco atractivas de
              manera generando que clientes no vuelvan.
            </span>
          </div>
        </div>
        <div className="service--box">
          <div className="container-img">
            <img src={img5} alt="analisis" />
          </div>
          <div className="ncontainer--text">
            <h3>Servicio de análisis de datos</h3>
            <span>
              Solucionamos el problema de tener grandes cantidades de datos y no
              poder procesarlos en tiempo real para las mejores tomar
              decisiones.
            </span>
          </div>
        </div>
        <div className="service--box">
          <div className="container-img">
            <img src={img6} alt="tendencia" />
          </div>
          <div className="ncontainer--text">
            <h3>Servicios en tendencia</h3>
            <span>
              El servicio de creación de contenido audiovisual de calidad;
              mejora de indicadores del área de reclamos y/o quejas; creación de
              empresas emergentes y su mínimo producto viable.
            </span>
          </div>
        </div>
      </div>

      <div className="carrousell-nuestrosServicios">
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
              spaceBetween: -5,
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
            <div className="service--box">
              <div className="container-img">
                <img src={img1} alt="potenciamiento" />
              </div>
              <div className="ncontainer--text">
                <h3>Servicio de potenciamiento de ventas</h3>
                <span>
                  Solucionamos el problema de la baja conversión de ventas por
                  parte de la fuerza comercial.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service--box">
              <div className="container-img">
                <img src={img2} alt="integrales" />
              </div>
              <div className="ncontainer--text">
                <h3>Servicios integrales</h3>
                <span>
                  Solucionamos el problema de la baja productividad de las
                  empresas a través de la tecnología y/o transformación digital.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service--box">
              <div className="container-img">
                <img src={img3} alt="marketing" />
              </div>
              <div className="ncontainer--text">
                <h3>Servicios de marketing</h3>
                <span>
                  Solucionamos el problema de falta de clientes potenciales a
                  través de la terciariazación de tu área de marketing o una
                  especialidad de ella.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service--box">
              <div className="container-img">
                <img src={img4} alt="diseño" />
              </div>
              <div className="ncontainer--text">
                <h3>Servicio de diseño UI / UX</h3>
                <span>
                  Solucionamos el problema de tener interfaces poco atractivas
                  de manera generando que clientes no vuelvan.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service--box">
              <div className="container-img">
                <img src={img5} alt="analisis" />
              </div>
              <div className="ncontainer--text">
                <h3>Servicio de análisis de datos</h3>
                <span>
                  Solucionamos el problema de tener grandes cantidades de datos
                  y no poder procesarlos en tiempo real para las mejores tomar
                  decisiones.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service--box">
              <div className="container-img">
                <img src={img6} alt="tendencia" />
              </div>
              <div className="ncontainer--text">
                <h3>Servicios en tendencia</h3>
                <span>
                  El servicio de creación de contenido audiovisual de calidad;
                  mejora de indicadores del área de reclamos y/o quejas;
                  creación de empresas emergentes y su mínimo producto viable.
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="ADN-pagination" />
      </div>
      <div className="nuestrosServicios--button">
        <button>Agendar reunión</button>
      </div>
    </div>
  );
}

export default NuestrosServicios;
