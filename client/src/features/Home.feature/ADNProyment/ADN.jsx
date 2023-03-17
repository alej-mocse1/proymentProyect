import { infoADNCards } from "../assets/info";
import Card from "../../../core/components/Card/Card";
import style from "./ADN.module.scss";

export default function ADN() {
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <h2 className={style.h4}>ADN Proyment</h2>
        <span className={style.text}>
          Alcanzamos de forma correcta la transformación empresarial en base a
          la innovación y el potenciamiento a escala
        </span>
      </div>
      <div className={style.cards}>
        {infoADNCards.map((info) => (
          <Card key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
}
