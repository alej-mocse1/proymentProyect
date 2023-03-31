import icon1 from "./assets/Alik.svg"
import logos from "./assets/logos.png"
import style  from "./CadaVezMas.module.scss"
export default function CadaVezMas(){
    return(
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.infoText}>
                    <h2>Cada vez más empresas usan el servicio de análisis de datos en tiempo real</h2>
                    <p>Unimos la data y el diseño centrado en el usuario para obtener resultados de negocio.</p>
                    <button>Agendar reunión</button>
                </div>
                <div className={style.containerLogos}>
                    <img src={logos} alt="not" />
                </div>
            </div>
        </div>
    )
}