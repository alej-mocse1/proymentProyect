import styles from "./ServIntPerf.module.scss";
import imgAccordion from "./assets/img accordion.png";
import FormButton from "../../../core/components/Button/Button";
import ArrowUp from "./assets/arrow-up-s-line.svg";
import ArrowDown from "./assets/arrow-down-s-line.svg";
import { useState, useEffect } from "react";

export default function ServIntPerf() {
  const [selected, setSelected] = useState("not Selected");
  const toggle = (i) => {
    if (selected === i) {
      return setSelected("not Selected");
    }
    setSelected(i);
  };
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.divImg}>
          <img src={imgAccordion} alt="Hombre Sonriendo"></img>
        </div>
        <div className={styles.content}>
          <h4>
            El servicio integral es perfecto para <span>...</span>
          </h4>
          <div className={styles.accordion}>
            <section
              onClick={(e) => {
                toggle(e.target.id);
              }}
            >
              <h6 id="menu1">
                Estandarizar políticas y procedimientos{" "}
                <span>
                  {selected === "menu1" ? (
                    <img src={ArrowUp} alt="Arrow-Up" />
                  ) : (
                    <img id="menu1" src={ArrowDown} alt="Arrow-Down" />
                  )}
                </span>
              </h6>
              <p className={selected === "menu1" ? styles.pshow : styles.phide}>
                Qué puedo hacer y cómo debo de hacerlo, establecemos el marco de
                referencia para operar, es decir, delimitar las reglas del juego
                para todos.
              </p>
            </section>
            <section
              onClick={(e) => {
                toggle(e.target.id);
              }}
            >
              <h6 id="menu2">
                Planeación estratégica{" "}
                <span>
                  {selected === "menu2" ? (
                    <img src={ArrowUp} alt="Arrow-Up" />
                  ) : (
                    <img id="menu2" src={ArrowDown} alt="Arrow-Down" />
                  )}
                </span>
              </h6>
              <p className={selected === "menu2" ? styles.pshow : styles.phide}>
                ¿Sabes hacia dónde va tu negocio? Es importante que lo definas y
                lo comuniques a tu equipo. Ayudará a que todos remen hacia un
                mismo lado.
              </p>
            </section>
            <section
              onClick={(e) => {
                toggle(e.target.id);
              }}
            >
              <h6 id="menu3">
                Diseñar indicadores clave KPI's{" "}
                <span>
                  {selected === "menu3" ? (
                    <img src={ArrowUp} alt="Arrow-Up" />
                  ) : (
                    <img id="menu3" src={ArrowDown} alt="Arrow-Down" />
                  )}
                </span>
              </h6>
              <p className={selected === "menu3" ? styles.pshow : styles.phide}>
                Diseñamos con evidencias sencillas la forma en que medirás si
                vas bien o si algo se necesita corregir. Si no se mide, no se
                puede mejorar.
              </p>
            </section>
            <section
              onClick={(e) => {
                toggle(e.target.id);
              }}
            >
              <h6 id="menu4">
                Implementar ERP y/o CRM{" "}
                <span>
                  {selected === "menu4" ? (
                    <img src={ArrowUp} alt="Arrow-Up" />
                  ) : (
                    <img id="menu4" src={ArrowDown} alt="Arrow-Down" />
                  )}
                </span>
              </h6>
              <p className={selected === "menu4" ? styles.pshow : styles.phide}>
                Tener uno o ambos implementados en tu empresa maximizará tu
                crecimiento empresarial y tener un mejor control organizacional.
              </p>
            </section>
            <section
              onClick={(e) => {
                toggle(e.target.id);
              }}
            >
              <h6 id="menu5">
                Implementar proyectos eficientes{" "}
                <span>
                  {selected === "menu5" ? (
                    <img src={ArrowUp} alt="Arrow-Up" />
                  ) : (
                    <img id="menu5" src={ArrowDown} alt="Arrow-Down" />
                  )}
                </span>
              </h6>
              <p className={selected === "menu5" ? styles.pshow : styles.phide}>
                No somos coaches, no somos asesores, somos parte de tu equipo y
                te acompañamos en el proceso de cambio implementando los
                procesos en la organización.
              </p>
            </section>
            <section
              onClick={(e) => {
                toggle(e.target.id);
              }}
            >
              <h6 id="menu6">
                Obtener el máximo valor de los OKRs{" "}
                <span>
                  {selected === "menu6" ? (
                    <img src={ArrowUp} alt="Arrow-Up" />
                  ) : (
                    <img id="menu6" src={ArrowDown} alt="Arrow-Down" />
                  )}
                </span>
              </h6>
              <p className={selected === "menu6" ? styles.pshow : styles.phide}>
                Conecta tu planeamiento estratégico con objetivos y resultados
                claves (OKRs) para todos tus equipos y activa un ritmo de
                ejecución ágil.
              </p>
            </section>
          </div>
          <div className={styles.btn}>
            <FormButton></FormButton>
          </div>
        </div>
      </div>
    </>
  );
}
