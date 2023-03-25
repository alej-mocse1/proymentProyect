import styles from "./soluciones.module.scss";
import suitCaseImg from "./assets/suitcase-fill.svg";
import dataBaseImg from "./assets/database-2-fill.svg";
import userImg from "./assets/user-3-fill.svg";
import shopBagImg from "./assets/shopping-bag-3-fill.svg";
import phoneImg from "./assets/phone-fill.svg";

export default function Soluciones() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.rectangle}></div>
        <div className={styles.container}>
          <div className={styles["title-content"]}>
            <h4> Nuestras soluciones en ventas</h4>
            <p>
              Soluciones de aprendizaje y cambio personalizadas a la medida de
              su empresa implementadas por nuestro equipo de expertos que se
              complementan con nuestras metodologías.
            </p>
          </div>
          <div className={styles.cards}>
            <div className={styles.row1}>
              <div className={styles.card}>
                <img src={suitCaseImg} alt="suitcase-icon"></img>
                <div className={styles["card-text"]}>
                  <h6>Ventas B2B</h6>
                  <p>
                    Soluciones con buenas prácticas de venta consultiva moderna
                    para empresas.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <img src={dataBaseImg} alt="database-icon"></img>
                <div className={styles["card-text"]}>
                  <h6>Ventas B2D</h6>
                  <p>
                    Soluciones de venta a distribuidores, mayoristas y puntos de
                    venta horizontales.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <img src={userImg} alt="user-icon"></img>
                <div className={styles["card-text"]}>
                  <h6>Ventas B2C</h6>
                  <p>
                    Soluciones altamente personalizadas al contexto de su
                    empresa.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.card}>
                <img src={shopBagImg} alt="shoppingbag-icon"></img>
                <div className={styles["card-text"]}>
                  <h6>Ventas Retail</h6>
                  <p>
                    Soluciones potenciales para el canal moderno, canal
                    tradicional y el canal digital.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <img src={phoneImg} alt="phone-icon"></img>
                <div className={styles["card-text"]}>
                  <h6>Ventas Call y Contact Center</h6>
                  <p>
                    Soluciones para equipos de ventas telefónicos con entornos
                    desafiantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.button}>Ver más</button>
        </div>
      </div>
    </>
  );
}
