import React from "react";
import "./Icons.scss";
import img1 from "./lapicera 1.png";
import img2 from "./pautas (1) 1.png";
import img3 from "./estadisticas 1.png";
import img4 from "./bookmark (1) 1.png";

function Icons() {
  return (
    <div className="icons--container">
      <div className="icon--container__boxes">
        <div className="icons--containerImg">
          <img src={img1} alt="lapicera" />
        </div>
        <h2>Diseño técnicamente viable</h2>
      </div>
      <div className="icon--container__boxes">
        <div className="icons--containerImg">
          <img src={img2} alt="pautas" />
        </div>
        <h2>Orientado a las pautas de IOS/Android</h2>
      </div>
      <div className="icon--container__boxes">
        <div className="icons--containerImg">
          <img src={img3} alt="estadisticas" />
        </div>
        <h2>Análisis exhaustivo basado</h2>
      </div>
      <div className="icon--container__boxes">
        <div className="icons--containerImg">
          <img src={img4} alt="bookmark" />
        </div>
        <h2>Reconocido por Behance y Dribbble</h2>
      </div>
    </div>
  );
}

export default Icons;
