import React from "react";
import "./MásEmpresas.scss";
import img1 from "./V1.png";

function MásEmpresas() {
  return (
    <div className="masEmpresas--container">
      <div className="masEmpresas--container__text">
        <h2>
          Cada vez más empresas usan el servicio de diseño UI/UX para atraer más
          clientes
        </h2>
        <span>
          Proporcionamos interfaces de usuario atractivas, para que los
          visitantes vuelvan a su sitio una y otra vez.
        </span>

        <div className="button-container">
          <button>Agendar reunión</button>
        </div>
      </div>
      <div className="masEmpresas--container__img">
        <img src={img1} alt="graphic" />
      </div>
    </div>
  );
}

export default MásEmpresas;
