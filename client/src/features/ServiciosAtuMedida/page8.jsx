import React from "react";
import LandingServAtuMedida from "./LadinSerAMedida/LandingServAtuMedida";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import Icons from "./Icons/Icons";
import NuestrosServicios from "./NuestrosServicios/NuestrosServicios";


const Page8 = () => {


    return(
        <div>
            <LandingServAtuMedida></LandingServAtuMedida>
            <Icons/>
            <NuestrosPlanes></NuestrosPlanes>
            <NuestrosServicios/>
        </div>
    )

}

export default Page8