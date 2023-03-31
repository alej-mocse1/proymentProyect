import AyudamosAsolucionarProblemas from "./AyudamosAsolucionarProblemas/AyudamosAsolucionarProblemas";
import LandingPageServIntegrales from "./LandingPageServIntegrales/LandingPageServIntegrales";
import NuestrosPlanes from './NuestrosPlanes/NuestrosPlanes'
import ServIntPerf from "./ServicioIntegralPerfecto/ServIntPerf";
import SistemasConLosQueAyudamos from "./Sistemas/SistemasConLosQueAyudamos";
import EmpresasAmigas from "./EmpresasAmigas/EmpresasAmigas"

export default function Page4() {
  return (
    <>
      <LandingPageServIntegrales></LandingPageServIntegrales>
      <SistemasConLosQueAyudamos></SistemasConLosQueAyudamos>  
      <AyudamosAsolucionarProblemas></AyudamosAsolucionarProblemas>  
      <NuestrosPlanes></NuestrosPlanes>{/* 4 */}
      <ServIntPerf></ServIntPerf>{/* 6 */}
      <EmpresasAmigas></EmpresasAmigas>
    </>
  );
}
