import CadaVezMas from "./CadaVezMas/CadaVezMas";
import LandingPage from "./LandingPage/LandingPage";
import NosDiferencia from "./NosDiferencia/NosDiferencia";
import NuestrasSoluciones from "./NuestrasSoluciones/NuestrasSoluciones";
import TomaDeDecisiones from "./TomaDeDecisiones/TomaDeDecisiones";


export default function Page5(){
    return(
        <div>
            <LandingPage/>
            <TomaDeDecisiones/>
            <NosDiferencia/>
            <NuestrasSoluciones/>
            {/* <CadaVezMas/> */}
        </div>
    )
}