import React from "react";
import "./CompaniesFriendly.scss";
import img02 from "./img02.png";
import img03 from "./img03.png";
import img04 from "./img04.png";
import img05 from "./img05.png";

function CompaniesFriendly() {
  return (
    <>
      <div className="companiesFriendly__container">
        <h2 className="companiesFriendly__container--title">
          <strong>+100 companías </strong>se potenciaron con nuestros servicios
        </h2>

        <div className="prueba">
          <div className="companiesFriendly__container--imgs">
            <img src={img02} alt="" className="imgCompanies" />
            <img src={img03} alt="" className="imgCompanies" />
            <img src={img04} alt="" className="imgCompanies" />
            <img src={img05} alt="" className="imgCompanies" />
            <img src={img03} alt="" className="imgCompanies" />
          </div>
          <div className="companiesFriendly__container--imgs">
            <img src={img04} alt="" className="imgCompanies" />
            <img src={img02} alt="" className="imgCompanies" />
            <img src={img05} alt="" className="imgCompanies" />
            <img src={img03} alt="" className="imgCompanies" />
          </div>
          <div className="companiesFriendly__container--imgs">
            <img src={img02} alt="" className="imgCompanies" />
            <img src={img03} alt="" className="imgCompanies" />
            <img src={img04} alt="" className="imgCompanies" />
            <img src={img05} alt="" className="imgCompanies" />
            <img src={img03} alt="" className="imgCompanies" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CompaniesFriendly;
