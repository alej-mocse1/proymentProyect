import React from "react";
import img1 from "./Mask group.png";
import img2 from "./Mask group1.png";
import img3 from "./Mask group2.png";
import img4 from "./Mask group3.png";
import img5 from "./Mask group4.png";
import img6 from "./Mask group5.png";
import "./SeguimientoDeDiseño.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss/pagination";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Autoplay, Pagination } from "swiper";

function SeguimientoDeDiseño() {
  return (
    <div className="diseños--container">
      <div className="test-container">
        <h2 className="diseños--container__title">
          Segmentos de diseño en los que nos especializamos
        </h2>
      </div>

      <div className="diseños--container__boxes">
        <div className="diseños--container--box">
          <div className="diseños--imgCont">
            <img src={img1} alt="internet" />
          </div>
          <div className="diseños--container--text">
            <h3>Internet de las Cosas</h3>
            <span>
              Creamos aplicaciones intuitivas para el internet de las cosas.
              Permita una comunicación fluida entre el usuario y el hardware
              para ayudar a las empresas a innovar.
            </span>
          </div>
        </div>
        <div className="diseños--container--box">
          <div className="diseños--imgCont">
            <img src={img2} alt="criptomoneda" />
          </div>
          <div className="diseños--container--text">
            <h3>Criptomoneda</h3>
            <span>
              Tenemos experiencia trabajando con blockchain. Nuestras
              aplicaciones criptográficas son seguras y fáciles de usar, a la
              vez que son completamente funcionales.
            </span>
          </div>
        </div>
        <div className="diseños--container--box">
          <div className="diseños--imgCont">
            <img src={img3} alt="fintech" />
          </div>
          <div className="diseños--container--text">
            <h3>Fintech</h3>
            <span>
              Construimos plataformas que utilizan la tecnología para mejorar o
              automatizar los servicios y procesos financieros. La
              digitalización ha transformado la forma de utilizar nuestro
              dinero.
            </span>
          </div>
        </div>
        <div className="diseños--container--box">
          <div className="diseños--imgCont">
            <img src={img4} alt="foodtech" />
          </div>
          <div className="diseños--container--text">
            <h3>Foodtech</h3>
            <span>
              Incorporamos soluciones de mejores prácticas UI/UX para startups
              relacionadas con alimentos. Ya sean aplicaciones orientadas al
              consumidor o herramientas de nicho orientadas a los negocios, como
              el software de gestión de proveedores.
            </span>
          </div>
        </div>
        <div className="diseños--container--box">
          <div className="diseños--imgCont">
            <img src={img5} alt="medtech" />
          </div>
          <div className="diseños--container--text">
            <h3>Medtech</h3>
            <span>
              Desarrollamos plataformas médicas que conectan a los pacientes con
              los médicos. Nuestras aplicaciones tienen en cuenta las
              características específicas del campo, como los seguros, mientras
              que el diseño limpio y bien pensado infunde la sensación de
              seguridad.
            </span>
          </div>
        </div>
        <div className="diseños--container--box">
          <div className="diseños--imgCont">
            <img src={img6} alt="proptech" />
          </div>
          <div className="diseños--container--text">
            <h3>Proptech</h3>
            <span>
              Contamos con experiencia trabajando en los avances tecnológicos
              del sector inmobiliario así como los cambios y mejoras en este
              entorno que cambia día a día.
            </span>
          </div>
        </div>
      </div>

      <div className="carrousell">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          slidesPerView={1.25}
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
            <div className="diseños--container--box">
              <div className="diseños--imgCont">
                <img src={img1} alt="internet" />
              </div>
              <div className="diseños--container--text">
                <h3>Internet de las Cosas</h3>
                <span>
                  Creamos aplicaciones intuitivas para el internet de las cosas.
                  Permita una comunicación fluida entre el usuario y el hardware
                  para ayudar a las empresas a innovar.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diseños--container--box">
              <div className="diseños--imgCont">
                <img src={img2} alt="criptomoneda" />
              </div>
              <div className="diseños--container--text">
                <h3>Criptomoneda</h3>
                <span>
                  Tenemos experiencia trabajando con blockchain. Nuestras
                  aplicaciones criptográficas son seguras y fáciles de usar, a
                  la vez que son completamente funcionales.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diseños--container--box">
              <div className="diseños--imgCont">
                <img src={img3} alt="fintech" />
              </div>
              <div className="diseños--container--text">
                <h3>Fintech</h3>
                <span>
                  Construimos plataformas que utilizan la tecnología para
                  mejorar o automatizar los servicios y procesos financieros. La
                  digitalización ha transformado la forma de utilizar nuestro
                  dinero.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diseños--container--box">
              <div className="diseños--imgCont">
                <img src={img4} alt="foodtech" />
              </div>
              <div className="diseños--container--text">
                <h3>Foodtech</h3>
                <span>
                  Incorporamos soluciones de mejores prácticas UI/UX para
                  startups relacionadas con alimentos. Ya sean aplicaciones
                  orientadas al consumidor o herramientas de nicho orientadas a
                  los negocios, como el software de gestión de proveedores.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diseños--container--box">
              <div className="diseños--imgCont">
                <img src={img5} alt="medtech" />
              </div>
              <div className="diseños--container--text">
                <h3>Medtech</h3>
                <span>
                  Desarrollamos plataformas médicas que conectan a los pacientes
                  con los médicos. Nuestras aplicaciones tienen en cuenta las
                  características específicas del campo, como los seguros,
                  mientras que el diseño limpio y bien pensado infunde la
                  sensación de seguridad.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diseños--container--box">
              <div className="diseños--imgCont">
                <img src={img6} alt="proptech" />
              </div>
              <div className="diseños--container--text">
                <h3>Proptech</h3>
                <span>
                  Contamos con experiencia trabajando en los avances
                  tecnológicos del sector inmobiliario así como los cambios y
                  mejoras en este entorno que cambia día a día.
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="ADN-pagination" />
      </div>
    </div>
  );
}

export default SeguimientoDeDiseño;
