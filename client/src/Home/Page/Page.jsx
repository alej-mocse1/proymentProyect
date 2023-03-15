import React from "react";
import Card from "../Card/Card";
import Services from "../Services/Services";
import styles from "./Page.module.css";
import { info } from "../assets/info";
import image from "../assets/graphicdashboard.svg";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container1}>
          <h4 className={styles.h4}>ADN Proyment</h4>
          <p className={styles.text}>
            Alcanzamos de forma correcta la transformación empresarial en base a
            la<br></br>
            innovación y el potenciamiento a escala
          </p>
        </div>
        <div className={styles.cards}>
          {info.map((info) => (
            <Card key={info.id} info={info} />
          ))}
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.container2}>
            <img src={ image} alt ='imagen'className={styles.svg}/>
          
          <div className={styles.content}>
            <p className={styles.contentTitle}>
              Optimizamos empresas con nuestros servicios profesionales a medida
            </p>
            <button className={styles.btn}>Agendar reunión</button>
          </div>
        </div>
      </div>
      <Services></Services>
    </>
  );
}
