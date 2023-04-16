import style from "./NosDiferencia.module.scss";
import icon1 from "./assets/icon analítica.svg"
import icon2 from "./assets/icon tecnología.svg"
import icon3 from "./assets/icon negocio.svg"


export default function NosDiferencia() {
    return (
        <div className={style.container}>
            <div className={style.containerInfo}>
                <div className={style.containerCards}>
                    <div className={style.card}>
                        <div className={style.containerImg}>
                            <img src={icon1} alt="not-image" />
                        </div>
                        <div className={style.text}>
                            <h4>Analítica</h4>
                            <ul>
                                <li>Expertos en el uso y la interpretación de los datos.</li>
                                <li>Conocimiento avanzado en estadística.</li>
                                <li>Experiencia implementando casos de uso complejos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.containerImg}>
                            <img src={icon2} alt="not-image" />
                        </div>
                        <div className={style.text}>
                            <h4>Tecnología</h4>
                            <ul>
                                <li>Expertos en el uso de las tecnologías analíticas líderes en el mercado.</li>
                                <li>Equipo técnico certificado.</li>
                                <li>Visión de las tendencias tecnológicas.</li>
                            </ul>
                        </div>

                    </div>
                    <div className={style.card}>
                        <div className={style.containerImg}>
                            <img src={icon3} alt="not-image" />
                        </div>
                        <div className={style.text}>
                            <h4>Negocio</h4>
                            <ul>
                                <li>Comprensión de la estrategia y las fuentes de valor de una organización.</li>
                                <li>Identificamos oportunidades de mejora en procesos.</li>
                                <li>Traducimos solicitudes en precisiones técnicas.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={style.infoText}>
                    <span></span>
                    <h3>Lo que nos diferencia</h3>
                    <p>Sobre la base de nuestros tres pilares, construimos modelos estratégicos de datos y
                        análisis que ayudan a las organizaciones a obtener información más profunda sobre
                        cómo convertir sus datos clave en ventaja competitiva.
                    </p>
                    <button>Ver más</button>
                </div>
            </div>
        </div>
    )
}