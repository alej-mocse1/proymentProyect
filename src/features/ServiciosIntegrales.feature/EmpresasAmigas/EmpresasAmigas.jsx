import React from "react";
import "./EmpresasAmigas.scss";
import img1 from "./Image.png";

function EmpresasAmigas() {
  return (
    <div className="empr--container">
      <div className="empr--container__text">
        <h2 className="empr--title">
          Cada vez más empresas usan el servicio de Proyment para mejorar su
          productividad
        </h2>
        <span className="empr--description">
          Mejoramos la productividad de las áreas de tu empresa, de tu proyecto
          o incluso de una problemática en específica con nuestros consultores
          especializados.
        </span>

        <div className="empr__button">
          <button>Agendar reunión</button>
        </div>
      </div>

      <div className="emp--container__img">
        <img src={img1} alt="guys--in--reu" className="empr--img" />
      </div>
    </div>
  );
}

export default EmpresasAmigas;
