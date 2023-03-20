import styles from "./Card.module.scss";

export default function Card({ info }) {
  return (
    <div key={info.id} className={info.ADN ? styles.card : styles.card1}>
      <img src={info.img} alt="Img" />
      <div className={styles.text}>
        <h6>{info.title}</h6>
        <p>{info.description}</p>
        {/*  decidir mostrar o no */}
        {!info.ADN ? <a href="#Ver">Ver más</a> : <></>}
      </div>
    </div>
  );
}
