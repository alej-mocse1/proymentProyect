import React from "react";
import style from "./ladinPage1.module.css";

import Heroimage from './assets/HeroImage.png'
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';
import img05 from './assets/img05.png';



function LandinPage(props) {
 
    return(
        <div className={style.div}>


         <div className={style.div1}>

            <div className={style.frase}>
                <h2 className={style.h2Dest}>Transformando</h2>
                <h2 className={style.h2Dest}>desafios en nuevas </h2>
                <h2 className={style.h2Dest}>oportunindades</h2>

                <h2 className={style.h2Mobile}>Transformando</h2>
                <h2 className={style.h2Mobile}>desafios</h2>
                <h2 className={style.h2Mobile}>en nuevas</h2>
                <h2 className={style.h2Mobile}>oportunindades</h2> 
           </div>

           
         
           <div className={style.frase2}>
              <p>En proyment, nuestro desafío es potenciar empresas en la dirección de resolución de problemas a través de servicios integrales.</p>
           </div>

           <div className={style.divbtn}>
            <button className={style.btn}>Agendar reunión</button>
            <button className={style.btn2}>Conocer mas</button>
           </div>

           <div className={style.divImgs}>
           <div>
              <img src={img02} alt="img02.png"  />
              <img src={img03} alt="img03.png" />
              <img src={img04} alt="img04.png" />
              <img src={img05} alt="img05.png" />
           </div>
           <div className={style.divImgsParrafo}>
            <p>Cada vez mas empresas confian en nosotros.</p>
          </div> 

       </div>

       <button className={style.AgendarReunionBTN}>Agendar reunion</button>
     </div>


         <div className={style.div2}>
            <div className={style.ContenedorDiv2}>
    
             <img src={Heroimage} alt="Heroimage.png" />
          
            </div>

            <button className={style.btnWSP}></button>
         </div>



        </div>
    )
}
export default LandinPage