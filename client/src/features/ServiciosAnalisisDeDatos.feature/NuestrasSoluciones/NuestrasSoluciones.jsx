import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";

import img1 from "./assets/img data manament.png";
import img2 from "./assets/img analítica descriptiva.png";
import img3 from "./assets/img analítica avanzada.png";
import img4 from "./assets/img consultoría analítica.png";
import img5 from "./assets/img servicios en la nube.png";

import "./NuestrasSoluciones.scss"
import "swiper/css";


export default function NuestrasSoluciones() {

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
        <div className="ns-containerPadre">
            <div className="ns-containerHijo">
                <h3>Nuestras soluciones en datos</h3>
                <p>Hacemos simple, lo complejo. Y lo mejor de todo, de forma ágil.</p>

                <div className="ns-button-navegation">
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

                <div className="ns-carousel-container">
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
                                el: ".ns-carousel-pagination",
                                clickable: true,
                            }}

                            ref={SlideRef}
                            onSlideChange={onSlideChange}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                375: {
                                    slidesPerView: 1.15,
                                    spaceBetween: 15,
                                },
                                425: {
                                    slidesPerView: 1.25,
                                    spaceBetween: 10,
                                },
                                525: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                },
                                625: {
                                    slidesPerView: 1.85,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2.25,
                                    spaceBetween: 0,
                                },
                                868: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 0,
                                },
                                968: {
                                    slidesPerView: 2.75,
                                    spaceBetween: 0,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1124: {
                                    slidesPerView: 3.25,
                                    spaceBetween: 20,
                                },
                                1224: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                                1324: {
                                    slidesPerView: 3.75,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="ns-cardContainer">
                                    <div>
                                        <img src={img1} alt="not" />
                                        
                                        <h4>Data management</h4>
                                        <p>CONSOLIDAR. Reúne todas tus fuentes de datos en un solo lugar.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ns-cardContainer">
                                    <div>
                                        <img src={img2} alt="not" />
                                        
                                        <h4>Analítica descriptiva</h4>
                                        <p>MEDIR. Gestiona el desempeño de tu organización.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ns-cardContainer">
                                    <div>
                                        <img src={img3} alt="not" />
                                        
                                        <h4>Analítica Avanzada</h4>
                                        <p>PREDECIR. Anticipa lo que pasará en tu organización.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ns-cardContainer">
                                    <div>
                                        <img src={img4} alt="not" />
                                        
                                        <h4>Consultoría Analítica</h4>
                                        <p>CAPITALIZAR. Haz crecer tu organización a través de los datos.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ns-cardContainer">
                                    <div>
                                        <img src={img5} alt="not" />
                                        
                                        <h4>Servicios en la nube</h4>
                                        <p>TRANSFORMAR. Aproveche el potencial de la nube.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="ns-carousel-pagination" />
                </div>

                <button className="btn-agendar">Agendar reunión</button>

            </div>
        </div>
    )
}