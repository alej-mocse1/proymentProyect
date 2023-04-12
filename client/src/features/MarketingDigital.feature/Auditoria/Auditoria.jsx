import style from "./Auditoria.module.scss";
import image from "./assets/img auditoría performance.png"
import icon from "./assets/float icon search.svg"


export default function Auditoria(){
    return(
        <div className={style.container}>
            <div className={style.containerInfo}>
                <div className={style.containerImg}>
                    <img src={image}  alt="not-image1" className={style.img}/>
                    <img src={icon}  alt="not-image2" className={style.icon} />
                </div>

                <div className={style.infoText}>
                    <span></span>
                    <h3>Auditoria performance</h3>
                    <p>Lideramos, acompañamos y empoderamos al equipo de marketing en recuperar la eficiencia 
                        y lograr un alto rendimiento en sus campañas de publicidad digital de la mano de la 
                        expertise del equipo y automatizaciones adesarrollar.
                    </p>
                    <button>Conocer más</button>
                </div>
            </div>
        </div>
    )
}