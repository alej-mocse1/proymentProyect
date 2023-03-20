import React from "react";
import { useState } from "react";
import styles from './LideresEnLatinoamerica.module.scss';

import img1 from './assets/AvatarCircle01.png';
import img2 from './assets/AvatarCircle02.png';
import img3 from './assets/AvatarCircle03.png';
import grafico from './assets/grafico.svg'


import LideresHIJO from "./lideresHijo";




const LideresEnLatinoamerica = () => {


    const [state, setState] = useState([
        {
           img:img1,
           name:"Leandro rocha",
           titulo:"Project Manager en SP",
           frase:" Proyment fue ágil desde el primer contacto, valoro la simplicidad y la rapides para solucionar problemas especificos"
        },
        {
            img:img2,
            name:"Jonh Montoro",
            titulo:"Gerente de Operaciones en Tom Gutie Company ",
            frase:" Nuestra experiencia con Proyment fue excelente, pudieron brindranos un conjunto de planes orientado a nuestras necesidades. luego de dos meses de arduo trabajo, pudimos cumplir con los objetivos empresariales . "
        },
        {
            img:img3,
            name:"Matt Cannon",
            titulo:"Marketing director at ABN8 Trading ",
            frase:" Tivemos que realizar un importante lançamento de marca no Brasil e a Proyment contribuiu em grande parte para os ótimos que tivemos "

        }
    ])
    const [item , seTitems] = useState(state[0]);
    const [correnPage , setCurrentPage] = useState(0);

    
    const nextPage = () => {
    
         const FirstIndex = correnPage + 1;
    
         if(FirstIndex >  2) {
            seTitems(state[0])
            setCurrentPage(0)
            return
         }
    
        //cambio mi estado local item(que es el que se renderiza)
        seTitems(state[FirstIndex])
    
        //cambio mi estado local correnPage 
        setCurrentPage(FirstIndex)
    
      }


      const prevPage = () => {

        const prevPage = correnPage - 1;

     
        if(prevPage < 0) {
            seTitems(state[2])
            setCurrentPage(2)
            return
        }
     
        seTitems(state[prevPage])
     
        setCurrentPage(prevPage)
      }




    return(
        <div className={styles.div}>
            <h2 className={styles.H2}>líderes  en latinoamerica nos recomiendan</h2>

           
           
            <div className={styles.divCards}>
            <img src={grafico} alt="grafico1"  className={styles.grafico}/>
            <img src={grafico} alt="grafico2" className={styles.grafico2}/>
           


                <div className={styles.divChildren1}>

                    <h2>
                        Proyment fue ágil desde el primer contacto, valoro la simplicidad y la rapidez
                        para solucionar problemas especificos
                    </h2>

                    <div className={styles.infoPersona}>
                       <img src={img3} alt="img1"/>

                       
                       <div className={styles.divTEXTiNFO}>
                            <h3>Leandro rocha</h3>
                            <p>Project Manager en SP</p>
                         </div>


                    </div>
                </div>



                <div className={styles.divChildren2}>
                  

                   <h2 >
                       Nuestra experiencia con Proyment fue excelente, pudieron brindranos un conjunto de planes orientado 
                       a nuestras necesidades. luego de dos meses de arduo trabajo, pudimos cumplir con los objetivos
                       empresariales . 
                    </h2>

                    <div className={styles.infoPersona}>
                       <img src={img2} alt="img2"/>

                       
                       <div className={styles.divTEXTiNFO}>
                            <h3>Jonh Montoro</h3>
                            <p>Gerente de Operaciones en Tom Gutie Company </p>
                         </div>


                    </div>


                </div>



                <div className={styles.divChildren1}>

                    <h2>
                         Tivemos que realizar un importante lançamento de marca no Brasil e a Proyment 
                         contribuiu em grande parte para os ótimos que tivemos  
                    </h2>

                 
                    
                      <div className={styles.infoPersona}>
                         <img src={img1} alt="img1"/>
                         
                         <div className={styles.divTEXTiNFO}>
                            <h3>Matt Cannon</h3>
                            <p>Marketing director at ABN8 Trading </p>
                         </div>

                       </div>

                   


                </div>


            </div>

       

              <LideresHIJO 
                frase={item.frase}
                name={item.name}
                img={item.img}
                titulo={item.titulo}
                nextPage = {nextPage}
                prevPage ={prevPage}
              ></LideresHIJO>


        </div>
    )

}


export default LideresEnLatinoamerica