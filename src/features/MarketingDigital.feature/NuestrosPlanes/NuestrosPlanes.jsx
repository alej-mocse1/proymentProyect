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
                    <h5>Depende de <br></br>los requerimientos</h5>
                    <p>Facturado mensual, planes trimestrales.</p>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}>  Construcción de Buyer Person.</p> </div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Definición de objetivos.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Planificación de estrategias digitales.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Creación de contenido de valor.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Generación de leads.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Leads scoring y lead nurtuing.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Social media plan.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Monitoreo de redes sociales.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Branding integral.</p></div>
                
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
