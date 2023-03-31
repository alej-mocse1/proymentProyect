import style from "./NuestrosPlanes.module.scss"
import image from "./assets/img 02.png"


export default function NuestrosPlanes() {
    return (
        <div className={style.container}>
            <div className={style.containerInfo}>
                <h3>Nuestros Planes</h3>
                <div className={style.info}>
                    <div className={style.containerCard}>
                        <h4>STARTER</h4>
                        <h3>Depende de los requerimientos</h3>
                        <h5>Facturado por proyecto o solución de la problemática.</h5>
                        <div className={style.card}>
                            <span>
                                <i class="ri-checkbox-circle-fill"></i>
                                <p>Conocimiento de la demanda en tiempo
                                    real y segmentada de sus clientes.</p>
                            </span>
                            <span>
                                <i class="ri-checkbox-circle-fill"></i>
                                <p>Mejora en la eficiencia y optimización de costes.</p>
                            </span>
                            <span>
                                <i class="ri-checkbox-circle-fill"></i>
                                <p>Mejora de la toma de decisiones para adelantarse
                                    a los acontecimientos.</p>
                            </span>
                            <span>
                                <i class="ri-checkbox-circle-fill"></i>
                                <p>Mejora de la accesibilidad de la información
                                    dentro de la empresa.</p>
                            </span>
                            <span>
                                <i class="ri-checkbox-circle-fill"></i>
                                <p>Seguridad en los datos en todas las
                                    fases del proyecto.</p>
                            </span>
                        </div>
                        <p>
                            Proyment cuenta con diversos planes donde nos adaptamos a los requerimientos de las empresas.
                        </p>
                        <button>Agendar reunión</button>
                    </div>
                    <div className={style.containerImg}>
                        <img src={image} alt="not" />
                    </div>
                </div>
            </div>
        </div>
    )
}