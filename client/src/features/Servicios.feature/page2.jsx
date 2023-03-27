import LandingPage from "./LandingPage/LandingPage";
import Logos from "./logos/logos";
import NuestrosPlanes from "./NuestrosPlanes/NuestrosPlanes";
import PlanesAccecibles from "./PlanesAccesibles/PlanesAccecibles";
import PlanUnico from "./planUnico/PlanUnico";
import Soluciones from "./solucionesEnVenta/Soluciones";
import ProymentParaPotenciar from "./ProymentParaPotenciar/ProymentParaPotenciar";
import MetodologíasDeTrabajo from "./MetodologíasDeTrabajo/MetodologíasDeTrabajo";

export default function Page2() {
  return (
    <>
      <LandingPage />
      <Logos></Logos>
      <PlanUnico></PlanUnico>
      <PlanesAccecibles></PlanesAccecibles>
      <Soluciones></Soluciones>
      <NuestrosPlanes></NuestrosPlanes>
      <MetodologíasDeTrabajo></MetodologíasDeTrabajo>
      <ProymentParaPotenciar />
    </>
  );
}
