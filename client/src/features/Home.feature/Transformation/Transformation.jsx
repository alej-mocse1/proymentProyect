import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

/* import Card from "./components/Card"; */
import style from "./Transformation.module.scss"
import "./Slice.scss";
import "swiper/css";

import pattern1 from "./assets/Pattern graphic.svg"
import pattern2 from "./assets/Pattern graphic -.svg"

function Transformation() {

    return (
        <div className="slice">
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

                    {/*---------Carousel--------*/}
                    <div className="container">
                        <div className="swiperContainer">
                            <Swiper
                                modules={[Pagination]}

                                pagination={{
                                    el: ".transformation-pagination",
                                    clickable: true,
                                }}
                                breakpoints={{
                                    "@0.00": {
                                        slidesPerView: 1,
                                        spaceBetween: 25,
                                    },
                                    "@0.50": {
                                        slidesPerView: 2.95,
                                        spaceBetween: 25,
                                    },
                                    "@1.00": {
                                        slidesPerView: 2,
                                        spaceBetween: 25,
                                    },
                                    "@1.25": {
                                        slidesPerView: 2.5,
                                        spaceBetween: 20,
                                    },
                                    "@1.50": {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    "@1.75": {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                <SwiperSlide><div className="span">Rubro Industrial</div></SwiperSlide>
                                <SwiperSlide><div className="span" id={style.color}>Rubro Petrolero</div></SwiperSlide>
                                <SwiperSlide><div className="span">Rubro Restaurantes</div></SwiperSlide>
                                <SwiperSlide><div className="span" id={style.color}>Rubro Transportes</div></SwiperSlide>
                                <SwiperSlide><div className="span">Rubro Salud</div></SwiperSlide>
                                <SwiperSlide><div className="span" id={style.color}>Rubro Textil</div></SwiperSlide>
                                <SwiperSlide><div className="span">Rubro Inmobiliaria</div></SwiperSlide>
                                <SwiperSlide><div className="span" id={style.color}>Rubro Educacion</div></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className=" transformation-pagination" />
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
        </div>
    );
}

export default Transformation;