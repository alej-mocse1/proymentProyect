import React from "react";
import Contribuimos from "./Contribuimos/Contribuimos";
import LandingServAtuMedida from "./LadinSerAMedida/LandingServAtuMedida";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import Icons from "./Icons/Icons";
import NuestrosServicios from "./NuestrosServicios/NuestrosServicios";
import PorqueProyment from "./PorqueProyment/PorqueProyment"

const Page8 = () => {


    return(
        <div>
            <LandingServAtuMedida></LandingServAtuMedida>
            <Icons/>
            <NuestrosPlanes></NuestrosPlanes>
            <NuestrosServicios/>
            <Contribuimos/>
            <PorqueProyment/>
        </div>
    )

}

export default Page8