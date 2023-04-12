import React from 'react';
import style from './Navbar.module.css';
import logo from './logoPrueba.svg';
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const [isOpen, SetOpen] = useState(true);
    const [isOpen2, SetOpen2] = useState(false);
   
    let responsive = isOpen ? {
         transform: "translateX(-120%)",
         transition: "1s ease all",
         display: 'flex',
         textAlign: "left",
      } : {
        transform: "translateX(0%)",
        transition: "1s ease all"
     }

     let responsiveNone = isOpen ? {
        border: "0px solid black",
        transition: "1s ease all"
      } : {
        display: "none",
        transition: "1s ease all"
      }

   
     let  responsiveNone1 = isOpen ? {
      border: "0px solid black",
  
     } : {
      transform: "rotate(45deg) translate(0px, 0px)" ,
    
     }

 
      let responsiveNone2 = isOpen ? {
        border: "0px solid black",
       
      } : {
        transform: "rotate(-46deg) translate(-2px, 0px)",

      }


     let responsiveServicios = isOpen2 ? {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: "left",
          width:"300px",
          height: "430px",
          padding: "16px 13px",
          gap: "0px",
     
          transition: "1s ease all",
          
          
         } : {
         display: "none",
         transition: "1s ease all"
       }



       let responsiveServicios2 = isOpen2 ? {
        height: "135vh",
       

       } : {
        height: "48vh",
  
     }
     let  estilos = { ...responsive, ...responsiveServicios2 };





  return (
    <div className={style.div}>

       <div className={style.Hamburguesa} onClick={() => SetOpen(!isOpen)}>
          <span className="span" style={responsiveNone1}></span>
          <span className="span" style={responsiveNone}></span>
          <span className="span" style={responsiveNone2}></span>
        </div>

        <Link to="/"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
           <img src={logo} alt="img-logo"  className={style.img}/> 
       </Link>


     <div className={style.divLink }>

     <nav>
       <ul className={style.menuhorizontal}>

           <li>
                <p>Servicios</p>

             <ul className={style.menuVerical} >
             <Link to="/serviciosIntegrales"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
               <li>Servicios integrales</li>
             </Link>

             <Link to="/PotenciamientoDeVentas"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
               <li>Potenciamiento de ventas</li>
             </Link>

             <Link to="/marketing"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
               <li>Marketing digital</li>
             </Link>

             <Link to="/serviciosAnalisisDeDatos"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
               <li>Analisis de datos</li>
             </Link>

             <Link to="/serviciosEnTendencia"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
               <li>Servicios en tendencia</li>
             </Link>

             <Link to="/serviciosUXUI"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
               <li>Diseño web UX/UI</li>
             </Link>

             <Link to="/serviciosAtuMedida"  style={{ textDecoration: 'none',margin: 15, color: 'inherit'}}>
               <li>Servicios a tu medida</li>
             </Link>
         
		     		 </ul>


            </li>

       

        
           <li>
              <a href="#seccion1" style={{ textDecoration: 'none', color: '#000538' }}>
                 <p>Industrias</p>
              </a>
           </li>
        


        
           <li>
             <a href="#seccion2" style={{ textDecoration: 'none', color: '#000538' }}>
                 <p>Clientes</p>
             </a>
           </li>
      


        
           <li>
               <a href="#seccion3" style={{ textDecoration: 'none', color: '#000538' }}>
                  <p>Metodologia</p>
                </a>  
           </li>

        
           <li>
             
                 <p>Blog</p>
                      
           </li>
        
 
   		</ul>
 
      </nav>

     </div> 




     <Link to={"/form"} ><button  className={style.btn } >Agendar reunion</button></Link>




    <div className={style.divLink2 } style={estilos} > 

    <h4  className={style.h4servicer2} onClick={() => SetOpen2(!isOpen2)}> {`Servicios `}
  {    isOpen2 ? (
        <span className={style.arrowUp}><i className="ri-arrow-up-s-line"></i></span>
          ) : (
        <span className={style.arrowUp}><i className="ri-arrow-down-s-line"></i></span>
    )}</h4>  



        <div  className={style.DIVservices} style={responsiveServicios}>
            <h4  className={style.h4servicer}>Servicios integrales</h4>  
            <h4  className={style.h4servicer}>Potenciamiento de ventas</h4>    
            <h4  className={style.h4servicer}>Marketing digital</h4>   
            <h4  className={style.h4servicer}>Analisis de datos</h4> 
            <h4  className={style.h4servicer}>Servicios en tendencia</h4> 
            <h4  className={style.h4servicer}>Diseño web UX/UI</h4> 
            <h4  className={style.h4servicer}>Servicios a tu medida</h4> 
        </div>
        <a href="#seccion1" style={{ textDecoration: 'none', color: '#000538' }}>
          <h4>Industrias</h4>  
        </a>  

        <a href="#seccion2" style={{ textDecoration: 'none', color: '#000538' }}>
        <h4>Clientes</h4>  
        </a>

        <a href="#seccion3" style={{ textDecoration: 'none', color: '#000538' }}>
        <h4>Metodologia</h4>
        </a>  
    </div>

   
    <Link to={"/form"} ><button className={style.AgendarReunionBTN}>Agendar reunion</button></Link>
    
    <a href='https://api.whatsapp.com/send?phone=51914386456&text=Hola, bienvenidos a ProyMent' ><button className={style.btnWSP}></button></a>
    </div>
  );
}

export default Navbar;
