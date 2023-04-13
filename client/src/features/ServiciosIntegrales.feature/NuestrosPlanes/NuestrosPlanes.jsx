import styles from "./NuestrosPlanes.module.scss";
import img from './img nuestros planes.png'
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
                    <p>Facturado por proyecto o solución de la problemática.</p>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}>Diagnóstico empresarial o de la problemática.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Asesoría y estrategia.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Planificación (Plataformas y soluciones).</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Implementación innovadora.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Verificación de resultados.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Gestión del cambio.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Actuar sobre resultados obtenidos.</p></div>
                    <div className={styles.icono}><i className="ri-check-line" ></i> <p className={styles.pLinks}> Estandarización de procesos.</p></div>
                
                    <p  className={styles.pbuttom}>Proyment cuenta con diversos planes donde nos adaptamos a los requerimientos de las empresas.</p>
                    
                    <div className={styles.button}>
                    <FormButton planes= {true}></FormButton>
                    </div>
                </div>
                </div>
                <div className={styles.divImg}>
                    <img src={img} alt='StatisticImg'></img>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
