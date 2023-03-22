import React from "react";
import "./DesafiosDeTodoNivel.scss";
import background from "./imgCierre.png";
import Button from "../../../core/components/Button/Button";
import grafico from "./imgFlotant.png";

function DesafíosDeTodoNivel() {
  return (
    <div className="div2">
      <div className="grafico2">
        <img src={grafico} alt="grafico2" className="imgGrafico2" />
      </div>

      <div className="div--row2">
        <h1>Nos adaptamos a desafíos de todo nivel</h1>
        <span>
          Generamos valor a partir del ingenio humano, experiencia e innovación
          tecnólogica, siendo un impulsor para optimizar las companías con
          visión global.
        </span>
        <div className="button-container2"> <Button  /></div>
        
      </div>

      <div className="div--row2 container2">
        <img src={background} alt="" className="div--row--hero2" />
      </div>
    </div>
  );
}

export default DesafíosDeTodoNivel;
