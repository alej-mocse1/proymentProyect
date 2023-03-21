import styles from "./Services.module.scss";
import Card from "../../../core/components/Card/Card";
import { infoServicesCards } from "../assets/info";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "../ADNProyment/Carrousel.scss";

export default function Services() {
  const cards = infoServicesCards;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.h4}>Nuestros Servicios</h4>
          <div className={styles.textButtons}>
            <p className={styles.p}>
              Potenciamos y protegemos el valor de sus negocios a través de la
              experiencia e innovación tecnológica para alcanzar
              resultados sostenibles.
            </p>
            <div className={styles.buttons}>
              <button onClick={() => console.log("previous")}>
                <i className="ri-arrow-left-line"></i>
              </button>
              <button onClick={() => console.log("next")}>
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.containerCarrousel}>
          <Swiper
            modules={[Pagination, FreeMode]}
            /* slidesPerView={4}
            spaceBetween={30} */
            pagination={{ el: ".services-pagination", clickable: true }}
            className={styles.carrousel}
            breakpoints={{
              680: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1024:{
                slidesPerView:3,
                spaceBetween:25,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {cards.map((info) => (
              <SwiperSlide key={info.id}>
                <Card key={info.id} info={info}></Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="services-pagination" />
        </div>
      </div>
    </>
  );
}
