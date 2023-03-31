import React from "react";
import "./CoCreaciónMVP.scss";
import img1 from "./Group 762127.png";
import img2 from "./Check Circle Icon.png";

function CoCreaciónMVP() {
  return (
    <div className="coCreación--container">
      <div className="coCreación--container__img">
        <img src={img1} alt="camara-guy-img" />
      </div>

      <div className="coCreación--container__text">
        <h2 className="coCreación--title">Co-creamos tu MVP</h2>
        <span className="coCreación--first--span">
          Te ayudamos a refinar el concepto, preparar el pitch deck, construir
          tu plan financiero, armar tu plan de negocios, brindamos tutoría y
          preparamos el MVP hasta la validación para ir con los inversores.
        </span>
        <div className="icon--text">
          <img src={img2} alt="checkbox" className="checkbox--img" />
          <span className="coCreación--second--span">
            Despreocúpate, cuéntanos tu idea y pasemos de tu idea a un negocio
            validado.
          </span>
        </div>

        <div className="coCreación__button">
          <button>Agendar reunión</button>
        </div>
      </div>
    </div>
  );
}

export default CoCreaciónMVP;
