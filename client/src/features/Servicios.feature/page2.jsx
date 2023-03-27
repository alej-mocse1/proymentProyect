import LandingPage from "./LandingPage/LandingPage";
import Logos from "./logos/logos";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import PlanesAccecibles from "./PlanesAccesibles/PlanesAccecibles";
import PlanUnico from "./planUnico/PlanUnico";
import Soluciones from "./solucionesEnVenta/Soluciones";
import ProymentParaPotenciar from "./ProymentParaPotenciar/ProymentParaPotenciar";

export default function Page2() {

  return (
    <>
      <LandingPage />
      <Logos></Logos>
      <PlanUnico></PlanUnico>
      <Soluciones></Soluciones>
      <PlanesAccecibles></PlanesAccecibles>
      <NuestrosPlanes></NuestrosPlanes>
      <ProymentParaPotenciar />
    </>
  );
}



