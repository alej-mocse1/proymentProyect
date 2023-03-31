import React from "react";
import "./ProducciónAudiovisual.scss";
import img1 from "./Group 761952.png";
import img2 from "./Check Circle Icon.png";

function ProducciónAudiovisual() {
  return (
    <div className="production--container">
      <div className="production--container__img">
        <img src={img1} alt="camara-guy-img" />
      </div>

      <div className="production--container__text">
        <h2 className="production--title"> Producción audiovisual</h2>
        <span className="first--span">
          Contamos historias a través de videos profesionales de sport
          publicitarios de alto impacto a través de videos corporativos, videos
          inductivos u videos animados o 3D.
        </span>
        <div className="icon--text">
          <img src={img2} alt="checkbox" className="checkbox--img"/>
          <span className="second--span">
            Despreocúpate, cuéntanos tu idea y nosotros nos encargamos de todo.
          </span>
        </div>

        <div className="production__button">
          <button>Agendar reunión</button>
        </div>
      </div>
    </div>
  );
}

export default ProducciónAudiovisual;
