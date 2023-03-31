import React from "react";
import "./ReclamosYPostVentas.scss";
import img1 from "./Group 762171.png";
import img2 from "./Check Circle Icon.png";

function ReclamosYPostVentas() {
  return (
    <div className="recAndPost--container">
      <div className="recAndPost--container__text">
        <h2 className="recAndPost--title">Atención de reclamos y post venta</h2>
        <span className="recAndPost--first__span">
          Tenemos la capacidad de atender 15,000 reclamos por hora y
          solucionarlos de manera adecuada, alineado a las políticas comerciales
          de tu empresa. Garantizando un bajo porcentaje de retornos y un NPS
          alto.
        </span>
        <div className="icon--text">
          <img src={img2} alt="checkbox" className="checkbox--img" />
          <span className="recAndPost__second--span">
            Despreocúpate, cuéntanos tu problema y nosotros nos encargamos de
            todo.
          </span>
        </div>

        <div className="recAndPost__button">
          <button>Agendar reunión</button>
        </div>
      </div>
      <div className="recAndPost--container__img">
        <img src={img1} alt="camara-guy-img" />
      </div>
    </div>
  );
}

export default ReclamosYPostVentas;
