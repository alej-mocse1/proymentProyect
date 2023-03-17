import React from "react";
import "./Navbar.scss";
import logo from "./logoPrueba.png";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar">
      <img src={logo} alt="proyment-logo" className="logo" />

      <div className={`nav-items ${open && "open"}`}>
        <a href="/" className="color-specified">
          Servicios
        </a>
        <a href="/" className="color-specified">
          Industrias
        </a>
        <a href="/" className="color-specified">
          Clientes
        </a>
        <a href="/" className="color-specified">
          Metodología
        </a>
        <a href="/" className="color-specified">
          Blog
        </a>
      </div>
      <div className={`nav-items2 ${open && "open"}`}>
        <button className="button-test">Agendar reunión</button>
      </div>

      <div
        className={`nav-toggle ${open && "open"}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
