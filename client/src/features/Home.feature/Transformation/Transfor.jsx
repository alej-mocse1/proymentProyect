import style from "./Transformation.module.scss"
import pattern1 from "./assets/Pattern graphic.svg"
import pattern2 from "./assets/Pattern graphic -.svg"
import "./Slice.scss"

export default function Transfor() {
    return (
        <div className={style.container}>
            <div className={style.containerInfo}>
                <div className={style.tittle}>
                    <h3>Nuestras principales industrias con las que trabajamos en la actualidad</h3>
                </div>
                <div className={style.info}>
                    <div className={style.infoText}>
                        <div className={style.containerText}>
                            <div><p>Rubro Industrial</p></div>
                            <div id={style.color}><p>Rubro Petrolero</p></div>
                            <div><p>Rubro Restaurantes</p></div>
                            <div id={style.color}><p>Rubro Transportes</p></div>
                        </div>
                        <div className={style.containerText}>
                            <div id={style.color}><p>Rubro Salud</p></div>
                            <div><p>Rubro Textil</p></div>
                            <div id={style.color}><p>Rubro Inmobiliaria</p></div>
                            <div><p>Rubro Educacion</p></div>
                        </div>
                    </div>
                    <div className={style.infoBox}>

                        <div className={style.img1}><img src={pattern1} alt="not" /></div>
                        <div className={style.img2}><img src={pattern2} alt="not" /></div>

                        <div className={style.box}>
                            <h3>Creamos soluciones pensando en lo que tu empresa necesita</h3>
                            <p>En Proyment estamos dispuestos a conectar con nuevas industrias
                                para fortalecer empresas de todo nivel de distintos sectores
                                económicos con visión global  y con un enfoque ágil de trabajo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
