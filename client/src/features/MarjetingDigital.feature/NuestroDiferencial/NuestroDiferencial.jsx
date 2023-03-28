import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";

import icon1 from "./assets/icon análisis.svg";
import icon2 from "./assets/icon estratégia.svg";
import icon3 from "./assets/icon analisis interno.svg";
import icon4 from "./assets/icon plan de ejecución.svg";
import icon5 from "./assets/icon obejtivos.svg";
import icon6 from "./assets/icon medicipon de resultados.svg";

import "./NuestroDiferencial.scss"
import "swiper/css";


export default function NuestroDiferencial() {

    const [slide_Next, handleSlideByState] = useState({
        isFirst: true,
        isLast: false,
    });
    const SlideRef = useRef();

    const handleNext = () => {
        SlideRef.current.swiper.slideNext();
    };
    const handlePrev = () => {
        SlideRef.current.swiper.slidePrev();
    };

    const onSlideChange = (swiper) => {
        handleSlideByState({
            isFirst: swiper.isBeginning,
            isLast: swiper.isEnd,
        });
    };

    const { isLast, isFirst } = slide_Next;

    return (
        <div className="containerPadre">
            <div className="containerHijo">
                <h3>Nuestro diferencial es comprender cada objetivo a través de herramientas de gestión empresarial.</h3>

                <div className="ND-navegation">
                    <button
                        className={`${[!isFirst ? "active" : "none"]}`}
                        onClick={() => handlePrev()}
                    >
                        <i className="ri-arrow-left-line"></i>
                    </button>
                    <button
                        className={`${[!isLast ? "active" : "none"]}`}
                        onClick={() => handleNext()}
                    >
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>

                <div className="carousel-container">
                    <div className="swiperContainer">
                        <Swiper
                            modules={[Pagination, /* Autoplay */]}
                            /* loop={true} */
                            /* autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: false,
                                disableOnInteraction: false
                            }} */
                            pagination={{
                                el: ".carousel-pagination",
                                clickable: true,
                            }}

                            ref={SlideRef}
                            onSlideChange={onSlideChange}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1.5,
                                    spaceBetween: -15,
                                },
                                375: {
                                    slidesPerView: 1.75,
                                    spaceBetween: -15,
                                },
                                425: {
                                    slidesPerView: 2.25,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 3.75,
                                    spaceBetween: 0,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="cardContainer">
                                    <img src={icon1} alt="not" />
                                    <span></span>
                                    <h4>Análisis de competencia</h4>
                                    <p>Investigación de mercadoy análisis estratégico de la marca con su entorno.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardContainer">
                                    <img src={icon2} alt="not" />
                                    <span></span>
                                    <h4>Estrategia de Marketing</h4>
                                    <p>Definición de acciones diseñadas para alcanzar objetivos.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardContainer">
                                    <img src={icon3} alt="not" />
                                    <span></span>
                                    <h4>Análisis interno</h4>
                                    <p>Evaluación de recursos, habilidades y competencias para adopción de herramientas estratégicas.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardContainer">
                                    <img src={icon4} alt="not" />
                                    <span></span>
                                    <h4>Plan de ejecución</h4>
                                    <p>Descripción del proyecto en su totalidad. Incluye objetivos, cómo se llevarán a cabo y las partes interesadas.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardContainer">
                                    <img src={icon5} alt="not" />
                                    <span></span>
                                    <h4>Medición de resultados</h4>
                                    <p>Medición de eficacia de estrategias digitales.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cardContainer">
                                    <img src={icon6} alt="not" />
                                    <span></span>
                                    <h4>Objetivos de marca</h4>
                                    <p>Creamos una imagen clara, comprensible y positiva para aumentar el reconocimiento y la fidelidad de la misma.</p>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="carousel-pagination" />
                </div>

                <button>Agendar reunión</button>

            </div>
        </div>
    )
}