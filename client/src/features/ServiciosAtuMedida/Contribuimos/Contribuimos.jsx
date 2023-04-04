import style from "./Contribuimos.module.scss";
import image from "./assets/graphic phone.svg";
import icon1 from "./assets/icon rocket.svg";
import icon3 from "./assets/icon diseno-grafico 1.svg";

export default function Contribuimos() {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.containerOne}>
                    <div className={style.tittle}>
                        <img src={icon1} alt="not" />
                        <h3>Conecta con nosotros, hacemos las cosas simples en entornos complejos.</h3>
                    </div>
                    <div className={style.containerImg}>
                        <img src={image} alt="not" />
                    </div>
                </div>
                <div className={style.containerTwo}>
                    <span>
                        <i class="ri-flashlight-fill"></i>
                        <h5>Proyment en línea</h5>
                    </span>
                    <h3>Contribuímos con empresas con visión global</h3>
                    <p>Hemos contribuido en la solución de proyectos complejos a nivel latam de forma simple, ayudando a más de 100 empresas a mejorar. </p>
                    <img src={icon3} alt="not" />
                </div>
            </div>
        </div>
    )
}