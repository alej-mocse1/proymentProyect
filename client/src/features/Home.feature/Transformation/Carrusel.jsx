import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from "./Transformation.module.scss"

export default function DemoCarousel() {

  return (
    <Carousel >
      <div className={style.div}><p>Rubro Industrial</p></div>
      <div className={style.div}><p>Rubro Petrolero</p></div>
      <div className={style.div}><p>Rubro Restaurantes</p></div>
      <div className={style.div}><p>Rubro Transportes</p></div>
      <div className={style.div}><p>Rubro Salud</p></div>
      <div className={style.div}><p>Rubro Textil</p></div>
      <div className={style.div}><p>Rubro Inmobiliaria</p></div>
      <div className={style.div}><p>Rubro Educacion</p></div>
    </Carousel>
  );
};



