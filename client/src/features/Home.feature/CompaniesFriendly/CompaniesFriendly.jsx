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
        <div className="logo-container">
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={img03} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img02} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img05} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img06} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img07} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img03} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img02} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img05} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img06} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img07} alt="logo" className="imgCompanies"/>
              </div>
            </div>
          </div>

          <div className="slider2">
            <div className="slide-track2">
              <div className="slide2">
                <img src={img08} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide2">
                <img src={img010} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide2">
                <img src={img011} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide2">
                <img src={img012} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img08} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide23">
                <img src={img010} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img011} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img012} alt="logo" className="imgCompanies"/>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={img09} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img015} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img04} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img013} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide">
                <img src={img014} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img09} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img015} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img04} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img013} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide23">
                <img src={img014} alt="logo" className="imgCompanies"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompaniesFriendly;
