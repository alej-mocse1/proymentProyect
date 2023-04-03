import style from "./LandingPageServiciosUXUI.module.scss";
import Register from "../../../Components/Register/Register";
import img from "./assets/degradadoserviciosintegrales.svg";

export default function LandingPageServiciosUXUI() {
  return (
    <>
      <div className={style.container}>
        {/* <div className={style.polygon}></div> */}
        <div className={style.degrade}>
          <img src={img} alt="Servicios-Integrales" />
        </div>
        <div className={style.containerInfo}>
          <h4>Servicios de diseño web</h4>
          <h2>UX/UI Innovación digital centrada en el usuario </h2>
          <p>
            Creamos productos verdaderamente adictivos. Con el look sexy y UX en
            mente. Los servicios de diseño de UI/UX dan como resultado 5
            componentes clave: Mapa mental + Wireframes + Concepto de UI +
            Diseño de Figma + Prototipo en el que se puede hacer clic con kit de
            UI. ¡Desplácese hacia abajo para ver el proceso en detalle!
          </p>
          <button>Conocer más</button>
        </div>

        <div className={style.containerForm}>
          <Register />
        </div>
      </div>
    </>
  );
}
