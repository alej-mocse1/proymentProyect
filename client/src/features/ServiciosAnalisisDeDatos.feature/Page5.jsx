import CadaVezMas from "./CadaVezMas/CadaVezMas";
import LandingPage from "./LandingPage/LandingPage";
import Logos from "./Logos/logos";
import NosDiferencia from "./NosDiferencia/NosDiferencia";
import NuestrasSoluciones from "./NuestrasSoluciones/NuestrasSoluciones";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import TomaDeDecisiones from "./TomaDeDecisiones/TomaDeDecisiones";


export default function Page5(){
    return(
        <div>
            <LandingPage/>
            {/* <Logos></Logos> */}
            <TomaDeDecisiones/>
            <NosDiferencia/>
            <NuestrosPlanes/>
            <NuestrasSoluciones/>
            {/* <CadaVezMas/> */}

        </div>
    )
}