import style from "./PorqueProyment.module.scss";
import icon1 from "./assets/icon browser.svg";
import icon2 from "./assets/icon digital-marketing.svg";


export default function PorqueProyment() {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.tittle}>
                    <h5>¿Por qué Proyment?</h5>
                    <h3>Somos importantes para las empresas con visión global, estratégica y por que ...</h3>
                </div>
                <span></span>
                <div className={style.containerCards}>
                    <div className={style.card}>
                        <div>
                            <h4>Transformamos un cambio
                                positivo y duradero</h4>
                            <img src={icon1} alt="not" />
                        </div>
                        <p>Nuestro enfoque empresarial es desarrollar estrategias de innovación desde una
                            perspectiva global y alineadas específicamente a la industria a tocar,
                            para hacer que el cambio sea una realidad sostenible en el tiempo.
                        </p>
                    </div>
                    <div className={style.card}>
                        <div>
                            <h4>El cambio comienza con la
                                estrategia 360°</h4>
                            <img src={icon2} alt="not" />
                        </div>
                        <p>
                            Reimagina y restablece las nuevas prioridades estratégicas del negocio que permitirán
                            construir modelos y culturas operativas resilientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}