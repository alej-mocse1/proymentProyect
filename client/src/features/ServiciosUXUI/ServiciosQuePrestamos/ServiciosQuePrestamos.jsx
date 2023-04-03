import style from "./ServiciosQuePrestamos.module.scss";
import image from "./assets/graphic design ux.svg";



export default function ServiciosQuePrestamos() {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <h4>Servicios de UI/UX que prestamos</h4>
                <div className={style.infoText}>
                    <div className={style.containerImg}>
                        <img src={image} alt="not-image" />
                    </div>
                    <div className={style.containerCards}>
                        <div className={style.subCards}>
                            <div className={style.card}>
                                <h5>Diseño de experiencia
                                    de usuario</h5>
                                <p>Defina la forma en que el usuario final interactuará con el producto.</p>
                            </div>
                            <div className={style.card}>
                                <h5>Diseño de interfaz de usuario</h5>
                                <p>Cree la apariencia que mejore la experiencia general del usuario.</p>
                            </div>
                        </div>
                        <div className={style.subCards}>
                            <div className={style.card}>
                                <h5>Prototipos</h5>
                                <p>Establecer toda la arquitectura de la aplicación y los componentes de navegación.</p>
                            </div>
                            <div className={style.card}>
                                <h5>Diseño visual</h5>
                                <p>Visualice la estrategia de contenido y la arquitectura de la información para convertir a los visitantes en clientes.</p>
                            </div>
                        </div>
                        <div className={style.subCards}>
                            <div className={style.card}>
                                <h5>Estrategia de Contenido</h5>
                                <p>Cree ideas de contenido que impulsen la participación de los usuarios.</p>
                            </div>
                            <div className={style.card}>
                                <h5>Branding</h5>
                                <p>Haga que el producto se destaque a través de estilos, fuentes, íconos y animaciones personalizados.</p>
                            </div>
                        </div>
                        <div className={style.subCards}>
                            <div className={style.card}>
                                <h5>Arquitectura informacional</h5>
                                <p>Organice el contenido de una manera que haga que el producto sea simple e intuitivo.</p>
                            </div>
                            <div className={style.card}>
                                <h5>Diseño de interacción</h5>
                                <p>Cree un producto que realmente genere hábitos y que haga que los usuarios regresen una y otra vez.</p>
                            </div>
                        </div>
                        <div className={style.cardUnico}>
                            <div className={style.card}>
                                <h5>Motion Design</h5>
                                <p>Visualice la información del producto para ayudar al usuario a concentrarse en lo que es realmente importante</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}