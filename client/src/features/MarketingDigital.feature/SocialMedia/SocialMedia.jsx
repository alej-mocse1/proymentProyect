import styles from "./SocialMedia.module.scss";
import Img from "./assets/img social media.png";
import youtubesvg from "./assets/youtube.svg";

export default function SocialMedia() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContent}>
          <h6>Alcancemos objetivos</h6>
          <h4>
            Nuestra solución integra diferentes e imprescindibles áreas y
            estrategias del mundo digital
          </h4>
        </div>
        <div className={styles.imgContent}>
          <div className={styles.divImg}>
            <img
              src={youtubesvg}
              className={styles.floating}
              alt="youtube floating"
            ></img>
            <img src={Img} alt="Social media" className={styles.social} />
          </div>
          <div className={styles.textContent}>
            <div className={styles.draw}>
              <div className={styles.rectangle}></div>
              <h4>Social Media</h4>
            </div>
            <p>
              Diseñamos e implementamos una sólida estrategias de Social Media
              que permiten construir una marca generando valor y posicionamiento
              competitivo en redes sociales que nos permita comunicar, conectar
              y convertir acciones digitales en resultados reales.
            </p>
            <button className={styles.button}>Conocer más</button>
          </div>
        </div>
      </div>
    </>
  );
}
