import React from 'react';
import style from './Navbar.module.css';
import logo from './logoPrueba.png';
import { useState } from 'react';

function Navbar() {

    const [isOpen, SetOpen] = useState(false);

    let responsive = isOpen ? {
         transform: "translateY(-400px)",
         transition: "1.6s ease all",
      } : {
        transform: "translateY(0%)",
        transition: "1.6s ease all"
     }




  return (
    <div className={style.div}>

        <div className={style.Hamburguesa} onClick={() => SetOpen(!isOpen)}>
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
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
        <h4  className={style.Servicios}>Servicios</h4>
        <h4  className={style.industrias}>Industrias</h4>     
        <h4  className={style.industrias}>Clientes</h4>  
        <h4  className={style.industrias}>Metodologia</h4>  
        <h4  className={style.industrias}>Blog</h4>  

        <button  className={style.btn2} >Agendar reunion</button>
     </div>

   

    </div>
  );
}

export default Navbar;