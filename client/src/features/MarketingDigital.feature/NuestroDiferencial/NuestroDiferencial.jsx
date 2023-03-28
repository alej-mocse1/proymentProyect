import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./NuestroDiferencial.scss"
import "swiper/css";


export default function NuestroDiferencial() {
    return (
        <div className="containerPadre">
            <div className="container">
                <h3>Nuestro diferencial es comprender cada objetivo a través de herramientas de gestión empresarial.</h3>
                
                <div className="ND-container">
                    <div className="swiperContainer">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: false,
                                disableOnInteraction: false
                            }}
                            pagination={{
                                el: ".ND-pagination",
                                clickable: true,
                            }}

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
                                    slidesPerView: 4.25,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 5.25,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="span">
                                    <img src="" alt="" />
                                    <h4>Análisis de competencia</h4>
                                    <p>Investigación de mercadoy análisis estratégico de la marca con su entorno.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="span">
                                    <img src="" alt="" />
                                    <h4>Estrategia de Marketing</h4>
                                    <p>Definición de acciones diseñadas para alcanzar objetivos.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="span">
                                    <img src="" alt="" />
                                    <h4>Análisis interno</h4>
                                    <p>Evaluación de recursos, habilidades y competencias para adopción de herramientas estratégicas.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="span">
                                    <img src="" alt="" />
                                    <h4>Plan de ejecución</h4>
                                    <p>Descripción del proyecto en su totalidad. Incluye objetivos, cómo se llevarán a cabo y las partes interesadas.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="span">
                                    <img src="" alt="" />
                                    <h4>Medición de resultados</h4>
                                    <p>Medición de eficacia de estrategias digitales.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="span">
                                    <img src="" alt="" />
                                    <h4>Objetivos de marca</h4>
                                    <p>Creamos una imagen clara, comprensible y positiva para aumentar el reconocimiento y la fidelidad de la misma.</p>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                    <div className="ND-pagination" />
                </div>

            </div>
        </div>
    )
}