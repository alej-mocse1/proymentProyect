import react from 'react';
import style from './ServiciosAtuMedida.module.css';
import assests1 from './IMG.png'


const ServiciosAtuMedida = () => {


    return(
        <div className={style.div}>

         <div className={style.divIMG}>
           <img src={assests1} alt="assests1" />
         </div>

          <div className={style.divText}>
            <h2>Servicios a tu medida</h2>
            <p>¿Lo mejor? Puedes elegir nuestros servicios profesionales o los que mas se adapten a tu empresa</p>
            <button>Agendar reunion</button>
          </div>
 
        </div>
    )
}


export default ServiciosAtuMedida