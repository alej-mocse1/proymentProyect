import React from "react";
import "./Icons.scss";
import img1 from "./Group 761841.png";
import img2 from "./Group 761842.png";
import img3 from "./Group 761844.png";
import img4 from "./Group 761846.png";
import img5 from "./Group 761847.png";
import img6 from "./Group 761850.png";

function Icons() {
  return (
    <div className="iconn-container">
      <div className="iconn--text-container">
        <h2>
          Cada vez más empresas utilizan los servicios de Proyment para
          solucionar sus problemas
        </h2>
      </div>

      <div className="imgIcon--container">
        <img src={img1} alt="logo" />
        <img src={img2} alt="logo" />
        <img src={img3} alt="logo" />
        <img src={img4} alt="logo" />
        <img src={img5} alt="logo" />
        <img src={img6} alt="logo" />
      </div>
      <div className="logos--container--img">
        <div className="slider-for-logos4">
          <div className="slide-track-for-logos4">
            <div className="slide-for-logos4">
              <img src={img1} alt="logo" />
            </div>
            <div className="slide-for-logos4">
              <img src={img2} alt="logo" />
            </div>
            <div className="slide-for-logos4">
              <img src={img3} alt="logo" />
            </div>
            <div className="slide-for-logos4">
              <img src={img4} alt="logo" />
            </div>
            <div className="slide-for-logos4">
              <img src={img5} alt="logo" />
            </div>
            <div className="slide-for-logos4">
              <img src={img6} alt="logo" />
            </div>
            <div className="slide-for-logos5">
              <img src={img1} alt="logo" />
            </div>
            <div className="slide-for-logos5">
              <img src={img2} alt="logo" />
            </div>
            <div className="slide-for-logos5">
              <img src={img3} alt="logo" />
            </div>
            <div className="slide-for-logos5">
              <img src={img4} alt="logo" />
            </div>
            <div className="slide-for-logos5">
              <img src={img5} alt="logo" />
            </div>
            <div className="slide-for-logos5">
              <img src={img6} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;
