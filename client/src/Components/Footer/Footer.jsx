import React from "react"
import style from "./footer.module.scss"
import logo from "../NavBar/logoPrueba.svg"
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className={style.container}>
            <footer className={style.footer}>
                <div className={style.containerLogo}>
                   <Link to={"/"} ><img src={logo} alt="proyMent" /></Link> 
                    <span>
                        © Proyment
                    </span>
                    <span>Todos los derechos reservados.</span>
                </div>
                <div className={style.containerService}>
                    <h3 className={style.tittle}>Servicios</h3>
                    <div className={style.serviceInfo}>
                        <Link to="/marketing">Servicio de Marketing</Link>
                        <Link to="/PotenciamientoDeVentas">Servicio de potenciamiento de ventas</Link>
                        <Link to="/serviciosIntegrales">Servicios integrales</Link>
                        <Link to="/serviciosAnalisisDeDatos">Servicios de análisis de datos</Link>
                        <Link to="/">Servicios de diseño web UI/UX</Link>
                        <Link to="/serviciosEnTendencia">Servicios en tendencia</Link>
                    </div>
                </div>
                <div className={style.containerContact}>
                    <div className={style.contactInfo}>
                        <h3 className={style.tittle}>Contacto</h3>
                        <span>Correo electrónico:
                            equipo@proyment.com
                        </span>
                    </div>
                    <Link to={"/form"} ><button>Agendar reunión</button></Link>
                </div>
                <div className={style.containerSocial}>
                    <h3 className={style.tittle}>Redes Sociales</h3>
                    <div className={style.socialInfo}>
                        <div className={style.social}>
                            <span><i className="ri-facebook-line"></i></span>
                            <a href="https://www.facebook.com/Proyment"><h4>Facebook</h4></a>
                        </div>
                        <div className={style.social}>
                            <span><i className="ri-instagram-line"></i></span>
                            <a href="https://instagram.com/proyment?igshid=YmMyMTA2M2Y="><h4>Instagram</h4></a>
                        </div>
                        <div className={style.social}>
                            <span><i className="ri-linkedin-line"></i></span>
                            <a href=""><h4>LinkedIn</h4></a>             
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
