import React from "react";
import style from "./ladinPage1.module.css";
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';
import img05 from './assets/img05.png';
import graphicfloat_hero01 from "./assets/graphicfloat-hero01.svg"
import graphicfloat_hero02 from "./assets/graphicfloat-hero02.svg"
import graphicfloat_hero03 from "./assets/graphicfloat-hero03.svg"
import background from "./assets/background.png"


function LandinPage(props) {
 
    return(
        <div className={style.div}>


         <div className={style.div1}>

            <div className={style.frase}>
                <h2 className={style.h2Dest}>Transformando <br/>desafios en nuevas <br/>oportunindades<br/></h2>
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
            <img src={img02} alt="img02.png"  />
            <img src={img03} alt="img03.png" />
            <img src={img04} alt="img04.png" />
            <img src={img05} alt="img05.png" />
 
           <div className={style.divImgsParrafo}>
            <p>Cada vez mas empresas confian en nosotros.</p>
          </div> 

       </div>

       <button className={style.AgendarReunionBTN}>Agendar reunion</button>
     </div>


         <div className={style.div2}>
            <div className={style.ContenedorDiv2}>
              <img src={background} alt="background" className={style.background} />

              <img src={graphicfloat_hero01} alt="graphicfloat_hero01"  className={style.float1} />
              <img src={graphicfloat_hero02} alt="graphicfloat_hero02"  className={style.float2}/>
              <img src={graphicfloat_hero03} alt="graphicfloat_hero03"  className={style.float3}/> 
            </div>

            <button className={style.btnWSP}></button>
         </div>



        </div>
    )
}
export default LandinPage