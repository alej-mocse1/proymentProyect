import React from "react"
import style from "./footer.module.css"


export default function Footer() {
    return (
        <div className={style.container}>
            <footer className={style.footer}>
                <div className={style.containerLogo}>
                    {/* <img src={logo} alt="proyMent" /> */}
                    <span>
                        © Proyment
                    </span>
                    <span>Todos los derechos reservados.</span>
                </div>
                <div className={style.containerService}>
                    <h3 className={style.tittle}>Servicios</h3>
                    <div className={style.serviceInfo}>
                        <a href="/">Servicio de Marketing</a>
                        <a href="/">Servicio de potenciamiento de ventas</a>
                        <a href="/">servicios integrales</a>
                        <a href="/">Servicios de análisis de datos</a>
                        <a href="/">Servicios de diseño web UI/UX</a>
                        <a href="/">Servicios en tendencia</a>
                    </div>
                </div>
                <div className={style.containerContact}>
                    <div className={style.contactInfo}>
                        <h3 className={style.tittle}>Contacto</h3>
                        <span>Correo electrónico:
                            equipo@proyment.com
                        </span>
                    </div>
                    <button>Agendar reunión</button>
                </div>
                <div className={style.containerSocial}>
                    <h3 className={style.tittle}>Redes Sociales</h3>
                    <div className={style.socialInfo}>
                        <div className={style.social}>
                            <span><i className="ri-facebook-line"></i></span>
                            <h4>Facebook</h4>
                        </div>
                        <div className={style.social}>
                            <span><i className="ri-instagram-line"></i></span>
                            <h4>Instagram</h4>
                        </div>
                        <div className={style.social}>
                            <span><i className="ri-linkedin-line"></i></span>
                            <h4>LinkedIn</h4>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}