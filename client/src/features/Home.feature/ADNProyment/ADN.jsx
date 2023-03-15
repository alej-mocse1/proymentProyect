import { info } from "../assets/info";
import Card from "../../../core/components/Card/Card";
import style from "./ADN.module.css";

export default function ADN() {
  return (
    <>
      <div className={style.container}>
        <div className={style.container1}>
          <h4 className={style.h4}>ADN Proyment</h4>
          <p className={style.text}>
            Alcanzamos de forma correcta la transformación empresarial en base a
            la<br></br>
            innovación y el potenciamiento a escala
          </p>
        </div>
        <div className={style.cards}>
          {info.map((info) => (
            <Card key={info.id} info={info} />
          ))}
        </div>
      </div>
    </>
  );
}
