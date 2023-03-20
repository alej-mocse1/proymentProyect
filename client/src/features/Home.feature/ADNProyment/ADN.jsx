import { infoADNCards } from "../assets/info";
import Card from "../../../core/components/Card/Card";
import styles from "./ADN.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
            <Carousel
              centerSlidePercentage={100}
              centerMode={true}
              width={270}
              showStatus={false}
              showArrows={false}
              infiniteLoop={true}
              renderIndicator={false}
              showThumbs={false}
              autoPlay={true}
              /* dynamicHeight={true} */
            >
              {infoADNCards.map((info) => (
                <Card key={info.id} info={info} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
