import React from "react";
import "./DesafiosDeTodoNivel.scss";
import background from "./Image.png";
import { Link } from "react-router-dom";
import grafico from "./imgFlotant.png";
import estadistica from "./estadística float.svg";
import graphicFloat from "./graphic float.svg";

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
        <div className="button-container2">
          {" "}
          <Link to="/form" className="container2">
            <button className="btn2">Agendar reunión</button>
          </Link>
        </div>
      </div>

      
        <img src={background} alt="img" className="div--row--hero2" />
        <img src={estadistica} alt="estadistica" className="div-row-hero3" />
        <img src={graphicFloat} alt="graphic" className="div-row-hero4"/>
    
      </div>
  );
}

export default DesafíosDeTodoNivel;
