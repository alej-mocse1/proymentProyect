import React from "react";
import "./SeoYSem.scss";
import img1 from "./Group 762199.png";
import img2 from "./Frame 762019.png";
import img3 from "./young-brunette-in-white-casual-sweater-isolated-on-purple-wall 1.png";
import imgFloat1 from "./float icon arrow.svg";
import imgFloat2 from "./float icon estadistica.svg";

function SeoYSem() {
  return (
    <>
      <div className="audit--container">
        <div className="audit--container-img">
          <img src={imgFloat1} alt="" className="audit--float" />
          <img src={img1} alt="" className="audit--img"/>
          <img src={imgFloat2} alt="" className="audit--float2" />
        </div>
        <div className="audit--container-text">
          <div className="audit--container-line"></div>
          <h2>SEO Y SEM</h2>
          <span className="audit--container-span">
            Elaboramos una estrategia completa de posicionamiento digital.
          </span>
          <span className="audit--container-span">
            Mediante el posicionamiento SEO se busca aparecer en las primeras
            posiciones en los buscadores mediante una serie de acciones que
            desarrollamos de manera planificada y continua.{" "}
          </span>
          <span className="audit--container-span2">
            Por medio de campañas de SEM nos permite generar tráfico en un
            período corto de tiempo y conseguir conversiones en tu página web a
            través de Google Ads.
          </span>
          <div className="audit--container-button">
            <button>Conocer más</button>
          </div>
        </div>
      </div>
      <div className="audit--container2">
        <div className="audit--container-text2">
          <div className="audit--container-line2"></div>
          <h2>
            Outsourcing: <br />
            Dirección de marketing
          </h2>
          <span className="audit--container-span2">
            Nuestro objetivo es poder actuar como departamento de marketing
            externo de tu empresa, poniendo a tu disposición nuestra ayuda
            especializada en el diseño de estrategias y acciones en todas las
            áreas.
          </span>
          <div className="audit--container-button2">
            <button>Conocer más</button>
          </div>
        </div>
        <div className="audit--container-img2">
          <img src={img2} alt="" className="audit--img" />
          <img src={img3} alt="" className="audit--img2" />
        </div>
      </div>
    </>
  );
}

export default SeoYSem;
