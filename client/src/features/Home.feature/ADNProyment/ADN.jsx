import { infoADNCards } from "../assets/info";
import Card from "../../../core/components/Card/Card";
import styles from "./ADN.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import './Carrousel.scss'

export default function ADN() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <h4 className={styles.h4}>ADN Proyment</h4>
            <p className={styles.text}>
              Alcanzamos de forma correcta la transformación empresarial en base
              a la<br></br>
              innovación y el potenciamiento a escala
            </p>
          </div>
          <div className={styles.cards}>
            {infoADNCards.map((info) => (
              <Card key={info.id} info={info} />
            ))}
          </div>
          <div className={styles.carrousel}>
            {/* <div className="swiperContainer"> */}
              <Swiper
                modules={[Pagination]}
                //si no gusta slides = 1
               /*  loop={true} */
                /* slidesPerView={1.25} */
                spaceBetween={30}
                pagination={{ el: ".ADN-pagination", clickable: true }}
                className={styles.data}

                breakpoints={{
                  320: {
                    slidesPerView: 1.25,
                    spaceBetween: 30,
                  },
                  380: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  420: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  460: {
                    slidesPerView: 1.2,
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
                    slidesPerView: 2.1,
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
                }}
              >
                {infoADNCards.map((info) => (
                  <SwiperSlide key={info.id}>
                    <Card key={info.id} info={info} />
                  </SwiperSlide>
                ))}
              </Swiper>
            {/* </div> */}
            <div className="ADN-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
