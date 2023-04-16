import styles from "./OpinionClientes.module.scss";
import User1Img from "./assets/Avatar Circle 01.png";
import User2Img from "./assets/Avatar Circle 02.png";
import User3Img from "./assets/Avatar Circle 03.png";
import StarsImg from "./assets/icon starts.svg";

/* Carrousel */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "./Carrousel.scss";

export default function OpinionClientes() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentTitle}>
          <h4>Lo que nuestros clientes cuentan sobre nosotros</h4>
          <h6>
            Cada vez más clientes se suman a ver una realidad de su plataforma o
            proyecto antes de ser programado.
          </h6>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.cardBackground1}>
            <div className={styles.card}>
              <img src={StarsImg} alt="Stars"></img>
              <p>
                "Proyment es una de las empresas más rápidas, si no la más
                rápida, con las que he trabajado. En términos de presupuesto, el
                costo fue muy asequible, no mucho más de lo que esperas de un
                profesional independiente típico, pero el nivel de calidad por
                el que estás comprando es definitivamente superior. Me
                encantaría mencionar que originalmente planeamos crear un diseño
                MVP, pero el diseño que obtuvimos es mucho mejor."
              </p>
              <div className={styles.infoClient}>
                <img src={User1Img} alt="UserImg"></img>
                <div className={styles.userText}>
                  <h5>Erick C.</h5>
                  <h6>CTO en Tom Gutié</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardBackground2}>
            <div className={styles.card}>
              <img src={StarsImg} alt="Stars"></img>
              <p>
                "Mi nombre es Brenda y soy el líder de proyecto de ONCE MR., una
                plataforma de comida de chef a delivery. Necesitábamos un diseño
                de algunas pantallas y Proyment hizo un gran trabajo.
                Entendieron completamente lo que estábamos buscando.
                Definitivamente recomendaría Proyment y si necesitamos servicios
                de diseño en el futuro, nos pondremos en contacto con ellos."
              </p>
              <div className={styles.infoClient}>
                <img src={User2Img} alt="UserImg"></img>
                <div className={styles.userText}>
                  <h5>Brenda Luarte</h5>
                  <h6>Project lead en ONCE MR.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardBackground3}>
            <div className={styles.card}>
              <img src={StarsImg} alt="Stars"></img>
              <p>
                "El equipo de Proyment nos ayudó a llegar y servir a nuevos
                clientes en todo el mundo."
              </p>
              <div className={styles.infoClient}>
                <img src={User3Img} alt="UserImg"></img>
                <div className={styles.userText}>
                  <h5>Emiliano Sagi</h5>
                  <h6>Head of product en ABN8 Trading</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------Carrousel--------------- */}
        <div className={styles.carrousel}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            /* centeredSlides={true} */
            pagination={{ el: ".OPpagination", clickable: true }}
            className={styles.data}
            /* breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              380: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              440: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
            }} */
          >
            <SwiperSlide>
              <div className={styles.cardBackground1}>
                <div className={styles.card}>
                  <div className={styles.startstext}>
                    <img src={StarsImg} alt="Stars"></img>
                    <p>
                      "Proyment es una de las empresas más rápidas, si no la más
                      rápida, con las que he trabajado. En términos de
                      presupuesto, el costo fue muy asequible, no mucho más de
                      lo que esperas de un profesional independiente típico,
                      pero el nivel de calidad por el que estás comprando es
                      definitivamente superior. Me encantaría mencionar que
                      originalmente planeamos crear un diseño MVP, pero el
                      diseño que obtuvimos es mucho mejor."
                    </p>
                  </div>
                  <div className={styles.infoClient}>
                    <img src={User1Img} alt="UserImg"></img>
                    <div className={styles.userText}>
                      <h5>Erick C.</h5>
                      <h6>CTO en Tom Gutié</h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.cardBackground2}>
                <div className={styles.card}>
                  <div className={styles.startstext}>
                    <img src={StarsImg} alt="Stars"></img>
                    <p>
                      "Mi nombre es Brenda y soy el líder de proyecto de ONCE
                      MR., una plataforma de comida de chef a delivery.
                      Necesitábamos un diseño de algunas pantallas y Proyment
                      hizo un gran trabajo. Entendieron completamente lo que
                      estábamos buscando. Definitivamente recomendaría Proyment
                      y si necesitamos servicios de diseño en el futuro, nos
                      pondremos en contacto con ellos."
                    </p>
                  </div>
                  <div className={styles.infoClient}>
                    <img src={User2Img} alt="UserImg"></img>
                    <div className={styles.userText}>
                      <h5>Brenda Luarte</h5>
                      <h6>Project lead en ONCE MR.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.cardBackground3}>
                <div className={styles.card}>
                  <div className={styles.startstext}>
                    <img src={StarsImg} alt="Stars"></img>
                    <p>
                      "El equipo de Proyment nos ayudó a llegar y servir a
                      nuevos clientes en todo el mundo."
                    </p>
                  </div>
                  <div className={styles.infoClient}>
                    <img src={User3Img} alt="UserImg"></img>
                    <div className={styles.userText}>
                      <h5>Emiliano Sagi</h5>
                      <h6>Head of product en ABN8 Trading</h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="OPpagination" />
        </div>
      </div>
    </>
  );
}
