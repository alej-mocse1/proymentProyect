import styles from "./NuestrosPlanes.module.scss";
import statisticImg from './assets/img nuestros planes.png'
import FormButton from "../../../core/components/Button/Button";
import 'remixicon/fonts/remixicon.css';

export default function NuestrosPlanes() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
            <h4>Nuestros Planes</h4>
            <div className={styles.content}>
                <div className={styles.back}>

                <div className={styles.pricingcard}>
                    <h6>STARTER</h6>
                    <h5>Depende de la<br></br>magnitud del proyecto</h5>
                    <p>Facturado mensual o por proyecto.</p>
                    <div className={styles.icono}><i class="ri-check-line" ></i> <p className={styles.pLinks}> Analisis de mercado digital.</p> </div>
                    <div className={styles.icono}><i class="ri-check-line" ></i> <p className={styles.pLinks}> Plan de estrategias.</p></div>
                    <div className={styles.icono}><i class="ri-check-line" ></i> <p className={styles.pLinks}> Diseño de interfaz de usuario.</p></div>
                    <div className={styles.icono}><i class="ri-check-line" ></i> <p className={styles.pLinks}> UX de optimización.</p></div>
                    <div className={styles.icono}><i class="ri-check-line" ></i> <p className={styles.pLinks}> El pensamiento de diseño.</p></div>
                    <div className={styles.icono}><i class="ri-check-line" ></i> <p className={styles.pLinks}> Integraciones.</p></div>
                
                    <p  className={styles.pbuttom}>Proyment cuenta con diversos planes donde nos adaptamos a los requerimientos de las empresas.</p>

                    <div className={styles.button}>
                    <FormButton></FormButton>
                    </div>

                </div>
                </div>
                <div className={styles.divImg}>
                    <img src={statisticImg} alt='StatisticImg'></img>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
