import style from './landinpage2.module.css';
import assests1 from './assets/assests1.svg'
import assests2 from './assets/assests2.svg'

const LandinPage2 = () => {


    return(
        <div className={style.div}>

         <div className={style.divIMG}>
           <img src={assests1} alt="assests1" className={style.img1}/>
           <img src={assests2} alt="assests2" className={style.img2}/>
         </div>

          <div className={style.divText}>
            <h2>Servicios a tu medida</h2>
            <p>¿Lo mejor? Puedes elegir nuestros servicios profesionales o los que mas se adapten a tu empresa</p>
            <button>Agendar reunion</button>
          </div>
 
        </div>
    )
}


export default LandinPage2