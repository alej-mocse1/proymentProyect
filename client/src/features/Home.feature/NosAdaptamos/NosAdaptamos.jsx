import style from "./NosAdaptamos.module.css"
import img from "./assets/img cierre.png"
import pattern from "../Transformation/assets/Pattern graphic.svg"


export default function NosAdaptamos (){
    return(
        <div className={style.container}>
            <div className={style.containerInfo}>
                <div className={style.infoText}>
                    <h3>Nos adaptamos a desafíos de todo nivel</h3>
                    <p>Generamos valor a partir del ingenio humano, 
                        experiencia e innovación tecnológica, siendo un impulsor 
                        para optimizar las compañias con visión global.</p>
                </div>
                <div></div>
            </div>
            <div className={style.ContainerImg}>
                <img src={img} alt="not" />
            </div>
            <div className={style.containerPattern}>
            <img src={pattern} alt="not"/>
            </div>
        </div>
    )
}