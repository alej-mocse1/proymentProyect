import React from "react";
import styles from "./SistemasConLosQueAyudamos.module.scss";
import img1 from "./assets/AgileCRM.svg";
import img2 from "./assets/Bitrix24.svg";
import img3 from "./assets/Freshworks.svg";
import img4 from "./assets/ZohoCrm.svg";
import img5 from "./assets/Pipedrive.svg";


import img6 from "./assets/Hubspot.svg";
import img7 from "./assets/leadsales.svg";
import img8 from "./assets/Sapbusiness.svg";
import img9 from "./assets/Oracle.svg";
import img10 from "./assets/Microsoft.svg";
import img11 from "./assets/Oddo.svg";


import img12 from "./assets/Sage.svg";
import img13 from "./assets/leadsales.svg";
import img14 from "./assets/B2chat.svg";

import img15 from  "./assets/Salesforce.svg";


const SistemasConLosQueAyudamos = () => {

    return(
        <div className={styles.div}> 

        <h3 className={styles.divFrase}>Sistemas con los que ayudamos a empresas</h3>


        <div className={styles.divLogos}>
            <div className={styles.seccionIMGS1}>
                <img src={img1} alt="AgileCRM" />
                <img src={img2} alt="Bitrix24" />
                <img src={img3} alt="Freshworks" />
                <img src={img4} alt="ZohoCrm" />
                <img src={img5} alt="Pipedrive" />
            </div>

            <div className={styles.seccionIMGS2}>
                <img src={img6} alt="Hubspot" />
                <img src={img7} alt="leadsales" />
                <img src={img8} alt="Sapbusiness" />
                <img src={img9} alt="Oracle" />
                <img src={img10} alt="Microsoft" />
                <img src={img11} alt="Oddo" />
            </div>

            <div className={styles.seccionIMGS3}>
                <img src={img12} alt="Sage" />
                <img src={img13} alt="leadsales" />
                <img src={img14} alt="B2chat" />
            </div>
        </div>



        
        <div className={styles.divLogosResponsive}>

            <div>
                <img src={img7} alt="img7" />
                <img src={img1} alt="agaliCRM" />
            </div>
            <div>
                <img src={img4} alt="zohoCRM" />
                <img src={img3} alt="Freshworks" />
            </div>

            <div>
                <img src={img2} alt="Bitrix24" />
                <img src={img9} alt="Oracle" />
           </div>

           <div>
                <img src={img8} alt="Sapbusiness" />
                <img src={img14} alt="B2chat" />
                <img src={img6} alt="Hubspot" />
           </div>

           <div>
                <img src={img5} alt="Pipedrive" />
                <img src={img12} alt="Sage" />
                <img src={img10} alt="Microsoft" />
           </div>

          <div className={styles.div2Responsive}>
                <img src={img11} alt="Oddo" />
                <img src={img15} alt="Salesforce" />
          </div>
        
        </div>
            
        </div>
    )
}


export default SistemasConLosQueAyudamos