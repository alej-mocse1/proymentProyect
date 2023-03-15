import styles from "./ADN.module.css";
import  {infoADNCards}  from "../../assets/info";
import Card from "../../Card/Card";

export default function ADN() {
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
          {infoADNCards.map((info) => (
            <Card key={info.id} info={info} />
          ))}
        </div>
      </div>
    </>
  );
}
