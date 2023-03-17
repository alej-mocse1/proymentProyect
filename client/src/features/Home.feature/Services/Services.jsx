import styles from "./Services.module.scss";
import Card from "../../../core/components/Card/Card";
import { infoServicesCards } from "../assets/info";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function Services() {
  //const cards = infoServicesCards;
  const [cards, setCards] = useState(infoServicesCards.slice(0, 4));
  const previous = () => {
    setCards(infoServicesCards.slice(0, 4));
  };

  const next = () => {
    setCards(infoServicesCards.slice(2));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.h4}>Nuestros Servicios</h4>
          <span className={styles.p}>
            Potenciamos y protegemos el valor de sus negocios a través de la
            experiencia e innovación<br></br> tecnológica para alcanzar
            resultados sostenibles.
          </span>
          <div className={styles.buttons}>
            <button onClick={() => previous()}>
              <i className="ri-arrow-left-line"></i>
            </button>
            <button onClick={() => next()}>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
        <div className={styles.containerCards}>
          {cards.map((info) => {
            return <Card key={info.id} info={info}></Card>;
          })}
        </div>
      </div>
    </>
  );
}
