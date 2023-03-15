import React from 'react';
import style from './Navbar.module.css';
import logo from './logoPrueba.png';
import { useState } from 'react';

function Navbar() {

    const [isOpen, SetOpen] = useState(false);
    const [isOpen2, SetOpen2] = useState(false);
   
    let responsive = isOpen ? {
         transform: "translateX(-800px)",
         transition: "1.6s ease all",
         display: 'flex',
         textAlign: "left",
      } : {
        transform: "translateX(0%)",
        transition: "1.6s ease all"
     }

     let responsiveNone = isOpen ? {
        border: "0px solid black"
      } : {
        display: "none"
      }

   
     let  responsiveNone1 = isOpen ? {
      border: "0px solid black"
     } : {
      transform: "rotate(45deg) translate(0px, 0px)" 
     }

 
      let responsiveNone2 = isOpen ? {
        border: "0px solid black"
      } : {
        transform: "rotate(-47deg) translate(-2.9px, -0px)"
      }


     let responsiveServicios = isOpen2 ? {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '16px',
          textAlign: "left",
          width:"70%",
          marginLeft: '10px' ,
         } : {
         display: "none",
       }




  return (
    <div className={style.div}>

       <div className={style.Hamburguesa} onClick={() => SetOpen(!isOpen)}>
          <span className="span" style={responsiveNone1}></span>
          <span className="span" style={responsiveNone}></span>
          <span className="span" style={responsiveNone2}></span>
        </div>


       <img src={logo} alt="img-logo"  className={style.img}/> 


     <div className={style.divLink }> 
        <h4  className={style.Servicios}>Servicios</h4>
        <h4  className={style.industrias}>Industrias</h4>     
        <h4  className={style.industrias}>Clientes</h4>  
        <h4  className={style.industrias}>Metodologia</h4>  
        <h4  className={style.industrias}>Blog</h4>  
     </div>
     <button  className={style.btn } >Agendar reunion</button>




    <div className={style.divLink2 } style={responsive} > 

    <h4  className={style.h4servicer} onClick={() => SetOpen2(!isOpen2)}>{`servicios ${isOpen2? '∧' : '∨' }`}</h4>  

     {/* <div className={style.h4Desplegable }>
       <h4  className={style.h4servicer} onClick={() => SetOpen2(!isOpen2)}>Servicios</h4>  
       <h4  className={style.ServiciosH4} onClick={() => SetOpen2(!isOpen2)}>{`${isOpen2? '∧' : '∨' }`}</h4>
     </div> */}

        <div  className={style.DIVservices} style={responsiveServicios}>
            <h4  className={style.h4servicer}>Servicios integrales</h4>  
            <h4  className={style.h4servicer}>Potenciamiento de ventas</h4>    
            <h4  className={style.h4servicer}>Marketing digital</h4>   
            <h4  className={style.h4servicer}>Analisis de datos</h4> 
            <h4  className={style.h4servicer}>Servicios en tendencia</h4> 
            <h4  className={style.h4servicer}>diseño web UX/UI</h4> 
            <h4  className={style.h4servicer}>Servicios a tu medida</h4> 
        </div>

        <h4>Industrias</h4>     
        <h4>Clientes</h4>  
        <h4>Metodologia</h4>  
    </div>

   

    </div>
  );
}

export default Navbar;