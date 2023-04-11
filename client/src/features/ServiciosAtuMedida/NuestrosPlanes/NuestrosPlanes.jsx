import React from "react";
import styles from "./NuestrosPlanes.module.scss";
import img from "./assets/planesIMG.png";
import 'remixicon/fonts/remixicon.css';
import {Link} from "react-router-dom";

const NuestrosPlanes = () => {


    return(
        <div className={styles.div}>
      
               <h2>Nuestros Planes</h2>

               <div className={styles.divContenido}>

                <div className={styles.divInfo}>

                   <h4>STARTER </h4>
                   <h3>Depende de los requerimientos</h3>
                   <p >Facturado por proyecto.</p>

                   <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>Servicio de potenciamiento de ventas.</p>
                   <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>Servicios integrales.</p>
                   <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>Servicio de marketing.</p>
                   <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>Servicio de diseño UI/UX.</p>
                   <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>Servicio de análisis de datos.</p>
                   <p className={styles.pLinks}> <div className={styles.icono}><i className="ri-check-line" ></i> </div>Servicios en tendencia.</p>
                   

                   <p  className={styles.pbuttom}>Proyment cuenta con diversos planes donde nos adaptamos a los requerimientos de las empresas</p>

                   <Link to={"/form"} style={{textDecoration:"none", color:"inherit"}}><button>Agendar reunión</button></Link>

                </div>

                <div className={styles.divImg}>
                    <img src={img} alt="proyment servicios a tu medida" />
                </div>

               </div>

        </div>
    )
}



export default NuestrosPlanes