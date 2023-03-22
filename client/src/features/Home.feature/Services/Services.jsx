import styles from "./Services.module.scss";
import Card from "../../../core/components/Card/Card";
import { infoServicesCards } from "../assets/info";
import { Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "../ADNProyment/Carrousel.scss";
import { useState, useRef } from "react";

export default function Services() {
  const cards = infoServicesCards;
  const [slide_Next, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };
  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slide_Next;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.h4}>Nuestros Servicios</h4>
          <div className={styles.textButtons}>
            <p className={styles.p}>
              Potenciamos y protegemos el valor de sus negocios a través de la
              experiencia e innovación tecnológica para alcanzar resultados
              sostenibles.
            </p>
            <div className={styles.buttons}>
              <button
                className={styles[!isFirst ? "active" : "none"]}
                onClick={() => handlePrev()}
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                className={styles[!isLast ? "active" : "none"]}
                onClick={() => handleNext()}
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.containerCarrousel}>
          <Swiper
            modules={[Pagination]}
            /* slidesPerView={4}
            spaceBetween={30} */
            pagination={{ el: ".services-pagination", clickable: true }}
            className={styles.carrousel}
            ref={SlideRef}
            onSlideChange={onSlideChange}
            breakpoints={{
              320: {
                slidesPerView: 1.25,
                spaceBetween: 30,
              },
              420: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              560: {
                slidesPerView: 2.25,
                spaceBetween: 30,
              },
              760: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              800: {
                slidesPerView: 2.15,
                spaceBetween: 30,
              },
              910: {
                slidesPerView: 2.55,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.75,
                spaceBetween: 30,
              },
              1220: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 10,
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
