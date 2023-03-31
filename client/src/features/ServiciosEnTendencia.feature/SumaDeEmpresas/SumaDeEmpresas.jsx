import React from "react";
import "./SumaDeEmpresas.scss";

function SumaDeEmpresas() {
  return (
    <div className="sumaDeEmpresas--container">
      <div className="sumaDeEmpresas--container--text">
        <h2 className="sumaDeEmpresas--title">
          Cada vez más empresas utilizan los servicios en tendencia de proyment
          para resolver sus problemas
        </h2>

        <span className="sumaDeEmpresas--first--span">
          Nuestros servicios destacados cuentan con consultores especializados
          de gran trayectoria, lo que hace servicios de alto nivel.
        </span>

        <div className="sumaDeEmpresas--container--button">
            <button>Agendar reunión</button>
        </div>
      </div>
    </div>
  );
}

export default SumaDeEmpresas;
