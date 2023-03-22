import React from "react";
import "./CompaniesFriendly.scss";
import img02 from "./assets/Component 11.png";
import img03 from "./assets/Component 12.png";
import img04 from "./assets/Component 13.png";
import img05 from "./assets/Component 14.png";
import img06 from "./assets/Component 15.png";
import img07 from "./assets/Component 16.png";
import img08 from "./assets/Component 17.png";
import img09 from "./assets/Component 18.png";
import img010 from "./assets/Component 19.png";
import img011 from "./assets/Component 20.png";
import img012 from "./assets/Component 21.png";
import img013 from "./assets/Component 22.png";
import img014 from "./assets/Component 23.png";
import img015 from "./assets/Component 24.png";

function CompaniesFriendly() {
  return (
    <>
      <div className="companiesFriendly__container">
        <h2 className="companiesFriendly__container--title">
          <strong>+100 companías </strong>se potenciaron con nuestros servicios
        </h2>

        <div className="prueba">
          <div className="companiesFriendly__container--imgs">
            <img src={img03} alt="" className="imgCompanies" />
            <img src={img02} alt="" className="imgCompanies" />
            <img src={img05} alt="" className="imgCompanies" />
            <img src={img06} alt="" className="imgCompanies" />
            <img src={img07} alt="" className="imgCompanies" />
          </div>
          <div className="companiesFriendly__container--imgs">
            <img src={img08} alt="" className="imgCompanies" />
            <img src={img010} alt="" className="imgCompanies" />
            <img src={img011} alt="" className="imgCompanies" />
            <img src={img012} alt="" className="imgCompanies" />
          </div>
          <div className="companiesFriendly__container--imgs">
            <img src={img09} alt="" className="imgCompanies" />
            <img src={img015} alt="" className="imgCompanies" />
            <img src={img04} alt="" className="imgCompanies" />
            <img src={img013} alt="" className="imgCompanies" />
            <img src={img014} alt="" className="imgCompanies" />
          </div>
        </div>
        <div className="bgito"></div>
      </div>
    </>
  );
}

export default CompaniesFriendly;
