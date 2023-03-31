import 'remixicon/fonts/remixicon.css';
import { Link } from "react-router-dom";
import image from "./assets/img 02.png";
import style from "./Confirmation.module.scss"


export default function Confirmation() {
    return (
        <div className={style.container}>
            <div className={style.containerImg}>
                <img src={image} alt="not" />
            </div>
            <div className={style.containerInfo}>
                <div className={style.infoText}>
                    <h3>Reunion confirmada</h3>
                    <p>Hemos recibido tu informacion. Nos estaremos contactando contigo a la brevedad</p>
                </div>
                <div className={style.containerBtn}>
                    <Link to={"/"}><button className={style.btnInicio}>Ir al inicio</button></Link>
                    <a href='https://api.whatsapp.com/send?phone=51914386456&text=Hola, bienvenidos a ProyMent'
                        className={style.btnWhatsapp} >
                        <i class="ri-whatsapp-line"></i><p>Contactar ahora</p>
                    </a>
                </div>
            </div>
        </div>
    )
}