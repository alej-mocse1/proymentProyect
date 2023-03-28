import React from "react";
import "./TransformarEmpresas.scss";
import img1 from "./Testimonial Photo.png";

function TransformarEmpresas() {
  return (
    <div className="transoform--container">
      <div className="transform--title">
        <h2>
          Nuestra misión es transformar tu empresa con la convicción de crear
          soluciones que generen un impacto real
        </h2>
      </div>

      <div className="transform--content-box">
        <div className="transform--content--img">
          <img src={img1} alt="" className="transform-img" />
        </div>

        <div className="transform--content-text">
          <div className="transform--line"></div>
          <h3 className="transform-subtitle">
            Nos adaptamos a todos los desafíos
          </h3>
          <span className="transform-span">
            Generamos valor a partir del ingenio humano, experiencia e
            innnovación tecnologica, siendo un impulsor para optimizar las
            compañías con visión global
          </span>

          <div className="transform--content-button">
            <button>Agendar Reunión</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransformarEmpresas;
