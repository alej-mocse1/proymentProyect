import { infoADNCards } from "../assets/info";
import Card from "../../../core/components/Card/Card";
import styles from "./ADN.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

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
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{clickable:true}}
              className={styles.data}
            >
              {infoADNCards.map((info) => (
                <SwiperSlide key={info.id}>
                <Card key={info.id} info={info} />
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
