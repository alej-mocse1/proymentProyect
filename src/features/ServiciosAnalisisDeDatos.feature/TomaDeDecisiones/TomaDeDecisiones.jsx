import style from "./TomaDeDecisiones.module.scss";
import image from "./assets/img 01.png"
import icon1 from "./assets/icon datos.svg"
import icon2 from "./assets/graphic análisis.svg"


export default function TomaDeDecisiones(){
    return(
        <div className={style.container}>
            <div className={style.containerInfo}>
                <div className={style.containerImg}>
                    <img src={image}  alt="not-image1" className={style.img}/>
                    <img src={icon1}  alt="not-image2" className={style.icon1} />
                    <img src={icon2}  alt="not-image3" className={style.icon2} />
                </div>

                <div className={style.infoText}>
                    <h3>Toma decisiones acertadas en base al análisis de datos</h3>
                    <p>Así tu empresa procesa 100 datos o 1000 datos por hora, 
                        permite reconocer que oportunidades son las más adecuadas en 
                        las que invertir recursos y en cuáles dejar de invertir.
                    </p>
                    <button>Ver más</button>
                </div>
            </div>
        </div>
    )
}