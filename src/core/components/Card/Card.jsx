import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({ info }) {
  return (
    <div key={info.id} className={info.ADN ? styles.card : styles.card1}>
      <img src={info.img} alt="Img" />
      <div className={styles.text}>
        <h6>{info.title}</h6>
        <p>{info.description}</p>
        {/*  decidir mostrar o no */}
        {!info.ADN ? <Link to={'/'} className={styles.anchor}>Ver más</Link> : <></>}
      </div>
    </div>
  );
}
