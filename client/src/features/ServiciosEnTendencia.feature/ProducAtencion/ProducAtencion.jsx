import style from "./ProducAtencion.module.scss"
import { Link } from "react-router-dom"
import img1 from "./assets/img producción.png"
import img2 from "./assets/img atencion de reclamos.png"
import img3 from "./assets/img cro-creamos startup.png"




export default function ProducAtencion() {
    return (
        <div className={style.container}>
            <div className={style.containerInfo}>
                <div className={style.containerCard}>
                    <img src={img1} alt="" />
                    <div className={style.text}>
                        <h4>Producción audiovisual</h4>
                        <p>Transformamos ideas en videos que serán poderosas herramientas de comunicación.</p>
                        <Link>Ver más </Link>
                    </div>
                </div>
                <div className={style.containerCard}>
                    <img src={img2} alt="" />
                    <div className={style.text}>
                        <h4>Atención de reclamos y postventa</h4>
                        <p>Ayudamos a empresas a cerrar el primer ciclo de ventas de forma adecuada para conseguir futuras reórdenes.</p>
                        <Link>Ver más </Link>
                    </div>
                </div>
                <div className={style.containerCard}>
                    <img src={img3} alt="" />
                    <div className={style.text}>
                        <h4>Co-creamos tu startup</h4>
                        <p>Nuestro equipo lo ayuda a construir un MVP para su idea tecnológica innovadora.</p>
                        <Link>Ver más </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}