import React from "react";
import "./NuestrosPlanes.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function NuestrosPlanes() {
  return (
    <div className="nuestrosPlanes--container">
      <div className="nuestrosPlanes--firstTitle">
        <h2 className="nuestrosPlanes--title">Nuestros Planes</h2>
      </div>

      <div className="nuestrosPlanes--container__box">
        <div className="nuestrosPlanes__boxes">
          <h3 className="nuestrosPlanes--subtitle">Starter</h3>

          <h4 className="nuestrosPlanes--dependencia">
            DEPENDE DE LA COMPLEJIDAD DEL PROYECTO
          </h4>

          <span className="nuestrosPlanes--description">
            Facturado mensual, planes trimestrales o por proyecto.
          </span>

          <span className="nuestrosPlanes--text-title">
            Producción audiovisual
          </span>
        </div>

        <div className="nuestrosPlanes__boxes">
          <h3 className="nuestrosPlanes--subtitle">Starter</h3>

          <h4 className="nuestrosPlanes--dependencia">
            DEPENDE DE LA COMPLEJIDAD DEL PROYECTO
          </h4>

          <span className="nuestrosPlanes--description">
            Facturado mensual, planes trimestrales.
          </span>

          <span className="nuestrosPlanes--text-title">
            Atención de reclamos y post venta
          </span>
        </div>

        <div className="nuestrosPlanes__boxes">
          <h3 className="nuestrosPlanes--subtitle">Starter</h3>

          <h4 className="nuestrosPlanes--dependencia">
            DEPENDE DE LA COMPLEJIDAD DEL PROYECTO
          </h4>

          <span className="nuestrosPlanes--description">
            Facturado mensual, planes trimestrales o por proyecto.
          </span>

          <span className="nuestrosPlanes--text-title">Co-creamos tu MVP</span>
        </div>
      </div>

      <div className="anotherMore--carrousell">
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
            <div className="nuestrosPlanes__boxes">
              <h3 className="nuestrosPlanes--subtitle">Starter</h3>

              <h4 className="nuestrosPlanes--dependencia">
                DEPENDE DE LA COMPLEJIDAD DEL PROYECTO
              </h4>

              <span className="nuestrosPlanes--description">
                Facturado mensual, planes trimestrales o por proyecto.
              </span>

              <span className="nuestrosPlanes--text-title">
                Producción audiovisual
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="nuestrosPlanes__boxes">
              <h3 className="nuestrosPlanes--subtitle">Starter</h3>

              <h4 className="nuestrosPlanes--dependencia">
                DEPENDE DE LA COMPLEJIDAD DEL PROYECTO
              </h4>

              <span className="nuestrosPlanes--description">
                Facturado mensual, planes trimestrales.
              </span>

              <span className="nuestrosPlanes--text-title">
                Atención de reclamos y post venta
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="nuestrosPlanes__boxes">
              <h3 className="nuestrosPlanes--subtitle">Starter</h3>

              <h4 className="nuestrosPlanes--dependencia">
                DEPENDE DE LA COMPLEJIDAD DEL PROYECTO
              </h4>

              <span className="nuestrosPlanes--description">
                Facturado mensual, planes trimestrales o por proyecto.
              </span>

              <span className="nuestrosPlanes--text-title">
                Co-creamos tu MVP
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
          <div className="ADN-pagination" />
      </div>

      <div className="nuestrosPlanes--container--text">
        <span className="nuestrosPlanes--finalTxt">
          Proyment cuenta con diversos planes donde nos adaptamos a los
          requerimientos de las empresas
        </span>

        <div className="nuestrosPlanes--button">
          <button>Agendar reunión</button>
        </div>
      </div>
    </div>
  );
}

export default NuestrosPlanes;
