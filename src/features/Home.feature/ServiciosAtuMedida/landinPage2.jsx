import style from './ServiciosAtuMedida.module.scss';
import assests1 from './assets/IMG.png';
import grafico from '././assets/imgFlotant.png';
import flotante1 from '././assets/assests1.svg';
import flotante2 from '././assets/assests2.svg';


const ServiciosAtuMedida = () => {


    return(
        <div className={style.div}>

          <div className={style.grafico}>
             <img src={grafico} alt="grafico"  className={style.imgGrafico}/>
          </div>

         <div className={style.divIMG}>
           <img src={assests1} alt="assests1" className={style.imgPrincipal}/>
           <img src={flotante1} alt="flotante1" className={style.imgFlotante1}/>
           <img src={flotante2} alt="flotante2" className={style.imgFlotante2}/>
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