import React from "react";
import styles from "./PorqueProyment.module.css";
import img1 from './img1.png';
import img2 from './img2.png';




const PorqueProyment = () => {

return(
    <div className={styles.div}>
     
     <div className={styles.div_DivColumns}>

   

       <div className={styles.div_DIVColumns_divTOP}>

       <div className={styles.div_divLine}>
           <div className={styles.div_divLine_efecto}></div>
       </div>


         <div className={styles.div_DIVColumns_divTOP_Rigth}>
           <div>
            <h4>¿POR QUÉ PROYMENT?</h4>
             <h2>Tranformamos un cambio positivo y duradero.</h2>
             <p>nuestro enfoque empresarial es desarrollar estrategias de innovación desde una perpectiva global y alineadas especificamente a la 
                industria a tocar, para hacer que el cambio sea una realidad sostenible en el tiempo.
             </p>
           </div>
         </div>

         <div className={styles.div_DIVColumns_divTOP_Left}>
           <img src={img1} alt="img1" className={styles.IMG1} />
         </div>
       </div>

       <div className={styles.div_divsColumns_divBUTTON}>
        
        <div className={styles.div_DIVColumns_divTOP_Left} >
          <img src={img2} alt="img2" className={styles.IMG2}/>
        </div>

        
       
         <div className={styles.div_DIVColumns_divTOP_Rigth}>
         <div className={styles.div_DIVbutton}>
           <h4>¿POR QUÉ PROYMENT?</h4>
           <h2>El cambio comienza con la estrategia 360.</h2>
           <p>Reimagina y restablece las nuevas prioridades estratégicas del negocio que permitirán contruir modelos y culturas
            operativas resilientes.
           </p>
         </div>
        </div>

       </div>

     </div>

    </div>   
)

}


export default PorqueProyment