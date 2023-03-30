import React from "react";
import "./Logos.scss";
import img1 from "../../Home.feature/CompaniesFriendly/assets/Component 12.png";
import img2 from "../../Home.feature/CompaniesFriendly/assets/Component 11.png";
import img3 from "../../Home.feature/CompaniesFriendly/assets/Component 14.png";
import img4 from "../../Home.feature/CompaniesFriendly/assets/Component 15.png"
import img5 from "../../Home.feature/CompaniesFriendly/assets/Component 17.png"
import img6 from "../../Home.feature/CompaniesFriendly/assets/Component 19.png"
import img7 from "../../Home.feature/CompaniesFriendly/assets/Component 20.png"
import img8 from "../../Home.feature/CompaniesFriendly/assets/Component 21.png"

function Logos() {
  return (
    <div className="logos--container">
      <div className="logos--container-text">
        <h2>
          Cada vez más empresas usan el servicio de Proyment para generar
          clientes potenciales de calidad
        </h2>
      </div>

      <div className="logos--container-imgs">
      <div className="slider-for-logos">
            <div className="slide-track-for-logos">
              <div className="slide-for-logos">
                <img src={img1} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide-for-logos">
                <img src={img2} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos">
                <img src={img3} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos">
                <img src={img4} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img1} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide-for-logos2">
                <img src={img2} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img3} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img4} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img1} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide-for-logos2">
                <img src={img2} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img3} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img4} alt="logo" className="imgCompanies"/>
              </div>
            </div>
          </div>

          <div className="slider-for-logos">
            <div className="slide-track-for-logos2">
              <div className="slide-for-logos">
                <img src={img5} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide-for-logos">
                <img src={img6} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos">
                <img src={img7} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos">
                <img src={img8} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img5} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide-for-logos2">
                <img src={img6} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img7} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img8} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img5} alt="logo" className="imgCompanies" />
              </div>
              <div className="slide-for-logos2">
                <img src={img6} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img7} alt="logo" className="imgCompanies"/>
              </div>
              <div className="slide-for-logos2">
                <img src={img8} alt="logo" className="imgCompanies"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Logos;
