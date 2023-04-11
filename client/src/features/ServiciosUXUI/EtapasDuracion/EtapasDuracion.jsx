import style from "./EtapasDuracion.module.scss";
import image1 from "./assets/graphic competencia.svg";
import image2 from "./assets/graphic inspiration.svg"
import image3 from "./assets/graphic slash.svg";
import image4 from "./assets/graphic prototipos.svg"
import image5 from "./assets/graphic design visual.svg";
import icon1 from "./assets/rounder.svg"
import icon2 from "./assets/linear.svg"

export default function EtapasDuracion() {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.tittle}>
                    <h3>Servicios de diseño UI/UX: etapas, duración y entregables</h3>
                    <h5>Concepto</h5>
                    <h6>2 días</h6>
                </div>

                {/*------------GRAFIC ONE-------------------------------------------------- */}
                <div className={style.divFlecha}>
                    <img src={icon2} alt="not"/>
                </div>

                <div className={style.graficOneDivVacio}>
                    <div className={style.div1}>
                        <img src={icon1} alt="not" />
                    </div>
                    <div className={style.div2}></div>
                </div>

                <div className={style.graficOne}>
                    <div className={style.graficOneCardOne}>
                        <img src={icon1} alt="not" className={style.graficOneCardOneIcon1} />
                        <div className={style.graficOneCardOneText}>
                            <h4>Investigación de la competencia</h4>
                            <p>Para comprobar la forma en que se diseñan productos similares.
                                La investigación es crucial para comprender mejor lo que los usuarios pueden esperar.
                            </p>
                        </div>
                        <div className={style.graficOneCardOneImg}>
                            <img src={image1} alt="not" />
                        </div>
                    </div>

                    <div className={style.divFlecha}>
                        <img src={icon2} alt="not" />
                    </div>

                    <div className={style.graficOneCardTwo}>
                        <div className={style.graficOneCardTwoImg}>
                            <img src={image2} alt="not" />
                        </div>
                        <div className={style.graficOneCardTwoText}>
                            <h4>Inspiración</h4>
                            <p>Los servicios de diseño de interfaz de usuario no se tratan solo de creatividad.
                                Se trata del proceso. Los esquemas de color, las fuentes, los contras deben estar
                                motivados y sabemos cómo lograrlo.
                            </p>
                        </div>
                    </div>
                    <div className={style.graficOneDivVacioTwo}>
                        <div className={style.div3}></div>
                        <div className={style.div4}>
                            <img src={icon1} alt="not" />
                        </div>
                    </div>

                    <div className={style.divFlecha}>
                        <img src={icon2} alt="not" />
                    </div>
                </div>

                {/*------------GRAFIC TWO-------------------------------------------------- */}
                <div className={style.graficTwo}>
                    <h4>Resultado</h4>
                    <div className={style.graficTwoInfo}>
                        <div className={style.graficTwoText}>
                            <h4>Concepto de diseño</h4>
                            <p>1-2 pantallas de aplicaciones visualizadas del flujo de usuario principal.</p>
                        </div>
                        <div className={style.graficTwoParrafo}>
                            <img src={image3} alt="not" />
                            <p>Necesario para establecer el acuerdo en términos de cómo se
                                verá y se sentirá el diseño visual final.
                            </p>
                        </div>
                    </div>
                    <div className={style.graficTwoFlecha}>
                        <img src={icon2} alt="not" />
                    </div>
                    <h4>Realización</h4>
                </div>

                {/*------------GRAFIC THREE-------------------------------------------------- */}
                <div className={style.graficOneDivVacio}>
                    <div className={style.div1}>
                        <img src={icon1} alt="not" />
                    </div>
                    <div className={style.div2}></div>
                </div>
                <div className={style.span}>
                    <span></span>
                </div>

                <div className={style.graficThree}>
                    <div className={style.threeCardOne}>
                        <img src={icon1} alt="not" className={style.threeCardOneIcon1} />
                        <div className={style.threeCardOneText}>
                            <h4>Prototipos</h4>
                            <p>Dirigido a probar cómo funciona la interfaz sin distracciones en colores y bonitos cismos. Solo esqueleto desnudo para asegurarse de que UX esté en el nivel superior.
                            </p>
                        </div>
                        <div className={style.threeCardOneImgOne}>
                            <img src={image4} alt="not" />
                        </div>
                    </div>

                    <div className={style.graficThreeFlecha}>
                        <img src={icon2} alt="not" />
                    </div>

                    {/* <div className={style.divFlecha}>
                        <div className={style.flecha1}>
                            <i class="ri-radio-button-line"></i>
                        </div>
                        <div className={style.flecha2}></div>
                    </div> */}

                    <div className={style.graficTwo} id={style.border}>
                        <h4>Resultado</h4>
                        <div className={style.graficTwoInfo}>
                            <div className={style.graficTwoText}>
                                <h4>Prototipos en los que se puede hacer clic</h4>
                                <p>En blanco y negro.</p>
                            </div>
                            <div className={style.graficTwoParrafo}>
                                <img src={image3} alt="not" />
                                <p>Necesario para obtener comentarios iniciales o realizar entrevistas de UX.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={style.graficThreeFlecha}>
                        <img src={icon2} alt="not" />
                    </div>

                    {/* <div className={style.divFlecha}>
                        <div className={style.flecha1}>
                            <i class="ri-radio-button-line"></i>
                        </div>
                        <div className={style.flecha2}></div>
                    </div> */}

                    <div className={style.threeCardTwo}>
                        <img src={icon1} alt="not" className={style.threeCardTwoIcon1} />
                        <div className={style.threeCardTwoText}>
                            <h4>Diseño visual</h4>
                            <h6>2 semanas</h6>
                            <p>Para 'vestir' el producto y hacerlo destacar a través de colores, fuentes, animaciones, logotipos y estilo personalizado de la marca. Establece el tono de voz que un producto le habla a un usuario
                            </p>
                        </div>
                        <div className={style.threeCardTwoImgOne}>
                            <img src={image5} alt="not" />
                        </div>
                    </div>

                    <div className={style.graficOneDivVacio2}>
                        <div className={style.divVacio2Div1}>
                            <img src={icon1} alt="not" />
                        </div>
                        <div className={style.divVacio2Div2}></div>
                    </div>

                    <div className={style.graficThreeFlecha}>
                        <img src={icon2} alt="not" />
                    </div>
                </div>

                <div className={style.graficTwo} id={style.border2}>
                    <h4>Resultado</h4>
                    <div className={style.graficTwoInfo}>
                        <div className={style.graficTwoText}>
                            <h4>Kit de interfaz de usuario, hermosos prototipos en los que se puede hacer clic, sistema de diseño</h4>

                        </div>
                        <div className={style.graficTwoParrafo}>
                            <img src={image3} alt="not" />
                            <p>Necesario para entregar a los desarrolladores o tratar de recaudar fondos.
                            </p>
                        </div>
                    </div>

                </div>
                <button>Agendar reunión</button>
            </div>
        </div>
    )
}