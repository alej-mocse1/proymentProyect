import React from "react";
import img02 from "./assets/img02.png";
import img03 from "./assets/img03.png";
import img04 from "./assets/img04.png";
import img05 from "./assets/img05.png";
import background from "./assets/background.png";
import "./landinPage1.scss";

function LandinPage(props) {
  return (
    <div className="div">
      <div className="div--row">
        <h1>Transformando desafíos en nuevas oportunidades</h1>
        <span>
          En Proyment, nuestro desafío es potenciar empreas en la dirección de
          resolución de problemas a través de servicios integrales
        </span>
        <div className="button-container">
          <button className="button-container--reunion">Agendar reunión</button>
          <button className="button-container--knowMore">Conocer más</button>
        </div>
        <div className="companys-container">
          <img src={img02} alt="" />
          <img src={img03} alt="" />
          <img src={img04} alt="" />
          <img src={img05} alt="" />
          <div className="companys-container--p">
            <span>Cada vez más empresas confían en nosotros.</span>
          </div>
        </div>

        <button className="button-allPage--reunion">Agendar reunión</button>
      </div>

      <div className="div--row container">
        <img src={background} alt="" className="div--row--hero" />
        <button className="whatsapp"></button>
      </div>
    </div>
  );
}
export default LandinPage;
