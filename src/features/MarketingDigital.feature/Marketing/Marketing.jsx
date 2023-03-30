import style from "./Marketing.module.scss";
import image from "./assets/img marketing.png";
import icon from "./assets/icon ideas.svg";

export default function Marketing() {
    return (
        <div className={style.container}>
            <div className={style.containerInfo}>
                <div className={style.infoText}>
                    <span></span>
                    <h3>Marketing de Contenidos</h3>
                    <p>Trabajamos de la mano de la definición de objetivos, análisis de los canales de publicación 
                        y elaboración del contenido.
                        <br></br>
                        <br></br>
                        Nuestra finalidad es generar contenido original, de calidad y de alto valor para posteriormente 
                        viralizarlo y controlar la evolución, logrando una marca competitiva y consiguiendo un óptimo 
                        posicionamiento en el canal online.
                    </p>
                    <button>Conocer más</button>
                </div>
                <div className={style.containerImg}>
                    <img src={image}  alt="not" className={style.img} />
                    <img src={icon} alt="not" className={style.icon} />
                </div>
            </div>
        </div>
    )
}