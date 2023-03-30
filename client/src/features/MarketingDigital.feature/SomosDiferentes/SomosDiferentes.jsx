import React from "react";
import img1 from "./cdcd 1.png";
import img2 from "./Group 761915.png";
import "./SomosDiferentes.scss";

function SomosDiferentes() {
  return (
    <div className="difentes--container">
      <div className="diferentes--container--text">
        <h2>Somos diferentes porque...</h2>
        <span>
          No solo creamos un simple plan de contenidos, creamos un plan de
          marketing donde trazamos los objetivos de tu empresa y a partir de
          allí, desarrollamos las estrategias para poder alcanzar los objetivos.
        </span>

        <div className="diferentes-button">
          <button>Agendar reunión</button>
        </div>
      </div>

      <div className="diferentes--container-imgs">
        <img src={img1} alt="proyment-guy" className="img-guy"/>
        
      </div>
      <img src={img2} alt="group" className="group-img"/>
    </div>
  );
}

export default SomosDiferentes;
