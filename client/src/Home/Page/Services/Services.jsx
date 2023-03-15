import styles from "./Services.module.css";
import Card from "./Card/Card";
import { infoServicesCards } from "../../assets/info";
export default function Services() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.h4}>Nuestros Servicios</h4>
          <p className={styles.p}>
            Potenciamos y protegemos el valor de sus negocios a través de la
            experiencia e innovación<br></br> tecnológica para alcanzar
            resultados sostenibles.
          </p>
          <div className={styles.buttons}>
            <button>⬅</button>
            <button>➡</button>
          </div>
        </div>
        <div className={styles.containerCards}>
          {infoServicesCards.map((info) => (
            <Card key={info.id} info={info}></Card>
          ))}
        </div>
      </div>
    </>
  );
}
