import React from "react"
import style from "./footer.module.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.containerLogo}>
                        <h3>proyMent</h3>
                        <span>
                            © Proyment
                        </span>
                        <span>Todos los derechos reservados.</span>
                    </div>
                    <div className={style.containerService}>
                        <h3>Servicios</h3>
                        <div className={style.serviceInfo}>
                            <a href="#">Servicio de Marketing</a>
                            <a href="#">Servicio de potenciamiento de ventas</a>
                            <a href="#">servicios integrales</a>
                            <a href="#">Servicios de análisis de datos</a>
                            <a href="#">Servicios de diseño web UI/UX</a>
                            <a href="#">Servicios en tendencia</a>
                        </div>
                    </div>
                    <div className={style.containerContact}>
                        <div className={style.contactInfo}>
                            <h3>Contacto</h3>
                            <span>Correo electrónico:
                                equipo@proyment.com
                            </span>
                        </div>
                        <button>Agendar reunión</button>
                    </div>
                    <div className={style.containerSocial}>
                        <h3>Redes Sociales</h3>
                        <div className={style.socialInfo}>
                            <div className={style.infoFacebook}>
                                <button>f</button>
                                <span>Facebook</span>
                            </div>
                            <div className={style.infoInstagram}>
                                <img href="#" alt="#" />
                                <span>Instagram</span>
                            </div>
                            <div className={style.infoLinkedin}>
                                <img href="#" alt="#" />
                                <span>LinkedIn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
    )
}